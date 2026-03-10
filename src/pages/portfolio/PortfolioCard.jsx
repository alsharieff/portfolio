import React from "react";

const PortfolioCard = ({ image, title, tags, link }) => {
  return (
    <a href={link} className="block perspective-[1200px]">
      <div className="relative overflow-hidden rounded-xl transform rotate-y-[-6deg] rotate-x-[2deg]">
        {/* Image */}
        <img src={image} alt={title} className="w-full object-contain" />

        {/* Bottom Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/70 to-transparent flex flex-col justify-end px-4 pb-4">
          <h3 className="text-white text-sm md:text-base font-semibold leading-tight">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-[12px] px-2 py-[2px] rounded-full bg-[#0965dd] text-gray-200 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;
