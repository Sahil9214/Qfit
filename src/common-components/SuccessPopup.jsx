import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

const SuccessPopup = ({ isOpen, onClose, title, message, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — click closes popup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-md bg-white rounded-[24px] shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* Close icon */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-gray-600" strokeWidth={2.5} />
              </button>

              {/* Body */}
              <div className="px-6 py-8">
                {children ? (
                  children
                ) : (
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                      <CheckCircle2 className="w-9 h-9 text-green-500" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-1">
                        {title || 'Success!'}
                      </h3>
                      <p className="text-[14px] text-gray-500 leading-relaxed">
                        {message || 'Your action was completed successfully.'}
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="mt-2 w-full bg-[#5b21b6] hover:bg-[#4c1d95] text-white font-bold py-3.5 rounded-full transition-colors shadow-sm text-[14px]"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SuccessPopup;
