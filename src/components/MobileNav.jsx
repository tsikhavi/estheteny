// MobileNav.js
import React from 'react';
import Link from 'next/link';

const MobileNav = ({ isOpen, setIsOpen, menuItems }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed inset-0 bg-green z-50 transition-opacity duration-300 ease-in-out">
      <div
        className={`fixed inset-y-0 right-0 flex flex-col items-end p-8 bg-green-500 w-full ${
          isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {menuItems.map((item, index) => (
          <div className="bg-green-500" key={item.href}>
            <Link href={item.href}>
              <p className="text-gray-900 hover:text-gray-300 py-2">{item.label}</p>
            </Link>
            {index < menuItems.length - 1 && <hr className="border-t border-gray-600 my-2" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
