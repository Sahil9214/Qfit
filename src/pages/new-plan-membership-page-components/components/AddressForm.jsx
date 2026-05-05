import React, { useState, useRef, useEffect } from 'react';
import { Info } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CustomSelect = ({ value, onChange, options, placeholder, error }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full flex items-center justify-between bg-[#f4f5f7] border ${
          error
            ? 'border-red-400 bg-red-50'
            : open
            ? 'border-[#5b21b6] bg-white'
            : 'border-transparent hover:border-gray-300'
        } rounded-[12px] px-4 py-3 text-[14px] outline-none transition-all cursor-pointer`}
      >
        <span className={selected ? 'text-gray-800' : 'text-gray-400'}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`w-3 h-3 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
            open ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 top-[calc(100%+6px)] left-0 w-full bg-white border border-gray-200 rounded-[12px] shadow-lg overflow-hidden">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`px-4 py-3 text-[14px] cursor-pointer transition-colors ${
                value === option.value
                  ? 'bg-[#f3f0ff] text-[#5b21b6] font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const AddressForm = () => {
  const navigate = useNavigate();
  const { planId } = useParams();

  const [formData, setFormData] = useState(() => {
    const saved = sessionStorage.getItem('qfit_address_form');
    return saved ? JSON.parse(saved) : { address: '', state: '', city: '', pincode: '' };
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const maxStep = parseInt(sessionStorage.getItem('qfit_max_step') || '0', 10);
    if (maxStep < 2) {
      navigate(`/plans/membership/${planId}/step-1`, { replace: true });
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('qfit_address_form', JSON.stringify(formData));
  }, [formData]);

  const validate = (data) => {
    const newErrors = {};
    if (!data.address.trim()) {
      newErrors.address = 'Street address is required';
    } else if (data.address.trim().length < 2) {
      newErrors.address = 'Address must be at least 2 characters';
    } else if (data.address.trim().length > 150) {
      newErrors.address = 'Address must not exceed 150 characters';
    }
    if (!data.state) newErrors.state = 'State is required';
    if (!data.city) newErrors.city = 'City is required';
    if (!data.pincode) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(data.pincode)) {
      newErrors.pincode = 'Pincode must be exactly 6 digits';
    }
    return newErrors;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handlePincodeChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 6);
    handleChange('pincode', val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const payload = {
      state: formData.state,
      address: formData.address,
      city: formData.city,
      pincode: formData.pincode,
    };
    try {
      const membershipId = sessionStorage.getItem('qfit_membership_id');
      const response = await fetch(`https://qfit.health/memberships/${membershipId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      sessionStorage.setItem('qfit_max_step', '3');
      navigate(`/plans/membership/${planId}/step-3`);
    } catch (error) {
      console.error(error);
    }
  };

  const inputClass = (field) =>
    `w-full bg-[#f4f5f7] border ${
      errors[field]
        ? 'border-red-400 bg-red-50'
        : 'border-transparent focus:border-[#5b21b6] focus:bg-white'
    } rounded-[12px] px-4 py-3 text-[14px] text-gray-800 outline-none transition-all placeholder:text-gray-400`;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="bg-white rounded-[24px] border border-gray-200 p-6 sm:p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-[22px] sm:text-[24px] font-bold text-[#1a1a1a] mb-2">
            Address Details
          </h2>
          <p className="text-[14px] text-gray-500 leading-relaxed">
            We use your address to connect you with nearby doctors, labs, and pharmacies on the MediBuddy network.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Street Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#1a1a1a]">Street Address</label>
            <input
              type="text"
              placeholder="e.g. 742, Green Park Colony"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className={inputClass('address')}
            />
            {errors.address && (
              <p className="text-red-500 text-[12px]">{errors.address}</p>
            )}
          </div>

          {/* State, City, Pincode Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_140px] gap-4 md:gap-5">

            {/* State */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-[#1a1a1a]">State</label>
              <CustomSelect
                value={formData.state}
                onChange={(val) => handleChange('state', val)}
                placeholder="Select State"
                error={errors.state}
                options={[
                  { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
                  { value: 'Delhi', label: 'Delhi' },
                  { value: 'Karnataka', label: 'Karnataka' },
                  { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
                  { value: 'Maharashtra', label: 'Maharashtra' },
                  { value: 'Rajasthan', label: 'Rajasthan' },
                  { value: 'Tamil Nadu', label: 'Tamil Nadu' },
                  { value: 'Telangana', label: 'Telangana' },
                  { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
                  { value: 'West Bengal', label: 'West Bengal' },
                ]}
              />
              {errors.state && (
                <p className="text-red-500 text-[12px]">{errors.state}</p>
              )}
            </div>

            {/* City */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-[#1a1a1a]">City</label>
              <CustomSelect
                value={formData.city}
                onChange={(val) => handleChange('city', val)}
                placeholder="Select City"
                error={errors.city}
                options={[
                  { value: 'Bengaluru', label: 'Bengaluru' },
                  { value: 'Chennai', label: 'Chennai' },
                  { value: 'Delhi', label: 'Delhi' },
                  { value: 'Hyderabad', label: 'Hyderabad' },
                  { value: 'Indore', label: 'Indore' },
                  { value: 'Jaipur', label: 'Jaipur' },
                  { value: 'Kolkata', label: 'Kolkata' },
                  { value: 'Mumbai', label: 'Mumbai' },
                  { value: 'New Delhi', label: 'New Delhi' },
                  { value: 'Pune', label: 'Pune' },
                ]}
              />
              {errors.city && (
                <p className="text-red-500 text-[12px]">{errors.city}</p>
              )}
            </div>

            {/* Pincode */}
            <div className="flex flex-col gap-1.5 sm:col-span-2 md:col-span-1">
              <label className="text-[13px] font-bold text-[#1a1a1a]">Pincode</label>
              <input
                type="text"
                inputMode="numeric"
                maxLength="6"
                placeholder="000000"
                value={formData.pincode}
                onChange={handlePincodeChange}
                className={inputClass('pincode')}
              />
              {errors.pincode && (
                <p className="text-red-500 text-[12px]">{errors.pincode}</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link
              to={`/plans/membership/${planId}/step-1`}
              className="text-center w-full sm:w-1/2 border border-gray-300 hover:border-[#5b21b6] hover:bg-gray-50 text-[#5b21b6] font-bold py-3.5 rounded-full transition-all"
            >
              Back
            </Link>
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-[#5b21b6] hover:bg-[#4c1d95] text-white font-bold py-3.5 rounded-full transition-colors shadow-sm"
            >
              Next
            </button>
          </div>
        </form>
      </div>

      <div className="bg-[#f8f5ff] rounded-[16px] px-5 py-4 flex items-start sm:items-center gap-3">
        <Info className="w-5 h-5 text-[#5b21b6] flex-shrink-0 mt-0.5 sm:mt-0" strokeWidth={2} />
        <p className="text-[#5b21b6] text-[12px] font-medium leading-relaxed">
          Your address is used for billing and to locate the Clinical Sanctuary branch nearest to your home for premium physical assessments.
        </p>
      </div>
    </div>
  );
};

export default AddressForm;
