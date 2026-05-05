// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const Stepper = () => {
//   const location = useLocation();
//   const [currentStep, setCurrentStep] = useState(1);

//   // Auto-detect the active step based on the URL route
//   useEffect(() => {
//     const path = location.pathname.toLowerCase();
    
//     // Adjust these keywords based on your actual route paths
//     if (path.includes('nominee') || path.includes('review')) {
//       setCurrentStep(3);
//     } else if (path.includes('address')) {
//       setCurrentStep(2);
//     } else {
//       // Default to step 1 for personal-details or base index
//       setCurrentStep(1);
//     }
//   }, [location]);

//   const steps = [
//     { id: 1, label: 'Personal Details' },
//     { id: 2, label: 'Address' },
//     { id: 3, label: 'Nominee & Review' },
//   ];

//   return (
//     <div className="w-full py-4 mb-2 ">
//       <div className="relative flex justify-between items-center w-full max-w-[750px]  mx-auto px-4 md:px-8">
        
//         {/* Connecting Gray Background Line */}
//         {/* Positioned top-5 to sit perfectly behind the vertical center of the w-10/h-10 circles */}
//         <div className="absolute top-5 left-[15%] right-[15%] h-[1.5px] bg-gray-200 "></div>

//         {steps.map((step) => {
//           // Determine the visual state of each step
//           const isActive = currentStep === step.id;
//           const isCompleted = currentStep > step.id;
          
//           // Based on your 1st screenshot, when on the final step, it shows entirely Green.
//           const isAllDone = currentStep === 3 && step.id === 3;

//           // Default State (Pending)
//           let circleClass = "bg-[#f4f5f7] text-gray-400"; 
//           let labelClass = "text-gray-400 font-medium";

//           if (isCompleted || isAllDone) {
//             // Completed State (Green)
//             circleClass = "bg-[#22c55e] text-white shadow-sm"; 
//             labelClass = "text-[#22c55e] font-medium";
//           } else if (isActive) {
//             // Active State (Purple)
//             circleClass = "bg-[#5b21b6] text-white shadow-md"; 
//             labelClass = "text-[#5b21b6] font-medium";
//           }

//           return (
//             <div key={step.id} className="flex flex-col items-center relative px-3">
//               <div 
//                 className={`w-10 h-10 rounded-full flex items-center justify-center text-[16px]  transition-all duration-300 ${circleClass}`}
//               >
//                 {step.id}
//               </div>
//               <span className={`mt-3 text-[12px] sm:text-[14px]   transition-all duration-300 ${labelClass}`}>
//                 {step.label}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Stepper;



import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Stepper = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);

  // Auto-detect active step from URL
  useEffect(() => {
    const path = location.pathname.toLowerCase();

    if (path.includes('step-3')) {
      setCurrentStep(3);
    } else if (path.includes('step-2')) {
      setCurrentStep(2);
    } else {
      setCurrentStep(1);
    }
  }, [location]);

  const steps = [
    { id: 1, label: 'Personal Details' },
    { id: 2, label: 'Address' },
    { id: 3, label: 'Nominee & Review' },
  ];

  return (
    <div className="w-full py-4 mb-2">
      <div className="relative flex justify-between items-center w-full max-w-[750px] mx-auto px-4 md:px-8">
        
        {/* Background connecting line */}
        <div className="absolute top-5 left-[15%] right-[15%] h-[1.5px] bg-[#EDEEEF]"></div>

        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          let circleClass = "bg-[#EDEEEF] text-gray-500";
          let labelClass = "text-gray-500 font-medium";

          // Completed step
          if (isCompleted) {
            circleClass = "bg-[#34CA8D] text-white";
            labelClass = "text-[#34CA8D] font-medium";
          }

          // Current active step
          if (isActive) {
            circleClass = "bg-[#5528A9] text-white";
            labelClass = "text-[#5528A9] font-medium";
          }

          return (
            <div key={step.id} className="flex flex-col items-center relative px-3 z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-[16px] transition-all duration-300 ${circleClass}`}
              >
                {step.id}
              </div>

              <span
                className={`mt-3 text-[12px] sm:text-[14px] transition-all duration-300 ${labelClass}`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;