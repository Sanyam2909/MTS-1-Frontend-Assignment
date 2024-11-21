'use client';

import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout } = useAuth0();

  const handleLogout = async () => {
    try {
      // Call logout without any arguments
      logout();

      // After logout, redirect the user to the appropriate URL
      window.location.href =
        process.env.NODE_ENV === 'production'
          ? 'https://react-trade-dashboard-due5.vercel.app' // Production URL
          : 'http://localhost:3000'; // Localhost URL for development
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

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
