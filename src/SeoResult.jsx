import React from "react";
import Indexed from "./assets/indexed.jpg";
import DA from "./assets/DAPA.jpg";
import Metrix from "./assets/performance.jpg";
import Rank from "./assets/rank.jpg";
import { TrendingUp, Link2, BarChart3, Trophy } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Traffic data (1 year - realistic steady growth)
const trafficData = [
  { month: "Jan", traffic: 800 },
  { month: "Feb", traffic: 850 },
  { month: "Mar", traffic: 920 },
  { month: "Apr", traffic: 980 },
  { month: "May", traffic: 1050 },
  { month: "Jun", traffic: 1120 },
  { month: "Jul", traffic: 1200 },
  { month: "Aug", traffic: 1280 },
  { month: "Sep", traffic: 1350 },
  { month: "Oct", traffic: 1420 },
  { month: "Nov", traffic: 1500 },
  { month: "Dec", traffic: 1600 },
];

const SeoResult = () => {
  return (
    <section className="bg-[#0B0F19] text-[#E5E7EB] py-16">
      <div className="mx-auto md:max-w-[1200px] px-2 md:px-4">
        {/* Header */}
        <div className="mb-4">
          <p className="text-lg md:text-3xl font-extrabold uppercase tracking-wide text-white text-center">
            Team SEO Results
          </p>
          {/* <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-[600px]">
            Most recent SEO performance including traffic growth, backlinks, and keyword rankings
          </h2> */}
        </div>

        {/* TRAFFIC DASHBOARD (no image) */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-1 md:p-8 mb-4 md:mb-10">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-[#1A73E8]" size={20} />
            <h3 className="font-semibold text-lg">Organic Traffic Growth</h3>
          </div>
          <p className="text-xl font-semibold mb-2">800 → 1,600</p>
          <p className="text-sm text-gray-400 mb-6">Monthly Organic Visitors</p>
          <div className="h-[200px] md:h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trafficData}>
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="traffic"
                  stroke="#1A73E8"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* METRICS GRID WITH TEMPORARY IMAGES */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Content indexed */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-2 md:p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="text-[#1A73E8]" size={20} />
              <h3 className="font-semibold text-lg">Content Indexed</h3>
            </div>
            <p className="text-xl font-semibold mb-2">68 → 77</p>
            <p className="text-sm text-gray-400 mb-4">
              Jul 20, 2025 - Nov 5, 2025
            </p>
            <img
              src={Indexed}
              alt="Backlinks Screenshot"
              className="w-full h-50 object-cover rounded-lg mb-4"
            />
            <div className="space-y-2"></div>
          </div>

          {/* Domain Authority */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-2 md:p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Link2 className="text-[#1A73E8]" size={20} />
              <h3 className="font-semibold text-lg">Domain Authority</h3>
            </div>
            <p className="text-xl font-semibold mb-2">DA25 → PA35</p>
            <p className="text-sm text-gray-400 mb-4">Authority Growth</p>
            <img
              src={DA}
              alt="Domain Authority Screenshot"
              className="w-full h-50 object-cover rounded-lg mb-4"
            />
          </div>

          {/* Keyword Rankings */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-2 md:p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-[#1A73E8]" size={20} />
              <h3 className="font-semibold text-lg">Top Ranking Keywords</h3>
            </div>
            <p className="text-xl font-semibold mb-4">Brand Keywords</p>
            <img
              src={Rank}
              alt="Keyword Rankings Screenshot"
              className="w-full h-50 object-cover rounded-lg mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoResult;
