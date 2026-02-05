
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F8F8] pt-16 lg:pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center pb-16 border-b border-gray-200">
          
          {/* Centered Brand */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-outlier-yellow rounded-full flex items-center justify-center shadow-sm">
              <span className="font-bold text-black text-xs">O+</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Outlier+</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6 max-w-2xl text-black">
            Uniformly powerful, effortlessly integrated.
          </h2>
          
          <p className="text-gray-500 mb-10 max-w-sm leading-relaxed text-sm">
            Join thousands of teams who trust Outlier+ for consistent growth across every platform.
          </p>
          
          <div className="w-full max-w-md relative mb-12">
            <input 
              type="email" 
              placeholder="Your email address..." 
              className="w-full bg-white border border-gray-200 rounded-full px-8 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-outlier-yellow shadow-sm"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-black text-white px-6 rounded-full text-xs font-bold">Subscribe</button>
          </div>
        </div>

        {/* Links Grid - Centered items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-center">
          {['Products', 'Resources', 'Company', 'Legal'].map((title) => (
            <div key={title}>
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">{title}</h4>
              <ul className="space-y-3">
                {[1,2,3].map(i => (
                  <li key={i}><a href="#" className="text-xs font-bold text-gray-600 hover:text-black transition-colors uppercase">Link {i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-gray-100">
          <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">©2025 - Outlier+ all rights reserved</p>
          <div className="flex gap-6">
            <a href="#" className="text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">Privacy</a>
            <a href="#" className="text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
