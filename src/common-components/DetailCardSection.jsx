import React from 'react';
import { motion } from 'framer-motion';

// WhatsApp Icon SVG Component
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const DetailCardSection = () => {
  return (
    <section className="container mx-auto py-8 md:py-[60px] px-4 sm:px-6 l max-w-7xl tracking-[1px]">

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1280px] mx-auto relative mt-16 md:mt-24"
      >
        
        <div className="absolute inset-0 rounded-[32px] overflow-hidden ">
          <img 
            src="/new-img/png/CTA.png" 
            alt="Medical pattern background" 
            className="w-full h-full object-cover "
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-[30px] py-12 md:py-[46px] min-h-[320px]">
          
          {/* Left Side: Text and CTA */}
          <div className="w-full md:w-[60%] flex flex-col items-start z-20 pb-48 md:pb-0">
            <h2 className="text-3xl md:text-[40px] font-semibold text-white mb-4 md:mb-6 leading-tight">
              Not sure which plan is <br className="hidden md:block" /> right for you?
            </h2>
            <p className="text-white/90  mb-8 max-w-md  leading-relaxed ">
              Talk to our expert and get personalized guidance based on your needs
            </p>
            
            <button className="flex items-center gap-2 bg-white text-[#34CA8D] px-6 py-3 rounded-full font-medium shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:bg-gray-50 hover:scale-105 transition-all duration-300">
              <WhatsAppIcon />
              Chat on WhatsApp
            </button>
          </div>

          {/* Right Side: Doctor Image Pop-out */}
          <div className="absolute bottom-0 right-0 md:right-12 w-40 md:w-[380px] pointer-events-none z-10 flex justify-end">
            <img 
              src="/new-img/svg/Expert-Doctor.svg" 
              alt="Expert Doctor" 
              className="w-full h-auto object-bottom drop-shadow-2xl"
            />
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(DetailCardSection);