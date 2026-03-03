// TechStack.jsx
import React from "react";
import gsc from "./assets/tools/gsc1.png";
import screamingfrog from "./assets/tools/screamingfrog2.png";
import ahrefs from "./assets/tools/ahrefs.webp";
import pagespeed from "./assets/tools/pagespeed2.svg";
import keywordtool from "./assets/tools/keywordtool.jpg";

const tools = [
  { name: "Google Search Console", logo: gsc },
  { name: "Screaming Frog", logo: screamingfrog },
  { name: "Ahrefs", logo: ahrefs },
  { name: "PageSpeed Insights", logo: pagespeed },
  { name: "KeywordTool", logo: keywordtool },
];

const TechStack = () => {
  return (
    <section className="bg-[#0B0F19] py-16 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Tools & Tech Stack
        </h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-6 md:gap-8">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="md:min-w-[160px] py-2 md:p-6 flex flex-col items-center"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <span className="mt-4 text-sm text-gray-400 text-center whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
