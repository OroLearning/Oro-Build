
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navLinks = [
    'Home', 'Academics', 'Admission', 'Research', 'Campus life', 'Jobs & career', 'About us'
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-outlier-yellow rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(226,255,0,0.4)]">
              <span className="font-bold text-black text-xs">O+</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Outlier+</span>
          </motion.div>
          
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.a 
                key={link} 
                href="#" 
                whileHover={{ y: -2, color: '#000' }}
                className="text-gray-500 text-sm font-medium transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-outlier-yellow transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-semibold hover:text-gray-900 px-3 py-1"
            >
              Sign up
            </motion.button>
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#E2FF00",
                color: "#000000",
                boxShadow: "0 10px 25px -5px rgba(226, 255, 0, 0.4)" 
              }}
              transition={{ 
                backgroundColor: { duration: 0 },
                color: { duration: 0 },
                scale: { type: "spring", stiffness: 400, damping: 25 }
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)]"
            >
              Try for free
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
