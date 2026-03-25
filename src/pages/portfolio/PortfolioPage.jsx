import React from "react";
import PortfolioCard from "./PortfolioCard";
import desktopodd from "../../assets/portfolio/desktop-the-sports-odds.webp";
import mobileodd from "../../assets/portfolio/mobile-the-sports-odds.webp";
import desktoptalktimeindia from "../../assets/portfolio/desktop-talktimeindia.webp";
import mobiletalktimeindia from "../../assets/portfolio/mobile-talktimeindia.webp";
import desktopportfolio from "../../assets/portfolio/desktop-portfolio.webp";
import mobileportfolio from "../../assets/portfolio/mobile-portfolio.webp";
import desktopdentist from "../../assets/portfolio/desktop-dentist.webp";
import mobiledentist from "../../assets/portfolio/mobile-dentist.webp";
import desktopjackpotreview from "../../assets/portfolio/desktop-jackpotreview.webp";
import mobilejackpotreview from "../../assets/portfolio/mobile-jackpotreview.webp";
import desktopcasinoreview from "../../assets/portfolio/desktop-casinoreview.webp";
import mobilecasinoreview from "../../assets/portfolio/mobile-casinoreview.webp";

const projects = [
  {
    title: "The Sports Odds News Blog",
    description:
      "Stay updated with the latest sports odds, betting insights, and news. Expert analysis for smarter sports betting decisions.",
    desktopImage: desktopodd, // swapped to correct
    mobileImage: mobileodd,
    tech: ["Wordpress", "html", "css", "javascript"],
    url: "https://thesportsodds.online/",
  },
  {
    title: "Talk Time India News Blogs",
    description:
      "Stay updated with Talk Time India for news, tech reviews, lottery results, and cricket scores. Explore astrology, business, and games sections daily.",
    desktopImage: desktoptalktimeindia, // swapped to correct
    mobileImage: mobiletalktimeindia,
    tech: ["Wordpress", "html", "css", "javascript"],
    url: "https://talktimeindia.com/",
  },
  {
    title: "My Personal Portfolio Onepage",
    description:
      "Showcase of my work, skills, and projects in a single-page personal portfolio. Clean design, responsive layout, and professional presentation.",
    desktopImage: desktopportfolio, // swapped to correct
    mobileImage: mobileportfolio,
    tech: ["html", "css", "javascript", "Bootstrap", "Github"],
    url: "https://alsharieff.github.io/portfolio-static/",
  },
  {
    title: "Dentist in Pickerington, OH | Ohio Family Dentistry",
    description:
      "Ohio Family Dentistry is a skilled Dentist in Pickerington, OH. Accepting new appointments. Call today or request an appointment on our website.",
    desktopImage: desktopdentist, // swapped to correct
    mobileImage: mobiledentist,
    tech: ["html", "css", "javascript", "Bootstrap"],
    url: "https://ohiofamilydentist.forgetechdigital.com/",
  },
  {
    title: "Igaming review casino site",
    description:
      "Trusted casino ratings, bonus breakdowns, and expert tips. Find safe platforms, top offers, and daily updates to play smarter in 2025.",
    desktopImage: desktopjackpotreview, // swapped to correct
    mobileImage: mobilejackpotreview,
    tech: ["html", "css", "javascript", "Bootstrap"],
    url: "https://jackpotreviews.online/",
  },
  {
    title: "Igaming sportsbook review casino site",
    description:
      "Trusted casino ratings, bonus breakdowns, and expert tips. Find safe platforms, top offers, and daily updates to play smarter in 2025.",
    desktopImage: desktopcasinoreview, // swapped to correct
    mobileImage: mobilecasinoreview,
    tech: ["html", "css", "javascript", "Bootstrap"],
    url: "https://casinoprophet.online/public/",
  },
];

function PortfolioPage() {
  return (
    <section className="bg-[#0B0F19] text-white py-20">
      <div className="mx-auto max-w-[960px] px-6">
        <div className="">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Portfolio
          </p>
          <h1 className="text-3xl font-semibold mt-3">
            Web Development Portfolio
          </h1>
        </div>

        {/* Grid: 1 column default, 2 columns from md upwards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;
