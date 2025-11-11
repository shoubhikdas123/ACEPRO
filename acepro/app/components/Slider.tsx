"use client"

import React, { useState, useRef, useEffect } from 'react';
import { MoveLeft, MoveRight } from 'lucide-react';
import Image from 'next/image';
const SliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  
  const slides = [
    {
      image: '/slider1.png',
      title: 'Proven 90 Days Study Plan',
      bgColor: 'bg-gray-100'
    },
    {
      image: '/slider2.png',
      title: '1000+ Premium Practice Questions',
      bgColor: 'bg-gray-200'
    },
    {
      image: '/sider3.png',
      title: 'Mock Tests & Real Exam Simulator',
      bgColor: 'bg-gray-100'
    },
    {
      image: '/sider3.png',
      title: 'Live Mentor Support & Doubt Solving',
      bgColor: 'bg-gray-100'
    },
    {
      image: '/sider3.png',
      title: 'Exclusive PMI Student Study Kit',
      bgColor: 'bg-gray-100'
    }
  ];

  const itemsToShow = 4;
  const maxIndex = Math.max(0, slides.length - itemsToShow);

  const scrollToIndex = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);
    
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth / itemsToShow;
      sliderRef.current.scrollTo({
        left: slideWidth * newIndex,
        behavior: 'smooth'
      });
    }
  };

  const goToPrevious = () => {
    scrollToIndex(currentIndex - 1);
  };

  const goToNext = () => {
    scrollToIndex(currentIndex + 1);
  };

  return (
    <div className="w-full max-w-7xl ml-[20px] mx-auto px-4 py-12">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-[36px] md:text-[36px] font-bold text-[#1E293B] text-center flex-1">
          Your Path to PMP<span className="text-[24px] relative top-[-10px]">®</span> Success - Structured,
          <br />
          Smart, Supported
        </h1>
        
        <div className="flex gap-3 ml-4">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="w-[53px] h-[30px] rounded-[30px] border-2 border-blue-500 flex items-center bg-[#DEF1FF]  justify-center text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous slide"
          >
            <MoveLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="w-[53px] h-[30px] rounded-[30px] border-2 border-blue-500 flex items-center bg-[#DEF1FF] justify-center text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Next slide"
          >
            <MoveRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[250px]  border-[0.75px] h-[284px] rounded-[20px]"
            
            >
             
                  <Image src={slide.image} alt={slide.title} width={250} height={160} className="object-contain rounded-t-[20px]" />
          
                

                <div className="p-4">
                  <h3 className="text-[18px] font-semibold text-[#1E293B] text-center leading-snug">
                    {slide.title}
                  </h3>
              
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Responsive Note */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .flex-shrink-0 {
            min-width: calc(33.333% - 16px) !important;
            width: calc(33.333% - 16px) !important;
          }
        }
        @media (max-width: 768px) {
          .flex-shrink-0 {
            min-width: calc(50% - 12px) !important;
            width: calc(50% - 12px) !important;
          }
        }
        @media (max-width: 640px) {
          .flex-shrink-0 {
            min-width: 100% !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SliderSection;