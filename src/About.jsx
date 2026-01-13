import React from "react";

function About() {
  return (
    <section id="about" className="py-16 bg-[#232426]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-white text-md md:text-xl leading-relaxed mb-3">
            I began my career as a web developer in January 2024, focusing on
            building responsive and user-friendly websites. Over time, I've
            gained practical experience across key areas — from creating dynamic
            web applications to managing WordPress sites and customizing themes.
          </p>
          <p className="text-white text-md md:text-xl leading-relaxed">
            On the development side, I build responsive, fast-loading websites
            using HTML, CSS, JavaScript, and libraries like Bootstrap and
            Tailwind CSS. Whether it's coding from scratch or customizing
            WordPress, I create interfaces that are mobile-first, accessible,
            and conversion-driven.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
