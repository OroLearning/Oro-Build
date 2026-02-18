
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          
          {/* Minimal Branding Only */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-8 h-8 bg-outlier-yellow rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(226,255,0,0.3)]">
              <span className="font-black text-soft-black text-[10px]">O+</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-soft-black uppercase tracking-wider">ORO+</span>
          </motion.div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
