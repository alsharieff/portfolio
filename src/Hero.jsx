import React from "react";
import picture from "./assets/profile.png";
import RoleBlink from "./parts/RoleAnimation.jsx";

// Reminder for deployment to push main
// 1. git add .
// 2. git commit -m "Add new component"
// 3. git push origin main
// to from main to gh-pages
// 4. npm run build
// 5. npm run deploy

function Hero() {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4 md:max-w-[960px] flex flex-row items-center">
        {/* Left: Profile Image */}
        <div className="w-1/3 md:w-1/2 flex justify-center md:justify-start">
          <img
            src={picture}
            alt="Alsharieff Kallun"
            className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="w-2/3 md:w-1/2 text-left pl-4 md:pl-8">
          <h1 className="text-2xl md:text-5xl font-bold text-white">
            Alsharieff Kallun
          </h1>
          <h2 className="text-lg md:text-2xl text-[#36d1a7] font-semibold mb-2">
            <RoleBlink />
          </h2>
          <p className="text-white text-sm md:text-lg mb-4 md:mb-8 leading-relaxed">
            Passionate web developer dedicated to creating user-friendly
            websites!
          </p>

          {/* Buttons */}
          <div className="flex md:flex-row gap-4">
            <a
              href="#portfolio"
              className="bg-[#36d1a7] text-white px-2 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-[#36d1a9] transition duration-300 text-center"
            >
              Portfolio
            </a>
            <a
              href="https://drive.google.com/file/d/1PIT4Nb97Jlna3cy5KPBC4mU7ayw7-ug2/view"
              className="bg-white text-black text-[10px] md:text-base px-1 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition duration-300 text-center flex items-center justify-center"
              target="_blank"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
