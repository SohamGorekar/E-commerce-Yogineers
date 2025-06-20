// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-[#90d7fd38] text-black p-4 shadow-md z-20">
//       <div className="container mx-auto flex justify-between items-center">

//         {/* logo */}
//         <div className="flex items-center space-x-2">
//           <span className="text-xl font-bold">Yogineer</span>
//         </div>

//         {/* search */}
//         <div className="hidden md:flex items-center bg-[#90d7fd38] rounded-full px-4 py-2 w-1/3 border-2">
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent border-none outline-none w-full text-black placeholder-black"
//           />
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//         </div>

//         {/* cart and profile */}
//         <div className="flex items-center space-x-6">
//           <div className="relative">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//             <span className="absolute -top-2 -right-2 bg-[#00B4D8] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">3</span>
//           </div>

//           <div className="flex items-center space-x-2">
//             <div className="h-10 w-10 rounded-full bg-[#48CAE4] flex items-center justify-center">
//               <span className="font-bold">YM</span>
//             </div>
//             <span className="hidden md:inline">Yoga Master</span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { Search, ShoppingCart, Menu, User } from "lucide-react";
// import { useState } from "react";

// const Navbar = () => {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <h1 className="text-2xl font-bold text-blue-600">YOGINEERS</h1>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6">
//             <div className="relative">
//               <button
//                 onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
//                 className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
//               >
//                 <span>Categories</span>
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//               {isCategoriesOpen && (
//                 <div className="absolute left-0 mt-2 w-96 bg-white rounded-md shadow-lg p-4 z-50">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="col-span-1 bg-gray-50 rounded-md p-4">
//                       <h3 className="text-lg font-medium text-gray-900">
//                         Electronics Hub
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         Premium electrical products for home and office
//                       </p>
//                     </div>
//                     <div className="col-span-1 space-y-3">
//                       <a
//                         href="/home-appliances"
//                         className="block p-2 rounded hover:bg-gray-100"
//                       >
//                         <h4 className="text-sm font-medium">Home Appliances</h4>
//                         <p className="text-xs text-gray-500">
//                           Refrigerators, washing machines, ACs and more
//                         </p>
//                       </a>
//                       <a
//                         href="/kitchen-appliances"
//                         className="block p-2 rounded hover:bg-gray-100"
//                       >
//                         <h4 className="text-sm font-medium">
//                           Kitchen Appliances
//                         </h4>
//                         <p className="text-xs text-gray-500">
//                           Mixers, microwaves, induction cooktops
//                         </p>
//                       </a>
//                       <a
//                         href="/tools"
//                         className="block p-2 rounded hover:bg-gray-100"
//                       >
//                         <h4 className="text-sm font-medium">Power Tools</h4>
//                         <p className="text-xs text-gray-500">
//                           Drills, saws, and professional equipment
//                         </p>
//                       </a>
//                       <a
//                         href="/lighting"
//                         className="block p-2 rounded hover:bg-gray-100"
//                       >
//                         <h4 className="text-sm font-medium">
//                           Lighting Solutions
//                         </h4>
//                         <p className="text-xs text-gray-500">
//                           LED bulbs, fixtures, and smart lighting
//                         </p>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <a
//               href="/new-arrivals"
//               className="text-gray-700 hover:text-blue-600"
//             >
//               New Arrivals
//             </a>
//             <a href="/sale" className="text-gray-700 hover:text-blue-600">
//               Sale
//             </a>
//             <a href="/about" className="text-gray-700 hover:text-blue-600">
//               About
//             </a>
//           </nav>

//           {/* Search Bar */}
//           <div className="hidden md:flex flex-1 max-w-sm mx-4">
//             <div className="relative w-full">
//               <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </div>

//           {/* Right side icons */}
//           <div className="flex items-center space-x-4">
//             {/* User Account - Now with proper dropdown */}
//             <div className="relative hidden md:block">
//               <button
//                 onClick={() => setIsProfileOpen(!isProfileOpen)}
//                 className="p-2 text-gray-700 hover:text-blue-600"
//               >
//                 <User className="h-5 w-5" />
//               </button>
//               {isProfileOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Sign In
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Create Account
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     My Orders
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Settings
//                   </a>
//                 </div>
//               )}
//             </div>

