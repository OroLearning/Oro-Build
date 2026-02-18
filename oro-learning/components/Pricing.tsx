
import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1); // Default to middle card

  const plans = [
    {
      name: "AI Kickstart",
      price: "1495",
      popular: false,
      features: [
        "Core AI Literacy",
        "Advanced Prompt Engineering",
        "Creative Image Generation",
        "Workflow Drafting Basics",
        "Basic Model Overview",
        "Shared Growth Engineer",
        "Limited Customer support"
      ]
    },
    {
      name: "Business Scale",
      price: "3995",
      popular: true,
      features: [
        "Everything in Ai Kickstart",
        "Custom Web Deployment",
        "Claude Code Integration",
        "GitHub Hosting Setup",
        "Live App Launch",
        "Shared Growth Engineer",
        "Limited Customer support"
      ]
    },
    {
      name: "Market Dominance",
      price: "Custom",
      popular: false,
      features: [
        "Full Workflow Automation",
        "Custom System Integration",
        "Zero-Effort Implementation",
        "Hosting Maintenance",
        "Priority Executive Support",
        "Dedicated Growth Engineer",
        "24/7 Customer support"
      ]
    }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full mb-6 border border-gray-200 shadow-sm">
            <Zap size={14} className="text-soft-black" fill="currentColor" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-soft-black">Scaling Tiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-8 text-soft-black leading-tight">
            Choose your growth speed
          </h2>
        </motion.div>

        {/* Pricing Cards Container */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch relative p-2 sm:p-4 perspective-1000"
          onMouseLeave={() => setHoveredIndex(1)}
        >
          {plans.map((plan, i) => {
            const isHovered = hoveredIndex === i;
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative cursor-pointer h-full"
                onMouseEnter={() => setHoveredIndex(i)}
              >
                {/* The Sliding Selection Border - Enabled for all breakpoints */}
                <AnimatePresence initial={false}>
                  {isHovered && (
                    <motion.div
                      layoutId="pricing-selection-border"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                        mass: 0.8
                      }}
                      className="absolute -inset-1.5 sm:-inset-2 z-20 border-[3px] border-black rounded-[2.8rem] pointer-events-none shadow-xl"
                    />
                  )}
                </AnimatePresence>

                {/* Main Card */}
                <motion.div 
                  whileHover={{ 
                    rotateY: i === 0 ? 2 : i === 2 ? -2 : 0, 
                    y: -10,
                  }}
                  className={`relative z-10 h-full rounded-[2.5rem] flex flex-col p-6 sm:p-8 lg:p-10 transition-all duration-500 border-2 transform-gpu ${
                    plan.popular 
                      ? 'bg-[#E2FF00] border-[#E2FF00] shadow-lg' 
                      : 'bg-white border-gray-100 shadow-sm'
                  }`}
                >
                  {/* Header: Icon & Badge - Robust layout for narrow containers */}
                  <div className="flex flex-wrap items-center justify-between mb-8 gap-3">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border-2 shrink-0 ${plan.popular ? 'bg-white border-transparent' : 'bg-white border-gray-100'}`}
                    >
                      <Zap size={20} className="text-soft-black" />
                    </motion.div>
                    
                    {plan.popular && (
                      <div className="flex">
                        <span className="bg-black text-white text-[7px] sm:text-[8px] font-black uppercase px-3 sm:px-4 py-1.5 rounded-full tracking-widest whitespace-nowrap">
                          Most Recommended
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Pricing Info */}
                  <div className="text-left mb-8 sm:mb-10">
                    <h3 className="text-xs sm:text-sm font-black text-soft-black mb-3 uppercase tracking-[0.15em] opacity-80">{plan.name}</h3>
                    <div className="flex flex-wrap items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-black tracking-tighter leading-none">
                        {plan.price !== 'Custom' && 'RM'}{plan.price}
                      </span>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="flex-1 space-y-3.5 sm:space-y-4 mb-10 sm:mb-12 text-left">
                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-5 sm:mb-6">What you get</p>
                    {plan.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-2.5 sm:gap-3"
                      >
                        <div className={`mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-black' : 'bg-[#E2FF00]'}`}>
                          <Check size={10} className={plan.popular ? 'text-white' : 'text-soft-black'} strokeWidth={4} />
                        </div>
                        <span className="text-[11px] sm:text-[13px] font-bold text-soft-black/90 leading-snug">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black text-white py-4 sm:py-5 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest transition-all shadow-lg hover:bg-zinc-800"
                  >
                    Join the Program
                  </motion.button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
