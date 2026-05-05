import React, { useState, useRef, useEffect } from 'react';
import { Lock } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import PaymentGatewayPopup from '../../../common-components/PaymentGatewayPopup';
import ErrorShow from '../../../common-components/ErrorShow';

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
        className={`w-full flex items-center justify-between bg-[#f4f5f7] border ${error
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
          className={`w-3 h-3 text-gray-500 transition-transform duration-200 flex-shrink-0 ${open ? 'rotate-180' : ''
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
              className={`px-4 py-3 text-[14px] cursor-pointer transition-colors ${value === option.value
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

const NomineeAndReview = () => {
  const navigate = useNavigate();
  const { planId } = useParams();


  const [formData, setFormData] = useState(() => {
    const saved = sessionStorage.getItem('qfit_nominee_form');
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...parsed, nominee_dob: parsed.nominee_dob ? new Date(parsed.nominee_dob) : null };
    }
    return { nominee_name: '', nominee_dob: null, nominee_gender: '', nominee_relationship: '' };
  });

  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [paymentLink, setPaymentLink] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const maxStep = parseInt(sessionStorage.getItem('qfit_max_step') || '0', 10);
    if (maxStep < 3) {
      navigate(`/plans/membership/${planId}/step-${maxStep < 2 ? '1' : '2'}`, { replace: true });
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('qfit_nominee_form', JSON.stringify({
      ...formData,
      nominee_dob: formData.nominee_dob ? formData.nominee_dob.toISOString() : null,
    }));
  }, [formData]);

  const validate = (data) => {
    const newErrors = {};
    if (!data.nominee_name.trim()) newErrors.nominee_name = 'Nominee name is required';
    if (!data.nominee_dob) newErrors.nominee_dob = 'Date of birth is required';
    if (!data.nominee_gender) newErrors.nominee_gender = 'Gender is required';
    if (!data.nominee_relationship) newErrors.nominee_relationship = 'Relationship is required';
    return newErrors;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const dob = formData.nominee_dob;
    const payload = {
      nominee_name: formData.nominee_name,
      nominee_dob: `${dob.getFullYear()}-${String(dob.getMonth() + 1).padStart(2, '0')}-${String(dob.getDate()).padStart(2, '0')}`,
      nominee_gender: formData.nominee_gender,
      nominee_relationship: formData.nominee_relationship,
    };
    try {
      setLoading(true);
      const membershipId = sessionStorage.getItem('qfit_membership_id') || planId;
      const response = await fetch(`https://qfit.health/memberships/${membershipId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Membership update failed: ${response.status} ${response.statusText}`);
      }

      const savedPersonal = JSON.parse(sessionStorage.getItem('qfit_personal_form') || '{}');
      const savedAddress = JSON.parse(sessionStorage.getItem('qfit_address_form') || '{}');
      const personalDob = savedPersonal.dob ? new Date(savedPersonal.dob) : null;
      const paymentPayload = {
        packageId: planId.toString(),
        name: savedPersonal.full_name || '',
        dob: personalDob
          ? `${personalDob.getFullYear()}-${String(personalDob.getMonth() + 1).padStart(2, '0')}-${String(personalDob.getDate()).padStart(2, '0')}`
          : '',
        gender: savedPersonal.gender || '',
        mobileNumber: savedPersonal.contact_number || '',
        email: savedPersonal.email || '',
        address: savedAddress.address || '',
        city: savedAddress.city || '',
        state: savedAddress.state || '',
        pincode: savedAddress.pincode || '',
        nomineeDetails: {
          nominee_name: formData.nominee_name,
          nominee_dob: payload.nominee_dob,
          nominee_gender: formData.nominee_gender,
          nominee_relationship: formData.nominee_relationship,
        }
      };

      await medibuddyAPI(paymentPayload);

    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Something went wrong. Please try again.');
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  const medibuddyAPI = async (payload) => {
    const response = await fetch(
      'https://bifrost-prod.medibuddy.in/sdk/affinity/createAffinityUserOrder',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'corporateid': '11335464',
          'x-api-token': 'f6f636460be262be7b890e29a81176bec97649eb05762c9936a1d943c5240c52',
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Medibuddy API failed: ${response.status} ${response.statusText}`);
    }

    setPaymentLink(data?.data?.data);
    setShowPaymentPopup(true);
    return data;
  };

  const inputClass = (field) =>
    `w-full bg-[#f4f5f7] border ${errors[field]
      ? 'border-red-400 bg-red-50'
      : 'border-transparent focus:border-[#5b21b6] focus:bg-white'
    } rounded-[12px] px-4 py-3 text-[14px] text-gray-800 outline-none transition-all placeholder:text-gray-400`;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="bg-white rounded-[24px] border border-gray-200 p-6 sm:p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-[22px] sm:text-[24px] font-bold text-[#1a1a1a] mb-2">
            Nominee Details
          </h2>
          <p className="text-[14px] text-gray-500 leading-relaxed">
            Add a nominee who will be notified in case of hospitalisation or a policy update.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

          {/* Nominee Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#1a1a1a]">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Priya Sharma"
              value={formData.nominee_name}
              onChange={(e) => handleChange('nominee_name', e.target.value)}
              className={inputClass('nominee_name')}
            />
            {errors.nominee_name && (
              <p className="text-red-500 text-[12px]">{errors.nominee_name}</p>
            )}
          </div>

          {/* Nominee Date of Birth */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#1a1a1a]">Date of Birth</label>
            <div
              className={`w-full bg-[#f4f5f7] border ${errors.nominee_dob
                  ? 'border-red-400 bg-red-50'
                  : 'border-transparent focus-within:border-[#5b21b6] focus-within:bg-white'
                } rounded-[12px] px-4 py-3 transition-all`}
            >
              <DatePicker
                selected={formData.nominee_dob}
                onChange={(date) => handleChange('nominee_dob', date)}
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
            {errors.nominee_dob && (
              <p className="text-red-500 text-[12px]">{errors.nominee_dob}</p>
            )}
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#1a1a1a]">Gender</label>
            <CustomSelect
              value={formData.nominee_gender}
              onChange={(val) => handleChange('nominee_gender', val)}
              placeholder="Select Gender"
              error={errors.nominee_gender}
              options={[
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
                { value: 'Others', label: 'Others' },
              ]}
            />
            {errors.nominee_gender && (
              <p className="text-red-500 text-[12px]">{errors.nominee_gender}</p>
            )}
          </div>

          {/* Relationship */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#1a1a1a]">Relationship</label>
            <CustomSelect
              value={formData.nominee_relationship}
              onChange={(val) => handleChange('nominee_relationship', val)}
              placeholder="Select Relationship"
              error={errors.nominee_relationship}
              options={[
                { value: 'spouse', label: 'Spouse' },
                { value: 'child', label: 'Child' },
                { value: 'parent', label: 'Parent' },
                { value: 'sibling', label: 'Sibling' },
                { value: 'other', label: 'Other' },
              ]}
            />
            {errors.nominee_relationship && (
              <p className="text-red-500 text-[12px]">{errors.nominee_relationship}</p>
            )}
          </div>

          {/* Terms & Conditions */}
          <div className="md:col-span-2 mt-2 flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="w-5 h-5 mt-0.5 rounded border-gray-300 text-[#5b21b6] focus:ring-[#5b21b6] cursor-pointer accent-[#5b21b6] flex-shrink-0"
            />
            <label htmlFor="terms" className="text-[13px] text-gray-600 leading-relaxed cursor-pointer select-none">
              I hereby declare that the information provided is true and I accept the{' '}
              <span className="text-[#5b21b6] font-medium hover:underline">Terms & Conditions</span> and{' '}
              <span className="text-[#5b21b6] font-medium hover:underline">Privacy Policy</span> of Clinical Sanctuary and QFit Membership.
            </label>
          </div>

          {/* Action Buttons */}
          <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Link
              to={`/plans/membership/${planId}/step-2`}
              className="text-center w-full sm:w-1/2 border border-gray-300 hover:border-[#5b21b6] hover:bg-gray-50 text-[#5b21b6] font-bold py-3.5 rounded-full transition-all"
            >
              Back
            </Link>
            <button
              type="submit"
              disabled={!isChecked || loading}
              className={`w-full sm:w-1/2 text-white font-bold py-3.5 rounded-full transition-colors shadow-sm ${isChecked && !loading
                  ? 'bg-[#5b21b6] hover:bg-[#4c1d95] cursor-pointer'
                  : 'bg-[#5b21b6]/40 cursor-not-allowed opacity-60'
                }`}
            >
              {loading ? 'Pending...' : 'Proceed to Payment'}
            </button>
          </div>
        </form>
      </div>

      <div className="bg-[#f8f5ff] rounded-[16px] px-5 py-4 flex items-start sm:items-center gap-3">
        <Lock className="w-5 h-5 text-[#5b21b6] flex-shrink-0 mt-0.5 sm:mt-0" strokeWidth={2} />
        <p className="text-[#5b21b6] text-[12px] font-medium leading-relaxed">
          Your data is protected with 256-bit AES encryption. We never share your health profile without consent.
        </p>
      </div>

      <PaymentGatewayPopup
        isOpen={showPaymentPopup}
        paymentLink={paymentLink}
        onClose={() => setShowPaymentPopup(false)}
      />

      <ErrorShow
        open={showError}
        message={errorMessage}
        onClose={() => setShowError(false)}
      />
    </div>
  );
};

export default NomineeAndReview;
