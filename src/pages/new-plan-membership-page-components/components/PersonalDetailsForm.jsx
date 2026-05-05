import React, { useState, useRef, useEffect } from 'react';
import { Lock } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

const PersonalDetailsForm = () => {
  const navigate = useNavigate();
  const { planId } = useParams();

  const [formData, setFormData] = useState(() => {
    const saved = sessionStorage.getItem('qfit_personal_form');
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...parsed, dob: parsed.dob ? new Date(parsed.dob) : null };
    }
    return { full_name: '', contact_number: '', dob: null, gender: '', email: '' };
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    sessionStorage.setItem('qfit_personal_form', JSON.stringify({
      ...formData,
      dob: formData.dob ? formData.dob.toISOString() : null,
    }));
  }, [formData]);

  const validate = (data) => {
    const newErrors = {};
    if (!data.full_name.trim()) newErrors.full_name = 'Full name is required';
    if (!data.contact_number.trim()) {
      newErrors.contact_number = 'Contact number is required';
    } else if (!/^[6-9]\d{9}$/.test(data.contact_number)) {
      newErrors.contact_number = 'Invalid number';
    }
    if (!data.dob) newErrors.dob = 'Date of birth is required';
    if (!data.gender) newErrors.gender = 'Gender is required';
    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'This email is invalid';
    }
    return newErrors;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleContactChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    handleChange('contact_number', val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const dob = formData.dob;
    const payload = {
      full_name: formData.full_name,
      contact_number: formData.contact_number,
      dob: `${dob.getFullYear()}-${String(dob.getMonth() + 1).padStart(2, '0')}-${String(dob.getDate()).padStart(2, '0')}`,
      gender: formData.gender,
      email: formData.email,
    };
    try {
      const existingId = sessionStorage.getItem('qfit_membership_id');
      const url = existingId
        ? `https://qfit.health/memberships/${existingId}`
        : 'https://qfit.health/memberships';
      const response = await fetch(url, {
        method: existingId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!existingId && data.id) {
        sessionStorage.setItem('qfit_membership_id', data.id);
      }
      sessionStorage.setItem('qfit_max_step', '2');
      navigate(`/plans/membership/${planId}/step-2`);
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
            Membership Application
          </h2>
          <p className="text-[14px] text-gray-500">
            Tell us a little about yourself to get started. Takes under 2 minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#1a1a1a]">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={formData.full_name}
              onChange={(e) => handleChange('full_name', e.target.value)}
              className={inputClass('full_name')}
            />
            {errors.full_name && (
              <p className="text-red-500 text-[12px]">{errors.full_name}</p>
            )}
          </div>

          {/* Contact Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#1a1a1a]">Contact Number</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.contact_number}
              onChange={handleContactChange}
              inputMode="numeric"
              maxLength="10"
              className={inputClass('contact_number')}
            />
            {errors.contact_number && (
              <p className="text-red-500 text-[12px]">{errors.contact_number}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#1a1a1a]">Date of Birth</label>
            <div
              className={`w-full bg-[#f4f5f7] border ${
                errors.dob
                  ? 'border-red-400 bg-red-50'
                  : 'border-transparent focus-within:border-[#5b21b6] focus-within:bg-white'
              } rounded-[12px] px-4 py-3 transition-all`}
            >
              <DatePicker
                selected={formData.dob}
                onChange={(date) => handleChange('dob', date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/YYYY"
                maxDate={new Date()}
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                onKeyDown={(e) => e.preventDefault()}
                className="w-full bg-transparent text-[14px] text-gray-800 outline-none placeholder:text-gray-400 cursor-pointer"
                wrapperClassName="w-full"
              />
            </div>
            {errors.dob && (
              <p className="text-red-500 text-[12px]">{errors.dob}</p>
            )}
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#1a1a1a]">Gender</label>
            <CustomSelect
              value={formData.gender}
              onChange={(val) => handleChange('gender', val)}
              placeholder="Select Gender"
              error={errors.gender}
              options={[
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
                { value: 'Other', label: 'Other' },
              ]}
            />
            {errors.gender && (
              <p className="text-red-500 text-[12px]">{errors.gender}</p>
            )}
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-[13px] font-bold text-[#1a1a1a]">Email Address</label>
            <input
              type="email"
              placeholder="e.g. rahul@email.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={inputClass('email')}
            />
            {errors.email && (
              <p className="text-red-500 text-[12px]">{errors.email}</p>
            )}
          </div>

          {/* Submit */}
          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full bg-[#5b21b6] hover:bg-[#4c1d95] text-white font-bold py-3.5 rounded-full transition-colors shadow-sm"
            >
              Next
            </button>
          </div>
        </form>
      </div>

      <div className="bg-[#f8f5ff] rounded-[16px] px-5 py-4 flex items-start sm:items-center gap-3">
        <Lock className="w-4 h-4 text-[#5b21b6] flex-shrink-0 mt-0.5 sm:mt-0" strokeWidth={2.5} />
        <p className="text-[#5b21b6] text-[12px] font-medium leading-relaxed">
          Your details are encrypted and never shared with third parties without your consent.
        </p>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
