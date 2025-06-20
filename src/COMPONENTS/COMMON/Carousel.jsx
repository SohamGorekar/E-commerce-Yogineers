import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Array.from({ length: 12 }, (_, i) => i + 1); // [1, 2, 3, ..., 12]
  const visibleCards = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= items.length - visibleCards ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? items.length - visibleCards : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden p-4 backdrop-blur-sm">
      {/* Carousel Container */}
      <div className="relative h-180 w-full">
        <div className="flex h-full transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}>
          {items.map((item, index) => (
            <div 
              key={item} 
              className="w-1/3 flex-shrink-0 p-2"
            >
              <div className="bg-white h-full w-full flex items-center justify-center rounded-lg">
                <div className="text-black text-2xl">Card {item}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;