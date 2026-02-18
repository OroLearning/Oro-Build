
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrategySection from './components/StrategySection';
import FeaturesGrid from './components/FeaturesGrid';
import HeavyLifting from './components/HeavyLifting';
import Pricing from './components/Pricing';
import MethodologyDetailGrid from './components/MethodologyDetailGrid';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const App: React.FC = () => {
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);

  useEffect(() => {
    if (isMethodologyOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMethodologyOpen]);

  const methodologyStages = [
    { title: "INSPIRATION", text: "Small businesses were told they weren't 'tech-savvy' enough. We changed that." },
    { title: "MISSION", text: "We created an invisible sail that catches the power of AI automatically." },
    { title: "TRANSFORMATION", text: "Glide effortlessly toward markets once thought 'unimaginable'." },
    { title: "REALITY", text: "With the right sail, even the smallest boat can lead the fleet." }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      <main>
        <Hero onOpenMethodology={() => setIsMethodologyOpen(true)} />
        <StrategySection />
        <FeaturesGrid onOpenMethodology={() => setIsMethodologyOpen(true)} />
        <HeavyLifting />
        <Pricing />
        <MethodologyDetailGrid />
        <FAQ />
      </main>
      <Footer />

      {/* Global Methodology Modal - Always Centered in Viewport */}
      <AnimatePresence>
        {isMethodologyOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
            {/* Background Overlay - Simple dimmed background per request */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMethodologyOpen(false)}
              className="absolute inset-0 bg-black/60 cursor-pointer backdrop-blur-sm"
            />
            
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[640px] max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-12 z-[100000] border border-gray-100 scrollbar-hide"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsMethodologyOpen(false)}
                className="absolute top-6 right-6 p-2 text-gray-300 hover:text-soft-black transition-colors"
                aria-label="Close modal"
              >
                <X size={24} sm:size={28} strokeWidth={1.5} />
              </button>

              <div className="text-left">
                {/* Branding Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-outlier-yellow rounded-xl flex items-center justify-center mb-6 sm:mb-8 shadow-sm">
                  <span className="font-bold text-soft-black text-[11px] sm:text-[13px]">O+</span>
                </div>
                
                <h2 className="text-2xl sm:text-4xl font-bold text-soft-black mb-3 sm:mb-4 tracking-tight leading-tight">
                  Scale 10x with our<br className="hidden sm:block" />AI Methodology.
                </h2>
                <p className="text-gray-400 text-xs sm:text-base leading-relaxed max-w-sm mb-8 sm:mb-12 font-medium">
                  We analyzed over 500 successful businesses to build this blueprint for effortless automation.
                </p>

                {/* Methodology Grid - 1x1 on mobile, 2x2 on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {methodologyStages.map((stage, idx) => (
                    <div 
                      key={idx} 
                      className="p-5 sm:p-6 bg-gray-50/50 rounded-2xl border border-gray-200 flex flex-col justify-start min-h-[110px] sm:min-h-[140px]"
                    >
                      <h4 className="text-[9px] sm:text-[10px] font-black uppercase text-gray-400 mb-1.5 sm:mb-2 tracking-widest">
                        {stage.title}
                      </h4>
                      <p className="text-[12px] sm:text-[13px] font-bold text-zinc-700 leading-snug">
                        {stage.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
