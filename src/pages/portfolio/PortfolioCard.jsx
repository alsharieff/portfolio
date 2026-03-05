import React from "react";

const PortfolioCard = ({ image, title, tags, link }) => {
  return (
    <div className="flex flex-col gap-4 mb-10 group bg-[#1F2937] border border-[#2A2F3A] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Optional subtle overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Project Info */}
      <div className="px-4 py-3 flex flex-col gap-3">
        <h3 className="text-lg md:text-xl font-heading font-semibold text-[#E5E7EB]">
          {title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-[#2A2F3A] text-[#9CA3AF] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Button */}
        <a
          href={link}
          className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-[#1A73E8] text-white hover:bg-[#0965dd] transition"
        >
          VIEW <span>→</span>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
