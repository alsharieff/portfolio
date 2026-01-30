import ProjectCard from "./ProjectCard";
import tti from "./assets/tti-desktop.jpg";
import mortgage from "./assets/mortgage-desktop.png";
import dental from "./assets/dental-desktop.png";
import portfolio from "./assets/portfolio.png";

function Portfolio() {
  const projects = [
    {
      image: tti,
      title: "Talk Time India – News & Updates",
      description:
        "Talk Time India – Your go-to blog for the latest news and updates from across India.",
      link: "https://talktimeindia.com/",
    },
    {
      image: portfolio,
      title: "My First One Page Portfolio",
      description:
        "This was my first personal one page portfolio, featuring my completed projects.",
      link: "https://alsharieff.github.io/portfolio/",
    },
    {
      image: mortgage,
      title: "SmartMortgage – Easy Home Loans",
      description:
        "SmartMortgage helps users compare and apply for mortgages quickly and easily.",
      link: "#",
      ongoing: true,
    },
    {
      image: dental,
      title: "Ohio Family Dentist – Caring for Your Smile",
      description:
        "Providing quality dental care for the whole family with a gentle, personalized approach.",
      link: "https://ohiofamilydentist.forgetechdigital.com/",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[960px]">
        <div className="flex items-center gap-2 mb-4 px-4">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Featured Projects
          </h3>

          {/* Mobile-only scroll indicator */}
          <span className="flex items-center animate-scrollArrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar px-4 pb-4">
          {projects.map((project, index) => (
            <ProjectCard key={`h-${index}`} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
