import ProjectCard from "./ProjectCard";

function Portfolio() {
  const projects = [
    {
      image: "https://via.placeholder.com/300x200",
      title: "SEO Portfolio Website",
      description:
        "Responsive SEO-focused portfolio built with React and Tailwind.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Property Listing Platform",
      description:
        "Modern property platform designed for conversions and usability.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Business Landing Page",
      description: "High-performance landing page optimized for speed and SEO.",
      link: "#",
    },
  ];

  return (
    <section className="py-8">
      <div className="mx-auto max-w-[960px]">
        <h2 className="text-2xl sm:text-xl font-bold mb-4 px-4">
          Featured Projects
        </h2>

        <div
          className="
            flex gap-3
            overflow-x-auto
            no-scrollbar
            px-4 pb-4
            md:grid md:grid-cols-3
            md:gap-6
            md:overflow-visible
          "
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
