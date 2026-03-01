import { useRef } from "react";
import CertificateCard from "./CertificateCard";
import href from "./assets/certificate/href.jpg";
import zuitt from "./assets/certificate/zuitt.png";
import devnet from "./assets/certificate/devnet-associate.png";
import enterprise from "./assets/certificate/cisco-enterprise.png";
import switching from "./assets/certificate/cisco-switching.png";
import ccnav7 from "./assets/certificate/cisco-ccnav7.png";

function Certificate() {
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

  const certificates = [
    {
      image: href,
      title: "Ahrefs SEO Certification",
      description: "Issued: 2025",
      link: "https://ahrefs.com/academy/certificate/37ff30dc5c304bf6a6675b4316a3b785",
    },
    {
      image: zuitt,
      title: "Zuitt Bootcamp Certification",
      description: "Issued: 2022",
      link: "https://alsharieff.github.io/portfolio/assets/zuitt-bootcamp.pdf",
    },
    {
      image: devnet,
      title: "Cisco DevNet Associate",
      description: "Issued: 2023",
      link: "https://alsharieff.github.io/portfolio/assets/cisco-devnet-associate.pdf",
    },
    {
      image: enterprise,
      title: "Cisco Enterprise Networking, Security, and Automation",
      description: "Issued: 2023",
      link: "https://alsharieff.github.io/portfolio/assets/cisco-enterprise-networking-security-and-automation.pdf",
    },
    {
      image: switching,
      title: "Cisco Switching, Routing, and Wireless Essentials",
      description: "Issued: 2023",
      link: "https://alsharieff.github.io/portfolio/assets/cisco-switching-routing-and-wireless-essentials.pdf",
    },
    {
      image: ccnav7,
      title: "Cisco Introduction to Networks",
      description: "Issued: 2023",
      link: "https://alsharieff.github.io/portfolio/assets/cisco-introduction-to-networks.pdf",
    },
  ];

  return (
    <section className="py-16 bg-[#0B0F19] text-[#E5E7EB]">
      <div className="mx-auto max-w-[960px] relative">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6 px-4">
          <h2 className="text-xl md:text-2xl font-bold">Certificates</h2>

          {/* Mobile scroll indicator */}
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

        <p className="text-sm text-[#E5E7EB] mb-4 px-4">
          Recent certifications and achievements
        </p>

        {/* Prev Button */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-[50%] -translate-y-1/2 z-10 bg-[#1A1D23] border border-[#8B5CF6]/50 text-[#8B5CF6] rounded-full p-2 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-4 pb-4 scroll-smooth"
        >
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              image={certificate.image}
              title={certificate.title}
              description={certificate.description}
              link={certificate.link}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-[50%] -translate-y-1/2 z-10 bg-[#1A1D23] border border-[#8B5CF6]/50 text-[#8B5CF6] rounded-full p-2 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
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
        </button>
      </div>
    </section>
  );
}

export default Certificate;
