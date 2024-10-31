import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <div
        className={`transition-all duration-300 ${
          isExpanded ? "ml-64" : "ml-20"
        }`} 
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-4 mt-16">
          {" "}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
