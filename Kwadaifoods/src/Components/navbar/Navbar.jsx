import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  Close, 
  AccountCircle, 
  Logout,
  Search,
  NotificationsOutlined,
  ShoppingCart
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg fixed top-0 left-0 right-0 z-20"
    >
      <div className="container mx-auto px-4 py-3">
        {/* Main Navigation Bar */}
        <div className="flex justify-between items-center px-16">
          {/* Logo and Menu Button Container */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-orange-500 hover:bg-orange-100 p-2 rounded-full transition-colors lg:hidden"
              onClick={toggleMenu}
            >
              {isOpen ? <Close /> : <Menu />}
            </motion.button>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.h1
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-orange-600"
              >
                Kwadai Foods
              </motion.h1>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile, visible on desktop */}
          <form 
            onSubmit={handleSearch}
            className="hidden lg:flex flex-1 max-w-md mx-4 relative"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-orange-200 focus:outline-none focus:border-orange-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
            </div>
          </form>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="text-orange-600 hover:bg-orange-100 p-2 rounded-full transition-colors relative"
            >
              <NotificationsOutlined />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="text-orange-600 hover:bg-orange-100 p-2 rounded-full transition-colors relative"
            >
              <ShoppingCart />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </motion.button>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <motion.img
                whileHover={{ scale: 1.1, rotate: 5 }}
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-full h-10 w-10 object-cover border-2 border-orange-300"
              />
              <div className="ml-3">
                <h1 className="font-bold capitalize text-orange-800 text-sm">
                  Farion Wick
                </h1>
                <p className="text-orange-600 text-xs">Super Admin</p>
              </div>
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8 }}
              className="text-orange-600 hover:bg-orange-100 p-2 rounded-full transition-colors"
            >
              <AccountCircle />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="text-red-500 hover:bg-red-100 p-2 rounded-full transition-colors"
            >
              <Logout />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-orange-50 shadow-lg p-4 space-y-4 lg:hidden"
          >
            {/* Mobile Search Bar */}
            <form 
              onSubmit={handleSearch}
              className="mb-4"
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-orange-200 focus:outline-none focus:border-orange-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
              </div>
            </form>

            {/* Mobile Navigation Items */}
            <div className="flex items-center justify-between mb-4">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 text-orange-600"
              >
                <NotificationsOutlined />
                <span className="text-sm">Notifications</span>
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">3</span>
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 text-orange-600"
              >
                <ShoppingCart />
                <span className="text-sm">Cart</span>
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">2</span>
              </motion.button>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-full h-10 w-10 object-cover border-2 border-orange-300"
              />
              <div>
                <h1 className="font-bold capitalize text-orange-800 text-sm">
                  Farion Wick
                </h1>
                <p className="text-orange-600 text-xs">Super Admin</p>
              </div>
            </div>

            <Link
              to="/my-orders"
              className={`block px-4 py-2 rounded transition-colors ${
                location.pathname === '/my-orders'
                  ? 'bg-orange-500 text-white'
                  : 'hover:bg-orange-100'
              }`}
            >
              My Orders
            </Link>
            <Link
              to="/my-profile"
              className={`block px-4 py-2 rounded transition-colors ${
                location.pathname === '/my-profile'
                  ? 'bg-orange-500 text-white'
                  : 'hover:bg-orange-100'
              }`}
            >
              My Profile
            </Link>
            <button
              className="w-full px-4 py-2 text-left text-red-500 hover:bg-red-50 rounded transition-colors"
            >
              Log Out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;