
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

interface HeroProps {
  onOpenMethodology: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenMethodology }) => {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full mb-6 border border-gray-200 shadow-sm"
            >
              <Zap size={14} className="text-soft-black" fill="#0F0F0F" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-soft-black">Zero tech knowledge required</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-soft-black"
            >
              Scale your business effortlessly with AI automation
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-sm sm:text-lg mb-8 leading-relaxed max-w-md mx-auto lg:mx-0 font-medium"
            >
              We teach you how to integrate powerful AI tools into your ecosystem with zero tech-speak. Immediate implementation for immediate growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-soft-black text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-zinc-800 transition-all text-sm sm:text-base"
              >
                Book a Strategy Call
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenMethodology}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold border-2 border-gray-200 bg-white text-soft-black hover:bg-gray-50 transition-all shadow-sm text-sm sm:text-base"
              >
                View Our Methodology
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - 3D Hover Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mt-12 lg:mt-0 perspective-1000 hidden sm:block"
          >
            <motion.div 
              whileHover={{ 
                rotateY: -5, 
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
              className="relative max-w-md mx-auto transform-gpu"
            >
              <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-2 border-gray-200 relative">
                <div className="flex items-start gap-4 mb-8 pr-12 sm:pr-20 text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-xl flex items-center justify-center border-2 border-gray-200 shrink-0">
                    <AreaChartIcon size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-soft-black leading-none mb-1">Growth Tracking</h3>
                    <p className="text-xs text-gray-400 font-medium">Real-world AI implementation results.</p>
                  </div>
                </div>

                <div className="h-48 sm:h-60 w-full mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#E2FF00" stopOpacity={0.6}/>
                          <stop offset="100%" stopColor="#E2FF00" stopOpacity={0.05}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="value" stroke="#0F0F0F" strokeWidth={4} fill="url(#colorValue)" />
                      <XAxis dataKey="name" hide /><YAxis hide /><Tooltip content={() => null} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex flex-row justify-between items-center gap-3 sm:gap-4 mt-2">
                  <div className="flex items-center gap-2 bg-gray-50 px-3 sm:px-4 py-2.5 rounded-full border-2 border-gray-200 shadow-sm shrink-0">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2.5 h-2.5 rounded-full bg-outlier-yellow shadow-[0_0_8px_rgba(226,255,0,1)]"
                    />
                    <span className="text-[10px] sm:text-xs font-black text-soft-black uppercase tracking-tight">Scaling Efficiency</span>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    className="bg-soft-black text-white px-5 sm:px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-lg shrink-0"
                  >
                    Higher Margins
                  </motion.button>
                </div>

                {/* Revenue Scale Box */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -top-10 -right-2 sm:-top-16 sm:-right-8 bg-soft-black text-white px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)] z-[50] border border-white/10 scale-[0.85] sm:scale-100 origin-top-right"
                >
                  <p className="text-[8px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">REVENUE SCALE</p>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <h4 className="text-lg sm:text-2xl font-black tracking-tight">+RM14,250</h4>
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="bg-outlier-yellow w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(226,255,0,0.5)] shrink-0"
                    >
                      <ArrowUpRight size={14} className="text-soft-black stroke-[3]" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
