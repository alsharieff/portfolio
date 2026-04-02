import React from "react";

function PortfolioCard({ project }) {
  return (
    <div className="py-4 border-b border-[#1f2937]">
      <a href={project.url} className="block group">
        {/* Images */}
        <div className="flex items-center justify-center gap-2 mb-3">
          {/* Desktop Image */}
          <img
            src={project.desktopImage}
            alt={`${project.title} desktop screenshot`}
            className="
              h-[120px] sm:h-[200px] md:h-[250px]
              max-w-[55%]
              object-contain
            "
          />

          {/* Mobile Image */}
          <img
            src={project.mobileImage}
            alt={`${project.title} mobile screenshot`}
            className="
              h-[120px] sm:h-[200px] md:h-[180px]
              max-w-[35%]
              object-contain
            "
          />
        </div>

        {/* Content */}
        <div className="text-center max-w-[650px] mx-auto">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
            {project.title}
          </h2>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-3 justify-center">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="text-[10px] md:text-xs bg-[#1f2937] px-3 py-1 rounded-full text-gray-300 uppercase"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="text-[#1A73E8] text-sm font-medium group-hover:underline">
            View Website →
          </span>
        </div>
      </a>
    </div>
  );
}

export default PortfolioCard;
