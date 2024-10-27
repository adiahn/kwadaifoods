import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BiUser } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoChevronBack } from 'react-icons/io5';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log(formData);
    toast.success('Account created successfully!');
    // Navigate to login page after successful signup
    navigate('/login');
  };

  const handleSocialSignup = (provider) => {
    console.log(`Signing up with ${provider}`);
    // Implement social signup logic here
  };

  return (
    <div className="min-h-screen flex flex-col bg-white p-6">
      <button onClick={() => navigate('/')} className="mb-8">
        <IoChevronBack className="w-6 h-6 text-gray-800" />
      </button>

      <div className="max-w-md w-full mx-auto space-y-8">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-900">Sign Up</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label 
                htmlFor="fullName" 
                className="block text-sm text-gray-500 flex items-center"
              >
                <BiUser className="w-4 h-4 mr-1" />
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="block text-sm text-gray-500 flex items-center"
              >
                <HiOutlineMail className="w-4 h-4 mr-1" />
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="password" 
                className="block text-sm text-gray-500 flex items-center"
              >
                <RiLockPasswordLine className="w-4 h-4 mr-1" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? 
                    <MdVisibilityOff className="w-5 h-5" /> : 
                    <MdVisibility className="w-5 h-5" />
                  }
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors"
            >
              SIGN UP
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button 
                onClick={() => navigate('/login')}
                className="text-orange-500"
              >
                Login
              </button>
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Sign up with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => handleSocialSignup('facebook')}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FaFacebook className="w-6 h-6 text-blue-600" />
              <span className="ml-2">FACEBOOK</span>
            </button>
            <button 
              onClick={() => handleSocialSignup('google')}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FcGoogle className="w-6 h-6" />
              <span className="ml-2">GOOGLE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;