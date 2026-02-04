
import React from 'react';
import { Target, MessageSquare, Layers, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const StrategySection: React.FC = () => {
  const cards = [
    {
      icon: <Database className="text-black transition-colors duration-200 group-hover:text-black" size={24} />,
      title: "Gain deeper customer insights",
      desc: "Understand customer behavior and preferences through data and feedback."
    },
    {
      icon: <Target className="text-black transition-colors duration-200 group-hover:text-black" size={24} />,
      title: "Deliver personalized experiences",
      desc: "Use segmentation to deliver relevant, targeted messaging at scale."
    },
    {
      icon: <Layers className="text-black transition-colors duration-200 group-hover:text-black" size={24} />,
      title: "Stay consistent across channels",
      desc: "Align your brand voice and messaging across all touchpoints."
    },
    {
      icon: <MessageSquare className="text-black transition-colors duration-200 group-hover:text-black" size={24} />,
      title: "Turn feedback into strategy",
      desc: "Use real-time input to refine campaigns and improve results."
    }
  ];

  return (
    <section className="py-24 bg-black rounded-[4rem] mx-4 sm:mx-8 lg:mx-12 overflow-hidden mb-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] relative border border-white/10 hardware-accelerated">
      {/* Background glow - optimized for performance */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-outlier-yellow/5 blur-[120px] rounded-full pointer-events-none hardware-accelerated" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hardware-accelerated"
        >
          <div className="inline-flex items-center gap-2 bg-outlier-yellow/10 px-4 py-2 rounded-full mb-8 border border-white/10 shadow-[0_4px_20px_rgba(226,255,0,0.1)]">
            <div className="w-4 h-4 rounded-full bg-outlier-yellow flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
            <span className="text-[11px] text-white font-bold uppercase tracking-widest">Build Insights Connections</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight max-w-3xl mx-auto leading-tight text-glow">
            Build a customer centric by marketing strategy
          </h2>
          
          <p className="text-gray-400 text-xl mb-14 max-w-2xl mx-auto leading-relaxed">
            Craft personalized journeys that resonate, convert, and build long-term loyalty—powered by data-driven insights.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px -10px rgba(226,255,0,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-outlier-yellow text-black px-10 py-4.5 rounded-full font-bold transition-all mb-24 shadow-[0_15px_30px_-5px_rgba(226,255,0,0.4)]"
          >
            Let's see how it works
          </motion.button>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -15,
                backgroundColor: "#E2FF00",
                boxShadow: "0px 30px 60px -15px rgba(226,255,0,0.3)"
              }}
              // Specific transitions for hover to ensure they are instantaneous
              transition={{ 
                // Entrance animation
                default: { duration: 0.5, delay: idx * 0.05, ease: "easeOut" },
                // Hover overrides for speed
                backgroundColor: { duration: 0.15, ease: "linear" },
                y: { type: "spring", stiffness: 400, damping: 25 },
                boxShadow: { duration: 0.2 }
              }}
              // Updated: Changed from zinc-900 to zinc-800 for better contrast, plus a subtle glow border
              className="bg-[#1E1E1E] border border-white/10 p-10 rounded-[3rem] group cursor-pointer hardware-accelerated relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
            >
              <div 
                className="w-14 h-14 bg-outlier-yellow rounded-2xl flex items-center justify-center mb-10 group-hover:bg-white transition-colors duration-150 shadow-[0_10px_20px_rgba(226,255,0,0.2)]"
              >
                {card.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-4 tracking-tight group-hover:text-black transition-colors duration-150">{card.title}</h3>
              <p className="text-gray-400 text-base group-hover:text-black/70 leading-relaxed transition-colors duration-150">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 text-gray-600 text-[11px] font-bold tracking-[0.2em] uppercase"
        >
          Understand your customers' behavior in real time and respond with content every step of the way.
        </motion.p>
      </div>
    </section>
  );
};

export default StrategySection;
