import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { toast } from 'react-toastify';

const OtpPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);
  const email = 'kwadai@gmail.com';

  const handleNumberPress = (number) => {
    if (activeIndex < code.length) {
      const newCode = [...code];
      newCode[activeIndex] = number;
      setCode(newCode);
      if (activeIndex < code.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }
  };

  const handleBackspace = () => {
    if (activeIndex >= 0) {
      const newCode = [...code];
      newCode[activeIndex] = '';
      setCode(newCode);
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  const handleResendCode = () => {
    toast.info('Verification code resent');
  };

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="mb-8">
        <IoChevronBack className="w-6 h-6 text-gray-800" />
      </button>

      <div className="fixed top-0 right-0 -z-10">
        <div className="w-32 h-32 rounded-full bg-red-100 absolute -top-10 -right-10" />
        <div className="w-40 h-40 rounded-full bg-orange-500 absolute top-0 right-0 opacity-80" />
      </div>

      <div className="max-w-md mx-auto mt-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Verification Code
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Please type the verification code sent to {email}
        </p>

        <div className="flex justify-between gap-4 mb-8">
          {code.map((digit, index) => (
            <div
              key={index}
              className={`w-16 h-16 flex items-center justify-center border rounded-lg text-xl
                ${index === activeIndex ? 'border-orange-500' : 'border-gray-200'}
                ${digit ? 'text-gray-900' : 'text-gray-400'}`}
            >
              {digit}
              {index === activeIndex && !digit && (
                <div className="w-0.5 h-6 bg-orange-500 animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Resend Code Link */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600">
            I don't receive a code! {' '}
            <button 
              onClick={handleResendCode}
              className="text-orange-500 hover:text-orange-600"
            >
              Please resend
            </button>
          </p>
        </div>

        {/* Number Pad */}
        <div className="fixed bottom-0 left-0 right-0 pb-8 px-6 bg-gray-50">
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <button
                  key={number}
                  onClick={() => handleNumberPress(number)}
                  className="h-14 bg-white rounded-lg border border-gray-200 flex flex-col items-center justify-center"
                >
                  <span className="text-lg font-medium">{number}</span>
                  <span className="text-[10px] text-gray-400">
                    {number === 2 ? 'ABC' : 
                     number === 3 ? 'DEF' :
                     number === 4 ? 'GHI' :
                     number === 5 ? 'JKL' :
                     number === 6 ? 'MNO' :
                     number === 7 ? 'PQRS' :
                     number === 8 ? 'TUV' :
                     number === 9 ? 'WXYZ' : ''}
                  </span>
                </button>
              ))}
              <button className="h-14 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                0
              </button>
              <button
                onClick={handleBackspace}
                className="h-14 bg-white rounded-lg border border-gray-200 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;