//             {/* Shopping Cart */}
//             <button className="p-2 text-gray-700 hover:text-blue-600 relative">
//               <ShoppingCart className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
//                 0
//               </span>
//             </button>

//             {/* Mobile Menu - Now with state */}
//             <div className="relative md:hidden">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="p-2 text-gray-700 hover:text-blue-600"
//               >
//                 <Menu className="h-5 w-5" />
//               </button>
//               {isMobileMenuOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Categories
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     New Arrivals
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Sale
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     About
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Sign In
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { ChevronDown, Menu, X, ShoppingCart, User, Search } from 'lucide-react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     {
//       title: 'Electronics',
//       items: [
//         { name: 'Smartphones', description: 'Latest mobile devices' },
//         { name: 'Laptops', description: 'High-performance computers' },
//         { name: 'Tablets', description: 'Portable computing' },
//         { name: 'Smart Watches', description: 'Wearable technology' },
//       ]
//     },
//     {
//       title: 'Home Appliances',
//       items: [
//         { name: 'Kitchen Appliances', description: 'Smart cooking solutions' },
//         { name: 'Cleaning Devices', description: 'Automated home cleaning' },
//         { name: 'Air Purifiers', description: 'Clean air technology' },
//         { name: 'Smart Home', description: 'Connected living' },
//       ]
//     },
//     {
//       title: 'Audio & Video',
//       items: [
//         { name: 'Headphones', description: 'Premium sound quality' },
//         { name: 'Speakers', description: 'Wireless audio systems' },
//         { name: 'Smart TVs', description: 'Entertainment displays' },
//         { name: 'Gaming', description: 'Gaming accessories' },
//       ]
//     },
//     {
//       title: 'Electric Vehicles',
//       items: [
//         { name: 'E-Bikes', description: 'Electric bicycles' },
//         { name: 'Scooters', description: 'Urban mobility' },
//         { name: 'Chargers', description: 'Charging solutions' },
//         { name: 'Accessories', description: 'EV components' },
//       ]
//     }
//   ];

//   return (
//     <nav className="bg-black text-white relative z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold text-white">YOGINEER</h1>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navItems.map((item, index) => (
//                 <div key={index} className="relative group">
//                   <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 flex items-center">
//                     {item.title}
//                     <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
//                   </button>
                  
//                   {/* Dropdown Menu */}
//                   <div className="absolute left-0 mt-2 w-80 bg-gray-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                     <div className="p-4">
//                       <div className="grid grid-cols-1 gap-2">
//                         {item.items.map((subItem, subIndex) => (
//                           <a
//                             key={subIndex}
//                             href="#"
//                             className="flex flex-col p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
//                           >
//                             <span className="font-medium text-white">{subItem.name}</span>
//                             <span className="text-sm text-gray-400 mt-1">{subItem.description}</span>
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
              
//               {/* Additional Nav Items */}
//               <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200">
//                 Deals
//               </a>
//               <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200">
//                 Support
//               </a>
//             </div>
//           </div>

