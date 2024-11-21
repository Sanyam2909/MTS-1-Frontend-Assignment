'use client';

import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout } = useAuth0();

  const handleLogout = async () => {
    try {
      // Perform the logout without any arguments
      logout();

      // Ensure that after logging out, the user is redirected correctly
      const redirectUrl =
        process.env.NODE_ENV === 'production'
          ? 'https://react-trade-dashboard-due5.vercel.app' // Production URL
          : 'http://localhost:3000'; // Localhost URL for development

      // Manually redirect the user after logout
      window.location.href = redirectUrl;
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
