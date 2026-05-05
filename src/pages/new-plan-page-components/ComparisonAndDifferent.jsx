import React from 'react';
import { motion } from 'framer-motion';

// Check and Cross Icons components
const CheckIcon = () => (
  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mx-auto">
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const CrossIcon = () => (
  <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center mx-auto">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L9 9M9 1L1 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>
);

const ComparisonAndDifferent = () => {
  const comparisonData = [
    { feature: "Dr. Consultation", qfit: "Unlimited", traditional: "Limited or not included", opd: "Limited", wellness: "Limited" },
    { feature: "OPD Coverage", qfit: <CheckIcon />, traditional: <CrossIcon />, opd: "Capped", wellness: "Partial" },
    { feature: "Lab Tests", qfit: "Covered via Wallet", traditional: <CrossIcon />, opd: "Discounts only", wellness: "Discounts only" },
    { feature: "Medicines", qfit: "Covered via Wallet", traditional: <CrossIcon />, opd: "Discounts only", wellness: "Discounts only" },
    { feature: "Health Check-ups", qfit: <CheckIcon />, traditional: "Once a year, basic", opd: "Limited", wellness: <CheckIcon /> },
    { feature: "Hospicash", qfit: <CheckIcon />, traditional: <CheckIcon />, opd: <CheckIcon />, wellness: <CrossIcon /> },
    { feature: "Family Coverage", qfit: "Up to 6 Members", traditional: <CheckIcon />, opd: <CheckIcon />, wellness: "Individual only" },
    { feature: "Waiting Period", qfit: "Day 1, zero wait", traditional: "30 to 90 days", opd: "30+ days", wellness: "Not Applicable" },
    { feature: "Everyday Savings", qfit: "High", traditional: "Low", opd: "Medium", wellness: "Low" },
  ];

  return (
    <section className="py-[60px] px-4 max-w-7xl mx-auto overflow-hidden tracking-[1px]">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="bg-[#f3ebff] text-[#7c3aed] text-xs font-medium px-4 py-1.5 rounded-full tracking-wider">
          Comparison
        </span>
        <h2 className="text-3xl md:text-[36px] font-semibold text-[#1a1a1a] mt-6 mb-4 tracking-[1px]">
          What Makes QFit Different
        </h2>
        <p className="text-gray-500 max-w-2xl text-sm tracking-[1px] mx-auto">
          Traditional insurance covers big emergencies. QFit covers your everyday health too.
        </p>
      </div>

      {/* Table Container with horizontal scroll for mobile */}
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[800px] lg:min-w-full bg-white rounded-3xl">
          {/* Table Header */}
          <div className="grid grid-cols-5 border-b border-gray-100">
            <div className="p-6 font-semibold text-[#225ED7] text-lg flex items-center">Features</div>
            <div className="p-6 bg-gradient-to-b from-[#FFFFFF] to-[#E5FFF7] flex flex-col items-center justify-center">
              <img src="/new-img/svg/logo.svg" alt="QFit" className="h-8 mb-2 object-contain" />
            </div>
            <div className="p-6 text-[#225ED7] font-semibold text-center text-sm md:text-base">Traditional<br/>Insurance</div>
            <div className="p-6 text-[#225ED7] font-semibold text-center text-sm md:text-base">OPD Add-on<br/>Plans</div>
            <div className="p-6 text-[#225ED7] font-semibold text-center text-sm md:text-base">Wellness<br/>Apps</div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, idx) => (
            <motion.div 
              key={idx}
              // initial={{ opacity: 0, x: -10 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ delay: idx * 0.05 }}
              className="grid grid-cols-5 border-b border-gray-50 last:border-0 items-center text-center"
            >
              <div className="p-5 text-left border-t text-[#333] text-sm md:text-base">
                {row.feature}
              </div>
              <div className="p-5 bg-[#E5FFF7] border-t text-[#1a1a1a] text-sm md:text-base last:rounded-b-3xl">
                {row.qfit}
              </div>
              <div className="p-5 text-[#4B4B4B] border-r border-t text-sm md:text-base">{row.traditional}</div>
              <div className="p-5 text-[#4B4B4B] border-r border-t text-sm md:text-base">{row.opd}</div>
              <div className="p-5 text-[#4B4B4B] border-t text-sm md:text-base">{row.wellness}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ComparisonAndDifferent);