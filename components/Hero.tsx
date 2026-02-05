
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowUpRight, Zap, AreaChart as AreaChartIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
  { name: '10/22', value: 3500 },
  { name: '10/23', value: 2800 },
  { name: '10/24', value: 4500 },
  { name: '10/25', value: 4200 },
  { name: '10/26', value: 6500 },
  { name: '10/27', value: 5800 },
  { name: '10/28', value: 8000 },
];

const Hero: React.FC = () => {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-[#F8F8F8] overflow-visible relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-visible">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center overflow-visible">
          
          {/* Left Content */}
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 bg-outlier-yellow/20 px-3 py-1.5 rounded-full mb-6 border border-outlier-yellow/30">
              <Zap size={14} className="text-black" fill="#000" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Uniform marketing automation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-black">
              Effortless automation for growing businesses
            </h1>
            <p className="text-gray-500 text-base sm:text-lg mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              Our intelligent tools help you work faster, target better, and convert more—consistently across all your devices.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-bold shadow-xl">Start trial</button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full font-bold border border-gray-200 bg-white">How it works</button>
            </div>
          </div>

          {/* Right Content - The Perfection Card */}
          <div className="relative overflow-visible mt-12 lg:mt-0">
            <div className="relative max-w-md mx-auto overflow-visible">
              <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-50 relative overflow-visible">
                
                {/* Fixed Header with Safety Padding */}
                <div className="flex items-start gap-4 mb-8 pr-20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 shrink-0">
                    <AreaChartIcon size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-black leading-none mb-1">Performance reports</h3>
                    <p className="text-xs text-gray-400 font-medium">Measure results with ease.</p>
                  </div>
                </div>

                {/* Graph */}
                <div className="h-48 sm:h-60 w-full mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#E2FF00" stopOpacity={0.6}/>
                          <stop offset="100%" stopColor="#E2FF00" stopOpacity={0.05}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="value" stroke="#000" strokeWidth={4} fill="url(#colorValue)" />
                      <XAxis dataKey="name" hide /><YAxis hide /><Tooltip content={() => null} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Footer UI */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 w-full sm:w-auto justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-outlier-yellow shadow-[0_0_8px_rgba(226,255,0,1)]"></div>
                    <span className="text-xs font-bold text-black">Revenue growth</span>
                  </div>
                  <div className="text-center sm:text-right w-full sm:w-auto">
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-2">12.6% GROWTH THIS WEEK</p>
                    <button className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg">View details</button>
                  </div>
                </div>

                {/* THE UNIFORM REVENUE BUBBLE */}
                <div className="absolute -top-12 -right-4 sm:-top-16 sm:-right-8 bg-black text-white px-4 py-3 sm:px-6 sm:py-4 sm:pr-10 rounded-2xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)] z-[50] border border-white/10 scale-90 sm:scale-100 transition-all">
                  <p className="text-[8px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">REVENUE</p>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <h4 className="text-lg sm:text-2xl font-black tracking-tight">+12,892K</h4>
                    <div className="bg-outlier-yellow w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(226,255,0,0.5)] shrink-0">
                      <ArrowUpRight size={14} className="text-black stroke-[3]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
