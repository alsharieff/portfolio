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
    <section className="mx-auto max-w-[960px] px-6 py-12 font-sans">
      {/* Header Area */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-sm font-bold tracking-widest uppercase mb-6">
          Work
        </h2>

        {/* Filter Buttons */}
        <div className="flex gap-3 overflow-x-auto pb-4 w-full justify-center no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 md:px-6 py-2 rounded-full border text-sm font-medium transition-all whitespace-nowrap ${
                filter === cat
                  ? "bg-slate-500 text-white border-slate-500 shadow-md"
                  : "bg-white text-gray-500 border-gray-300 hover:border-gray-500"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <PortfolioCard
            key={project.id}
            title={project.title}
            tags={project.tags}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-20 pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm font-bold text-white text-center md:text-left">
          LIKE WHAT YOU SEE? LET'S WORK TOGETHER.
        </p>
        <button className="px-8 py-3 bg-slate-500 text-white rounded-full font-bold text-sm hover:bg-slate-600 transition-all shadow-lg">
          CONTACT ME
        </button>
      </div>
    </section>
  );
}
