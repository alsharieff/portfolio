import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

function Bottom() {
  return (
    // Mobile-only, fixed at bottom, right half of the screen
    <div className="fixed bottom-5 right-0 w-1/2 p-2 flex justify-around items-center md:hidden z-50 rounded-tl-lg shadow-lg">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl transition"
      >
        <FaRegMessage />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl transition"
      >
        <BsTelephone />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl transition"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default Bottom;
