import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbChartInfographic } from "react-icons/tb";
import { FaAt } from "react-icons/fa";
import chatgpt from "./assets/icon/chatgpt.png";

function About() {
  return (
    <>
      <style
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
      />
      <section id="about" className="bg-[#0B0F19] text-[#E5E7EB] py-16">
        <div className="mx-auto px-4 md:max-w-[960px] flex flex-col gap-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>

          {/* Description */}
          <p className="text-[#9CA3AF] font-medium text-sm md:text-lg leading-relaxed mb-6">
            Technical SEO specialist with 2+ years of experience optimizing
            website architecture, improving crawl efficiency, and implementing
            data-driven search strategies. Skilled in site audits, Core Web
            Vitals optimization, structured data implementation, and AI-assisted
            workflows, with hands-on experience using Screaming Frog, Google
            Search Console, and Ahrefs to deliver measurable organic growth and
            scalable digital performance.
          </p>

          {/* Skills Scrolling */}
          <div className="overflow-hidden relative">
            <div className="flex gap-8 animate-scrollSkills whitespace-nowrap">
              {[
                { icon: <FaHtml5 size={24} />, label: "HTML" },
                { icon: <FaCss3Alt size={24} />, label: "CSS" },
                { icon: <FaJs size={24} />, label: "JavaScript" },
                { icon: <SiTailwindcss size={24} />, label: "Tailwind" },
                { icon: <FaBootstrap size={24} />, label: "Bootstrap" },
                { icon: <FaWordpress size={24} />, label: "WordPress" },
                { icon: <FaGitSquare size={24} />, label: "GIT" },
                { icon: <FaGithub size={24} />, label: "GitHub" },
                { icon: <TbChartInfographic size={24} />, label: "GSC" },
                { icon: <FaAt size={24} />, label: "Ahrefs" },
                {
                  icon: <img src={chatgpt} alt="ChatGPT" className="w-6 h-6" />,
                  label: "ChatGPT",
                },
              ].map((skill) => (
                <div
                  key={skill.label}
                  className="flex flex-col items-center min-w-[100px] text-center"
                >
                  <div className="text-[#8B5CF6]">{skill.icon}</div>
                  <span className="text-[#E5E7EB] text-sm mt-2">
                    {skill.label}
                  </span>
                </div>
              ))}
              {/* Repeat for seamless scroll */}
              {[
                { icon: <FaHtml5 size={24} />, label: "HTML" },
                { icon: <FaCss3Alt size={24} />, label: "CSS" },
                { icon: <FaJs size={24} />, label: "JavaScript" },
                { icon: <SiTailwindcss size={24} />, label: "Tailwind" },
                { icon: <FaBootstrap size={24} />, label: "Bootstrap" },
                { icon: <FaWordpress size={24} />, label: "WordPress" },
                { icon: <FaGitSquare size={24} />, label: "GIT" },
                { icon: <FaGithub size={24} />, label: "GitHub" },
                { icon: <TbChartInfographic size={24} />, label: "GSC" },
                { icon: <FaAt size={24} />, label: "Ahrefs" },
                {
                  icon: <img src={chatgpt} alt="ChatGPT" className="w-6 h-6" />,
                  label: "ChatGPT",
                },
              ].map((skill, idx) => (
                <div
                  key={`repeat-${idx}`}
                  className="flex flex-col items-center min-w-[100px] text-center"
                >
                  <div className="text-[#8B5CF6]">{skill.icon}</div>
                  <span className="text-[#E5E7EB] text-sm mt-2">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
