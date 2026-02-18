
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent pt-12 pb-16 transition-all duration-300 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto relative">
        {/* Permanent, thicker border container */}
        <div className="border-[3px] border-gray-200 rounded-[3rem] lg:rounded-[4rem] py-16 lg:py-24 px-6 transition-all duration-500 bg-white/30 backdrop-blur-sm shadow-sm">
          <div className="flex flex-col items-center text-center">
            
            {/* Brand Logo & Name */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-outlier-yellow rounded-full flex items-center justify-center shadow-sm">
                <span className="font-black text-soft-black text-[11px]">O+</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-soft-black uppercase tracking-wider">ORO+</span>
            </div>

            {/* Headline - Single line */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12 text-soft-black whitespace-normal lg:whitespace-nowrap leading-tight text-center max-w-none">
              The future of your business is automated.
            </h2>

            {/* Newsletter Input - Responsive Fix */}
            <div className="w-full max-w-lg relative">
              <div className="relative flex items-center bg-white border-2 border-gray-200 rounded-full p-1.5 sm:p-2 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] focus-within:border-gray-400 transition-all">
                <input 
                  type="email" 
                  placeholder="Your email address..." 
                  className="flex-1 min-w-0 bg-transparent px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none text-soft-black placeholder-gray-400 font-bold"
                />
                <button className="bg-soft-black text-white px-4 sm:px-10 py-2.5 sm:py-3.5 rounded-full text-[9px] sm:text-[11px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-95 whitespace-nowrap shrink-0">
                  Get Scale Tips
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Footer Links */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t-2 border-gray-200/50">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">©2025 - ORO+ Scale Mentorship</p>
          <div className="flex gap-10">
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 hover:text-soft-black transition-colors">Scaling Results</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 hover:text-soft-black transition-colors">Mentorship Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
