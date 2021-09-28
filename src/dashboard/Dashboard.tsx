import React, { useContext } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getAuth, User } from 'firebase/auth';
import { QuerySnapshot, DocumentData } from 'firebase/firestore';

import { Spinner } from '../application/Spinner';
import { getCollections, getSubmissionCount, signOut } from '../utils/firebase';

export const AuthContext = React.createContext<{
  user: User | null;
  setUser: Function;
} | null>(null);

const UserTable = ({
  submissions,
}: {
  submissions: QuerySnapshot<DocumentData> | null;
}) => {
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Ime', sortable: false, width: 160 },
    {
      field: 'education',
      headerName: 'Obrazovanje',
      sortable: true,
      width: 160,
    },
    {
      field: 'occupation',
      headerName: 'Zanimanje',
      sortable: true,
      width: 200,
    },
    {
      field: 'yoe',
      headerName: 'Iskustvo',
      sortable: true,
      width: 120,
      disableColumnMenu: true,
      type: 'number',
    },
    {
      field: 'currentlyEmployed',
      headerName: 'Zaposlen',
      width: 120,
      type: 'boolean',
      disableColumnMenu: true,
    },
    {
      field: 'languages',
      headerName: 'Jezici',
      width: 160,
      sortable: false,
    },
    {
      field: 'dateOfBirth',
      headerName: 'Datum rođ.',
      sortable: true,
      width: 160,
      type: 'date',
    },
    {
      field: 'exp',
      headerName: 'Opis poslova',
      width: 320,
      sortable: false,
    },
  ];

  const rows =
    submissions != null
      ? submissions?.docs.map((submission, index) => {
          const doc = submission.data();
          return {
            // personal info
            id: index + 1,
            name: `${doc.name} ${doc.surname}`,
            email: doc.email,
            phone: doc.phone,
            dateOfBirth: new Date(doc.date_of_birth.seconds * 1000),
            // Education and work
            education: doc.education,
            occupation: doc.occupation,
            yoe: doc.years_of_experience,
            licences: doc.licences,
            exp: doc['previous-job-desc'],
            // Availability and requests
            availableNow: doc.immediately_available,
            requests: doc.special_requests,
            currentlyEmployed: doc.currently_employed,
            // Languages
            languages: Object.keys(doc.languages)
              .filter((x) => doc.languages[x].value !== 'Bez znanja')
              .join(', '),
          };
        })
      : [];

  return (
    <div className="w-full">
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight={true}
        disableSelectionOnClick
        className="w-full"
        autoPageSize={true}
        pageSize={20}
        density="compact"
        loading={submissions == null || submissions.size < 1}
      />
    </div>
  );
};

const NavHeader = () => {
  const authContext = useContext(AuthContext);
  const logout = () => {
    if (authContext && authContext.setUser) {
      authContext.setUser(null);
    }
    signOut(getAuth());
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-accent p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">KODA95doo</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div>
          <button
            onClick={logout}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 hover:text-accent"
          >
            Odjavi se
          </button>
        </div>
      </div>
    </nav>
  );
};

const StatList = ({ allCount }: { allCount: number | bigint }) => {
  return (
    <div className="shadow stats mb-4">
      <div className="stat">
        <div className="stat-title">Ukupno prijava</div>
        <div className="stat-value text-success">
          {allCount === 0 ? (
            <Spinner color="primary" />
          ) : (
            new Intl.NumberFormat('rs-RS').format(allCount)
          )}
        </div>
        <div className="stat-desc">od 25.09.2021</div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [allSubmissions, setAllSubmissions] =
    React.useState<QuerySnapshot<DocumentData> | null>(null);
  const [isError, setIsError] = React.useState(false);
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

  return isError ? (
    <div className="flex flex-col container mx-auto px-2 md:px-0 mt-4">
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
      <NavHeader />
      <div className="flex flex-col container mx-auto px-2 md:px-0 mt-4">
        <StatList allCount={getSubmissionCount(allSubmissions)} />
        <UserTable submissions={allSubmissions} />
      </div>
    </>
  );
};

export { Dashboard };
