// Services.jsx
import React from "react";
import { FaTools, FaProjectDiagram, FaBolt, FaDatabase } from "react-icons/fa";

const servicesData = [
  {
    title: "Technical SEO Audits",
    description:
      "Comprehensive audits to identify crawl issues, broken links, and optimization opportunities.",
    icon: <FaTools className="text-gray-300" size={28} />,
  },
  {
    title: "Site Architecture Optimization",
    description:
      "Improve website hierarchy, internal linking, and navigation for better SEO performance.",
    icon: <FaProjectDiagram className="text-gray-300" size={28} />,
  },
  {
    title: "Core Web Vitals Optimization",
    description:
      "Enhance page speed, responsiveness, and visual stability to meet Google standards.",
    icon: <FaBolt className="text-gray-300" size={28} />,
  },
  {
    title: "Schema & Structured Data",
    description:
      "Implement structured data to improve SERP visibility, rich snippets, and search engine understanding.",
    icon: <FaDatabase className="text-gray-300" size={28} />,
  },
];

const Services = () => {
  return (
    <section className="bg-[#0B0F19] py-16" aria-labelledby="services-heading">
      <div className="max-w-[960px] mx-auto px-4">
        {/* Heading with left & right lines */}
        <h2
          id="services-heading"
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 flex items-center justify-center gap-4"
        >
          <span className="flex-1 h-px bg-gray-700"></span>
          <span>What I Specialize In</span>
          <span className="flex-1 h-px bg-gray-700"></span>
        </h2>

        {/* Responsive grid: 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-[#121827] rounded-xl py-6 px-2 flex flex-col items-center text-center"
            >
              {/* Realistic icon */}
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
