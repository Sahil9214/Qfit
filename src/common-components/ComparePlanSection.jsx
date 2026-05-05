import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

// Common Icons
const CheckIcon = () => (
  <div className="w-5 h-5 mx-auto bg-[#DEFDDE] rounded-full flex items-center justify-center">
    <svg width="8" height="8" viewBox="0 0 12 9" fill="none" stroke="#006F1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 4.5L4.5 8L11 1" />
    </svg>
  </div>
);

const CrossIcon = () => (
  <div className="w-5 h-5 mx-auto flex-shrink-0 bg-[#FEE3E7] rounded-full flex items-center justify-center">
    <svg width="8" height="8" viewBox="0 0 9 9" fill="none" stroke="#A8364B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 1L8 8M8 1L1 8" />
    </svg>
  </div>
);

// Mobile specific list check icon (Blue)
const MobileListCheck = () => (
  <div className="w-5 h-5  flex-shrink-0 rounded-full border border-blue-200 flex items-center justify-center bg-blue-50">
    <svg width="10" height="8" viewBox="0 0 12 9" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 4.5L4.5 8L11 1" />
    </svg>
  </div>
);

// Card Header Colors for Mobile Cards
const mobileCardColors = [
  "bg-[linear-gradient(9.47deg,#5B31AE_7.15%,#FFFFFF_198.79%)]", // Purple (Kavach)
  "bg-[linear-gradient(19.6deg,#1B9060_13.13%,#94DDBF_177.38%)]", // Green (Super)
  "bg-[linear-gradient(9.47deg,#C85C35_7.15%,#FFFFFF_198.79%)]", // Orange (Light)
  "bg-[linear-gradient(29.64deg,#1B9090_18.13%,#94DDBF_111.2%)]", // Teal (Essential)
  "bg-[linear-gradient(9.47deg,#3150AE_7.15%,#FFFFFF_198.79%)]"  // Blue (Max)
];

