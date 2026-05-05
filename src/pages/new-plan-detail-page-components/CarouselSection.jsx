import React from 'react';
import {ShieldCheck } from 'lucide-react';

const CarouselSection = () => {
  // Array of items to display in the marquee
  const items = [
    "Trusted Healthcare Partner",
    "Day 1 Coverage",
    "Covers Your Family",
    "Support When You Need It",
    "Easy & Quick Process"
  ];

  // We duplicate the array multiple times to ensure the screen is always filled
  // regardless of how wide the monitor is, creating a seamless loop.
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="w-full bg-[linear-gradient(90deg,#A387D7_0%,#915AF1_100%)] overflow-hidden py-5 md:py-6 relative flex items-center">
      
      {/* Custom CSS for seamless infinite scroll */}
      <style>
        {`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-strip {
            animation: marquee-scroll 50s linear infinite;
          }
          /* Optional: pause on hover if needed, though usually not for this type of strip */
          /* .animate-marquee-strip:hover { animation-play-state: paused; } */
        `}
      </style>

      {/* Marquee Container */}
      <div className="flex animate-marquee-strip w-max">
        {duplicatedItems.map((text, index) => (
          <div 
            key={index} 
            className="flex items-center gap-6 px-6 md:px-12 w-max"
          >
            <span className="text-white text-lg md:text-xl font-semibold tracking-[1px] whitespace-nowrap">
              {text}
            </span>
            <ShieldCheck className='text-[#fff]'/>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default React.memo(CarouselSection);