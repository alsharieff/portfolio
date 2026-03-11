import React from "react";

function PortfolioCard({ project }) {
  return (
    <div className="py-4 border-b border-[#1f2937]">
      {/* Link */}
      <a href={project.url} className="text-[#1A73E8] text-sm font-medium">
        {/* Images: desktop bigger, mobile same */}
        <div className="flex flex-row items-center justify-center gap-2">
          {/* Desktop Image - bigger */}
          <div className="flex justify-center">
            <img
              src={project.desktopImage}
              alt={`${project.title} desktop screenshot`}
              className="h-[350px] w-auto object-contain"
            />
          </div>

          {/* Mobile Image - same as before */}
          <div className="flex justify-center">
            <img
              src={project.mobileImage}
              alt={`${project.title} mobile screenshot`}
              className="h-[300px] w-auto object-contain"
            />
          </div>
        </div>
        {/* Content Below Images */}
        <div className="text-center sm:text-left max-w-[650px] mx-auto sm:mx-0">
          <h2 className="text-2xl font-semibold text-white mb-3">
            {project.title}
          </h2>

          <p className="text-gray-400 mb-4">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-[#1f2937] px-3 py-1 rounded-full text-gray-300 uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        View Website →
      </a>
    </div>
  );
}

export default PortfolioCard;
