'use client';

import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    try {
      await loginWithRedirect();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-12 rounded-3xl shadow-lg max-w-md w-full text-center transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome Back!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Please sign in to access your trade data insights and dashboard.
        </p>
        <button
          onClick={handleLogin}
          className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-full w-full font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          Log in with Auth0
        </button>
        <p className="text-sm text-gray-500 mt-6">
          By logging in, you agree to our{' '}
          <a href="#" className="text-teal-600 hover:text-teal-700">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-teal-600 hover:text-teal-700">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