//           {/* Right side icons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200">
//               <Search className="h-5 w-5" />
//             </button>
//             <button className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200">
//               <User className="h-5 w-5" />
//             </button>
//             <button className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 relative">
//               <ShoppingCart className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                 3
//               </span>
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="block h-6 w-6" />
//               ) : (
//                 <Menu className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
//             {navItems.map((item, index) => (
//               <div key={index} className="space-y-1">
//                 <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
//                   {item.title}
//                 </button>
//                 <div className="pl-4 space-y-1">
//                   {item.items.map((subItem, subIndex) => (
//                     <a
//                       key={subIndex}
//                       href="#"
//                       className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
//                     >
//                       {subItem.name}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             ))}
//             <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//               Deals
//             </a>
//             <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//               Support
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ShoppingCart, User, Search } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check window size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1150);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    {
      title: 'Electronics',
      items: [
        { name: 'Smartphones', description: 'Latest mobile devices' },
        { name: 'Laptops', description: 'High-performance computers' },
        { name: 'Tablets', description: 'Portable computing' },
        { name: 'Smart Watches', description: 'Wearable technology' },
      ]
    },
    {
      title: 'Home Appliances',
      items: [
        { name: 'Kitchen Appliances', description: 'Smart cooking solutions' },
        { name: 'Cleaning Devices', description: 'Automated home cleaning' },
        { name: 'Air Purifiers', description: 'Clean air technology' },
        { name: 'Smart Home', description: 'Connected living' },
      ]
    },
    {
      title: 'Audio & Video',
      items: [
        { name: 'Headphones', description: 'Premium sound quality' },
        { name: 'Speakers', description: 'Wireless audio systems' },
        { name: 'Smart TVs', description: 'Entertainment displays' },
        { name: 'Gaming', description: 'Gaming accessories' },
      ]
    },
    {
      title: 'Electric Vehicles',
      items: [
        { name: 'E-Bikes', description: 'Electric bicycles' },
        { name: 'Scooters', description: 'Urban mobility' },
        { name: 'Chargers', description: 'Charging solutions' },
        { name: 'Accessories', description: 'EV components' },
      ]
    }
  ];

  return (
    <nav className="bg-[#046694] text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className={`flex-shrink-0 transition-all duration-300 ${(isSearchOpen && !isMobileView) ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <h1 className="text-2xl font-bold text-white">YOGINEER</h1>
          </div>

          {/* Desktop Navigation - hidden when in mobile view (<= 1150px) */}
          {!isMobileView && (
            <div className="ml-10 flex items-baseline space-x-4">
              <div className={`transition-all duration-300 ${(isSearchOpen && !isMobileView) ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                {navItems.map((item, index) => (
                  <div key={index} className="relative group inline-block">
                    <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 flex items-center">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-2 w-80 bg-gray-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href="#"
                              className="flex flex-col p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                            >
                              <span className="font-medium text-white">{subItem.name}</span>
                              <span className="text-sm text-gray-400 mt-1">{subItem.description}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Additional Nav Items */}
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200">
                  Deals
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200">
                  Support
                </a>
              </div>
            </div>
          )}

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search - different behavior based on mobile/desktop */}
            {!isMobileView ? (
              <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-10'}`}>
                {isSearchOpen ? (
                  <div className="flex items-center w-full">
                    <input
                      type="text"
                      placeholder="Search..."
                      autoFocus
                      className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                      onClick={() => setIsSearchOpen(false)}
                      className="bg-gray-700 hover:bg-gray-600 ml-0.5 px-3 py-2 rounded-r-md transition-colors duration-200"
                    >
                      <X className="h-6.8 w-6.8" />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                )}
              </div>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
              >
                <Search className="h-5 w-5" />
              </button>
            )}

            {/* Other icons - shown when not in mobile view or when search is closed */}
            {(!isMobileView || !isSearchOpen) && (
              <div className={`flex items-center space-x-4 transition-all duration-300 ${(isSearchOpen && !isMobileView) ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                {!isMobileView && (
                  <>
                    <button className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200">
                      <User className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 relative">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        3
                      </span>
                    </button>
                  </>
                )}
                
                {/* Mobile menu button - shown only in mobile view (<= 1150px) */}
                {isMobileView && (
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    {isMobileMenuOpen ? (
                      <X className="block h-6 w-6" />
                    ) : (
                      <Menu className="block h-6 w-6" />
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu - shown when in mobile view (<= 1150px) and menu is open */}
      {isMobileView && isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            {/* Mobile Search - shown only if toggled */}
            {isSearchOpen && (
              <div className="flex items-center px-2 mb-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-r-md"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}
            
            {navItems.map((item, index) => (
              <div key={index} className="space-y-1">
                <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                  {item.title}
                </button>
                <div className="pl-4 space-y-1">
                  {item.items.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Deals
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Support
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;