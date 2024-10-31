import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from './Screens/Login/Welcome';
import LoginPage from './Screens/Login/LoginPage';
import SignUp from './Screens/Signup/SignUp';
import ForgotPasswordPage from './Screens/ForgotPassword/ForgotPassword';
import VerificationPage from './Screens/Signup/VerificationPage';
import OtpPage from './Screens/Signup/Otp';
import Dashboard from './Screens/Dashboard/Dashboard';
import Layout from './Components/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signup/verification', 
    element: <VerificationPage />,
  },
  {
    path: '/signup/otp', 
    element: <OtpPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/app',
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;