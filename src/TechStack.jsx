import React, { useEffect, useRef } from "react";
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
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrame;
    let speed = 0.5; // control speed here (increase = faster)

    const autoScroll = () => {
      if (!container) return;

      container.scrollLeft += speed;

      // seamless loop
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="bg-[#0B0F19] py-16">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Tools & Tech Stack
        </h2>

        {/* Outer scroll container (allows manual drag if desired) */}
        <div className="relative overflow-x-auto whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing">
          {/* Inner marquee container for continuous animation */}
          <div className="animate-marquee flex gap-8 w-max">
            {/* Duplicate tools to make infinite loop seamless */}
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="min-w-[160px] py-4 px-6 flex flex-col items-center"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-10 sm:h-12 w-auto object-contain"
                  draggable="false"
                />
                <span className="mt-3 text-sm text-gray-400 whitespace-nowrap">
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
