
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { Zap, Globe, MessageCircle, Instagram, Slack, Send, Check, Clock, Users, ArrowRight, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

const chartData = [
  { day: 'Sun', value: 40 },
  { day: 'Mon', value: 30 },
  { day: 'Tue', value: 35 },
  { day: 'Wed', value: 65 },
  { day: 'Thu', value: 85, active: true },
  { day: 'Fri', value: 50 },
  { day: 'Sat', value: 45 },
];

const segmentData = [
  { name: 'Active', value: 400, fill: '#E2FF00' },
  { name: 'New', value: 300, fill: '#000000' },
  { name: 'Idle', value: 200, fill: '#E5E7EB' },
];

const FeaturesGrid: React.FC = () => {
  const scrollProps = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px -10% 0px" },
    transition: { 
      duration: 0.6, 
      delay, 
      ease: [0.22, 1, 0.36, 1] as any 
    }
  });

  const instantHoverTransition = {
    backgroundColor: { duration: 0 },
    color: { duration: 0 },
    scale: { type: "spring", stiffness: 400, damping: 25 }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...scrollProps()} className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-8 hardware-accelerated text-center lg:text-left">
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 bg-outlier-yellow/20 px-3 py-1 rounded-full mb-6 border border-outlier-yellow/30 shadow-sm">
              <Zap size={14} className="text-black" fill="#000" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Unlock the power of automated marketing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">Smarter features for smarter campaigns</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm sm:text-base leading-relaxed mx-auto lg:mx-0">
            Unify your marketing efforts with integrated tools for insights, automation, customer support, and omni-channel communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Feature 1: Marketing Insight Tools */}
          <motion.div 
            {...scrollProps()}
            whileHover={{ y: -5, boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.08)" }}
            className="lg:col-span-7 bg-white rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col transition-all duration-300 h-full"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-10 gap-6">
              <div className="max-w-xs">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Marketing insight tools</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-6 leading-relaxed">
                  Turn raw data into real impact. Track performance, spot trends, and uncover actionable insights—all in one place.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "#E2FF00", color: "#000" }}
                  transition={instantHoverTransition as any}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-md w-full sm:w-auto"
                >
                  Explore analytics
                </motion.button>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-5 w-full sm:w-48 shadow-inner">
                <p className="text-[10px] font-black uppercase text-gray-400 mb-3 tracking-widest">Audience Reach</p>
                <div className="h-24 w-full mb-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={segmentData}
                        innerRadius={25}
                        outerRadius={40}
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={false}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between items-center text-[9px] font-bold">
                  <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-outlier-yellow rounded-full"></div> 82% Active</div>
                  <ArrowRight size={10} className="text-gray-300" />
                </div>
              </div>
            </div>
            
            <div className="flex-grow flex flex-col justify-end mt-auto">
              <div className="bg-gray-50/50 rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-inner">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
                  <div>
                    <h4 className="font-bold text-sm">Support analytics</h4>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Auto analyze and write a report</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-[10px] font-bold cursor-pointer hover:border-black transition-colors shadow-sm">
                    Weekly <span>▾</span>
                  </div>
                </div>
                
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-xl sm:text-2xl font-bold">12,475</span>
                  <span className="text-green-500 text-[10px] sm:text-xs font-bold mb-1">+12.65%</span>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 font-bold ml-auto mb-1 uppercase text-right">CSAT rate</span>
                </div>

                <div className="h-24 sm:h-32 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.active ? '#E2FF00' : '#E5E7EB'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full bg-black flex items-center justify-center text-outlier-yellow shadow-md">
                    <Check size={14} />
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium leading-tight">
                    Your CSAT score reached 82% this week, with 80% of users rating their experience as <span className="text-black font-bold">"Excellent"</span>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Automation push letter */}
          <motion.div 
            {...scrollProps(0.1)}
            whileHover={{ y: -5, boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.08)" }}
            className="lg:col-span-5 bg-white rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden relative group transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Automation push letter</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-10 leading-relaxed">
                Send the right message at the right time—automatically. Our system delivers targeted content without manual work.
              </p>
              
              <div className="relative mt-4 mb-16 px-4 sm:px-0">
                <motion.div 
                  className="bg-[#1A1A1A] text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl relative z-10 shadow-2xl max-w-[280px] mx-auto transition-transform duration-500 cursor-default border border-white/5"
                >
                  <div className="flex items-center gap-2 mb-4 opacity-60">
                    <div className="w-5 h-5 rounded-full bg-gray-600"></div>
                    <span className="text-[9px]">jonathanjason@gmail.com</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold mb-2">Hi, Jason</p>
                  <p className="text-[10px] sm:text-[11px] leading-relaxed text-gray-400">
                    Thank you for reaching out! We've created for you insight to ensure we address all your needs.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10, backgroundColor: "#000", color: "#E2FF00" }}
                  transition={{ backgroundColor: { duration: 0 }, color: { duration: 0 } }}
                  className="absolute bottom-[-15px] right-[10%] w-10 h-10 sm:w-12 sm:h-12 bg-outlier-yellow rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(226,255,0,0.4)] transition-all cursor-pointer z-20 border-4 border-white"
                >
                  <Send size={16} className="transition-colors" />
                </motion.div>
              </div>

              <div className="bg-black text-white p-4 sm:p-5 rounded-2xl mb-6 border border-white/10 shadow-xl relative overflow-hidden group/stats cursor-default">
                <div className="absolute top-0 right-0 p-3 opacity-20">
                  <MousePointer2 size={24} className="text-outlier-yellow" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-outlier-yellow mb-3">Live Performance</p>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div>
                    <p className="text-base sm:text-lg font-black tracking-tight">94.2%</p>
                    <p className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Open Rate</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base sm:text-lg font-black tracking-tight">12.8%</p>
                    <p className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Conversion</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Workflow Node</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-outlier-yellow animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-outlier-yellow"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-2xl p-3 sm:p-4 border border-gray-100 flex items-center justify-between group/trigger cursor-pointer hover:border-black transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-lg">
                      <Zap size={14} className="text-outlier-yellow" fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold">Direct Sign-up</p>
                      <p className="text-[8px] text-gray-500 uppercase font-bold">Triggered</p>
                    </div>
                  </div>
                  <div className="text-[9px] font-bold px-2 py-1 bg-white border border-gray-200 rounded-full group-hover/trigger:bg-black group-hover/trigger:text-white transition-all">
                    Active
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3, 4, 5 - Stacking nicely */}
          <motion.div 
            {...scrollProps()}
            className="lg:col-span-4 bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Connect platforms</h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-8 leading-relaxed">
              Bridge your entire marketing stack. Seamlessly sync data and actions across tools.
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mt-auto">
              <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                  <Zap size={20} className="text-outlier-yellow" fill="#E2FF00" />
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                  <Globe size={14} className="text-gray-400" />
                </div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                  <div className="w-5 h-5 rounded-full border-2 border-black border-t-outlier-yellow animate-spin"></div>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">API Key</label>
                <div className="relative group">
                  <input type="password" value="••••••••" readOnly className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-mono" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...scrollProps(0.1)}
            className="lg:col-span-4 bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 text-center flex flex-col"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Chatbot integrations</h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-10 leading-relaxed">
              Engage customers instantly. Our AI chatbots integrate with your platforms.
            </p>
            <div className="relative h-32 mt-auto flex items-center justify-center">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center z-10 shadow-xl">
                <span className="font-bold text-outlier-yellow text-xs">O+</span>
              </div>
              {/* Simplified icons for mobile visibility */}
              <div className="absolute top-0 left-1/4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-50"><Globe size={14} className="text-blue-600" /></div>
              <div className="absolute bottom-0 right-1/4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-50"><Instagram size={14} className="text-pink-600" /></div>
            </div>
          </motion.div>

          <motion.div 
            {...scrollProps(0.2)}
            className="lg:col-span-4 bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">24/7 support</h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-8 leading-relaxed">
              Get expert help whenever you need it. Our team is on standby 24/7.
            </p>
            <div className="space-y-3 mt-auto">
              <div className="flex items-center justify-between p-3 bg-black text-white rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gray-700" />
                  <span className="text-[10px] font-bold">Fadhlan Rizky</span>
                </div>
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-outlier-yellow" /><span className="text-[8px] font-bold">LIVE</span></div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-100 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gray-200" />
                  <span className="text-[10px] font-bold">Jennifer Leigh</span>
                </div>
                <span className="text-[8px] font-bold text-gray-400">AWAY</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
