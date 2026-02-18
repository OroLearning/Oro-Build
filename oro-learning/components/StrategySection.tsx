
import React from 'react';
import { motion } from 'framer-motion';

const StrategySection: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-8 lg:px-12">
      <div className="bg-soft-black rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl relative border border-white/10 hardware-accelerated py-16 lg:py-24">
        <div className="absolute top-0 right-0 w-full max-w-[800px] h-[500px] bg-outlier-yellow/5 blur-[120px] rounded-full pointer-events-none hardware-accelerated" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-10 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-outlier-yellow shadow-[0_0_8px_#E2FF00]"></div>
              <span className="text-[10px] text-white font-black uppercase tracking-[0.25em]">Master the AI Revolution</span>
            </div>
            
            {/* Headline - Forced to single line and size reduced as requested */}
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white mb-12 tracking-tight max-w-none mx-auto leading-tight text-center uppercase whitespace-normal lg:whitespace-nowrap">
              Stop Guessing , Start Scaling
            </h2>
            
            {/* CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 15px 40px -5px rgba(226,255,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-outlier-yellow text-soft-black px-14 py-5 rounded-full font-black transition-all shadow-[0_10px_30px_-5px_rgba(226,255,0,0.3)] uppercase text-xs tracking-[0.15em]"
            >
              Start Your Transformation Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
