import React from 'react';

import { AuthContext, Dashboard } from '../dashboard/Dashboard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { signIn } from '../utils/firebase';

const AdminLoginPage = () => {
  const [user, setUser] = useLocalStorage('KODA95DOO_USER', null);

  const handleSubmit = async () => {
    const googleUser = await signIn();
    if (!googleUser) {
      setUser(null);
    }
    setUser(googleUser);
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user == null ? (
        <div className="h-screen flex justify-center items-center">
          <div className="mx-auto max-w-l">
            <div className="card text-center shadow-2xl ">
              <div className="card-body">
                <button className="btn btn-accent " onClick={handleSubmit}>
                  Prijavi se preko Google
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Dashboard />
      )}
    </AuthContext.Provider>
  );
};

export default AdminLoginPage;
