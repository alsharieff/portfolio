// AboutPage.jsx
import React from "react";
import About from "../../assets/about.png";
import About1 from "../../assets/about1.jpg";
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
  const skills = [
    { icon: <FaHtml5 />, label: "HTML", color: "hover:text-orange-500" },
    { icon: <FaCss3Alt />, label: "CSS", color: "hover:text-blue-500" },
    { icon: <FaJs />, label: "JavaScript", color: "hover:text-yellow-400" },
    {
      icon: <SiTailwindcss />,
      label: "Tailwind",
      color: "hover:text-cyan-400",
    },
    {
      icon: <FaBootstrap />,
      label: "Bootstrap",
      color: "hover:text-purple-500",
    },
    { icon: <FaReact />, label: "React", color: "hover:text-cyan-500" },
    { icon: <FaWordpress />, label: "WordPress", color: "hover:text-blue-600" },
    { icon: <FaGitSquare />, label: "Git", color: "hover:text-red-500" },
  ];

  return (
    <section className="min-h-screen flex items-center bg-[#0B0F19] px-6 py-20 font-sans text-gray-200 selection:bg-indigo-500/30">
      <div className="mx-auto max-w-[1200px] w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE - Content */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="space-y-4">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ray-800 border border-indigo-500/20 text-indigo-400 text-xs font-medium tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2"></span>
              </span>
              good team work
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              About Me.
            </h1>

            <div className="space-y-4 text-gray-400 text-lg leading-relaxed max-w-xl">
              <p>
                I’m{" "}
                <span className="text-white font-medium italic">
                  Al-Sharieff K. Kallun
                </span>
                , a Technical SEO specialist dedicated to bridging the gap
                between clean code and search visibility. With 2+ years of
                experience, I transform website architecture into organic growth
                engines.
              </p>
              <p>
                From <span className="text-indigo-300">Core Web Vitals</span> to
                <span className="text-indigo-300"> AI-assisted workflows</span>,
                I thrive on solving technical puzzles that lead to measurable,
                scalable performance.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              Tech Stack & Tools
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-4 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className={`group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1`}
                >
                  <div
                    className={`text-2xl text-gray-400 transition-colors duration-300 ${skill.color}`}
                  >
                    {skill.icon}
                  </div>
                  <span className="hidden sm:block lg:block text-xs font-semibold text-gray-300">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Visual */}
        <div className="order-1 lg:order-2 relative group">
          {/* Decorative Background Elements */}
          <div className="absolute rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-[2rem] border border-white/10 bg-gray-900/50 backdrop-blur-sm overflow-hidden shadow-2xl">
            {/* Abstract Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]"></div>

            <img
              src={About1}
              alt="Al-Sharieff"
              className="relative w-full h-full object-contain p-8"
            />
          </div>

          {/* Floating Performance Tag */}
          <div className="absolute -bottom-6 -left-6 bg-gray-900 border border-white/10 p-4 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-500">
                  SEO Score
                </p>
                <p className="text-lg font-black text-white leading-none">
                  99/100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add this to your Global CSS or Tailwind config for the subtle bounce
// @keyframes bounce-slow {
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-10px); }
// }
// .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
