import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Banner from './Banner';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="relative top-0 z-20 bg-inherit">
        <Banner />
      </div>
      <div className="sticky container top-20 bg-none">
        <div className="bg-transparent py-2 mx-0 px-8 flex items-center justify-between">
          <MobileMenuToggle open={open} toggleNavbar={toggleNavbar} />
          <Navigation open={open} toggleNavbar={toggleNavbar} />
          <Logo />
          <BookButton />
        </div>
      </div>
    </>
  );
};

const Logo = () => (
  <div className="w-20 max-w-full px-4">
    <Link href="/#" className="block w-full">
      <Image src="/esthete.png" alt="logo" width={100} height={100} className="rounded-full" />
    </Link>
  </div>
);

const BookButton = () => {
  return (
    <Link
      href="/pricing"
      className="bg-allports-600 text-white px-6  py-3 rounded-md transition duration-300 hover:bg-allports-700"
    >
      Book
      <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex h-4 w-6" viewBox="0 0 640 512">
        <path
          fill="currentColor"
          d="M320 0c17.7 0 32 14.3 32 32V240c0 8.8 7.2 16 16 16s16-7.2 16-16V64c0-17.7 14.3-32 32-32s32 14.3 32 32V240c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-17.7 14.3-32 32-32s32 14.3 32 32V323.1c-11.9 4.8-21.3 14.9-25 27.8l-8.9 31.2L478.9 391C460.6 396.3 448 413 448 432c0 18.9 12.5 35.6 30.6 40.9C448.4 497.4 409.9 512 368 512H348.8c-59.6 0-116.9-22.9-160-64L76.4 341c-16-15.2-16.6-40.6-1.4-56.6s40.6-16.6 56.6-1.4l60.5 57.6c0-1.5-.1-3.1-.1-4.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32V240c0 8.8 7.2 16 16 16s16-7.2 16-16V32c0-17.7 14.3-32 32-32zm-7.3 326.6c-1.1-3.9-4.7-6.6-8.7-6.6s-7.6 2.7-8.7 6.6L288 352l-25.4 7.3c-3.9 1.1-6.6 4.7-6.6 8.7s2.7 7.6 6.6 8.7L288 384l7.3 25.4c1.1 3.9 4.7 6.6 8.7 6.6s7.6-2.7 8.7-6.6L320 384l25.4-7.3c3.9-1.1 6.6-4.7 6.6-8.7s-2.7-7.6-6.6-8.7L320 352l-7.3-25.4zM104 120l48.3 13.8c4.6 1.3 7.7 5.5 7.7 10.2s-3.1 8.9-7.7 10.2L104 168 90.2 216.3c-1.3 4.6-5.5 7.7-10.2 7.7s-8.9-3.1-10.2-7.7L56 168 7.7 154.2C3.1 152.9 0 148.7 0 144s3.1-8.9 7.7-10.2L56 120 69.8 71.7C71.1 67.1 75.3 64 80 64s8.9 3.1 10.2 7.7L104 120zM584 408l48.3 13.8c4.6 1.3 7.7 5.5 7.7 10.2s-3.1 8.9-7.7 10.2L584 456l-13.8 48.3c-1.3 4.6-5.5 7.7-10.2 7.7s-8.9-3.1-10.2-7.7L536 456l-48.3-13.8c-4.6-1.3-7.7-5.5-7.7-10.2s3.1-8.9 7.7-10.2L536 408l13.8-48.3c1.3-4.6 5.5-7.7 10.2-7.7s8.9 3.1 10.2 7.7L584 408z"
        />
      </svg>
    </Link>
  );
};

const MobileMenuToggle = ({ open, toggleNavbar }) => (
  <button
    onClick={toggleNavbar}
    className={`lg:hidden ml-auto p-2 rounded-md focus:outline-none focus:bg-gray-200 ${open ? 'bg-gray-200' : ''}`}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  </button>
);

const Navigation = ({ open, toggleNavbar }) => (
  <nav className={`lg:flex lg:flex-grow lg:items-center lg:w-auto lg:ml-auto ${open ? 'block' : 'hidden'}`}>
    <ul className="flex text-sm font-bold flex-col uppercase lg:flex-row list-none lg:space-x-8">
      <ListItem NavLink="/">Home</ListItem>
      <ListItem NavLink="/contact">Contact</ListItem>
      <ListItem NavLink="/about">About</ListItem>
      <ListItem NavLink="/pricing">Pricing</ListItem>
      <ListItem NavLink="/services">Services</ListItem>
    </ul>
  </nav>
);

const ListItem = ({ children, NavLink }) => (
  <li>
    <Link
      href={NavLink}
      className="block py-2 text-gray-800 link-underline-black link-underline 
    .link-underline:hover font-semibold lg:inline-block"
    >
      {children}
    </Link>
  </li>
);

export default Navbar;
