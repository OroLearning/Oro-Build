
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    'Home', 'Academics', 'Admission', 'Research', 'Campus life'
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          
          {/* Left: Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6 w-1/3">
            {navLinks.slice(0, 3).map((link) => (
              <a key={link} href="#" className="text-gray-500 text-xs font-bold uppercase tracking-wider hover:text-black transition-colors">{link}</a>
            ))}
          </div>

          {/* Center: Branding (The Anchor) */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer absolute left-1/2 -translate-x-1/2"
          >
            <div className="w-8 h-8 bg-outlier-yellow rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(226,255,0,0.4)]">
              <span className="font-bold text-black text-xs">O+</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Outlier+</span>
          </motion.div>
          
          {/* Right: Actions */}
          <div className="flex items-center justify-end space-x-4 w-1/3 ml-auto">
            <div className="hidden sm:flex items-center space-x-4">
              <button className="text-xs font-bold uppercase tracking-wider hover:text-black transition-colors">Sign up</button>
              <button className="bg-black text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg">Try free</button>
            </div>
            <button 
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 text-center">
              {navLinks.map((link) => (
                <a key={link} href="#" className="block text-sm font-bold uppercase text-gray-600">{link}</a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <button className="w-full py-3 bg-gray-50 rounded-xl font-bold">Sign up</button>
                <button className="w-full py-3 bg-outlier-yellow rounded-xl font-bold">Try for free</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
