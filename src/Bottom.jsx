import React, { useState } from "react";
import { FaGithub, FaRegEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiChevronUp } from "react-icons/fi";

function Bottom() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed bottom-0 right-0 md:hidden z-50
        bg-[#1A73E8] rounded-tl-lg shadow-lg
        transition-all duration-300 ease-out
        ${open ? "w-1/2 p-2" : "w-12 p-2"}`}
    >
      {/* Toggle Arrow */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-full text-white text-xl"
        aria-label="Toggle contact actions"
      >
        <FiChevronUp
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Actions */}
      <div
        className={`flex justify-around items-center mt-2
          transition-all duration-300
          ${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <a
          href=""
          className="text-white text-2xl hover:text-gray-200 transition"
        >
          <FaRegEnvelope />
        </a>

        <a
          href=""
          className="text-white text-2xl hover:text-gray-200 transition"
        >
          <BsTelephone />
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-200 transition"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Bottom;
