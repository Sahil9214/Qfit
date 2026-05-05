import React, { useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';

const ErrorShow = ({ open, message, onClose, duration = 4000 }) => {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  return (
    <div
      className={`fixed top-5 right-5 z-[9999] flex items-start gap-3 bg-red-600 text-white px-4 py-3.5 rounded-[14px] shadow-xl max-w-sm w-full transition-all duration-300 ease-in-out ${
        open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}
      role="alert"
      aria-live="assertive"
    >
      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2} />
      <p className="text-[13px] font-medium leading-relaxed flex-1">{message}</p>
      <button
        type="button"
        onClick={onClose}
        className="flex-shrink-0 hover:opacity-70 transition-opacity mt-0.5"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default ErrorShow;
