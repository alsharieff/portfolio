import React from "react";
import {
  FaSearch,
  FaCode,
  FaTools,
  FaLink,
  FaPenNib,
  FaNetworkWired,
} from "react-icons/fa";

const services = [
  {
    title: "Keyword Research",
    desc: "Discover high-value keywords that attract targeted players and drive qualified traffic.",
    icon: FaSearch,
  },
  {
    title: "SEO Website Development",
    desc: "Build fast, scalable, search-optimized websites with strong UX.",
    icon: FaCode,
  },
  {
    title: "On-Page & Technical SEO",
    desc: "Improve speed, crawlability, and overall search visibility.",
    icon: FaTools,
  },
  {
    title: "Link Building",
    desc: "Strengthen website authority with high-quality backlinks.",
    icon: FaLink,
  },
  {
    title: "Content Creation",
    desc: "Create engaging content that attracts users and drives conversions.",
    icon: FaPenNib,
  },
  {
    title: "PBN Development",
    desc: "Build and manage private blog networks to support rankings.",
    icon: FaNetworkWired,
  },
];

function Scope() {
  return (
    <section className="bg-[#0B0F19] text-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-14 max-w-[620px]">
          <h2 className="text-3xl font-semibold mb-4">
            Scope of Online Casino SEO Services
          </h2>

          <p className="text-gray-400">
            Comprehensive SEO services tailored for the online casino industry
            to improve visibility, authority, and sustainable organic growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#121826] p-3 md:p-5 rounded-lg border border-[#1f2937]"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1f2937] mb-4">
                  <Icon className="text-blue-400 text-lg" />
                </div>

                <h3 className="text-sm md:text-base font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Scope;
