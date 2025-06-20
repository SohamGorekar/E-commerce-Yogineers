import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#90d7fd38] text-white p-4 shadow-md z-20">
      <div className="container mx-auto flex justify-between items-center">


        {/* logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Yogineer</span>
        </div>
        

        {/* search */}
        <div className="hidden md:flex items-center bg-[#0096C7] rounded-full px-4 py-2 w-1/3">
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-none outline-none w-full text-white placeholder-white"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        

        {/* cart and profile */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-[#00B4D8] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-[#48CAE4] flex items-center justify-center">
              <span className="font-bold">YM</span>
            </div>
            <span className="hidden md:inline">Yoga Master</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;