
import React, { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const images = [
    'https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/BS_2Xvnqkm._CB792239020_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timerRef = useRef(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    timerRef.current = setInterval(nextImage, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(nextImage, 5000);
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden bg-gradient-to-r ">
      {/* Carousel container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            <img 
              src={image} 
              alt={`Hero ${index + 1}`} 
              className="w-full h-full " // Changed to object-contain
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;