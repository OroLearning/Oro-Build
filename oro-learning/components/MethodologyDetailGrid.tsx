
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Rocket, ShieldCheck } from 'lucide-react';

const MethodologyDetailGrid: React.FC = () => {
  const cards = [
    {
      title: "Inspiration",
      icon: <Lightbulb />,
      text: "We see every business challenge as a seed for exponential growth, uncovering the hidden data points where AI can unlock new dimensions of scale."
    },
    {
      title: "Mission",
      icon: <Target />,
      text: "Our commitment is to remove the friction of the mundane, liberating your human capital to focus on the high level growth strategy"
    },
    {
      title: "Transform",
      icon: <Rocket />,
      text: "We don't just optimize—we evolve—transmuting static processes into dynamic, self-improving systems that compound in value every single day."
    },
    {
      title: "Reality",
      icon: <ShieldCheck />,
      text: "You step into a state of limitless scalability where your operations are no longer a ceiling, but a springboard for consistent and compounding success."
    }
  ];

  return (
    <section className="py-12 lg:py-24 px-4 sm:px-8 lg:px-12 mb-20">
      <div className="bg-[#0F0F0F] rounded-[3rem] lg:rounded-[4.5rem] py-16 sm:py-24 lg:py-32 overflow-hidden shadow-2xl relative border border-white/5 hardware-accelerated">
        {/* Decorative Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-[#E2FF00]/5 blur-[150px] rounded-full pointer-events-none hardware-accelerated" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 sm:mb-8 uppercase leading-tight">
              The Philosophy of Growth
            </h2>
            <div className="w-16 sm:w-20 h-2 bg-[#E2FF00] mx-auto rounded-full"></div>
          </motion.div>

          {/* Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 perspective-1000">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.1, 
                  duration: 0.5, 
                  ease: [0.23, 1, 0.32, 1] 
                }}
                whileHover={{ 
                  y: -15, 
                  backgroundColor: "#E2FF00",
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="bg-[#181818] p-8 lg:p-10 rounded-[3rem] sm:rounded-[3.5rem] border border-white/5 group transition-[background-color,transform] duration-200 ease-out flex flex-col items-start text-left transform-gpu cursor-pointer relative overflow-hidden h-full"
              >
                {/* Icon Container */}
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E2FF00] group-hover:bg-[#000000] rounded-[1.2rem] sm:rounded-[1.5rem] flex items-center justify-center mb-8 sm:mb-12 shadow-xl transition-all duration-200 ease-out shrink-0"
                >
                  <div className="text-[#000000] group-hover:text-[#E2FF00] transition-colors duration-200 ease-out flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8">
                    {React.cloneElement(card.icon as React.ReactElement, { 
                      size: "100%", 
                      strokeWidth: 2.5,
                      className: "block"
                    })}
                  </div>
                </div>

                {/* Card Content */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white group-hover:text-black mb-4 sm:mb-6 transition-colors duration-200 ease-out tracking-tight leading-none uppercase">
                  {card.title}
                </h3>
                
                <p className="text-[13px] sm:text-[14px] text-gray-400 group-hover:text-black leading-relaxed font-bold mb-12 sm:mb-16 transition-colors duration-200 ease-out flex-1">
                  {card.text}
                </p>

                {/* Bottom Progress/Step Indicator */}
                <div className="mt-auto w-full">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-[#E2FF00] group-hover:text-black transition-colors duration-200 ease-out whitespace-nowrap">
                      Step 0{idx + 1}
                    </span>
                    <div className="flex-1 h-[2px] bg-white/10 group-hover:bg-black/20 transition-colors duration-200 ease-out rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyDetailGrid;
