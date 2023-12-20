import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-inherit text-gray-800">
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-green-500 hover:text-green-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="currentColor" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow flex mx-2">
        <Link href="/landing" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-fuchsia-700  mr-4">
            Home
          </Link>
          <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-fuchsia-700  mr-4">
            About Us
          </Link>
          <Link
            href="contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-fuchsia-700  mr-4"
          >
            Contact
          </Link>
          <Link
            href="/portfolio"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-fuchsia-700 mr-4"
          >
            Reviews
          </Link>
          <Link href="/book" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-fuchsia-700 mr-4">
            Pricing
          </Link>
          <Link
            href="/services"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-fuchsia-700 mr-4"
          >
            Services
          </Link>
        </div>
        <div className="flex items-center justify-end mt-4 lg:mt-0">
          <Link href="/contact" className="inline-flex items-center bg-fuchsia-600 hover:bg-fuchsia-500 border-0 rounded-md py-2 px-4 text-gray-100">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
