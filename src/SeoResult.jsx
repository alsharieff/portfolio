import React from "react";
import { TrendingUp, Link2, BarChart3, Trophy } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Traffic data
const trafficData = [
  { month: "Jan", traffic: 1200 },
  { month: "Feb", traffic: 1800 },
  { month: "Mar", traffic: 2600 },
  { month: "Apr", traffic: 4100 },
  { month: "May", traffic: 6200 },
  { month: "Jun", traffic: 9400 },
];

const SeoResult = () => {
  return (
    <section className="bg-[#0B0F19] text-[#E5E7EB] py-16">
      <div className="mx-auto md:max-w-[960px] px-6">
        {/* Header */}
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Last SEO Results
          </p>
          {/* <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-[600px]">
            Most recent SEO performance including traffic growth, backlinks, and keyword rankings
          </h2> */}
        </div>

        {/* TRAFFIC DASHBOARD (no image) */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-8 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-[#1A73E8]" size={20} />
            <h3 className="font-semibold text-lg">Organic Traffic Growth</h3>
          </div>
          <p className="text-2xl font-semibold mb-2">1,200 → 9,400</p>
          <p className="text-sm text-gray-400 mb-6">Monthly Organic Visitors</p>
          <div className="h-[260px]">
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
        <div className="grid md:grid-cols-3 gap-8">
          {/* Backlinks */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 hover:border-[#1A73E8] transition flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Link2 className="text-[#1A73E8]" size={20} />
              <h3 className="font-semibold text-lg">Backlinks Built</h3>
            </div>
            <p className="text-2xl font-semibold mb-2">180</p>
            <p className="text-sm text-gray-400 mb-4">High Authority Links</p>
            <img
              src="https://dummyimage.com/400x200/fff/000"
              alt="Backlinks Screenshot"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-400">
                <span>DA 70+</span>
                <span>35</span>
              </div>
              <div className="h-2 bg-[#1f2937] rounded-full">
                <div className="h-2 w-2/3 bg-[#1A73E8] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Domain Authority */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 hover:border-[#1A73E8] transition flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="text-[#1A73E8]" size={20} />
              <h3 className="font-semibold text-lg">Domain Authority</h3>
            </div>
            <p className="text-2xl font-semibold mb-2">12 → 42</p>
            <p className="text-sm text-gray-400 mb-4">Authority Growth</p>
            <img
              src="https://dummyimage.com/400x200/fff/000"
              alt="Domain Authority Screenshot"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <div className="h-3 bg-[#1f2937] rounded-full">
              <div className="h-3 w-[70%] bg-[#1A73E8] rounded-full"></div>
            </div>
          </div>

          {/* Keyword Rankings */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 hover:border-[#1A73E8] transition flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-[#1A73E8]" size={20} />
              <h3 className="font-semibold text-lg">Top Ranking Keywords</h3>
            </div>
            <p className="text-2xl font-semibold mb-4">7 Keywords in Top 3</p>
            <img
              src="https://dummyimage.com/400x200/fff/000"
              alt="Keyword Rankings Screenshot"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex justify-between">
                <span>emergency dentist london</span>
                <span className="text-green-400">#3</span>
              </li>
              <li className="flex justify-between">
                <span>emergency dentist central london</span>
                <span className="text-green-400">#6</span>
              </li>
              <li className="flex justify-between">
                <span>24 hour dentist london</span>
                <span className="text-green-400">#2</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoResult;
