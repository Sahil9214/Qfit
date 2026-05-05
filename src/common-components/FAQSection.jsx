import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqsData } from '../static-data/plan-page-static-data';


// Reusable FAQ Item Component
const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div 
      // Applied the specific background gradient and rounded corners
      className="rounded-2xl overflow-hidden transition-all duration-300 bg-[linear-gradient(257.4deg,#FFFFFF_-16.81%,#F1F0FB_60%)]"
     
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-6 text-left focus:outline-none"
      >
        <span className="font-medium text-base md:[20px] text-[#1a1a1a]">
          {faq.question}
        </span>
        
        {/* Animated Chevron Icon */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="ml-4 shrink-0 text-[#4c2882]"
        >
          <svg className="w-5 h-5" fill="none" color='#4A3AFF' viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>

      {/* Smooth Expand/Collapse Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6 px-6 text-gray-500 text-sm md:text-base leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const faqs = faqsData

  // First item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto tracking-[1px]">
      {/* Header */}
      <div className="text-center mb-[60px]">
        <h2 className="text-3xl md:text-[40px] font-semibold text-[#1a1a1a] mb-5">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 tracking-[1px] max-w-[500px] mx-auto">
          Partnering with trusted brands to deliver better health outcomes
        </p>
      </div>

      {/* FAQ Accordion List - Added gap-4 for spacing between cards */}
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(FAQSection);