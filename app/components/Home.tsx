'use client';

import NavBar from './NavBar';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 via-blue-200 to-pink-300 px-6 py-16">
      <NavBar />

      <div className="w-full max-w-5xl text-center space-y-8">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 sm:text-6xl">
          Explore and Analyze Trade Data Insights Through Interactive Charts and Metrics
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:px-16">
          Leverage comprehensive trade data to make informed decisions. Dive deep into the analytics that drive your success.
        </p>

        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/trade-data-analytics.jpg"
            alt="Trade Data Analytics"
            width={1200}
            height={800}
            className="rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
