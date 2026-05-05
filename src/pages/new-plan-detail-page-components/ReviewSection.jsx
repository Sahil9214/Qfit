import React from 'react'
import Testimonials from '../../common-components/Testimonials'
import { Star, LocateFixed } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { reviewsData } from '../../static-data/global-static-data';


const ReviewSection = () => {

  const { planId } = useParams();

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

        <div className="max-w-7xl mx-auto w-full px-4 md:px-8">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[50px] gap-6 md:gap-4 ">

            {/* Left Side: Text Content */}
            <div className="text-left">
              <span className="inline-block bg-[#f3ebff] text-[#7c3aed] text-[12px] font-medium px-3.5 py-1.5 rounded-full mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-[40px] font-semibold text-[#1a1a1a] mb-[20px]">
                What our users have to say
              </h2>
              <p className="text-gray-500 text-[16px] max-w-[450px]">
                Real stories and experiences from people who have transformed their health with QFit
              </p>
            </div>

            {/* Right Side: Global Rating */}
            <div className="flex flex-col items-start md:items-end gap-2 md:pb-1">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star className="w-[22px] h-[22px] text-[#F6B525] fill-current" key={i} />
                ))}
              </div>
              <p className="text-[14px] font-medium text-gray-600">
                4.7 Average customer rating (108 Votes)
              </p>
            </div>
          </div>

        </div>
      </section>
      <Testimonials />
    </>
  )
}

export default ReviewSection