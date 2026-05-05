import React from 'react';
import { motion } from 'framer-motion';

// Card component for reusability
const FeatureCard = ({ title, description, image, bgColor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${bgColor} rounded-[24px] p-6 md:p-8 flex flex-col border border-black/5`}
    >
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Image container aligned to bottom-right */}
      {/* <div className=" flex justify-end">
        <img 
          src={image} 
          alt={title} 
          className="md:h-40 object-contain" 
        />
      </div> */}
      {/* Image container */}
<div className="mt-4 flex justify-end">
  <img 
    src={image} 
    alt={title} 
    className="md:h-40 object-contain" 
  />
</div>
    </motion.div>
  );
};

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Day 1 Coverage, No Conditions",
      description: "Benefits start the moment you purchase. No waiting period, no pre-existing disease exclusions for OPD services.",
      image: "/new-img/svg/WhyChooseUs-1.svg", // Replace with actual Figma export
      bgColor: "bg-[#e0f7f9]",
    },
    {
      title: "Unlimited Doctor Consultations",
      description: "Talk to a doctor whenever you need — without worrying about the bill. Available for your entire covered family.",
      image: "/new-img/svg/WhyChooseUs-2.svg", 
      bgColor: "bg-[#f3ebff]",
    },
    {
      title: "Covers the Whole Family",
      description: "One plan, up to 6 members. Include your parents, in-laws, spouse, and kids under a single subscription.",
      image: "/new-img/svg/WhyChooseUs-3.svg",
      bgColor: "bg-[#e6f2ff]",
    },
    {
      title: "Real Money Back on Spends",
      description: "Use your OPD, lab, and pharmacy wallets to get actual rupees back on the health expenses your family already has.",
      image: "/new-img/svg/WhyChooseUs-4.svg",
      bgColor: "bg-[#e8f0fe]",
    },
    {
      title: "Personalised Care, Always",
      description: "Dedicated support that knows your plan, your family, and your history. Not a bot. Not a queue. A real person.",
      image: "/new-img/svg/WhyChooseUs-5.svg",
      bgColor: "bg-[#fff2ee]",
    },
    {
      title: "Claims Concierge Assistance",
      description: "From hospitalisation paperwork to surgery coordination — our team handles it so you don't have to figure it out alone.",
      image: "/new-img/svg/WhyChooseUs-6.svg",
      bgColor: "bg-[#eceaff]",
    },
  ];

  return (
    <section className="py-[60px] px-4 max-w-[1280px] mx-auto tracking-[1px]">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <span className="bg-[#f3ebff] text-[#7c3aed] text-xs font-medium px-4 py-1.5 rounded-full tracking-wider">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-[40px] font-semibold text-[#1a1a1a] mt-6 mb-4">
          Built for How Your Family Actually Lives
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-[16px]">
          Not just for emergencies. For the doctor visit on a Tuesday, the pharmacy run at midnight, the check-up you've been putting off.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            {...feature} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(WhyChooseUsSection);