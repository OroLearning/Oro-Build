
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
    <section className="py-24 bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...scrollProps()} className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 hardware-accelerated">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-outlier-yellow/20 px-3 py-1 rounded-full mb-6 border border-outlier-yellow/30 shadow-sm">
              <Zap size={14} className="text-black" fill="#000" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Unlock the power of automated marketing</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Smarter features for smarter campaigns</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Unify your marketing efforts with integrated tools for insights, automation, customer support, and omni-channel communication.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Feature 1: Marketing Insight Tools */}
          <motion.div 
            {...scrollProps()}
            whileHover={{ y: -5, boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.08)" }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col transition-all duration-300 framer-animated h-full"
          >
            <div className="flex justify-between items-start mb-10">
              <div className="max-w-xs">
                <h3 className="text-2xl font-bold mb-4">Marketing insight tools</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Turn raw data into real impact. Track performance, spot trends, and uncover actionable insights—all in one place.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "#E2FF00", color: "#000" }}
                  transition={instantHoverTransition as any}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-md"
                >
                  Explore analytics
                </motion.button>
              </div>

              {/* Added: Audience Segmentation Mini-card to fill whitespace */}
              <div className="hidden sm:block bg-gray-50 border border-gray-100 rounded-3xl p-5 w-48 shadow-inner">
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
              <motion.div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 shadow-inner">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="font-bold text-sm">Support analytics</h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Auto analyze and write a report</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-[10px] font-bold cursor-pointer hover:border-black transition-colors shadow-sm">
                    Weekly <span>▾</span>
                  </div>
                </div>
                
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-2xl font-bold">12,475</span>
                  <span className="text-green-500 text-xs font-bold mb-1">+12.65%</span>
                  <span className="text-[10px] text-gray-400 font-bold ml-auto mb-1 uppercase">Total customer satisfaction rate</span>
                </div>

                <div className="h-32 mb-4">
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
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-outlier-yellow shadow-md">
                    <Check size={16} />
                  </div>
                  <p className="text-[10px] text-gray-500 font-medium">
                    Your CSAT score reached 82% this week, with 80% of users rating their experience as <span className="text-black font-bold">"Excellent"</span>.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature 2: Automation push letter */}
          <motion.div 
            {...scrollProps(0.1)}
            whileHover={{ y: -5, boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.08)" }}
            className="lg:col-span-5 bg-white rounded-[2.5rem] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden relative group transition-all duration-300 framer-animated flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">Automation push letter</h3>
              <p className="text-gray-500 text-sm mb-10 leading-relaxed">
                Send the right message at the right time—automatically. Our system delivers targeted content without manual work.
              </p>
              
              <div className="relative mt-8 mb-12">
                <motion.div 
                  className="bg-[#1A1A1A] text-white p-6 rounded-3xl relative z-10 shadow-2xl max-w-[280px] mx-auto transition-transform duration-500 cursor-default border border-white/5"
                >
                  <div className="flex items-center gap-2 mb-4 opacity-60">
                    <div className="w-6 h-6 rounded-full bg-gray-600"></div>
                    <span className="text-[10px]">jonathanjason@gmail.com</span>
                  </div>
                  <p className="text-sm font-bold mb-2">Hi, Jason</p>
                  <p className="text-[11px] leading-relaxed text-gray-400">
                    Thank you for reaching out! We've created for you insight to ensure we address all your needs.
                  </p>
                </motion.div>
                
                {/* Fixed: Relocated yellow button INSIDE the card boundary, tasteful overlapping */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10, backgroundColor: "#000", color: "#E2FF00" }}
                  transition={{ backgroundColor: { duration: 0 }, color: { duration: 0 } }}
                  className="absolute bottom-[-10px] right-[10%] w-12 h-12 bg-outlier-yellow rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(226,255,0,0.4)] transition-all cursor-pointer z-20 border-4 border-white"
                >
                  <Send size={18} className="transition-colors" />
                </motion.div>
              </div>

              {/* Refined: Compact Campaign Metrics Box */}
              <div className="bg-black text-white p-5 rounded-2xl mb-6 border border-white/10 shadow-xl relative overflow-hidden group/stats cursor-default">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <MousePointer2 size={30} className="text-outlier-yellow" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-outlier-yellow mb-3">Live Performance</p>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div>
                    <p className="text-lg font-black tracking-tight">94.2%</p>
                    <p className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Open Rate</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black tracking-tight">12.8%</p>
                    <p className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Conversion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Refined: Trigger Workflow Section */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Workflow Node</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-outlier-yellow animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-outlier-yellow"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center justify-between group/trigger cursor-pointer hover:border-black transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-lg">
                      <Zap size={14} className="text-outlier-yellow" fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold">Direct Sign-up</p>
                      <p className="text-[8px] text-gray-500 uppercase font-bold">Triggered</p>
                    </div>
                  </div>
                  <div className="text-[9px] font-bold px-2 py-1 bg-white border border-gray-200 rounded-full group-hover/trigger:bg-black group-hover/trigger:text-white transition-all shadow-sm">
                    Active
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Platform Connectivity */}
          <motion.div 
            {...scrollProps()}
            whileHover={{ y: -5, boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.08)" }}
            className="lg:col-span-4 bg-white rounded-[2rem] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-300 framer-animated"
          >
            <h3 className="text-2xl font-bold mb-4">Connect platforms</h3>
            <p className="text-gray-500 text-sm mb-10 leading-relaxed">
              Bridge your entire marketing stack. Seamlessly sync data and actions across tools.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-inner">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-[0_10px_15px_rgba(0,0,0,0.05)] border border-gray-100 cursor-pointer hover:scale-105 transition-transform">
                  <Zap size={24} className="text-outlier-yellow" fill="#E2FF00" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <Globe size={16} className="text-gray-400" />
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-[0_10px_15px_rgba(0,0,0,0.05)] border border-gray-100 cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-6 h-6 rounded-full border-2 border-black border-t-outlier-yellow animate-spin"></div>
                </div>
              </div>
              
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">API Key</label>
                <div className="relative group cursor-pointer">
                  <input 
                    type="password" 
                    value="••••••••••••••••" 
                    readOnly
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-mono group-hover:border-black transition-colors shadow-sm"
                  />
                  <Check className="absolute right-3 top-3 text-green-500" size={14} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 4: Chatbot Integrations */}
          <motion.div 
            {...scrollProps(0.1)}
            whileHover={{ y: -5, boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.08)" }}
            className="lg:col-span-4 bg-white rounded-[2rem] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 text-center transition-all duration-300 framer-animated"
          >
            <h3 className="text-2xl font-bold mb-4">Chatbot integrations</h3>
            <p className="text-gray-500 text-sm mb-12 leading-relaxed">
              Engage customers instantly. Our AI chatbots integrate with your platforms.
            </p>
            
            <div className="relative h-40 flex items-center justify-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center z-10 shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <div className="w-8 h-8 bg-outlier-yellow rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(226,255,0,0.4)]">
                  <span className="font-bold text-[10px]">O+</span>
                </div>
              </div>
              
              {[
                { Icon: Globe, color: 'text-blue-600', pos: 'top-0 left-1/2 -translate-x-1/2', delay: 0 },
                { Icon: MessageCircle, color: 'text-green-500', pos: 'top-8 right-4', delay: 0.1 },
                { Icon: Instagram, color: 'text-pink-600', pos: 'bottom-4 right-8', delay: 0.2 },
                { Icon: Slack, color: 'text-purple-600', pos: 'bottom-4 left-8', delay: 0.3 },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: item.delay, ease: "easeInOut" }}
                  className={`absolute ${item.pos} w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 cursor-pointer hover:scale-125 transition-all duration-300`}
                >
                  <item.Icon size={18} className={item.color} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature 5: Support Teams */}
          <motion.div 
            {...scrollProps(0.2)}
            whileHover={{ y: -5, boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.08)" }}
            className="lg:col-span-4 bg-white rounded-[2rem] p-10 shadow-[0_4_20px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-300 framer-animated"
          >
            <h3 className="text-2xl font-bold mb-4">24/7 support teams</h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Get expert help whenever you need it. Our team is on standby 24/7.
            </p>
            
            <div className="space-y-3">
              {[
                { name: 'Timothy Ronald', id: 'OR-802-003-9HF', status: 'Waiting' },
                { name: 'Fadhlan Rizky', id: 'DA-820-245-GKF', status: 'Connected', active: true },
                { name: 'Jennifer Leigh', id: 'EA-629-132-9HF', status: 'Waiting' }
              ].map((member, i) => (
                <div 
                  key={i} 
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer hover:translate-x-1 ${member.active ? 'bg-black text-white border-black shadow-xl' : 'bg-gray-50 border-gray-100 text-gray-800 hover:bg-white hover:shadow-md'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
                       <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold">{member.name}</p>
                      <p className={`text-[9px] ${member.active ? 'text-gray-400' : 'text-gray-500'}`}>{member.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${member.active ? 'bg-outlier-yellow animate-pulse' : 'bg-gray-400'}`}></div>
                    <span className="text-[9px] font-bold uppercase tracking-tighter">{member.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
