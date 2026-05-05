import React from 'react';
import { ShieldCheck } from 'lucide-react';
import FormLayout from './layouts/FormLayout';
import { useParams } from 'react-router-dom';
import { membershipBenefitsData } from '../../static-data/global-static-data';

// Custom Check Icon for the card
const CustomCheckIcon = () => (
  <div className="w-5 h-5 mt-0.5 rounded-full bg-[#f0eaff] flex flex-shrink-0 items-center justify-center">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5b21b6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

const HeroSection = () => {
  const { planId } = useParams();
  const membershipPlanData = membershipBenefitsData[planId] || {};
  const features = membershipPlanData.features || [];

  return (
    <div className=" min-h-screen tracking-[1px]">
      {/* LAYOUT CONTAINER: 
        flex-col on mobile (stacks vertically)
        lg:flex-row on desktop (side-by-side)
      */}
      <section className="flex flex-col-reverse lg:flex-row items-start gap-8 max-w-[1280px] mx-auto px-4 py-8 md:py-[60px] md:px-8">
        
        {/* LEFT COLUMN: Step Form */}
        <div className="w-full flex-1">
          <FormLayout />
        </div>

        {/* RIGHT COLUMN: Side Card */}
        {/* lg:sticky keeps the card in view if the left form is long */}
        <div className="w-full lg:w-[380px] xl:w-[500px] flex-shrink-0 mx-auto lg:sticky lg:top-8 bg-white rounded-2xl  overflow-hidden flex flex-col">
          
          {/* Header Section with Purple Gradient */}
          <div className="relative p-6 pb-8 bg-gradient-to-br from-[#3b0a7c] via-[#5b21b6] to-[#9b51e0]">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

            <div className="relative z-10">
              <span className="inline-block bg-[linear-gradient(95.47deg,#C97703_-0.22%,#DD9318_10.66%,#FEC936_26.65%,#FEC936_78.95%,#E39C1E_93%,#FBC63A_97.24%)] text-[11px] font-medium px-3 py-1 rounded-full mb-3">
                {membershipPlanData?.tag}
              </span>
              <h2 className="text-3xl font-semibold text-white tracking-wide">
                {membershipPlanData?.name}
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col gap-6">

            {/* Pricing Area */}
            <div className="flex flex-col gap-1 border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 line-through text-sm font-medium">{membershipPlanData?.oldPrice}</span>
                <span className="bg-[#34CA8D] text-white text-[12px]  px-1.6 px-2 rounded-full">
                  {/* Save {membershipPlanData?.discount || 50} */}
                  Save {membershipPlanData?.discount?.replace(/off/gi, "").trim()}
                  </span>
              </div>
              <div className="flex justify-between items-center flex-wrap">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-medium text-[#4c2882]">{membershipPlanData?.price}</span>
                  <span className="text-sm font-medium text-gray-500">/ year</span>
                </div>
                <span className="text-[10px] font-medium text-[#4c2882]">Inclusive of all applicable taxes</span>
              </div>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CustomCheckIcon />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[#1a1a1a]">{feature.title}</span>
                    <span className="text-xs text-gray-500 mt-0.5">{feature.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Shield Image Placeholder */}
            <div className="w-full h-[160px] mt-2 rounded-xl bg-gradient-to-br from-[#dce7fc] to-[#e8ebfd] flex items-center justify-center overflow-hidden shadow-inner">
  
  <img
    src="/new-img/svg/protect_image.svg"
    alt="Secure Membership"
    className="h-full w-full object-contain"
  />

</div>

            {/* Footer Text */}
            <div className="flex flex-col gap-[20px]">
              <p className="text-[11px] text-gray-500 leading-relaxed">
                {membershipPlanData?.description}
              </p>
              <div className="flex justify-between text-[12px] font-medium items-center border-gray-100">
                <span className="text-gray-600">Need assistance?</span>
                <a href="#" className="text-[#5b21b6] hover:text-[#4c1d95] transition-colors">
                  Schedule a Callback
                </a>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default HeroSection;