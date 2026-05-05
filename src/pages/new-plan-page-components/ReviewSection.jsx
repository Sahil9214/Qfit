import React from 'react'
import Testimonials from '../../common-components/Testimonials'
import { Star ,LocateFixed } from 'lucide-react';


const ReviewSection = () => {
  return (
    <>
      <section className="pt-[60px] px-4  overflow-hidden tracking-[1px]">

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

          {/* Header Section */}
          <div className="text-center mb-[50px]">
            <span className="bg-[#f3ebff] text-[#7c3aed] text-xs font-medium px-4 py-1.5 rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-[40px] font-semibold text-[#1a1a1a] mt-6 mb-4">
              What Families Are Saying
            </h2>
            <p className="text-gray-500 max-w-[400px] mx-auto mb-6">
              Real stories and experiences from people who have transformed their health with QFit
            </p>

            {/* Global Rating */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star className='w-6 h-6 text-[#F6B525] fill-current' key={i} />)}
              </div>
              <p className="text-[16px] font-medium text-gray-700">
                4.7 Average customer rating (108 Votes)
              </p>
            </div>
          </div>

          {/* Infinite Scroll Carousel */}

        </div>
      </section>
      <Testimonials  />
    </>
  )
}

export default ReviewSection