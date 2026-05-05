import React from 'react';
import { Star ,LocateFixed , User } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { reviewsData } from '../static-data/global-static-data';
import { homePageTestimonialsData } from '../static-data/plan-page-static-data';


// Helper component for Star Icon
const StarIcon = () => (
  <svg className="w-5 h-5 text-[#ffb800]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonials = () => {
  const { planId } = useParams();

  const testimonialsData = planId ? reviewsData[planId]?.reviews : homePageTestimonialsData;

  // Duplicate array for seamless infinite scrolling
  const scrollData = [...testimonialsData, ...testimonialsData];

  return (
    <section className="pb-[60px] px-4  overflow-hidden tracking-[1px]">
      
      {/* Custom CSS for seamless scrolling and hover pause */}
      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: infinite-scroll 25s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        

        {/* Infinite Scroll Carousel */}
        <div className="w-[100vw] overflow-hidden flex relative">
          {/* Gradient masks for smooth edge fading */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

          {/* Marquee Container with Custom CSS Class */}
          <div className="animate-marquee flex gap-6 w-max pl-6">
            {scrollData.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="bg-white rounded-[24px] p-6 md:p-8  border border-gray-50 w-[300px] md:w-[380px] flex flex-col justify-between shrink-0 cursor-pointer"
              >
                <div>
                  {/* User Profile Info */}
                  <div className="flex items-center gap-4 mb-5">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-50 h-50 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-lg text-[#1a1a1a] leading-none mb-1">
                        {item.name}
                      </h4>
                      <div className="flex gap-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star  className='w-4 h-4 text-[#F6B525] fill-current' key={i}  />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {item.review}
                  </p>
                </div>

                {/* Bottom Metadata (Location & Age) */}
                <div className="flex items-center gap-4 text-xs text-gray-400  pt-4 ">
                  <div className="flex items-center gap-1.5">
                    <LocateFixed size={16} strokeWidth={1.5} />
                    {item.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                   <User size={16} strokeWidth={1.5} />
                    {item.age}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);  