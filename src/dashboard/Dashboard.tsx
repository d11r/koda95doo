import React from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { QuerySnapshot, DocumentData } from 'firebase/firestore';

import { Spinner } from '../application/Spinner';
import { getCollections, getSubmissionCount } from '../utils/firebase';

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
      type: 'text',
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
        pageSize={10}
        autoHeight={true}
        disableSelectionOnClick
        className="w-full"
        autoPageSize={true}
        density="compact"
        loading={submissions == null || submissions.size < 1}
      />
    </div>
  );
};

const NavHeader = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">KODA95doo Admin</span>
      </div>
      <div className="flex-none">{/* right-hand size menu here */}</div>
    </div>
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
  React.useEffect(() => {
    (async function populateAllCount() {
      setAllSubmissions(await getCollections());
    })();
  }, []);

  return (
    <>
      <NavHeader />
      <div className="container mx-auto px-2 md:px-0 mt-4">
        <StatList allCount={getSubmissionCount(allSubmissions)} />
        <UserTable submissions={allSubmissions} />
      </div>
    </>
  );
};

export { Dashboard };
