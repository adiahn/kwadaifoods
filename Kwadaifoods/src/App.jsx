import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from './Screens/Login/Welcome';
import LoginPage from './Screens/Login/LoginPage';
import SignUp from './Screens/Signup/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,  // Changed to Welcome page as initial screen
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
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