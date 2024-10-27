// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail, MdArrowForward } from 'react-icons/md';
import bgImage from '../../Assets/Images/bg.jpg';

const Login = () => {
  const navigate = useNavigate();

  const handleEmailSignUp = () => {
    navigate('/signup');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute top-4 right-4">
        <button className="text-orange-500 font-medium flex items-center">
          Skip <MdArrowForward className="ml-1 w-5 h-5" />
        </button>
      </div>

      <div className="backdrop-blur-sm bg-white opacity-70 container mx-auto px-4 py-8 md:py-16 max-w-md rounded-lg shadow-lg">
        <div className="space-y-8">
          <div className="space-y-2 mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Welcome to <span className="text-orange-500">KwadaiFoods</span>
            </h1>
            <p className="text-gray-700">
              Eat healthy, Stay healthy
            </p>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
              <FaFacebook className="w-5 h-5" />
              <span>Sign in with Facebook</span>
            </button>

            <button className="w-full bg-white text-gray-700 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 border border-gray-300 hover:bg-gray-50 transition-colors">
              <FcGoogle className="w-5 h-5" />
              <span>Sign in with Google</span>
            </button>

            <button 
              onClick={handleEmailSignUp}
              className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors"
            >
              <MdEmail className="w-5 h-5" />
              <span>Start with email or phone</span>
            </button>
          </div>

          <div className="text-center pt-4">
            <p className="text-gray-600">
              Already have an account?{' '}
              <a href="#" className="text-orange-500 font-medium">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;