import React from 'react';

import { User } from 'firebase/auth';
import { QuerySnapshot, DocumentData } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useTable, useExpanded, usePagination } from 'react-table';

import { Spinner } from '../application/Spinner';
import { getCollections, getSubmissionCount } from '../utils/firebase';

/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */

export const AuthContext = React.createContext<{
  user: User | null;
  setUser: Function;
} | null>(null);

const NavBar = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">KODA95doo</span>
      </div>
      <div className="flex-none">{/* todo: actions here */}</div>
    </div>
  );
};

const UserTable = ({
  submissions,
}: {
  submissions: QuerySnapshot<DocumentData> | null;
}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: () => null,
        id: 'expander',
        Cell: ({ row }: { row: any }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ),
      },
      {
        Header: 'Lične info',
        columns: [
          { accessor: 'name', Header: 'Ime' },
          { accessor: 'dateOfBirth', Header: 'Datum rođ.' },
        ],
      },
      {
        Header: 'Vještine',
        columns: [
          { accessor: 'education', Header: 'Obrazovanje' },
          { accessor: 'languages', Header: 'Jezici' },
        ],
      },
      {
        Header: 'Posao',
        columns: [
          { accessor: 'occupation', Header: 'Zanimanje' },
          { accessor: 'yoe', Header: 'Iskustvo' },
          { accessor: 'currentlyEmployed', Header: 'Zaposlen' },
          // { accessor: 'exp', Header: 'Opis poslova' },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(
    () =>
      submissions != null
        ? submissions?.docs.map((submission, index) => {
            const doc = submission.data();
            return {
              // personal info
              id: index + 1,
              name: `${doc.name} ${doc.surname}`,
              email: doc.email,
              phone: doc.phone,
              dateOfBirth: new Date(
                doc.date_of_birth.seconds * 1000
              ).toLocaleDateString('rs-RS'),
              // Education and work
              education: doc.education,
              occupation: doc.occupation,
              yoe: doc.years_of_experience,
              licences: doc.licences,
              exp: doc['previous-job-desc'],
              // Availability and requests
              availableNow: doc.immediately_available,
              requests: doc.special_requests,
              currentlyEmployed: doc.currently_employed ? 'Da' : 'Ne',
              // Languages
              languages: Object.keys(doc.languages)
                .filter((x) => doc.languages[x].value !== 'Bez znanja')
                .join(', '),
            };
          })
        : [],
    [submissions]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    visibleColumns,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
    },
    useExpanded,
    usePagination
  ) as any;

  // Create a function that will render our row sub components
  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <pre
        style={{
          fontSize: '10px',
        }}
      >
        <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
      </pre>
    ),
    []
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <React.Fragment key={`${row.id}-${row.isExpanded}`}>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
                {row.isExpanded ? (
                  <tr {...row.getRowProps()} key="row-expanded">
                    <td colSpan={visibleColumns.length}>
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          className="btn btn-square btn-xs"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {'<<'}
        </button>{' '}
        <button
          className="btn btn-square btn-xs"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>{' '}
        <button
          className="btn btn-square btn-xs"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </button>{' '}
        <button
          className="btn btn-square btn-xs"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>{' '}
        <span>
          Stranica{' '}
          <strong>
            {pageIndex + 1} od {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Idi na stranicu:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const newPage = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(newPage);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((newPageSize) => (
            <option key={newPageSize} value={newPageSize}>
              Pokaži {newPageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

const StatList = ({ allCount }: { allCount: number | bigint }) => {
  return (
    <div className="shadow stats mb-4">
      <div className="stat">
        <div className="stat-title">Ukupno prijava</div>
        <div className="stat-value text-accent">
          {allCount == null || allCount === 0 ? (
            <Spinner color="accent" />
          ) : (
            new Intl.NumberFormat('en-EN').format(allCount)
          )}
        </div>
        <div className="stat-desc">Od 25.09.2021.</div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [allSubmissions, setAllSubmissions] =
    React.useState<QuerySnapshot<DocumentData> | null>(null);
  const [isError, setIsError] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    (async function populateAllCount() {
      const submissions = await getCollections();
      if (submissions != null) {
        setAllSubmissions(submissions);
      } else {
        setIsError(true);
      }
    })();
  }, []);

  const authContext = React.useContext(AuthContext);
  React.useEffect(() => {
    if (authContext == null) {
      router.replace('/admin');
    } else if (authContext.user == null) {
      router.replace('/admin');
    }
  }, [authContext, router]);

  return isError ? (
    <div className="container mx-auto px-2 md:px-0 mt-4">
      <div className="alert alert-error">
        <div className="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 mx-2 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
          <label>Nemate pristup ovoj stranici!</label>
        </div>
      </div>
    </div>
  ) : (
    <>
      <NavBar />
      <div className="container mx-auto px-2 md:px-0 mt-4">
        <StatList allCount={getSubmissionCount(allSubmissions)} />
        <UserTable submissions={allSubmissions} />
      </div>
    </>
  );
};

export default Dashboard;
