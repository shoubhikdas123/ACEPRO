"use client"

import React, { useState, useRef, useEffect } from 'react';
import { MoveLeft, MoveRight } from 'lucide-react';
import Image from 'next/image';
const SliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
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

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsToShow(1);
      } else if (width < 768) {
        setItemsToShow(2);
      } else if (width < 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const maxIndex = Math.max(0, slides.length - itemsToShow);

  const scrollToIndex = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);

    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      const slideWidth = containerWidth / itemsToShow;
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollAmount = (slideWidth + gap) * newIndex;
      sliderRef.current.scrollTo({
        left: scrollAmount,
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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:ml-[20px] py-6 sm:py-8 md:py-12">
      {/* Header with Navigation (Desktop) */}
      <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8 md:mb-12 gap-4 sm:gap-0">
        <div className="text-[24px] flex-col justify-center items-center w-full  sm:text-[28px] md:text-[36px] font-bold text-[#1E293B] text-center sm:text-center flex-1">
          Your Path to PMP<span className="text-[16px] sm:text-[20px] md:text-[24px] relative top-[-8px] sm:top-[-10px]">®</span> Success - Structured,
          <br className="hidden sm:block" />
          <span className="sm:inline"> Smart, Supported</span>
        </div>

        {/* Desktop Navigation Buttons */}
        <div className="hidden md:flex gap-3 ml-4">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="w-[53px] h-[30px] rounded-[30px] border-2 border-blue-500 flex items-center bg-[#DEF1FF] justify-center text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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
          className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[250px] border-[0.75px] h-auto sm:min-h-[260px] md:h-[284px] rounded-[16px] sm:rounded-[20px] snap-start flex flex-col"
            >
              <div className="relative w-full h-auto sm:h-[150px] md:h-[160px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={250}
                  height={160}
                  className="w-full h-auto object-contain rounded-t-[16px] sm:rounded-t-[20px]"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 250px"
                />
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#1E293B] text-center leading-snug">
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Buttons Below Cards */}
      <div className="flex md:hidden justify-center gap-3 mt-6 sm:mt-8">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="w-[53px] h-[30px] rounded-[30px] border-2 border-blue-500 flex items-center bg-[#DEF1FF] justify-center text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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

      {/* Hide scrollbar for webkit browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SliderSection;