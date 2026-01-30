import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#232426] shadow-md relative">
      <div className="container mx-auto p-4 md:max-w-[960px] flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link to="/">Portfolio</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="font-semibold hover:text-[#36d1a7] transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="font-semibold hover:text-[#36d1a7] transition duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/certificate"
            className="font-semibold hover:text-[#36d1a7] transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="font-semibold hover:text-[#36d1a7] transition duration-300"
          >
            Contact
          </Link>
        </nav>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#232426] shadow-md border-t absolute top-full left-0 right-0 z-50">
          <Link
            to="/"
            className="block px-4 py-3 hover:bg-[#36d1a7] transition duration-300 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="block px-4 py-3 hover:bg-[#36d1a7] transition duration-300 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/certificate"
            className="block px-4 py-3 hover:bg-[#36d1a7] transition duration-300 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-3 hover:bg-[#36d1a7] transition duration-300 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
