import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { planBenefitsData } from '../static-data/global-static-data';
import { plans } from '../utils/new-plan';

// Tab Configuration
const tabs = [
  { id: 'consultations', label: 'Consultations' },
  { id: 'medical_support', label: 'Medical Support' },
  { id: 'health_wallets', label: 'Health Wallets' },
  { id: 'savings_discounts', label: 'Savings & Discounts' },
  { id: 'protection_benefits', label: 'Protection Benefits' },
  { id: 'plan_benefits', label: 'Plan Benefits' },
];

const PlanBenefits = () => {
  // Default active tab is 'health_wallets' as per design
  const [activeTab, setActiveTab] = useState('health_wallets');

  const { planId } = useParams();

  const tabContent = planBenefitsData[planId];

  // Get current content
  const currentContent = tabContent[activeTab];

  return (
    <section className="container mx-auto py-8 md:py-[60px] px-4 sm:px-6 l max-w-7xl tracking-[1px]">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="bg-[#f3ebff] text-[#7c3aed] text-xs font-medium px-4 py-1.5 rounded-full tracking-wider">
          Plan Benefits
        </span>
        <h2 className="text-3xl md:text-[40px] font-semibold text-[#1a1a1a] m-5  md:leading-[48px]">
          Discover the incredible benefits you gain <br className="hidden md:block" /> with {plans[planId]?.name}!
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
          Designed to cover your fitness, health, and medical needs in one plan
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[40px]">
        
        {/* Left Sidebar: Tabs */}
        <div className="w-full lg:w-[210px] shrink-0">
          <div className="flex flex-row lg:flex-col gap-[10px] overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 custom-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-[10px] rounded-full text-center text-[16px] font-medium transition-all duration-300 whitespace-nowrap  border ${
                    isActive
                      ? 'bg-[#4c2882] text-white border-[#4c2882] shadow-md scale-[1.02]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#4c2882] hover:text-[#4c2882]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Area: Dynamic Content Grid */}
        <div className="flex-1 overflow-hidden min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 h-full bg-[linear-gradient(162.07deg,#F1E9FF_2.87%,#FFFFFF_80.86%)] p-[10px] rounded-[20px]"
            >
              {/* Main Large Card (Spans 1 column, 2 rows on desktop) */}
              <div className={`md:col-span-1 md:row-span-2 rounded-[32px] mr-[10px] mb-[10px] md:mb-0 p-8 pb-0 flex flex-col justify-between relative overflow-hidden ${currentContent.mainCard.bgClass}`}>
                <div className="relative z-10">
                  <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full mb-4">
                      <img 
                    src={currentContent.mainCard.subimg} 
                    alt={currentContent.mainCard.title} 
                  />
                  </div>
                  <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">
                    {currentContent.mainCard.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {currentContent.mainCard.description}
                  </p>
                </div>
                {/* Image placed at the bottom */}
                <div className="mt-auto flex justify-center w-full relative z-0">
                  <img 
                    src={currentContent.mainCard.image} 
                    alt={currentContent.mainCard.title} 
                    className="max-w-[360px] object-contain drop-shadow-xl"
                  />
                </div>
              </div>

              {/* 4 Sub Cards Grid */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-[10px] min-h-[500px]">
                {currentContent.subCards.map((card, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-[32px] p-8 flex flex-col items-start ${card.bgClass} transition-transform hover:scale-[1.02] cursor-pointer`}
                  >
                    <div className={`w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full mb-4 ${card.iconBg}`}>
                       <img 
                    src={card.subimg} 
                    alt={card.title} 
                  />
                    </div>
                    <h4 className="text-xl font-medium text-[#1a1a1a] mb-2">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Hide scrollbar for mobile tabs */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default React.memo(PlanBenefits);