import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SimilarPlansData } from '../static-data/global-static-data';
import { CardData } from '../static-data/plan-page-static-data';

const SimilarPlansCard = () => {
  const { planId } = useParams();
  const data = planId ? SimilarPlansData[planId]?.data : CardData;

  return (
    <>
    
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 tracking-[1px]">
          {data?.map((plan) => (
            <div 
              key={plan.id}
              className={`flex flex-col bg-[#E1EFFF] bg-[linear-gradient(153.93deg,rgba(149,166,235,0.2)_8.78%,rgba(193,206,145,0.2)_93.44%)] rounded-2xl p-6 lg:p-8 transition-all duration-300 border-2 ${
                plan.isActive ? 'border-[#5528A9] shadow-md' : 'border-transparent hover:border-[#5528A9]/50'
              }`}
            >
              {/* Card Title & Badge */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">{plan.title}</h3>
                <span className={`text-[10px] font-medium px-3 py-1.5 rounded-full  ${plan.badgeStyles}`}>
                  {plan.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-8 flex-grow">
                {plan.desc}
              </p>

              {/* Pricing & CTA */}
              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-400 line-through text-sm font-medium">
                    {plan.oldPrice}
                  </span>
                  <span className="bg-emerald-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {plan.discount}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-semibold text-[#5528A9]">
                    {plan.newPrice}
                  </span>
                  <Link to={"/plans/" + plan.packageId}  className="bg-[#5528A9] hover:bg-purple-800 text-white px-6 py-2.5 rounded-[60px] text-sm font-medium transition-colors shadow-sm">
                    Choose Plan
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

    
    </>
  );
};

export default React.memo(SimilarPlansCard);