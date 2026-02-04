
import React from 'react';
import { Send, FileText, Paperclip, Grid } from 'lucide-react';
import { motion } from 'framer-motion';

const HeavyLifting: React.FC = () => {
  return (
    <section className="py-24 bg-black rounded-[3rem] mx-4 sm:mx-8 lg:mx-12 overflow-hidden mb-20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-outlier-yellow/10 px-3 py-1 rounded-full mb-8 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-outlier-yellow"></div>
              <span className="text-[10px] text-white font-bold uppercase tracking-widest">Unlock the power of automated marketing</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Let automation handle the heavy lifting for you
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
              From targeting to optimization, our AI handles the repetitive stuff—so you can stay focused on strategy, creativity, and growth. No micromanaging required.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0_10px_30px_-10px_rgba(226,255,0,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-outlier-yellow text-black px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_30px_-10px_rgba(226,255,0,0.5)]"
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
            <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 lg:p-10 shadow-2xl">
              <div className="space-y-6">
                {/* Chat items */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-start cursor-default"
                >
                  <div className="bg-gray-800/40 text-gray-300 text-sm px-5 py-3 rounded-2xl max-w-[80%] border border-white/5 shadow-sm">
                    Hey there! Need answers or help with?
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: -5 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-end cursor-default"
                >
                  <div className="bg-outlier-yellow text-black text-sm px-5 py-3 rounded-2xl max-w-[80%] font-bold shadow-lg">
                    Create me a PDF file of the top 20 fashion brands by revenue that have raised capital in the last month
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  transition={{ delay: 0.7 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800/40 text-gray-300 text-sm px-5 py-3 rounded-2xl max-w-[80%] border border-white/5 shadow-sm">
                    No problem, here's the csv file of the 20 fashion brands that have raised capital
                    <motion.div 
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.6)" }}
                      className="mt-3 bg-black/40 border border-white/10 rounded-xl p-3 flex items-center justify-between cursor-pointer transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <FileText size={18} className="text-outlier-yellow" />
                        <span className="text-xs font-bold text-white">Latest_fashion_monitor_list_campaign.pdf</span>
                      </div>
                      <Send size={14} className="text-gray-500" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Input area */}
                <div className="mt-12 bg-black rounded-2xl p-5 border border-white/10 transition-colors hover:border-white/30">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-5 h-5 bg-outlier-yellow rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                    </div>
                    <span className="text-[10px] text-white font-bold uppercase tracking-wider">AI Assistant</span>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Ask me anything..." 
                      className="w-full bg-transparent border-none text-white text-sm focus:ring-0 placeholder-gray-600 mb-6"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <motion.button 
                          whileHover={{ color: "#fff", scale: 1.05 }}
                          className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest transition-colors"
                        >
                          <Paperclip size={14} /> Attachment
                        </motion.button>
                        <motion.button 
                          whileHover={{ color: "#fff", scale: 1.05 }}
                          className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest transition-colors"
                        >
                          <Grid size={14} /> Tools
                        </motion.button>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.2, backgroundColor: "#fff" }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-outlier-yellow rounded-full flex items-center justify-center transition-colors shadow-lg"
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
