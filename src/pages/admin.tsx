import React from 'react';

import { useRouter } from 'next/router';

import { signIn } from '../utils/firebase';
import { AuthContext } from './panel';

const AdminLoginPage = () => {
  const authContext = React.useContext(AuthContext);
  const router = useRouter();
  const handleSubmit = async () => {
    const googleUser = await signIn();
    if (!googleUser) {
      authContext?.setUser(null);
    } else {
      authContext?.setUser(googleUser);
      router.replace('/panel');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="mx-auto max-w-l">
        <div className="card text-center shadow-2xl ">
          <div className="card-body">
            <button className="btn btn-accent" onClick={handleSubmit}>
              Prijavi se preko Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
