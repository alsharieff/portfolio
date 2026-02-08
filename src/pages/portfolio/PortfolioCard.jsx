import React from "react";

const PortfolioCard = ({ image, title, tags, link }) => {
  return (
    <div className="flex flex-col gap-4 mb-10 group">
      {/* Project Image */}
      <div className="overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Info */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <a
          href={link}
          className="px-3 py-1 bg-teal-500 text-white text-sm font-semibold rounded-full hover:bg-teal-600 transition-colors flex items-center gap-1"
        >
          VIEW
          <span className="text-xs">→</span>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
