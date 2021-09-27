import React, { KeyboardEventHandler } from 'react';

import { useAdminLoginInput } from '../admin/useAdminLoginInput';
import { Spinner } from '../application/Spinner';
import { Dashboard } from '../dashboard/Dashboard';

const handleChange =
  (updater: Function) => (e: React.ChangeEvent<HTMLInputElement>) => {
    updater(e.target.value);
  };

const AdminLoginPage = () => {
  const { value, setValue } = useAdminLoginInput();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const redirectToAdminPanel = () => {
    // todo: redirect to new route
    // todo: make route restricted
    // todo: redirect away from that route if auth isn't completed
    setIsAuthenticated(true);
  };

  const handleSubmit = () => {
    // todo: really check if pw is allowed
    setIsSubmitting(true);
    if (value === 'Dado') {
      redirectToAdminPanel();
      setIsSubmitting(false);
    }
    // todo: if unsuccessful, have them have one more try
    setIsSubmitting(false);
  };

  const handleKeydown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  if (isAuthenticated) {
    return <Dashboard />;
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <div className="card text-center shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <div className="relative">
                <input
                  placeholder="magična riječ"
                  className="w-full pr-16 input input-primary input-bordered"
                  type="password"
                  value={value}
                  onChange={handleChange(setValue)}
                  onKeyDown={handleKeydown}
                />
                <button
                  className="absolute top-0 right-0 rounded-l-none btn btn-primary"
                  onClick={handleSubmit}
                >
                  {isSubmitting && <Spinner />} prijavi se
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
