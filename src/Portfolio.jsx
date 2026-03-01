import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import tti from "./assets/tti-desktop.jpg";
import mortgage from "./assets/mortgage-desktop.png";
import dental from "./assets/dental-desktop.png";
import portfolio from "./assets/portfolio.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Portfolio() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const { clientWidth } = scrollRef.current;
    const scrollAmount = direction === "left" ? -clientWidth : clientWidth;

    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

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
    <section className="py-16 bg-[#0B0F19] text-[#E5E7EB]">
      <div className="mx-auto max-w-[960px] relative">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6 px-4">
          <h3 className="text-xl md:text-2xl font-bold">Featured Projects</h3>

          {/* Mobile-only scroll indicator */}
          <span className="flex md:hidden items-center animate-scrollArrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-[#8B5CF6]"
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

        {/* Prev Button */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-[50%] -translate-y-1/2 z-10 bg-[#1A1D23] border border-[#8B5CF6]/50 text-[#8B5CF6] rounded-full p-2 shadow-md"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-4 pb-4 scroll-smooth"
        >
          {projects.map((project, index) => (
            <ProjectCard key={`h-${index}`} {...project} />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-[50%] -translate-y-1/2 z-10 bg-[#1A1D23] border border-[#8B5CF6]/50 text-[#8B5CF6] rounded-full p-2 shadow-md"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
