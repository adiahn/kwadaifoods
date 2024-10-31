import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { toast } from 'react-toastify';

const VerificationPage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('+1');
  const [selectedCountry, setSelectedCountry] = useState({
    code: '+1',
    flag: '🇺🇸',
    name: 'United States'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your verification logic here
    console.log('Verifying phone number:', phoneNumber);
    toast.success('Verification code sent!');
    // Navigate to verification code input page or handle next steps
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <button onClick={() => navigate(-1)} className="mb-8">
        <IoChevronBack className="w-6 h-6 text-gray-800" />
      </button>

      <div className="fixed top-0 right-0 -z-10">
        <div className="w-32 h-32 rounded-full bg-red-100 absolute -top-10 -right-10" />
        <div className="w-40 h-40 rounded-full bg-orange-500 absolute top-0 right-0 opacity-80" />
      </div>

      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Registration</h1>
        
        <p className="text-gray-500 text-sm mb-8">
          Enter your phone number to verify your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-orange-500">
              <button
                type="button"
                className="flex items-center px-3 py-3 space-x-2 border-r border-gray-200"
              >
                <img 
                  src="/api/placeholder/24/16" 
                  alt="US Flag"
                  className="w-6 h-4 object-cover rounded"
                />
                <span className="text-gray-600 text-sm">🇺🇸</span>
              </button>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="(+1) 230-333-0181"
                className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-800"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            onClick={() => navigate('/signup/otp')}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationPage;