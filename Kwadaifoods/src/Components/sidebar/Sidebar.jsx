import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Person, 
  LocationOn, 
  Payment, 
  ContactMail, 
  Settings, 
  HelpOutline, 
  ExitToApp,
  ChevronLeft,
  ChevronRight 
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsExpanded(false);
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  const menuItems = [
    { 
      name: 'My Orders', 
      path: '/app/dashboard', 
      icon: <Home />,
      section: 'main'
    },
    { 
      name: 'My Profile', 
      path: '/my-profile', 
      icon: <Person />,
      section: 'main'
    },
    { 
      name: 'Delivery Address', 
      path: '/delivery-address', 
      icon: <LocationOn />,
      section: 'main'
    },
    { 
      name: 'Payment Methods', 
      path: '/payment-methods', 
      icon: <Payment />,
      section: 'main'
    },
    { 
      name: 'Contact Us', 
      path: '/contact', 
      icon: <ContactMail />,
      section: 'support'
    },
    { 
      name: 'Settings', 
      path: '/settings', 
      icon: <Settings />,
      section: 'support'
    },
    { 
      name: 'Helps & FAQs', 
      path: '/faqs', 
      icon: <HelpOutline />,
      section: 'support'
    },
  ];

  const sidebarVariants = {
    expanded: {
      width: "240px",
      transition: {
        type: "spring",
        damping: 20,
      }
    },
    collapsed: {
      width: "72px",
      transition: {
        type: "spring",
        damping: 20,
      }
    }
  };

  const MenuSection = ({ title, items }) => (
    <div className="mb-4">
      {isExpanded && (
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider"
        >
          {title}
        </motion.h3>
      )}
      <ul className="space-y-1">
        {items.map((item) => (
          <motion.li
            key={item.name}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to={item.path}
              className={`flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`min-w-[24px] flex items-center justify-center`}
              >
                {item.icon}
              </motion.div>
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="whitespace-nowrap text-sm font-medium"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {/* Blur Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={sidebarVariants}
        className={`fixed top-0 left-0 h-full z-30 bg-white shadow-xl flex flex-col
          ${isMobile ? 'translate-x-0' : ''}`}
      >
        {/* Toggle Button */}
        <div className="h-16 px-4 flex items-center justify-end border-b border-gray-100">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg hover:bg-orange-50 text-orange-500"
          >
            {isExpanded ? <ChevronLeft /> : <ChevronRight />}
          </motion.button>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 overflow-y-auto pt-4 pb-6 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          <MenuSection 
            title="Main Menu" 
            items={menuItems.filter(item => item.section === 'main')} 
          />
          
          <div className="mx-4 my-4 border-t border-gray-100" />
          
          <MenuSection 
            title="Support" 
            items={menuItems.filter(item => item.section === 'support')} 
          />
        </div>

        {/* Logout Button */}
        <motion.div 
          className="mt-auto px-2 pb-4 pt-2 border-t border-gray-100"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to="/login"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 
              bg-red-50 text-red-600 hover:bg-red-100"
          >
            <div className="min-w-[24px] flex items-center justify-center">
              <ExitToApp />
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap text-sm font-medium"
                >
                  Log Out
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </motion.div>
      </motion.aside>
    </>
  );
};

export default SideBar;