const ComparePlanSection = ({TitleDescripComparePlanData,planName}) => {

  const { planId } = useParams();

  const checkedPlanIndex = {
    131767: 0, // QFit Kavach
    131768: 1, // QFit Super
    131769: 2, // QFit Light
    131770: 3, // QFit Essential
    131771: 4  // QFit Max
  }

  
  const [hoveredPlan, setHoveredPlan] = useState(null);
  
  const [openSections, setOpenSections] = useState({
    CONSULTATIONS: true,
    HEALTH_WALLETS: false,
    MEDICAL_SUPPORT: false,
    DISCOUNTS: false,
    PROTECTION: false,
    PLAN_DETAILS: false
  });

  const toggleSection = (sectionKey) => {
    setOpenSections(prev => ({ ...prev, [sectionKey]: !prev[sectionKey] }));
  };

  const isColActive = (index) => {
    if (hoveredPlan !== null) return hoveredPlan === index;
    // return index === 2; // Default QFit Light active
    return index === checkedPlanIndex[planId]; // Default QFit Light active
  };

  // --- DESKTOP DATA SOURCE (Full Table) ---
  const tableData = [
    {
      id: "CONSULTATIONS",
      title: "CONSULTATIONS",
      headerValues: ["Unlimited", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
      rows: [
        { label: "Tele/Video GP Consultation", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
        { label: "Specialist Consultation (22+)", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited", "Unlimited"] }
      ]
    },
    {
      id: "HEALTH_WALLETS",
      title: "HEALTH WALLETS",
      headerValues: ["₹1,699", "₹2,699", "₹7,199", "₹15,398", "₹20,398"],
      rows: [
        { label: "OPD Wallet (In-clinic visits)", values: [<CrossIcon key="d-1"/>, "₹1,000", "₹2,000", "₹4,000", "₹6,000"] },
        { label: "Lab Test Wallet", values: [<CrossIcon key="d-2"/>, <CrossIcon key="d-3"/>, "₹2,500", "₹6,000", "₹8,000"] },
        { label: "Pharmacy Credits", values: [<CrossIcon key="d-4"/>, <CrossIcon key="d-5"/>, "₹1,000", "₹2,000", "₹3,000"] },
        { label: "Health Checkup Wallet", values: ["₹1,699", "₹1,699", <CrossIcon key="d-6"/>, "₹3,398", "₹3,398"] }
      ]
    },
    {
      id: "MEDICAL_SUPPORT",
      title: "MEDICAL SUPPORT",
      headerValues: ["Included", "Included", "Included", "Included", "Included"],
      rows: [
        { label: "Surgery Concierge", values: [<CheckIcon key="1"/>, <CheckIcon key="2"/>, <CheckIcon key="3"/>, <CheckIcon key="4"/>, <CheckIcon key="5"/>] },
        { label: "Health Webinars", values: [<CheckIcon key="6"/>, <CheckIcon key="7"/>, <CheckIcon key="8"/>, <CheckIcon key="9"/>, <CheckIcon key="10"/>] },
        { label: "Claims Assistance", values: [<CheckIcon key="11"/>, <CheckIcon key="12"/>, <CheckIcon key="13"/>, <CheckIcon key="14"/>, <CheckIcon key="15"/>] }
      ]
    },
    {
      id: "DISCOUNTS",
      title: "DISCOUNTS & SAVINGS",
      headerValues: ["Save up to 50%", "Save up to 50%", "Save up to 50%", "Save up to 50%", "Save up to 50%"],
      rows: [
        { label: "Network Discount on Labs", values: ["Up to 50%", "Up to 50%", "Up to 50%", "Up to 50%", "Up to 50%"] },
        { label: "Network Discount on Pharmacy", values: ["Up to 20%", "Up to 20%", "Up to 20%", "Up to 20%", "Up to 20%"] },
        { label: "Network Discount on Fitness & wellness", values: ["Up to 40%", "Up to 40%", "Up to 40%", "Up to 40%", "Up to 40%"] }
      ]
    },
    {
      id: "PROTECTION",
      title: "PROTECTION BENEFITS",
      headerValues: ["Not Included", "Not Included", "Up to ₹5,000", "Up to ₹60,000", "Up to ₹1,65,000"],
      rows: [
        { label: "Hospicash — Normal Hospitalisatio", values: ["₹1,000/day", "₹1,000/day", "₹1,000/day", "₹1,000/day", "₹2,000/day"] },
        { label: "Hospicash — ICU Hospitalisation", values: ["₹2,000/day", "₹2,000/day", "₹2,000/day", "₹2,000/day", "₹4,000/day"] },
        { label: "Hospicash Days Limit", values: ["30 days", "30 days", "30 days", "30 days", "30 days"] },
        { label: "EMI Protect", values: [<CrossIcon key="1"/>, <CrossIcon key="2"/>, "Up to 5,000₹", "Up to 10,000", "Up to 15,000"] },
        { label: "Personal Accident Cover", values: [<CrossIcon key="3"/>, <CrossIcon key="4"/>, "₹5 lakh", "₹10 lakh", "₹15 lakh"] },
        { label: "Critical Illness Cover", values: [<CrossIcon key="5"/>, <CrossIcon key="6"/>, <CrossIcon key="7"/>, "Up to ₹50,000", "Up to ₹1,00,000"] },
        { label: "Cyber Protect", values: [<CrossIcon key="8"/>, <CrossIcon key="9"/>, "Up to ₹5,000", "Up to ₹10,000", "₹50,000"] }
      ]
    },
    {
      id: "PLAN_DETAILS",
      title: "PLAN DETAILS",
      headerValues: ["₹1,699", "₹2,699", "₹7,199", "₹15,398", "₹20,398"],
      rows: [
        { label: "Plan Validity", values: ["Family of 4", "Family of 4", "Family of 6", "Family of 6", "Family of 6"] },
        { label: "Plan Validity", values: ["1 Year", "1 Year", "1 Year", "1 Year", "1 Year"] },
        { label: "Waiting Period", values: ["None", "None", "None", "None", "None"] },
        { label: "Age Limit — Wellness", values: ["No Limit", "No Limit", "No Limit", "No Limit", "No Limit"] },
        { label: "Age Limit — Insurance", values: ["18–65 Years", "18–65 Years", "18–65 Years", "18–65 Years", "18–65 Years"] },
        { label: "Pre-existing Diseases (OPD)", values: ["Covered", "Covered", "Covered", "Covered", "Covered"] },
        { label: "Pricing", values: ["₹1,699", "₹2,499", "₹6,999", "₹14,999", "₹19,999"] }
      ]
    }
  ];

  // --- MOBILE SPECIFIC DATA (Shortlist from design) ---
  const mobileSpecificFeatures = [
    { label: "Tele/Video GP Consultation", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
    { label: "22+ Specialist Consultation", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
    { label: "Health Check-Up Wallet", values: ["₹1,699", "₹1,699", "₹1,699", "₹3,398", "₹3,398"] },
    { label: "OPD Wallet", values: [<CrossIcon key="m1"/>, "₹1,000", "₹2,000", "₹4,000", "₹6,000"] },
    { label: "Lab Test Wallet", values: [<CrossIcon key="m2"/>, <CrossIcon key="m3"/>, "₹2,500", "₹6,000", "₹8,000"] },
    { label: "Pharmacy Credits", values: [<CrossIcon key="m4"/>, <CrossIcon key="m5"/>, "₹1,000", "₹2,000", "₹3,000"] },
    { label: "Network Discount on Pharmacy", values: ["Up to 20%", "Up to 20%", "Up to 20%", "Up to 20%", "Up to 20%"] },
    { label: "Network Discount on Labs (Radio/Path)", values: ["Up to 50%", "Up to 50%", "Up to 50%", "Up to 50%", "Up to 50%"] }
  ];

  // Generate mobile cards dynamically using the short feature list
  const mobileData = useMemo(() => {
    return planName.map((plan, planIndex) => {
      // Map only the 8 short-listed features for this specific plan
      const planBenefits = mobileSpecificFeatures.map(feature => ({
        label: feature.label,
        value: feature.values[planIndex]
      }));

      return {
        ...plan,
        colorClass: mobileCardColors[planIndex % mobileCardColors.length],
        benefits: planBenefits
      };
    });
  }, [planName]);

  return (
    <section className="py-8 md:py-[60px] tracking-[1px]  tracking-[1px] max-w-[1280px] mx-auto">
      
      {/* --- DESKTOP UI (Hidden on Mobile) --- */}
      <div className="hidden lg:block px-4 max-w-[1380px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-semibold text-[#1a1a1a] mb-4">
            {TitleDescripComparePlanData?.title}
          </h2>
          <p className="text-gray-500 text-[16px] max-w-xl mx-auto ">
             {TitleDescripComparePlanData?.description}
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[1100px]">
            <div className="sticky top-0  z-20 grid grid-cols-[260px_repeat(5,1fr)] gap-4 pb-4 pt-8">
              <div className="flex items-center pl-6 font-bold text-[#4c2882] tracking-wider text-sm">
                COVERAGE DETAILS
              </div>
              
              {planName.map((plan, index) => {
                const active = isColActive(index);
                return (
                  <div 
                    key={index}
                    onMouseEnter={() => setHoveredPlan(index)}
                    onMouseLeave={() => setHoveredPlan(null)}
                    className={`relative flex flex-col items-center p-6 rounded-[24px] border-2 transition-all duration-300 cursor-pointer ${
                      active 
                        ? 'bg-[#f8f5ff] border-[#5b21b6] shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-10' 
                        : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200'
                    }`}
                  >
                    {plan.isRecommended && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#5b21b6] text-white text-[10px] font-bold px-4 py-1 rounded-full whitespace-nowrap shadow-sm">
                        RECOMMENDED
                      </div>
                    )}
                    
                    <h3 className="text-[16px] font-semibold text-[#1a1a1a]">{plan.name}</h3>
                    <div className="mt-1 mb-4 flex items-baseline gap-1">
                      <span className={`text-[14px] font-semibold transition-colors text-[#6100EB]`}>
                        {plan.price}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">/YR</span>
                    </div>
                    
                    <Link to={"/plans/" + plan.packageId} className={`w-full py-2.5 rounded-full text-center text-[12px] font-semibold transition-colors ${
                      active 
                        ? 'bg-[#5b21b6] text-white hover:bg-[#4c1d95]' 
                        : 'bg-[#f4f5f7] text-[#1a1a1a] hover:bg-gray-200'
                    }`}>
                      Choose Plan
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="border border-gray-100 rounded-3xl bg-white shadow-sm overflow-hidden mb-4">
              {tableData.map((section) => (
                <div key={section.id} className="border-b border-gray-50 last:border-0">
                  <div className="px-2 pt-2 pb-1">
                    <div 
                      onClick={() => toggleSection(section.id)}
                      className="grid grid-cols-[260px_repeat(5,1fr)] gap-4 items-center bg-[#f4f5f7] rounded-xl py-3 cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-2 font-bold text-[#4c2882] text-sm pl-4">
                        <motion.svg 
                          animate={{ rotate: openSections[section.id] ? 180 : 0 }}
                          className="w-4 h-4 text-[#4c2882]" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                        {section.title}
                      </div>
                      
                      {section.headerValues.map((val, idx) => (
                        <div key={idx} className="text-center">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                            isColActive(idx) ? 'bg-[#f8f5ff] text-[#5b21b6]' : 'bg-transparent text-gray-600'
                          }`}>
                            {val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence>
                    {openSections[section.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2">
                          {section.rows.map((row, rIdx) => (
                            <div 
                              key={rIdx} 
                              className="grid grid-cols-[260px_repeat(5,1fr)] gap-4 items-center py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
                            >
                              <div className="text-sm font-medium text-gray-700 pl-10 pr-4">
                                {row.label}
                              </div>
                              
                              {row.values.map((val, idx) => (
                                <div 
                                  key={idx} 
                                  className={`text-center text-sm font-medium transition-colors duration-300 ${
                                    isColActive(idx) ? 'text-[#5b21b6]' : 'text-gray-500'
                                  }`}
                                >
                                  {val}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE UI (Hidden on Desktop) --- */}
      <div className="block lg:hidden">
        
        <div className="text-center px-4 mb-6">
          <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-2">
            Plan Comparison
          </h2>
          <p className="text-gray-500 text-[14px]">
            Compare our signature QFit medical coverage tiers. Our editorial curation helps you identify the surgical precision of each plan's benefits.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {mobileData.map((plan, index) => (
             <div 
               key={index} 
               className="snap-center flex-shrink-0 w-[85vw] sm:w-[340px] bg-white rounded-[24px] shadow-md border border-gray-100 flex flex-col h-[75vh]"
             >
               <div className={`p-6 rounded-t-[24px] text-white text-center flex-shrink-0 ${plan.colorClass}`}>
                 <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
                 <span className="bg-white text-[#5b21b6] text-[10px] font-bold px-3 py-1 rounded-full mb-3 inline-block shadow-sm">
                   Save up to {plan.discount}
                 </span>
                 <div className="flex items-baseline justify-center gap-2 mt-2">
                   <span className="text-3xl font-bold">{plan.price}<span className="text-sm font-normal">/YR</span></span>
                   <span className="line-through text-white/70 text-sm">{plan.oldPrice || '₹X,XXX'}</span>
                 </div>
                 <p className="text-[11px] mt-2 opacity-80">for the remaining 28 days</p>
               </div>

               <div className="flex-1 overflow-y-auto bg-white p-5">
                 <h4 className="font-medium text-[#1a1a1a] text-[15px] mb-4">Offered Benefits</h4>
                 
                 <div className="flex flex-col gap-1">
                   {plan.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex justify-between items-center py-3 border-b border-[#AB99D9] last:border-0">
                        <div className="flex items-center gap-3 pr-4 w-[70%]">
                          <MobileListCheck />
                          <span className="text-[13px] font-medium text-gray-700 leading-snug">
                            {benefit.label}
                          </span>
                        </div>
                        <div className="text-[13px] font-medium text-[#5b21b6] text-right w-[30%]">
                          {/* Rendering string or CrossIcon dynamically */}
                          {benefit.value}
                        </div>
                      </div>
                   ))}
                 </div>
               </div>

               <div className="p-4 border-t border-gray-100 bg-white rounded-b-[24px] flex-shrink-0">
                 <Link 
                   to={"/plans/" + plan.packageId} 
                   className="block w-full py-3.5 rounded-full text-center text-[14px] font-bold bg-[#5b21b6] text-white hover:bg-[#4c1d95] shadow-sm transition-colors"
                 >
                   Choose Plan
                 </Link>
               </div>
             </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default React.memo(ComparePlanSection);