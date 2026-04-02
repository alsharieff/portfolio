import React from "react";
import { Monitor, Smartphone, SearchCheck, BadgeCheck } from "lucide-react";

const statsData = [
  {
    icon: <Monitor size={34} />,
    label: "Site Technical Audits",
  },
  {
    icon: <Smartphone size={34} />,
    label: "Mobile Phone Friendly Builds",
  },
  {
    icon: <SearchCheck size={34} />,
    label: "SEO Practice Implementation",
  },
  {
    icon: <BadgeCheck size={34} />,
    label: "2+ Years Experience",
    highlight: true,
  },
];

const Stats = () => {
  return (
    <section className="bg-[#0B0F19] py-14">
      <div className="max-w-[1200px] mx-auto px-2 md:px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-6 text-center">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center p-2 md:p-4 text-gray-400"
            >
              {/* Icon */}
              <div className="mb-2 text-gray-300">{stat.icon}</div>

              {/* Label */}
              <span
                className={`text-[10px] md:text-sm tracking-wide text-center ${
                  stat.highlight
                    ? "text-gray-200 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {stat.label}
              </span>

              {/* Divider */}
              {index !== statsData.length - 1 && (
                <span className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-10 border-r border-gray-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
