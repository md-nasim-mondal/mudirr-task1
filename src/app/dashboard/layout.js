"use client";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const DashboardLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Disable scrolling when sidebar is open
  useEffect(() => {
    if (showSidebar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showSidebar]);

  // Automatically set showSidebar to false on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowSidebar(false); // Close sidebar on large screens
      }
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Check the screen size on initial load
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='flex relative'>
      {/* Sidebar for large screens */}
      <div className='hidden lg:block'>
        <Sidebar />
      </div>

      {/* Main content */}
      <div
        className={`flex-1 relative ${showSidebar ? "pointer-events-none" : "pointer-events-auto"}`}>
        {children}
      </div>
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10'></div>
      )}

      {/* Hamburger menu for small screens */}
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className='lg:hidden absolute top-2 right-2 z-20'>
        <GiHamburgerMenu className='text-2xl' />
      </div>

      {/* Sidebar for small screens */}
      {showSidebar && (
        <div className='lg:hidden fixed top-0 left-0 w-full h-screen bg-[#F4F6FA] z-30 p-6 overflow-y-auto'>
          <div
            onClick={() => setShowSidebar(false)}
            className='text-end text-xl cursor-pointer'>
            X
          </div>
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
