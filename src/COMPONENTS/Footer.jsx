import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1daaf7c5] text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Yogineer</h3>
            <p className="text-[#CAF0F8]">Elevate your practice with our premium yoga products.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#CAF0F8] hover:text-white">All Products</a></li>
              <li><a href="#" className="text-[#CAF0F8] hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="text-[#CAF0F8] hover:text-white">Best Sellers</a></li>
              <li><a href="#" className="text-[#CAF0F8] hover:text-white">Sale Items</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Practice</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#CAF0F8] hover:text-white">Online Classes</a></li>
              <li><a href="#" className="text-[#CAF0F8] hover:text-white">Teacher Training</a></li>
              <li><a href="#" className="text-[#CAF0F8] hover:text-white">Workshops</a></li>
              <li><a href="#" className="text-[#CAF0F8] hover:text-white">Retreats</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-[#CAF0F8] mb-2">Get yoga tips and special offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#48CAE4] text-white placeholder-white px-4 py-2 rounded-l-full outline-none w-full"
              />
              <button className="bg-[#00B4D8] px-4 py-2 rounded-r-full hover:bg-[#0096C7] transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-[#48CAE4] mt-8 pt-6 text-center text-[#CAF0F8]">
          <p>&copy; {new Date().getFullYear()} Yogineer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;