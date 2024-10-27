import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoChevronBack } from 'react-icons/io5';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
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
    // Add your login logic here
    console.log(formData);
    toast.success('Login successful!');
    // Navigate to dashboard or home page after successful login
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Implement social login logic here
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <button onClick={() => navigate('/')} className="mb-8">
        <IoChevronBack className="w-6 h-6 text-gray-800" />
      </button>

      <div className="fixed top-0 right-0 -z-10">
        <div className="w-32 h-32 rounded-full bg-red-100 absolute -top-10 -right-10" />
        <div className="w-40 h-40 rounded-full bg-orange-500 absolute top-0 right-0 opacity-80" />
      </div>

      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm text-gray-600">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Your email or phone"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? 
                  <AiOutlineEyeInvisible className="w-5 h-5" /> : 
                  <AiOutlineEye className="w-5 h-5" />
                }
              </button>
            </div>
          </div>

          <div className="text-right">
            <button className="text-orange-500 text-sm">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            LOGIN
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button 
              onClick={() => navigate('/signup')}
              className="text-orange-500 font-medium"
            >
              Sign Up
            </button>
          </p>
        </div>

        <div className="mt-8 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">
              Sign in with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <button 
            onClick={() => handleSocialLogin('facebook')}
            className="flex items-center justify-center px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <FaFacebook className="w-5 h-5 text-blue-600" />
            <span className="ml-3 font-medium">FACEBOOK</span>
          </button>
          <button 
            onClick={() => handleSocialLogin('google')}
            className="flex items-center justify-center px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <FcGoogle className="w-5 h-5" />
            <span className="ml-3 font-medium">GOOGLE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;