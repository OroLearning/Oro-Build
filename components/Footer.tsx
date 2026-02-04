
import React from 'react';
import { Send, Grid, Paperclip } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F8F8] pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 pb-20 border-b border-gray-200">
          {/* Brand and Integrations Info */}
          <div className="lg:col-span-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-8 cursor-pointer inline-flex"
            >
              <div className="w-8 h-8 bg-outlier-yellow rounded-full flex items-center justify-center shadow-sm">
                <span className="font-bold text-black text-xs">O+</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Outlier+</span>
            </motion.div>
            
            <h2 className="text-4xl font-bold tracking-tight mb-8 leading-tight max-w-md">
              Easy to integrate with the tools you are used for your business
            </h2>
            
            <p className="text-gray-500 mb-10 max-w-sm leading-relaxed">
              Join thousands of teams using AI to automate smarter, personalize faster, and grow effortlessly. Try it today—no credit card required.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#E2FF00", color: "#000" }}
              transition={{ 
                backgroundColor: { duration: 0 },
                color: { duration: 0 },
                scale: { type: "spring", stiffness: 400, damping: 25 }
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-full font-bold shadow-lg"
            >
              Get Started Free
            </motion.button>
          </div>

          {/* Newsletter and Mock UI */}
          <div className="lg:col-span-6">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-outlier-yellow"></div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Connect with us</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">Subscribe to our newsletter</h3>
              <p className="text-gray-500 text-sm mb-8">Stay informed and inspired! Subscribe to our newsletter for the latest updates, tips, and insights.</p>
              
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email address to subscribe..." 
                  className="w-full bg-white border border-gray-200 rounded-full px-8 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-outlier-yellow transition-all"
                />
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "#E2FF00", color: "#000" }}
                  transition={{ 
                    backgroundColor: { duration: 0 },
                    color: { duration: 0 },
                    scale: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-2 bottom-2 bg-black text-white px-6 rounded-full text-xs font-bold shadow-md"
                >
                  Subscribe now
                </motion.button>
              </div>
            </div>

            {/* Mock Floating Component for Visual Interest */}
            <motion.div 
              whileHover={{ y: -10, rotate: 1, scale: 0.95 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl opacity-80 translate-y-10 lg:translate-y-20 transform scale-90 transition-all cursor-default"
            >
               <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="font-bold text-sm">Analytics</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Auto analyze and write a report</p>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 rounded-md text-[10px] font-bold">
                  Weekly <span>▾</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                 <div className="w-5 h-5 bg-outlier-yellow rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider">AI Assistant</span>
                  <div className="ml-auto flex gap-2">
                    <div className="w-4 h-4 rounded bg-gray-200"></div>
                    <div className="w-4 h-4 rounded bg-gray-200"></div>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16">
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">Products</h4>
            <ul className="space-y-4">
              {['Features', 'How it works', 'Integrations', 'Pricing'].map(item => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 5, color: '#000' }}
                    className="text-sm font-medium text-gray-600 transition-all block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">Resources</h4>
            <ul className="space-y-4">
              {['Help Center', 'Blog', 'Case Studies', 'Webinars', 'API Documentation'].map(item => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 5, color: '#000' }}
                    className="text-sm font-medium text-gray-600 transition-all block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Partners', 'Press', 'Contact'].map(item => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 5, color: '#000' }}
                    className="text-sm font-medium text-gray-600 transition-all block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">Legal</h4>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Security', 'Data Compliance'].map(item => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 5, color: '#000' }}
                    className="text-sm font-medium text-gray-600 transition-all block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-gray-200">
          <div className="flex gap-8">
            <motion.a href="#" whileHover={{ color: '#000' }} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-colors">Privacy policy</motion.a>
            <motion.a href="#" whileHover={{ color: '#000' }} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-colors">Terms of use</motion.a>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">©2025 - Outlier+ all right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
