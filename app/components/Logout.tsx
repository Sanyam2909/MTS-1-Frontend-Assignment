'use client';

import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    try {
      const redirectUrl =
        process.env.NODE_ENV === 'production'
          ? 'https://react-trade-dashboard-due5.vercel.app' // Production URL
          : 'http://localhost:3000'; // Localhost URL for development;

      // Use the `returnTo` property for the logout function
      logout({
        logoutParams: { returnTo: redirectUrl },
      });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  console.log('NODE_ENV:', process.env.NODE_ENV);

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
    >
      Log out
    </button>
  );
};

export default Logout;
