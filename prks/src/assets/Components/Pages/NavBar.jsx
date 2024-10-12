import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          HealthBlocks
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="block text-white hover:bg-blue-700 md:hover:bg-transparent p-2 md:p-0">
            Home
          </Link>
          <Link to="/about" className="block text-white hover:bg-blue-700 md:hover:bg-transparent p-2 md:p-0">
            About
          </Link>
          <Link to="/contact" className="block text-white hover:bg-blue-700 md:hover:bg-transparent p-2 md:p-0">
            Contact Us
          </Link>
          <Link to="/login" className="block text-white hover:bg-blue-700 md:hover:bg-transparent p-2 md:p-0">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
