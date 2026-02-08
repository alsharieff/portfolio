// AboutPage.jsx
import React from "react";
import About from "../../assets/about.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaWordpress,
  FaGitSquare,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center mx-auto max-w-[960px] px-6 py-12 font-sans bg-[#0d0d0f]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - Intro Text */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-white">About Me</h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            I’m <span className="font-semibold">Al-Sharieff K. Kallun</span>, a
            BSIT graduate (2025) with 2 years of experience in SEO and web
            development, 4 years in property sales, and expertise in AI-assisted
            web solutions. I specialize in responsive web design, SEO strategy,
            and client-focused solutions, delivering projects efficiently with
            AI tools to drive measurable results.
          </p>

          {/* Skills Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#36d1a7] mb-4">
              Skills
            </h2>

            {/* Flex wrap with responsive alignment */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {[
                { icon: <FaHtml5 size={28} />, label: "HTML" },
                { icon: <FaCss3Alt size={28} />, label: "CSS" },
                { icon: <FaJs size={28} />, label: "JavaScript" },
                { icon: <SiTailwindcss size={28} />, label: "Tailwind" },
                { icon: <FaBootstrap size={28} />, label: "Bootstrap" },
                { icon: <FaReact size={28} />, label: "React" },
                { icon: <FaWordpress size={28} />, label: "WordPress" },
                { icon: <FaGitSquare size={28} />, label: "GIT" },
              ].map((skill) => (
                <div
                  key={skill.label}
                  className="flex flex-col items-center min-w-[80px] text-center"
                >
                  <div className="text-[#36d1a7]">{skill.icon}</div>
                  <span className="text-white text-sm mt-2">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border border-[#36d1a7]/30">
            <img
              src={About}
              alt="Al-Sharieff K. Kallun"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
