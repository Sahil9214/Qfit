import React from 'react';
import { Heart, Activity } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      // FIX 1: Replaced py-12 lg:py-20 with pt-12 pb-0 lg:pt-20 lg:pb-0 to remove the bottom space
      className="relative w-full overflow-hidden pt-12 pb-0 lg:pt-20 lg:pb-0 lg:mt-[-85px]"
      style={{
        background: `linear-gradient(
      132.78deg,
      rgba(40, 139, 169, 0.5) -3.18%,
      rgba(241, 233, 255, 0.5) 75.52%
    )`
      }}
    >
      {/* Image Layer (acts like ::before) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/new-img/webp/hero-effect.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
          zIndex: 0
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1280px] relative z-10">
          {/* FIX 2: Removed items-center from grid so columns can stretch to full height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* FIX 3: Added justify-center and shifted bottom padding here to keep text centered */}
            <div className="flex flex-col items-start justify-center z-10 pb-12 lg:pb-20">
              {/* Top Badge */}
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#34CA8D] bg-[#E5FCFF] shadow-sm">
                {/* <Heart className="w-4 h-4 text-red-500 fill-current" /> */}
                <img src="/new-img/svg/heart.svg" alt="heart_icon" className="w-4 h-4"/>
                <span className="text-xs font-semibold  tracking-wide uppercase
                bg-gradient-to-r from-[#5528A9] to-[#34CA8D] bg-clip-text text-transparent">
                  Your Health, Our Priority
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="mt-6 text-5xl sm:text-6xl font-bold text-gray-900 leading-[1.1]">
                Choose Your Perfect <br />
                <span className="text-[#37BB90]">Health</span> Plan
              </h1>

              {/* Description */}
              <p className="mt-6 text-[18px] text-[#4B4B4B] max-w-xl leading-relaxed">
                Hospital bills, doctor visits, medicines, lab tests — it adds up fast.
                QFit gives your family complete health coverage at a price that
                actually makes sense. No waiting period. No hidden conditions.
              </p>

              {/* Specialists Info */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src="/public/new-img/svg/hero-specialists.svg" alt="" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">22+ Specialists</p>
                  <p className="text-gray-600 text-sm">Available for you 24/7</p>
                </div>
              </div>
            </div>

            {/* FIX 4: Added items-end to push the image container completely to the bottom */}
            <div className="relative w-full flex justify-center lg:justify-end items-end z-10 pt-10 lg:pt-5">
              {/* Main Family Image */}
              <img
                src="/new-img/webp/hero-img.webp"
                alt="QFit Family"
                className="w-full max-w-md lg:max-w-xl object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;