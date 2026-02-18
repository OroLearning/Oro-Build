
import React from 'react';
import { Send, FileText, Paperclip, Grid } from 'lucide-react';
import { motion } from 'framer-motion';

const HeavyLifting: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 lg:py-24 bg-soft-black rounded-[2rem] sm:rounded-[3rem] mx-4 sm:mx-8 lg:mx-12 overflow-hidden mb-20 shadow-2xl relative border border-white/10">
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
              <span className="text-[9px] sm:text-[10px] text-white font-bold uppercase tracking-widest">Freedom Through Automation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Replace manual work with automated precision
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
              We teach you how to turn complex repetitive tasks into simple automated streams. No coding, no hiring, no micromanaging. Just scalable results.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(226,255,0,0.3)" }}
              className="w-full sm:w-auto bg-outlier-yellow text-soft-black px-8 py-4 rounded-full font-bold shadow-lg"
            >
              Start Free Scale Assessment
            </motion.button>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#111111] border border-white/10 rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-2xl text-left">
              <div className="space-y-6">
                <motion.div variants={item} className="flex justify-start">
                  <div className="bg-gray-800/40 text-gray-300 text-xs sm:text-sm px-4 py-3 rounded-2xl max-w-[90%] border border-white/5">
                    Welcome! Ready to scale your operations?
                  </div>
                </motion.div>
                
                <motion.div variants={item} className="flex justify-end">
                  <div className="bg-outlier-yellow text-soft-black text-xs sm:text-sm px-4 py-3 rounded-2xl max-w-[90%] font-bold shadow-lg">
                    I need a weekly automation to track competitors and update my sales team instantly.
                  </div>
                </motion.div>
                
                <motion.div variants={item} className="flex justify-start">
                  <div className="bg-gray-800/40 text-gray-300 text-xs sm:text-sm px-4 py-3 rounded-2xl max-w-[90%] border border-white/5">
                    Blueprint active. Competitor monitor integrated.
                    <div className="mt-3 bg-soft-black/40 border border-white/10 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText size={16} className="text-outlier-yellow" />
                        <span className="text-[10px] font-bold text-white">Scale_Automation_Protocol.pdf</span>
                      </div>
                      <Send size={12} className="text-gray-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={item} className="mt-8 bg-soft-black rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-4 h-4 bg-outlier-yellow rounded-full flex items-center justify-center"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-soft-black"></div>
                    </motion.div>
                    <span className="text-[9px] sm:text-[10px] text-white font-bold uppercase tracking-wider">AI Scale Mentor</span>
                  </div>
                  <div className="relative">
                    <input type="text" placeholder="Tell me your biggest bottleneck..." className="w-full bg-transparent border-none text-white text-xs focus:ring-0 placeholder-gray-600 mb-6" />
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4"><button className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Blueprint</button></div>
                      <motion.button whileHover={{ scale: 1.2 }} className="w-8 h-8 bg-outlier-yellow rounded-full flex items-center justify-center"><Send size={14} className="text-soft-black" /></motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeavyLifting;
