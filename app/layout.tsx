'use client';

import localFont from 'next/font/local';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { Chart as ChartJS } from 'chart.js';
import {
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import NavBar from './components/NavBar';
import Login from './components/Login'; // Import your custom Login component
import './globals.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const geistSans = localFont({
  src: '/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const redirectUri =
    process.env.NODE_ENV === 'production'
      ? 'https://react-trade-dashboard-due5.vercel.app' // Vercel production URL
      : 'http://localhost:3000'; // Localhost URL for development

  const postLogoutRedirectUri =
    process.env.NODE_ENV === 'production'
      ? 'https://react-trade-dashboard-due5.vercel.app'
      : 'http://localhost:3000'; // Redirect after logout

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
      authorizationParams={{
        redirect_uri: redirectUri,
        post_logout_redirect_uri: postLogoutRedirectUri, // Add this to handle post-logout redirect
        audience: `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/api/v2/`,
        scope: 'openid profile email',
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
        >
          <AuthWrapper>
            <NavBar />
            <main className="container mx-auto p-4 mt-16">{children}</main>
          </AuthWrapper>
        </body>
      </html>
    </Auth0Provider>
  );
}

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Login /> {/* Render your custom Login component */}
      </div>
    );
  }

  // Render children only when the user is authenticated
  return <>{children}</>;
}
