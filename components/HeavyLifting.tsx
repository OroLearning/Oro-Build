
import React from 'react';
import { Send, FileText, Paperclip, Grid } from 'lucide-react';
import { motion } from 'framer-motion';

const HeavyLifting: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-black rounded-[2rem] sm:rounded-[3rem] mx-4 sm:mx-8 lg:mx-12 overflow-hidden mb-20 shadow-2xl relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-outlier-yellow/10 px-3 py-1 rounded-full mb-8 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-outlier-yellow"></div>
              <span className="text-[9px] sm:text-[10px] text-white font-bold uppercase tracking-widest">Unlock the power of automated marketing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Let automation handle the heavy lifting for you
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
              From targeting to optimization, our AI handles the repetitive stuff—so you can stay focused on strategy, creativity, and growth. No micromanaging required.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0_10px_30px_-10px_rgba(226,255,0,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-outlier-yellow text-black px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_30px_-10px_rgba(226,255,0,0.5)]"
            >
              Start your free trial
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-[#111111] border border-white/10 rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-2xl">
              <div className="space-y-6">
                {/* Chat items */}
                <div className="flex justify-start">
                  <div className="bg-gray-800/40 text-gray-300 text-xs sm:text-sm px-4 py-3 rounded-2xl max-w-[90%] sm:max-w-[80%] border border-white/5">
                    Hey there! Need answers or help with?
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-outlier-yellow text-black text-xs sm:text-sm px-4 py-3 rounded-2xl max-w-[90%] sm:max-w-[80%] font-bold shadow-lg">
                    Create me a PDF file of the top 20 fashion brands by revenue that have raised capital in the last month
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-gray-800/40 text-gray-300 text-xs sm:text-sm px-4 py-3 rounded-2xl max-w-[90%] sm:max-w-[80%] border border-white/5">
                    No problem, here's the csv file of the 20 fashion brands
                    <div className="mt-3 bg-black/40 border border-white/10 rounded-xl p-3 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <FileText size={16} className="text-outlier-yellow shrink-0" />
                        <span className="text-[10px] font-bold text-white truncate">Latest_fashion_monitor_list.pdf</span>
                      </div>
                      <Send size={12} className="text-gray-500 shrink-0 ml-2" />
                    </div>
                  </div>
                </div>

                {/* Input area */}
                <div className="mt-8 sm:mt-12 bg-black rounded-2xl p-4 sm:p-5 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-outlier-yellow rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black"></div>
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-white font-bold uppercase tracking-wider">AI Assistant</span>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Ask me anything..." 
                      className="w-full bg-transparent border-none text-white text-xs sm:text-sm focus:ring-0 placeholder-gray-600 mb-6"
                    />
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar">
                        <button className="flex items-center gap-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap"><Paperclip size={12} /> Attachment</button>
                        <button className="flex items-center gap-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap"><Grid size={12} /> Tools</button>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
                        className="w-8 h-8 bg-outlier-yellow rounded-full shrink-0 flex items-center justify-center shadow-lg"
                      >
                        <Send size={14} className="text-black" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeavyLifting;
