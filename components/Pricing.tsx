
import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');
  const [hoveredIndex, setHoveredIndex] = useState<number>(1); // Default to the middle "popular" one

  const plans = [
    {
      name: "Outlier standard",
      annualPrice: "39",
      monthlyPrice: "59",
      features: [
        "Essential automation tools",
        "Email campaigns + push",
        "Pre-built templates & flows",
        "Basic insights dashboard",
        "Up to 2,000 subscribers",
        "Community support",
        "Landing page builder"
      ]
    },
    {
      name: "Outlier premium",
      annualPrice: "99",
      monthlyPrice: "139",
      popular: true,
      features: [
        "Up to 5 users",
        "Social media marketing",
        "Advanced analytics & reporting",
        "Enhanced automation tools",
        "A/B testing for campaigns",
        "Email & chat support",
        "Landing page builder"
      ]
    },
    {
      name: "Outlier enterprise",
      annualPrice: "199",
      monthlyPrice: "249",
      features: [
        "All premium plan features",
        "Custom analytics & reporting",
        "Personalized onboarding",
        "Dedicated account manager",
        "24/7 premium support",
        "Unlimited subscribers",
        "SLA guarantees"
      ]
    }
  ];

  // Cast the custom cubic-bezier array as any to avoid Framer Motion transition type errors
  const priceAnimation = {
    initial: { opacity: 0, y: 10, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -10, filter: 'blur(4px)' },
    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] as any }
  };

  return (
    <section className="py-20 bg-[#F8F8F8] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-outlier-yellow/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-outlier-yellow/20 px-4 py-1.5 rounded-full mb-6 border border-outlier-yellow/30 shadow-sm"
          >
            <Zap size={14} className="text-black" fill="#000" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Pricing Plans</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-tight text-black">
            Choose the plan that's right for your growth
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold transition-colors duration-300 ${billingCycle === 'monthly' ? 'text-black' : 'text-gray-400'}`}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annually' : 'monthly')}
              className="w-12 h-6 bg-black rounded-full relative p-1 transition-colors hover:bg-gray-800 shadow-xl"
            >
              <motion.div 
                animate={{ x: billingCycle === 'annually' ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-4 h-4 bg-outlier-yellow rounded-full shadow-[0_2px_5px_rgba(226,255,0,0.5)]"
              />
            </button>
            <span className={`text-sm font-bold transition-colors duration-300 ${billingCycle === 'annually' ? 'text-black' : 'text-gray-400'}`}>Annually</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => {
            const currentPrice = billingCycle === 'annually' ? plan.annualPrice : plan.monthlyPrice;
            const priceSuffix = billingCycle === 'annually' ? '/annually' : '/per month';
            
            return (
              <motion.div 
                key={i} 
                onMouseEnter={() => setHoveredIndex(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-[2.5rem] transition-all duration-500 flex flex-col ${
                  plan.popular ? 'bg-outlier-yellow' : 'bg-white'
                } ${
                  hoveredIndex === i ? 'shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] -translate-y-2' : 'shadow-[0_15px_40px_rgba(0,0,0,0.03)]'
                }`}
              >
                {/* Moving selection border indicator */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div 
                      layoutId="activeBorder"
                      className="absolute inset-0 border-[2px] border-black rounded-[2.5rem] z-20 pointer-events-none"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </AnimatePresence>

                <div className="p-8 pb-10 flex flex-col relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <motion.div 
                      whileHover={{ rotate: 15 }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${plan.popular ? 'bg-white' : 'bg-gray-50 border border-gray-100 shadow-inner'}`}
                    >
                      <Zap size={24} className="text-black" fill={plan.popular ? "#000" : "none"} />
                    </motion.div>
                    {plan.popular && (
                      <motion.span 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="bg-black text-white text-[9px] font-bold uppercase px-3 py-1.5 rounded-full shadow-lg"
                      >
                        Most popular
                      </motion.span>
                    )}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 ${plan.popular ? 'text-black' : 'text-gray-900'}`}>{plan.name}</h3>
                  
                  <div className="flex items-baseline gap-1 mb-8 overflow-hidden h-[60px]">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={currentPrice}
                        className="flex items-baseline gap-1"
                        {...priceAnimation}
                      >
                        <span className={`text-5xl font-black ${plan.popular ? 'text-black' : 'text-gray-900'}`}>
                          RM{currentPrice}
                        </span>
                        <span className={`text-xs font-bold ${plan.popular ? 'text-black/60' : 'text-gray-400'}`}>
                          {priceSuffix}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  <div className="space-y-3 mb-12">
                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${plan.popular ? 'text-black/50' : 'text-gray-400'}`}>Core Features</p>
                    {plan.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-start gap-3"
                      >
                        <div className={`mt-0.5 p-0.5 rounded-full ${plan.popular ? 'bg-black' : 'bg-outlier-yellow shadow-sm'}`}>
                          <Check size={12} className={plan.popular ? 'text-white' : 'text-black'} strokeWidth={3} />
                        </div>
                        <span className={`text-[13px] font-bold leading-tight ${plan.popular ? 'text-black/80' : 'text-gray-800'}`}>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button 
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: plan.popular ? "#000000" : "#E2FF00", 
                      color: plan.popular ? "#ffffff" : "#000000",
                      boxShadow: plan.popular ? "0 25px 50px rgba(0, 0, 0, 0.4)" : "0 25px 50px rgba(226, 255, 0, 0.4)" 
                    }}
                    transition={{ 
                      backgroundColor: { duration: 0 },
                      color: { duration: 0 },
                      scale: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-5 rounded-full font-black text-sm uppercase tracking-wider bg-black text-white`}
                  >
                    Start your free trial
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
