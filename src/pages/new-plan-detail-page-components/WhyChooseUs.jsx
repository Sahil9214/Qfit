import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { whyChooseAsData } from '../../static-data/global-static-data';



const WhyChooseUs = () => {
  // Data for Problems
  const { planId } = useParams();

  const data = whyChooseAsData[planId];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto tracking-[1px]">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#f3ebff] text-[#7c3aed] text-xs font-medium px-4 py-1.5 rounded-full"
        >
          Why Choose Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-semibold text-[#1a1a1a] mt-6 mb-4"
        >
          Why Choose {data?.name}?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base"
        >
          Precision health coverage designed to address systemic healthcare failures with curated medical solutions.
        </motion.p>
      </div>

      {/* Grid Container for Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

        {/* Problems Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-white rounded-[32px] p-8 md:p-12 shadow-[0px_1px_2px_0px_#0000000D] border border-gray-50 overflow-hidden"
        >
          {/* Subtle bottom-left glow effect matching design */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a]">Problems</h3>
            </div>

            <div className="flex flex-col">

              {
                data?.problems?.map((prob, idx) => (
                  <div key={idx} className="flex gap-4 mb-8 last:mb-0">
                    <div className="mt-1.5 shrink-0">
                      {/* Red Dot Icon */}
                      <div className="w-1.5 h-1.5 rounded-full bg-[#BA1A1A]" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-medium text-[#1a1a1a] mb-1.5">{prob.label}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{prob.description}</p>
                    </div>
                  </div>

                ))
              }
              {/* {problems.map((prob, idx) => (
                <ProblemItem key={idx} title={prob.title} description={prob.description} />
              ))} */}
            </div>
          </div>
        </motion.div>

        {/* Solutions Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          // Custom linear gradient based on the Figma image
          className="relative rounded-[32px] p-8 md:p-[40px] overflow-hidden bg-[linear-gradient(114.45deg,#5528A9_3.22%,#F1E9FF_151.61%)]"
          // style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)' }}
        >
          {/* Faint Shield Watermark in background */}
          <img src="/new-img/svg/Health-Shield.svg" alt="" className="absolute top-8 right-8 w-40 h-40 text-white opacity-10 pointer-events-none"/>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Solutions with {data?.name}</h3>
            </div>

            <div className="flex flex-col">

              {
                data?.solutions?.map((sol, idx) => (
                  <div key={idx} className="flex gap-4 mb-8 last:mb-0">
                    <div className="mt-1 shrink-0">
                      {/* Green Check Icon */}
                      <div className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 4.5L4.5 8L11 1" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1.5">{sol.label}</h4>
                      <p className="text-purple-100 text-sm leading-relaxed">{sol.description}</p>
                    </div>
                  </div>
                ))
              }


              {/* {solutions.map((sol, idx) => (
                <SolutionItem key={idx} title={sol.title} description={sol.description} />
              ))} */}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(WhyChooseUs);