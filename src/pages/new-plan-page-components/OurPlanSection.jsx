import React from 'react';
import { Link } from 'react-router-dom';
import {BadgeCheck , Star} from 'lucide-react'

// Common Check Icon for benefits list
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);



const OurPlanSection = ({OurPlans}) => {
  return (
    <section className="py-[60px] px-4 max-w-[1280px] mx-auto tracking-[1px]">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="bg-[#f3ebff] text-[#7c3aed] text-xs font-medium px-4 py-1.5 rounded-full">
          Our Plans
        </span>
        <h2 className="text-3xl md:text-[40px] font-semibold text-[#1a1a1a] mt-6 mb-4">
          Find a Plan That Works for You
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto">
          All plans include unlimited doctor consultations and Day 1 coverage. No waiting period, ever.
        </p>
      </div>

      {/* Grid Layout for Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 tracking-[0.5px]">
        
        {/* Dynamic Plan Cards */}
        {OurPlans.map((plan) => (
          <div 
            key={plan.id}
            // Group class used for hover effects on child elements
            className={`group relative ${plan.cardBg} rounded-[32px] p-[20px] border-2 border-transparent transition-all duration-300 ${plan.hoverBorder} hover:shadow-xl flex flex-col justify-between`}
          >
            {/* Hidden Label that appears on hover */}
            <div className={`absolute -top-4 right-8 px-4 py-1 rounded-full text-xs uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md ${plan.badgeStyles}`}>
              {plan.badge}
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-[#333333] mb-4">{plan.name}</h3>
              <p className="text-[#4B4B4B] text-sm leading-relaxed mb-6">
                {plan.desc}
              </p>

              <h4 className="font-semibold text-[#1a1a1a] mb-4">Benefits</h4>
              <ul className="space-y-3 mb-8">
                {plan.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-700 font-medium">
                    <BadgeCheck className='text-[#34CA8D] w-[16px] h-[16px]' />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing and Action Area */}
            <div>
              <div className="flex items-center justify-between mb-2 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 line-through text-lg">{plan.oldPrice}</span>
                  <span className="bg-[#34CA8D] text-white text-xs py-1 px-2 flex items-center rounded-[70px]">
                    50% OFF
                  </span>
                </div>
                {/* Users and Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src="/new-img/svg/plan-rating-grp.svg" alt="plan-rating-grp"  className='w-[40px] h-[20px]'/>
                  </div>
                  <div className="flex items-center gap-1 text-sm  text-[#333333]">
                    <Star size={16} strokeWidth={1.25} fill='#F6B525'   className='text-[#F6B525]'/> {plan.rating} | {plan.users} users
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-between mt-4">
                <span className="text-[32px] font-semibold text-[#5b21b6]">{plan.price}</span>
                <Link to={"/plans/" + plan.packageId} className="bg-[#5b21b6] text-white text-[14px] font-medium px-6 py-2.5 rounded-full  hover:bg-[#4c1d95] transition-colors">
                  Choose {plan.name.split(' ')[1]}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* 6th Card: Talk to Expert (Dark Theme) */}
        <div className="bg-[#4c2882] rounded-[32px] p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-4">Not sure which plan is right for you?</h3>
            <p className="text-purple-200 text-sm leading-relaxed mb-8">
              Answer a few quick questions and get a personalized recommendation based on your family size and health needs.
            </p>
            <button className="bg-white text-[#000] text-[14px] px-6 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors w-max">
              <img src="/new-img/svg/whatsapp-icon.svg" alt="whatsapp-icon" className='w-5 h-5' />
              Talk to an Expert
            </button>
          </div>
          {/* Doctor Image Overlay */}
          <div className="absolute -bottom-6 right-0 w-48 md:w-auto h-auto z-0 opacity-90">
             <img src="/new-img/svg/doctor.svg" alt="Expert" className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default React.memo(OurPlanSection);