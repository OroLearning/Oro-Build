
import React from 'react';
import { ChevronRight, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "How does your AI improve my marketing performance?", a: "Our AI analyzes customer behavior, segments audiences, and automates campaign decisions in real-time—helping you send the right message to the right person at the right time without sparing." },
    { q: "Do I need technical skills to use the platform?", a: "Not at all. Outlier+ is designed for marketers, with a no-code interface and intuitive tools." },
    { q: "What marketing channels are supported?", a: "We support email, social media, SMS, push notifications, and web-based interactions." },
    { q: "Can I personalize campaigns with your AI?", a: "Yes, our engine allows for micro-segmentation and dynamic content generation based on user intent." },
    { q: "How is your AI different from other tools?", a: "Our proprietary models focus on predictive intent rather than just historical data, allowing you to anticipate customer needs." }
  ];

  return (
    <section className="py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 bg-outlier-yellow/20 px-3 py-1 rounded-full mb-6 border border-outlier-yellow/30">
              <HelpCircle size={14} className="text-black" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Frequently asked questions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Build a customer centric by marketing strategy</h2>
            <p className="text-gray-500 mb-10 max-w-sm">We've answered the most common ones below. If you're still unsure or need help with something specific, our support team is ready 24/7.</p>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#000000", color: "#E2FF00" }}
              transition={{ 
                backgroundColor: { duration: 0 },
                color: { duration: 0 },
                scale: { type: "spring", stiffness: 400, damping: 25 }
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-outlier-yellow text-black px-8 py-3.5 rounded-full font-bold shadow-lg"
            >
              Start your free trial
            </motion.button>
          </motion.div>
          
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => (
              <motion.details 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="group bg-white rounded-2xl border border-gray-100 open:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none">
                  <span className="font-bold tracking-tight text-lg group-hover:text-black transition-colors">{faq.q}</span>
                  <motion.div 
                    variants={{ open: { rotate: 90 }, closed: { rotate: 0 } }}
                    className="text-gray-400 group-open:text-black transition-colors"
                  >
                    <ChevronRight size={20} className="group-open:rotate-90 transition-transform" />
                  </motion.div>
                </summary>
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-6 pb-6 text-gray-500 text-sm leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              </motion.details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
