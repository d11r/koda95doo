import React from 'react';

import { QuerySnapshot, DocumentData } from 'firebase/firestore';

import { Spinner } from '../application/Spinner';
import { getCollections, getSubmissionCount } from '../utils/firebase';

const UserTable = ({
  submissions,
}: {
  submissions: QuerySnapshot<DocumentData> | null;
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-compact">
        <thead>
          <tr>
            <th></th>
            <th>Ime i Prezime</th>
            <th>Zanimanje</th>
            <th>Dostupan odmah?</th>
            <th>God. iskustva</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Jezici</th>
            <th>Državljanstvo</th>
            <th>Iskustvo</th>
          </tr>
        </thead>
        <tbody>
          {submissions?.docs.map((doc, idx) => {
            const data = doc.data();
            const languages = Object.keys(data.languages);
            const knownLanguages = languages
              .map((key) => {
                if (data.languages[key].value !== 'Bez znanja') {
                  return data.languages[key].label;
                }
                return null;
              })
              .filter((x) => !!x);
            return (
              <tr key={doc.id}>
                <th>{idx + 1}</th>
                <td>{`${data.name} ${data.surname}`}</td>
                <td>{data.occupation}</td>
                <td>{data.immediately_available ? 'Da' : 'Ne'}</td>
                <td>{data.years_of_experience}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{knownLanguages.join(', ')}</td>
                <td>{data.citizenship.join(', ')}</td>
                <td>{data['previous-job-desc']}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const NavHeader = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">KODA95doo Admin</span>
      </div>
      <div className="flex-none"></div>
    </div>
  );
};

const StatList = ({ allCount }: { allCount: number | bigint }) => {
  return (
    <div className="shadow stats mb-8">
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
      <div className="container mx-auto px-4 mt-8">
        <StatList allCount={getSubmissionCount(allSubmissions)} />
        <UserTable submissions={allSubmissions} />
      </div>
    </>
  );
};

export { Dashboard };
