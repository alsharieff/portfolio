import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/name-logo.png/";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0B0F19] shadow-md sticky top-0 z-50">
      <div className="container mx-auto md:max-w-[960px] flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-[120px] sm:w-[140px] md:w-[150px] h-[40px] sm:h-[60px] md:h-[80px] flex items-center justify-center">
            <img
              src={logo}
              alt="Al-Sharieff Logo"
              className="max-w-full max-h-28 object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="font-semibold">
            Home
          </Link>
          <Link to="/portfolio" className="font-semibold">
            Portfolio
          </Link>
          <Link to="/about" className="font-semibold">
            About
          </Link>
          <Link to="/contact" className="font-semibold">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0F19] shadow-md border-t absolute top-full left-0 right-0 z-50">
          <Link
            to="/"
            className="block px-4 py-3 hover:bg-[#1A73E8] transition duration-300 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="block px-4 py-3 hover:bg-[#1A73E8] transition duration-300 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="block px-4 py-3 hover:bg-[#1A73E8] transition duration-300 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-3 hover:bg-[#1A73E8] transition duration-300 font-semibold"
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
