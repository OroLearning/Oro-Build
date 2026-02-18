
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { Zap, Globe, Send, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const chartData = [
  { day: 'Sun', value: 40 }, { day: 'Mon', value: 30 }, { day: 'Tue', value: 35 },
  { day: 'Wed', value: 65 }, { day: 'Thu', value: 85, active: true },
  { day: 'Fri', value: 50 }, { day: 'Sat', value: 45 },
];

const segmentData = [
  { name: 'Automated', value: 400, fill: '#E2FF00' },
  { name: 'In-Training', value: 300, fill: '#0F0F0F' },
  { name: 'Manual', value: 200, fill: '#E5E7EB' },
];

interface FeaturesGridProps {
  onOpenMethodology: () => void;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ onOpenMethodology }) => {
  return (
    <section className="py-16 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 lg:mb-16 lg:pl-12 text-center lg:text-left"
        >
          <div className="max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full mb-6 border border-gray-200 shadow-sm">
              <Zap size={14} className="text-soft-black" fill="#0F0F0F" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-soft-black">Uncomplicate your workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight text-soft-black">
              Master the tools of modern growth
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="lg:col-span-7 bg-white rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-10 shadow-sm border-2 border-gray-200 flex flex-col h-full"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-10 gap-6">
              <div className="max-w-xs text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-soft-black">Strategic Analytics Mastery</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-6 leading-relaxed">
                  Learn how to read AI-driven insights without being a data scientist. Make high-leverage decisions with confidence.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  onClick={onOpenMethodology}
                  className="bg-soft-black text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-zinc-800 transition-colors"
                >
                  See Methodology
                </motion.button>
              </div>
              <motion.div 
                whileHover={{ rotate: 2 }}
                className="bg-white border-2 border-gray-200 rounded-3xl p-5 w-full sm:w-48 shadow-sm"
              >
                <p className="text-[10px] font-black uppercase text-gray-400 mb-3 tracking-widest">Automation Reach</p>
                <div className="h-24 w-full mb-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart><Pie data={segmentData} innerRadius={25} outerRadius={40} paddingAngle={5} dataKey="value" /></PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between items-center text-[9px] font-bold">
                  <div className="flex items-center gap-1 text-soft-black"><div className="w-1.5 h-1.5 bg-outlier-yellow rounded-full"></div> 82% Efficiency</div>
                  <ArrowRight size={10} className="text-gray-400" />
                </div>
              </motion.div>
            </div>
            {/* Chart Container */}
            <div className="mt-auto bg-gray-50/50 rounded-2xl p-6 sm:p-8 border-2 border-gray-200 flex flex-col min-h-[300px] sm:min-h-[400px]">
                <h4 className="font-bold text-sm text-left text-soft-black mb-6">Implementation Tracking</h4>
                <div className="flex-1 w-full mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                      <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.active ? '#E2FF00' : '#E5E7EB'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex items-center gap-3 pt-6 border-t-2 border-gray-200/60">
                  <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="bg-outlier-yellow/20 p-1 rounded-full">
                    <Check size={14} className="text-soft-black" />
                  </motion.div>
                  <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium text-left">
                    Our clients typically see a <span className="text-soft-black font-bold">40% reduction</span> in operational tasks within the first 30 days.
                  </p>
                </div>
            </div>
          </motion.div>

          {/* Feature 2: Plug-and-Play Ecosystem */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="lg:col-span-5 bg-white rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-10 shadow-sm border-2 border-gray-200 flex flex-col h-full items-center"
          >
              <div className="w-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-left text-soft-black">Plug-and-Play Ecosystem</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-10 leading-relaxed text-left">
                  We don't just teach you; we give you the exact templates and workflows that you can integrate into your business tonight.
                </p>
              </div>
              
              <div className="w-full flex-1 flex flex-col items-center justify-center gap-8 py-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="w-full max-w-[360px] h-48 bg-soft-black text-white p-6 sm:p-8 rounded-3xl relative text-left border border-white/10 flex flex-col justify-center shadow-2xl"
                >
                  <p className="text-base sm:text-lg font-black mb-4 text-outlier-yellow tracking-tight uppercase">The Outlier Framework</p>
                  <div className="space-y-1.5">
                    <p className="text-sm sm:text-base font-bold text-gray-200">Step 1: Identify bottleneck.</p>
                    <p className="text-sm sm:text-base font-bold text-gray-200">Step 2: Automate trigger.</p>
                    <p className="text-sm sm:text-base font-bold text-gray-200">Step 3: Verify & Scale.</p>
                  </div>
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-[-15px] sm:bottom-[-20px] right-[5%] sm:right-[10%] w-10 h-10 sm:w-12 h-12 bg-outlier-yellow rounded-full flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(226,255,0,0.5)] border-4 border-white z-20"
                  >
                    <Send size={18} className="text-soft-black" />
                  </motion.div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="w-full max-w-[360px] h-48 bg-soft-black text-white p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-center shadow-2xl"
                >
                  <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-outlier-yellow mb-6">Performance ROI</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-none mb-1">Zero</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 uppercase font-black tracking-widest">Tech Debt</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-none mb-1">100%</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 uppercase font-black tracking-widest">Implementation</p>
                    </div>
                  </div>
                </motion.div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
