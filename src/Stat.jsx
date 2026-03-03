// Stats.jsx
import React from "react";

const statsData = [
  { number: "40+", label: "Site Build" },
  { number: "20+", label: "Websites Optimized" },
  { number: "90%", label: "Site Performance" },
  { number: "2+", label: "Years Experience" },
];

const Stats = () => {
  return (
    <section className="bg-[#0B0F19] py-12" aria-labelledby="stats-heading">
      <div className="max-w-[960px] mx-auto px-4">
        <h2 id="stats-heading" className="sr-only">
          Company Statistics
        </h2>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-gray-400 relative"
            >
              {/* Number on top */}
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#8B5CF6]">
                {stat.number}
              </span>
              {/* Label below */}
              <span className="mt-1 text-xs sm:text-sm uppercase">
                {stat.label}
              </span>

              {/* Divider line */}
              {/* Vertical divider only for desktop (sm:grid-cols-4) */}
              {index !== 3 && (
                <span className="hidden sm:block absolute top-1/2 right-0 transform -translate-y-1/2 h-10 border-r border-gray-700"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
