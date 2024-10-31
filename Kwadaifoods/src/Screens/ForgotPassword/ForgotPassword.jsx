import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { toast } from 'react-toastify';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    toast.success('Password reset link sent to your email!');
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <button onClick={() => navigate('/login')} className="mb-8">
        <IoChevronBack className="w-6 h-6 text-gray-800" />
      </button>

      <div className="fixed top-0 right-0 -z-10">
        <div className="w-32 h-32 rounded-full bg-red-100 absolute -top-10 -right-10" />
        <div className="w-40 h-40 rounded-full bg-orange-500 absolute top-0 right-0 opacity-80" />
      </div>

      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Reset Password</h1>
        
        <p className="text-gray-600 text-sm mb-8">
          Please enter your email address to request a password reset
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="prelookstudio@gmail.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium uppercase"
          >
            Send New Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;