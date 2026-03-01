import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import portfolio from "../../assets/portfolio.png";
import tti from "../../assets/tti-desktop.jpg";
import dental from "../../assets/dental-desktop.png";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All Project");

  const projects = [
    {
      id: 1,
      title: "Portfolio",
      category: "Others",
      tags: ["HTML", "Bootstrap", "CSS", "JavaScript"],
      image: portfolio,
      link: "https://alsharieff.github.io/portfolio/",
    },
    {
      id: 2,
      title: "Blog News Site",
      category: "Others",
      tags: ["WordPress", "HTML", "CSS", "JavaScript"],
      image: tti,
      link: "https://talktimeindia.com/",
    },
    {
      id: 2,
      title: "Dental Appointment Site",
      category: "Others",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      image: dental,
      link: "https://ohiofamilydentist.forgetechdigital.com/",
    },
  ];

  const filteredProjects =
    filter === "All Project"
      ? projects
      : projects.filter((p) => p.category === filter);

  const categories = ["All Project", "iGaming", "Others"];

  return (
    <section className="bg-[#0B0F19] text-[#E5E7EB]">
      <div className="max-w-[960px] mx-auto px-6 md:px-8 py-24">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-[#9CA3AF] mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight max-w-[600px]">
            Technical SEO & Web Performance Projects
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-[#8B5CF6] text-white"
                  : "bg-[#111827] text-[#9CA3AF] border border-[#2A2F3A] hover:border-[#8B5CF6] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div className="bg-[#1F2937] border border-[#2A2F3A] rounded-xl p-6 hover:border-[#8B5CF6] transition duration-300">
              <PortfolioCard {...project} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-28">
          <div className="bg-[#111827] border border-[#2A2F3A] rounded-2xl p-10 text-center">
            <h3 className="text-xl font-medium mb-4">
              Let’s build scalable search growth.
            </h3>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg bg-[#8B5CF6] text-white text-sm font-medium hover:bg-[#7C3AED] transition"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
