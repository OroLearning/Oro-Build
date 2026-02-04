
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowUpRight, Zap, AreaChart as AreaChartIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
  { name: '10/22', value: 3500 },
  { name: '10/23', value: 2800 },
  { name: '10/24', value: 4500 },
  { name: '10/25', value: 4200 },
  { name: '10/26', value: 6500 },
  { name: '10/27', value: 5800 },
  { name: '10/28', value: 8000 },
];

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  } as const;

  return (
    <section className="pt-32 pb-20 bg-[#F8F8F8] overflow-visible relative">
      {/* Decorative gradient background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-outlier-yellow/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-outlier-yellow/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-visible">
        <div className="grid lg:grid-cols-2 gap-16 items-center overflow-visible">
          {/* Left Content */}
          <motion.div 
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-outlier-yellow/20 px-3 py-1.5 rounded-full mb-6 border border-outlier-yellow/30 shadow-[0_2px_10px_rgba(226,255,0,0.15)]">
              <Zap size={14} className="text-black" fill="#000" />
              <span className="text-xs font-bold uppercase tracking-wider">Smarter marketing starts here</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight drop-shadow-sm">
              Effortlessly marketing automation for growing businesses
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-500 text-lg mb-10 leading-relaxed max-w-md">
              From predictive analytics to automated content creation, our intelligent tools help you work faster, target better, and convert more—without the guesswork.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#E2FF00", color: "#000", boxShadow: "0 20px 40px -10px rgba(226,255,0,0.3)" }}
                transition={{ 
                  backgroundColor: { duration: 0 },
                  color: { duration: 0 },
                  scale: { type: "spring", stiffness: 400, damping: 25 }
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 group shadow-[0_15px_30px_-5px_rgba(0,0,0,0.2)]"
              >
                Start your free trial
                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#fff", borderColor: "#000", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-bold border border-gray-200 bg-white shadow-sm"
              >
                see how it works
              </motion.button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Used by this awesome company:</p>
              <div className="flex flex-wrap items-center gap-8">
                {['Mailchimp', 'GUMROAD', 'Linear', 'Framer', 'Shopify', 'HubSpot'].map((brand) => (
                   <motion.span 
                    key={brand}
                    whileHover={{ scale: 1.1, opacity: 1, filter: 'grayscale(0%)' }}
                    className="font-bold text-xl grayscale opacity-50 cursor-default transition-all hover:text-black"
                   >
                     {brand}
                   </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visualization Card */}
          <motion.div 
            className="relative overflow-visible"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {/* The Outer Wrapper handles the shadow and spacing for the floating popup */}
            <div className="relative group overflow-visible">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-[3rem] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.18),0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/40 transition-all duration-500 overflow-visible relative"
              >
                {/* Header of the card */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 shadow-inner">
                    <AreaChartIcon size={22} className="text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black leading-none mb-1">Performance reports</h3>
                    <p className="text-sm text-gray-400 font-medium">Measure results with easy weekly summaries.</p>
                  </div>
                </div>

                {/* The Graph Area */}
                <div className="h-64 w-full mb-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#E2FF00" stopOpacity={0.6}/>
                          <stop offset="100%" stopColor="#E2FF00" stopOpacity={0.05}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#000" 
                        strokeWidth={4} 
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                        isAnimationActive={true}
                        animationDuration={2000}
                      />
                      <XAxis dataKey="name" hide />
                      <YAxis hide />
                      <Tooltip content={() => null} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Footer labels and button */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-outlier-yellow shadow-[0_0_8px_rgba(226,255,0,1)]"></div>
                    <span className="text-sm font-bold text-black">Revenue growth</span>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">YOUR REVENUE GREW 12.6% THIS WEEK</p>
                    <motion.button 
                      whileHover={{ scale: 1.05, backgroundColor: "#E2FF00", color: "#000" }}
                      transition={{ 
                        backgroundColor: { duration: 0 },
                        color: { duration: 0 },
                        scale: { type: "spring", stiffness: 400, damping: 25 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-black text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-[0_8px_20px_-5px_rgba(0,0,0,0.3)]"
                    >
                      View details
                    </motion.button>
                  </div>
                </div>

                {/* Floating Revenue Popup - CRITICAL: z-50 and absolute positioning relative to parent with overflow-visible */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ 
                    delay: 1.2, 
                    duration: 0.6,
                    type: "spring", stiffness: 300, damping: 15
                  }}
                  className="absolute -top-10 -right-10 bg-black text-white p-7 pr-10 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7)] cursor-pointer z-[100] border border-white/20"
                >
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-2">REVENUE</p>
                  <div className="flex items-center gap-3">
                    <h4 className="text-3xl font-bold tracking-tight text-white">+12,892K</h4>
                    <div className="bg-outlier-yellow w-9 h-9 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(226,255,0,0.6)]">
                      <ArrowUpRight size={20} className="text-black stroke-[3]" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Extra outer shadow glow */}
              <div className="absolute -inset-4 bg-outlier-yellow/5 blur-[80px] -z-10 rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
