'use client';

import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/navigation'; 
import Home from './components/Home';
import Login from './components/Login';

const HomePage = () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const router = useRouter(); 

  useEffect(() => {
    // Redirect to login if the user is not authenticated
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }

    // Redirect to /home if the user is authenticated
    if (isAuthenticated) {
      router.push('/home');
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-0">
      {isAuthenticated ? <Home /> : <Login />}
    </div>
  );
};

export default HomePage;
