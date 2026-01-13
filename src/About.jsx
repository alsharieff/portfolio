import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

function About() {
  return (
    <>
      {/* <style
        dangerouslySetInnerHTML={{
          __html: `
        .skills-scroll::-webkit-scrollbar {
          display: none;
        }
        .skills-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      /> */}
      <section id="about" className="bg-[#232426]">
        <div className="container mx-auto px-4 md:max-w-[960px]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About
          </h2>
          <div className="max-w-[960px] mx-auto">
            <p className="text-white text-sm md:text-xl leading-relaxed mb-3">
              BSIT graduate (2025) with 2 years of experience in SEO and web
              development and 4 years in property sales. Skilled in responsive
              web design, SEO strategy, and client-focused solutions, delivering
              projects that drive measurable results.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
            <div className="flex space-x-2 overflow-x-auto skills-scroll">
              <div className="flex flex-col items-start min-w-[80px]">
                <FaHtml5 size={24} />
                <span className="text-white text-sm mt-2">HTML</span>
              </div>
              <div className="flex flex-col items-start min-w-[80px]">
                <FaCss3Alt size={24} />
                <span className="text-white text-sm mt-2">CSS</span>
              </div>
              <div className="flex flex-col items-start min-w-[80px]">
                <FaJs size={24} />
                <span className="text-white text-sm mt-2">JavaScript</span>
              </div>
              <div className="flex flex-col items-start min-w-[80px]">
                <SiTailwindcss size={24} />
                <span className="text-white text-sm mt-2">Tailwind</span>
              </div>
              <div className="flex flex-col items-start min-w-[80px]">
                <FaBootstrap size={24} />
                <span className="text-white text-sm mt-2">Bootstrap</span>
              </div>
              <div className="flex flex-col items-start min-w-[80px]">
                <FaReact size={24} />
                <span className="text-white text-sm mt-2">React</span>
              </div>
              <div className="flex flex-col items-start min-w-[80px]">
                <FaWordpress size={24} />
                <span className="text-white text-sm mt-2">WordPress</span>
              </div>
              <div className="flex flex-col items-start min-w-[80px]">
                <FaGitSquare size={24} />
                <span className="text-white text-sm mt-2">GIT</span>
              </div>
              <div className="flex flex-col items-start min-w-[80px]">
                <VscVscode size={24} />
                <span className="text-white text-sm mt-2">VsCode</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
