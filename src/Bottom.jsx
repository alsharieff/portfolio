import React from "react";
import { FaGithub, FaRegEnvelope } from "react-icons/fa"; // Use FaRegEnvelope for message
import { BsTelephone } from "react-icons/bs";

function Bottom() {
  return (
    // Mobile-only, fixed at bottom, right half of the screen
    <div className="fixed bottom-5 right-0 w-1/2 p-2 flex justify-around items-center md:hidden z-50 rounded-tl-lg shadow-lg">
      <a
        href="mailto:youremail@example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl transition hover:text-gray-300"
      >
        <FaRegEnvelope />
      </a>
      <a
        href="tel:+1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl transition hover:text-gray-300"
      >
        <BsTelephone />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl transition hover:text-gray-300"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default Bottom;
