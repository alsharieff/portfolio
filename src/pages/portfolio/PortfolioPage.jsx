import React from "react";
import desktopshoesshop from "../../assets/portfolio/desktop-shoes-shop.webp";
import mobileshoesshop from "../../assets/portfolio/mobile-shoes-shop.webp";
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
    title: "Online Shoes shop and blogs (progress)",
    desktopImage: desktopshoesshop, // swapped to correct
    mobileImage: mobileshoesshop,
    tech: ["Wordpress", "php", "html", "css", "javascript"],
    url: "https://drive.google.com/file/d/1z7cqsxJMmSdhZVjutX4HRS7R21DlfJ0A/view?usp=drive_link",
  },
  {
    title: "The Sports Odds News Blog",
    desktopImage: desktopodd, // swapped to correct
    mobileImage: mobileodd,
    tech: ["Wordpress", "html", "css", "javascript"],
    url: "https://thesportsodds.online/",
  },
  {
    title: "Talk Time India News Blogs",
    desktopImage: desktoptalktimeindia, // swapped to correct
    mobileImage: mobiletalktimeindia,
    tech: ["Wordpress", "html", "css", "javascript"],
    url: "https://talktimeindia.com/",
  },
  {
    title: "My Personal Portfolio Onepage",
    desktopImage: desktopportfolio, // swapped to correct
    mobileImage: mobileportfolio,
    tech: ["html", "css", "javascript", "Bootstrap", "Github"],
    url: "https://alsharieff.github.io/portfolio-static/",
  },
  {
    title: "Dentist in Pickerington, OH | Ohio Family Dentistry",
    desktopImage: desktopdentist, // swapped to correct
    mobileImage: mobiledentist,
    tech: ["html", "css", "javascript", "Bootstrap"],
    url: "https://ohiofamilydentist.forgetechdigital.com/",
  },
  {
    title: "Igaming review casino site",
    desktopImage: desktopjackpotreview, // swapped to correct
    mobileImage: mobilejackpotreview,
    tech: ["html", "css", "javascript", "Bootstrap"],
    url: "https://jackpotreviews.online/",
  },
  {
    title: "Igaming sportsbook review casino site",
    desktopImage: desktopcasinoreview, // swapped to correct
    mobileImage: mobilecasinoreview,
    tech: ["html", "css", "javascript", "Bootstrap"],
    url: "https://casinoprophet.online/public/",
  },
];

function PortfolioPage() {
  return (
    <section className="bg-[#0B0F19] text-white py-8 sm:py-12 md:py-17 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-2 md:px-4">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Portfolio
          </p>
          <h1 className="text-lg md:text-4xl font-extrabold uppercase tracking-wide text-white my-3">
            Web Development
          </h1>
        </div>

        {/* Grid: 1 column default, 2 columns from md upwards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12">
          {projects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;
