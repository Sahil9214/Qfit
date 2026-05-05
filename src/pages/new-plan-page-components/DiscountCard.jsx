import React from 'react';

const DiscountCard = () => {
  return (
    <section className="w-full py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        
        {/* Main Card Container */}
        <div 
          className="relative w-full rounded-3xl overflow-hidden flex items-center min-h-[300px] lg:min-h-[360px] shadow-lg"
          // Replace with your actual DNA background image path
          style={{
            backgroundImage: `url('/new-img/webp/discount-effect.webp')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Gradient Overlay for text readability (Dark to transparent) */}
          <div className="absolute inset-0 bg-[linear-gradient(250.43deg,rgba(241,233,255,0.2)_-45.02%,#5528A9_97.95%)]"></div>

          {/* Content Area */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.2] mb-4">
              Get 50% Off on Health <br className="hidden sm:block" /> Plans
            </h2>
            
            <p className="text-purple-100 text-base sm:text-lg mb-8 leading-relaxed max-w-lg">
              Healthcare shouldn't wait for the right moment. Lock in your family's coverage today at half the price.
            </p>
{/*             
            <button className="bg-white text-[#270b61] hover:bg-gray-100 px-8 py-3.5 rounded-full text-sm font-bold transition-colors duration-300 shadow-md">
              Start Your Journey
            </button> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(DiscountCard);