// AboutPage.jsx
import React from "react";
import About from "../../assets/about.png";
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
    <section className="min-h-screen flex items-center bg-[#0B0F19] px-6 py-16 font-sans text-[#E5E7EB]">
      <div className="mx-auto max-w-[960px] w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - Intro Text */}
        <div className="space-y-6 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h1>

          {/* Intro Paragraph */}
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-[#1A73E8]">
              Al-Sharieff K. Kallun
            </span>
            , a Technical SEO specialist with 2+ years of experience optimizing
            website architecture, improving crawl efficiency, and implementing
            data-driven search strategies. Skilled in site audits, Core Web
            Vitals optimization, structured data implementation, and AI-assisted
            workflows, with hands-on experience using Screaming Frog, Google
            Search Console, and Ahrefs to deliver measurable organic growth and
            scalable digital performance.
          </p>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mt-4">
            I thrive in fast-paced environments and am a quick learner, able to
            adapt easily to different aspects of a role, even the most
            challenging tasks. I enjoy exploring new tools and technologies,
            continuously expanding my skill set, and finding efficient solutions
            that drive results.
          </p>

          {/* Skills Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#1A73E8] mb-4">
              Skills
            </h2>

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
                  <div className="text-[#1A73E8]">{skill.icon}</div>
                  <span className="text-white text-sm mt-2">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Full Width Technical SEO Illustration */}
        <div className="flex justify-center md:justify-end w-full relative">
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden relative">
            <img
              src={About}
              alt="Technical SEO concept illustration"
              className="w-full h-full object-contain md:object-cover"
            />

            {/* Optional overlay for subtle effect only on desktop */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#0B0F19]/30 to-transparent rounded-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
