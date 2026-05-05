import React from 'react';
import { useParams } from 'react-router-dom';
import { planDetailsTabelData } from '../../static-data/global-static-data';
import { plans } from '../../utils/new-plan';

// Green Check Icon Component
const CheckIcon = () => (
  <div className="w-6 h-6 mx-auto bg-[#e6faee] rounded-full flex items-center justify-center">
    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 4.5L4.5 8L11 1" />
    </svg>
  </div>
);

const PlanDetails = () => {
  const { planId } = useParams();
  const planData = planDetailsTabelData[planId];
  // Data extracted from the Figma design
  

  return (
    <section className="py-20 px-4 max-w-[1280px] mx-auto tracking-[1px]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="bg-[#f3ebff] text-[#7c3aed] text-xs font-medium px-4 py-1.5 rounded-full">
          Plan Details
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mt-6 mb-5">
          Detailed Plan Table
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base mb-[20px] md:mb-[60px] leading-relaxed">
          The {planData?.name} plan offers a range of features to support your fitness journey. It includes all the tools needed to achieve your health goals.
        </p>
      </div>

      {/* Table Container with horizontal scroll for responsiveness */}
      <div className="w-full overflow-x-auto rounded-[24px] shadow-sm border border-gray-100 bg-white">
        <table className="w-full min-w-[900px] border-collapse">
          
          {/* Table Head */}
          <thead>
            {/* Using the exact green color from design */}
            <tr className="bg-[#38c989] text-white">
              <th className="py-5 px-6 font-semibold text-center w-1/3 text-lg border-r border-[#2eb578]">
                Benefits
              </th>
              <th className="py-5 px-6 font-semibold text-center w-1/3 text-lg border-r border-[#2eb578]">
                {plans[planId]?.name}
              </th>
              <th className="py-5 px-6 font-semibold text-center w-1/3 text-lg">
                Remarks
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {planData?.data.map((row, index) => (
              <tr 
                key={index} 
                // Alternating row colors for better readability
                className={`border-b border-gray-100 last:border-none ${index % 2 === 0 ? 'bg-white' : 'bg-[#fafafc]'}`}
              >
                {/* Benefits Column (Purple Text) */}
                <td className="py-6 px-6 text-center text-[#4c2882] font-semibold text-sm md:text-base border-r border-gray-100">
                  {row.benefit}
                </td>

                {/* QFit Kavach Column (Dark Text) */}
                <td className="py-6 px-6 text-center text-[#1a1a1a] font-medium text-sm border-r border-gray-100">
                  {
                    typeof row.kavach === "string" && row.kavach.includes(".svg") ? (
                      <img
                        src={row.kavach}
                        alt="icon"
                        className="mx-auto h-5 w-5 object-contain"
                      />
                    ) : (
                      row.kavach
                    )
                  }
                </td>

                {/* Remarks Column (Gray Text) */}
                <td className="py-6 px-6 text-center text-gray-500 text-sm leading-relaxed">
                  {row.remarks}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </section>
  );
};

export default React.memo(PlanDetails);