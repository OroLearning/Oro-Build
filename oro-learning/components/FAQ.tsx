
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`bg-white rounded-[1.5rem] border-2 transition-all duration-300 overflow-hidden ${isOpen ? 'border-gray-300 shadow-md' : 'border-gray-200 shadow-sm'}`}>
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer transition-colors hover:bg-gray-50/50"
      >
        <span className="font-bold tracking-tight text-base sm:text-lg text-soft-black pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-gray-400 shrink-0"
        >
          <ChevronDown size={22} strokeWidth={2.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 sm:px-7 pb-7 text-gray-500 text-sm sm:text-base leading-relaxed border-t-2 border-gray-50 pt-5">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Default second item open as per user image

  const faqs = [
    { 
      q: "I have zero AI or tech knowledge. Can I actually do this?", 
      a: "Absolutely. Our entire methodology is built for non-technical founders. We use simple analogies and zero 'tech-speak' to ensure you understand and can implement every tool we teach." 
    },
    { 
      q: "How quickly can I see results in my business?", 
      a: "Most of our clients implement their first automation within 48 hours. By the end of our session, our goal is to have saved you at least 10 hours of manual work per week." 
    },
    { 
      q: "What tools do you use? Are they expensive?", 
      a: "We focus on high-leverage, accessible tools like Gemini 3, Nanobanana, and OpenAi. We teach you how to start with the lowest possible overhead while achieving maximum output." 
    },
    { 
      q: "Will this disrupt my existing team or ecosystem?", 
      a: "No. Our methodology is about 'integration, not disruption.' We show you how to plug AI into what you're already doing to make your current processes faster and more profitable." 
    },
    { 
      q: "Is this just another AI course?", 
      a: "No. This is an implementation-first mentorship. We don't just teach you, we give you the blueprints and direct support to ensure the AI actually works for your business." 
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full mb-6 border border-gray-200 shadow-sm">
              <HelpCircle size={14} className="text-soft-black" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-soft-black">Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight text-soft-black">Everything you need to know about scaling</h2>
            <p className="text-gray-500 text-sm sm:text-base mb-8 lg:mb-10 max-w-sm mx-auto lg:mx-0">We know AI can feel intimidating. Our mission is to make it your most powerful, easy-to-use business asset.</p>
            <button className="w-full sm:w-auto bg-outlier-yellow text-black px-8 py-3.5 rounded-full font-bold shadow-lg hover:brightness-95 transition-all">Schedule Your Free Audit</button>
          </motion.div>
          
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem 
                key={i} 
                question={faq.q} 
                answer={faq.a} 
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
