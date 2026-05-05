import React from 'react';
import { useParams } from 'react-router-dom';
import { plans } from '../utils/new-plan';


const HowItWorks = ({ HowItWorkDescriptionData, HowItWorksData }) => {
  const { planId } = useParams();

  return (
    <section className="w-full py-16 lg:py-[60px] bg-white tracking-[1px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">

        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-[#5528A9] text-[12px] font-medium mb-4">
            {HowItWorkDescriptionData?.badge}
          </span>
          {
            planId ? (
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-gray-900 mb-4">
                How {plans[planId].name} Works
              </h2>
            ) : (
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-gray-900 mb-4">
                {HowItWorkDescriptionData.title}
              </h2>
            )
          }

          <p className="text-gray-500 text-[16px] max-w-2xl mx-auto tracking-[1px]">
            {HowItWorkDescriptionData?.description}
          </p>
        </div>

        {/* Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {HowItWorksData.map((step) => (
            // Card Container
            <div
              key={step.id}
              className={`${step.bgColor} rounded-3xl pt-10 px-6 sm:px-8 flex flex-col items-center text-center overflow-hidden`}
            >
              {/* Text Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {step.desc}
              </p>

              {/* Image Container with Top Border */}
              {/* mt-auto ensures the image always stays at the bottom */}
              <div className={`mt-auto w-[60%] h-[56%] border-2 border-b-0 rounded-t-3xl overflow-hidden ${step.borderColor} bg-white/40`}>
                <img
                  src={step.imgSrc}
                  alt={step.title}
                  className="w-full h-auto object-contain drop-shadow-lg"
                  // Using a placeholder styling fallback just in case image is missing
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/400x300/e2e8f0/64748b?text=3D+Illustration'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;