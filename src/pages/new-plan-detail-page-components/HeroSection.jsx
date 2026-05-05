import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, ChevronLeft , User , LocateFixed } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { plans } from '../../utils/new-plan';
import { HeroSectionPlanDetailData } from '../../static-data/plan-detail-page-static-data';
import { reviewsData } from '../../static-data/global-static-data';

// Mock Data for Testimonials


const HeroSection = () => {

  const { planId } = useParams();
  const planDetails = HeroSectionPlanDetailData[planId] || null; 
  const testimonials = reviewsData[planId]?.reviews;
  const galleryImages = planDetails?.image_gallery || [];
  // State for Image Gallery
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  // State for Testimonial Carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-play Image Gallery Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000); // Changes image every 3 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Handlers for Testimonial Next/Prev
  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[linear-gradient(180deg,#F1E9FF_0%,#FFFFFF_100%)] py-10 lg:py-16 mt-[-200px] tracking-[1px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl mt-[200px]">

        {/* Main Grid: items-start is crucial for sticky to work */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ================= LEFT COLUMN: STICKY GALLERY ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 z-10 flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-full aspect-square bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-500">
              <img
                src={galleryImages[activeImgIndex]}
                alt="QFit Product"
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto p-2 custom-scrollbar">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${activeImgIndex === idx ? 'border-[#5b21b6] scale-105' : 'border-transparent hover:border-gray-300'
                    }`}
                >
                  <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SCROLLABLE CONTENT ================= */}
          <div className="lg:col-span-7 flex flex-col gap-12">

            {/* 1. Headers & Title */}
            <div>
              <h1 className="text-3xl lg:text-[32px] font-semibold text-[#1a1a1a] leading-tight mb-4">
                {planDetails?.name} — {planDetails?.tagline}
              </h1>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {planDetails?.description}
              </p>

              {/* Rating & Users */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src="/new-img/svg/Rating-grp.svg" alt="rating-grp" className='w-[40px] h-[20px]' />
                </div>
                <div className="text-sm  text-gray-600 flex items-center gap-1">
                  <span className="text-[#ffb800]"><Star size={16} fill='#F3A519' className='text-[#F3A519]' /></span> {planDetails?.rating.score} | {planDetails?.rating.reviews}
                </div>
              </div>
            </div>

            {/* 2. Pricing Section */}
            <div className="flex items-end flex-wrap gap-3 ">
              <span className="text-4xl font-bold text-[#5b21b6]">{planDetails?.pricing.price}</span>
              <span className="text-xl text-gray-400 line-through font-medium mb-1">{planDetails?.pricing.oldPrice}</span>
              <span className="bg-[#34CA8D] text-white text-xs  px-3 py-1 rounded-full mb-2">
                {planDetails?.pricing.discount} <span className="font-normal opacity-90">Limited Time Offer</span>
              </span>
            </div>

            <span className='font-semibold text-[10px] text-[#A5A5A5]'>WHAT YOU GET</span>


            {/* 3. Wallets / What You Get Box */}
            <div className="bg-white rounded-2xl border border-[#E0DEDB] p-4  ">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-[#1a1a1a]">Your plan wallets</h3>
                <span className="text-sm font-medium text-gray-700">{planDetails?.benefits_total_value} in Direct Benefits</span>
              </div>

              {/* Benefit Item 1 */}
              <div className="flex flex-col gap-3">
                {
                  planDetails?.benefits.map((item, index) => (

                    <div className={`flex gap-4 items-start pt-3 ${index !== 0 ? "border-t border-[#E0DEDB]" : ""}`} key={index}>
                      {/* <div className="w-10 h-10 rounded-xl bg-[#E6F1FB] shrink-0" /> */}
                      <img src={item?.img} alt="plan_img" />
                      <div className="flex-1">
                        <div className="flex justify-between flex-wrap">
                          <h4 className="font-bold text-sm text-[#1a1a1a]">{item?.name}</h4>
                          <span className="font-medium text-[16px] text-[#1a1a1a]">{item?.value}</span>
                        </div>
                        <p className="text-xs text-[#4B4B4B]">{item?.details}</p>
                      </div>
                    </div>
                  ))
                }

              </div>

              {/* Savings Footer */}
              <div className="mt-4 pt-4 border-t border-[#E0DEDB] flex justify-between items-center flex-wrap">
                <div>
                  <p className="font-medium text-[#1a1a1a] text-sm mb-2">You pay: {planDetails?.payment_summary?.you_pay_per_year}/year</p>
                  <p className="text-xs text-gray-500 mt-0.5">{planDetails?.payment_summary?.per_month}/month = {planDetails?.payment_summary?.per_day}/day {planDetails?.payment_summary?.family_size}</p>
                </div>
                <div className="text-start md:text-right pt-3 md:pt-0">
                  <p className="text-xs text-gray-500 mb-2">Estimated savings</p>
                  <p className="text-[10px] font-medium text-[#5b21b6] max-w-[250px] leading-tight">{planDetails?.payment_summary?.estimated_savings_note}</p>
                </div>
              </div>
            </div>

            {/* 4. Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#25D366] bg-white rounded-full py-3.5 font-medium hover:bg-[#e6faee] transition-colors">
                {/* WhatsApp Icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </button>
              <Link to={`/plans/membership/${planId}`} className="flex-1 bg-[#4c2882] text-center text-white rounded-full py-3.5 font-medium shadow-md hover:bg-[#3b1c6b] transition-colors uppercase">
                BUY NOW
              </Link>
            </div>

            {/* 5. Clickable Testimonial Card */}
            <div className="bg-[linear-gradient(274.82deg,#E1EFFF_1.7%,#FFFFFF_99.82%)] border border-[#34CA8D] rounded-2xl p-[26px] relative flex items-center min-h-[140px]">
              {/* Left Arrow */}
              <button onClick={handlePrevTestimonial} className="absolute left-2 p-2 text-gray-500 hover:text-[#5b21b6] z-10">
                <ChevronLeft />
              </button>

              <div className="px-8 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <img src={testimonials[activeTestimonial].image} alt="User" className="w-11 h-11 rounded-full" />
                  <div>
                    <h5 className="font-bold text-sm text-[#1a1a1a] leading-none  mb-2">{testimonials[activeTestimonial].name}</h5>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <span key={i} ><Star size={14} fill='#F6B525' className='text-[#F6B525]' /></span>)}
                    </div>
                  </div>
                </div>
                <p className="text-[#4B4B4B] text-sm  mb-3">"{testimonials[activeTestimonial].review}"</p>
                <div className="flex gap-3 text-xs text-[#5b21b6]">
                  <span className="bg-[#F1E9FF] flex gap-2  px-2 py-1 rounded-[60px]">
                     <LocateFixed size={16} strokeWidth={1.5} />
                     {testimonials[activeTestimonial].location}</span>
                  <span className="bg-[#F1E9FF]  flex gap-2 px-2 py-1 rounded-[60px]">
                    <User size={16} strokeWidth={1.5} />
                    {testimonials[activeTestimonial].age}</span>
                </div>
              </div>

              {/* Right Arrow */}
              <button onClick={handleNextTestimonial} className="absolute right-2 p-2 text-gray-500 hover:text-[#5b21b6] z-10">
                <ChevronRight />
              </button>
            </div>

            {/* 6. Healthcare Bottom Box */}
            <div className="bg-[linear-gradient(283.18deg,#F1E9FF_-4.53%,#FFFFFF_55.19%)] border border-[#34CA8D] rounded-2xl p-[26px]">
              <p className="font-semibold text-[#1a1a1a] text-[20px]  mb-3  ">{planDetails?.highlight_section?.title}</p>
              <p className="text-sm text-[#4B4B4B] mb-6 ">{planDetails?.highlight_section?.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[6px]">
                {
                  planDetails?.highlight_section?.cards.map((card, index) => (
                    <div key={index} className="bg-[linear-gradient(205.18deg,#FFFFFF_6.37%,#D1C0EF_142.75%)] rounded-xl p-5 text-center">
                      <div className="text-2xl mb-2">
                        <img src={card?.img} alt={card?.title} className='w-10 h-10 mx-auto' />
                      </div>
                      <h5 className="font-semibold text-[14px]  text-[#1a1a1a] mb-3">{card?.title}</h5>
                      <p className="text-[12px] text-gray-500 leading-tight ">{card?.description}</p>
                    </div>

                  ))
                }
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Simple Custom CSS for smooth fading and scrollbar hiding */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0.6; }
          to { opacity: 1; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;