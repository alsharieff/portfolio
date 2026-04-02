// SeoTimeline.jsx
import React from "react";
import { FaSearch, FaLightbulb, FaCogs, FaChartLine } from "react-icons/fa";

const steps = [
  { title: "Audit", icon: <FaSearch /> },
  { title: "Strategy", icon: <FaLightbulb /> },
  { title: "Implementation", icon: <FaCogs /> },
  { title: "Reporting", icon: <FaChartLine /> },
];

const SeoTimeline = () => {
  return (
    <section className="bg-[#0B0F19] py-12">
      <div className="max-w-[1200px] mx-auto  px-2 md:px-4">
        <h2 className="text-lg sm:text-2xl md:text-5xl font-extrabold tracking-wide text-white text-center mb-8">
          SEO Process
        </h2>

        {/* Timeline container */}
        <div className="relative flex items-center justify-between">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center z-10"
            >
              {/* Circle icon perfectly centered on line */}
              <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 rounded-full bg-gray-800 border-4 border-gray-500 flex items-center justify-center z-10">
                <div className="text-sm sm:text-lg md:text-2xl text-gray-300">
                  {step.icon}
                </div>
              </div>
              <span className="text-white text-xs sm:text-sm md:text-base font-semibold mt-2 md:mt-4">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoTimeline;
