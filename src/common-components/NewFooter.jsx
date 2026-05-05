import React from 'react';
import { Link } from 'react-router-dom';

const NewFooter = () => {
  return (
    // Outer wrapper with background color and rounded top corners
    <footer className="bg-[#E5FCFF] py-12 px-6 md:px-12 rounded-t-[2rem] font-sans w-full tracking-[1px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Top Section: Branding, Mission, Contact, and Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-md">
            {/* Logo Area */}
            <div className="flex items-center gap-1 mb-4">
              {/* <span className="text-4xl font-bold text-indigo-900 tracking-tight">
                <span className="text-blue-600">Q</span>FIT
              </span> */}
              <img src="../../public/assets/logos/main-logo.png" alt="logo"  className='w-[140px] h-[70px]'/>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Our mission is to deliver reliable, high-quality care with deep empathy. We combine read more...
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:info@rupeeq.com" className="hover:text-blue-600 transition-colors">info@rupeeq.com</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+919971396361" className="hover:text-blue-600 transition-colors">+91 99713 96361</a>
              </div>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4 pb-2">
             <a href="#" className="w-8 h-8 flex items-center justify-center">
              <img src="/new-img/svg/Facebook.svg" alt="Facebook" />
             </a>
             <a href="#" className="w-8 h-8 flex items-center justify-center">
              <img src="/new-img/svg/Instagram.svg" alt="Instagram" />
             </a>
             <a href="#" className="w-8 h-8 flex items-center justify-center">
              <img src="/new-img/svg/LinkedIn.svg" alt="LinkedIn" />
             </a>
             <a href="#" className="w-8 h-8 flex items-center justify-center">
              <img src="/new-img/svg/YouTube.svg" alt="YouTube" />
             </a>
          </div>
        </div>

        {/* Links Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4 border-t border-[#C9D7D9]">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
            <Link to="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/plans" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Plans</Link>
            {/* <Link to="/compare-plans" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Compare Plans</Link>
            <Link to="/faqs" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">FAQs</Link> */}
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-900 mb-2">Plans</h3>
            <Link to={"/plans/"+""} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">QFit Kavach</Link>
            <Link to="/plans/super" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">QFit Super</Link>
            <Link to="/plans/light" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">QFit Light</Link>
            <Link to="/plans/essential" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">QFit Essential</Link>
            <Link to="/plans/max" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">QFit Max</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
            <Link to="/help" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Help & Support</Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact Us</Link>
            <Link to="/request" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Raise a Request</Link>
            <Link to="/track-benefits" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Track Benefits</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-900 mb-2">Legal</h3>
            <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms & Conditions</Link>
            <Link to="/cancellation-policy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Cancellation Policy</Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Terms */}
        <div className="border-t border-[#C9D7D9] pt-6 mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">Copyright © 2026 | All Rights Reserved</p>
          <Link to="/terms-conditions" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Terms & Conditions</Link>
        </div>

      </div>
    </footer>
  );
};

export default NewFooter;