'use client';

import Link from 'next/link';
import Logout from './Logout'; // Import the Logout component
import Image from 'next/image'; // Import Image for the logo

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo.png" // Replace with the path to your logo image
            alt="Company Logo"
            width={60} // Increased logo size
            height={60}
            className="rounded-full shadow-lg" // Added shadow for a stylish look
          />
          <div className="text-white text-3xl font-semibold">Trade AI</div> {/* Larger text size and bolder font */}
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 items-center">
          <Link href="/home" className="text-gray-300 hover:text-white transition-colors duration-200">
            Home
          </Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">
            Dashboard
          </Link>
          {/* Logout button */}
          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
