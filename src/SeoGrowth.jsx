// SeoGrowthEngine.jsx
import React from "react";

const SeoGrowth = () => {
  return (
    <section className="relative bg-[#0B0F19] py-24 overflow-hidden">
      {/* Violet Glow Background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[600px] bg-[#8B5CF6]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative mx-auto md:max-w-[960px] px-4 text-center">
        {/* Badge */}
        <span className="inline-block text-[#8B5CF6] text-sm font-semibold uppercase tracking-widest">
          Full-Spectrum SEO Strategy
        </span>

        {/* Headline */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
          Built for Rankings. Designed for
          <span className="text-[#8B5CF6]"> Sustainable Growth</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A complete SEO ecosystem combining on-page precision, off-page
          authority building, and deep technical optimization — engineered to
          scale organic visibility and drive measurable results.
        </p>

        {/* 3 Pillars */}
        <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
          {/* On-Page */}
          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-xl font-semibold text-white">
              On-Page Optimization
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Strategic keyword mapping, semantic content structure, internal
              linking systems, and conversion-focused UX improvements aligned
              with search intent.
            </p>
          </div>

          {/* Off-Page */}
          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-xl font-semibold text-white">
              Off-Page Authority
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              High-quality link acquisition, digital PR integration, brand
              signal strengthening, and competitive gap analysis to increase
              domain trust and authority.
            </p>
          </div>

          {/* Technical */}
          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-xl font-semibold text-white">
              Technical SEO Infrastructure
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Crawl budget optimization, structured data implementation, Core
              Web Vitals enhancement, and scalable architecture built for
              long-term organic expansion.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button className="bg-[#8B5CF6] hover:bg-violet-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Dominate Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeoGrowth;
