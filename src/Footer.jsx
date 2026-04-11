import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-gray-200 pt-10 pb-6 ">
      {/* Top Divider */}
      <div className="max-w-[1200px] mx-auto px-4 h-[1px] bg-gray-700 mb-8" />

      {/* Links and Socials */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-4 text-sm justify-center md:justify-start">
          <li>
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-white transition">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 text-lg justify-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-red-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Alsharieff Kallun. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
