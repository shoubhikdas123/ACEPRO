import React from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
/**
 * ExpertMentorCTA Component
 * A call-to-action banner for booking a call with a mentor.
 * Uses React, TailwindCSS, and shadcn/ui Button.
 *
 * NOTE: This component relies on an image with a transparent background
 * for the person, layered on top of a simple div for the circle.
 * The `src` of the image ("./mentor-image.png") is a placeholder.
 */
export function ExpertMentorCTA() {
  return (
    <section className="container  mx-auto my-32  py-12">
      <div className="relative h-auto md:h-[180px] sm:h-[134px]  flex flex-row md:flex-row sm:flex-row justify-end bg-amber-100 dark:bg-neutral-800 rounded-2xl shadow-sm py-2 md:py-0">
        {/* Image Container
          Positioned absolutely to break the container's bottom boundary.
          It's placed first in the DOM for stacking context, but z-index could also be used.
        */}
        <div className="absolute  bg-yellow-400   top-0  md:top-[-110px] overflow-hidden left-4 sm:left-8 md:left-12 w-24 sm:w-32 md:w-52  sm:h-[100px] md:h-auto">
          {/* Background Circle */}
          <div className="absolute  top-[60px] sm:top-[80px] md:top-[150px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-48 md:h-48 bg-amber-200 dark:bg-neutral-700 rounded-full"></div>
          <Image className="relative z-10 w-full h-auto object-contain object-bottom scale-x-[-1]" src={"/girl.png"} width={200} height={200} alt="Mentor Circle Background" />
          {/* Person Image
            - Needs to be a PNG with a transparent background.
            - Replace './mentor-image.png' with the actual path to your image.
            - `relative` and `z-10` ensure it's on top of the circle.
          */}
          {/* <img
            src="./mentor-image.png" // <-- REPLACE THIS with your image path
            alt="Expert Mentor"
            className="relative z-10 w-full h-auto object-contain object-bottom"
            style={{ 
              // This mimics the original image's height relative to its container
              // You might need to adjust this
              height: 'calc(100% + 2rem)' 
            }}
          /> */}
        </div>

        {/* Content Container
          - `min-h-[150px]` ensures the banner has height.
          - `pl-40` (and responsive variants) creates space for the image.
          - `pr-6` (and variants) gives padding on the right.
        */}
        <div className="relative   w-2/3 lg:w-4/5  z-20 flex flex-col md:flex-row   md:items-center justify-center md:justify-around gap-4 md:gap-0  sm:ml-48 md:pl-0  md:pr-0">
          <div className="text-lg lg:w-2/3 w-2/3  sm:text-xl md:text-2xl font-bold text-neutral-900 dark:text-white lg:text-center md:text-left">
            Book 1:1 call with our Expert Mentor
          </div>
          <div className="w-full lg:w-1/3 ">
          <Button
            size="lg"
            className="flex-shrink-0 bg-[#016FC0] rounded-[4px] text-sm sm:text-base" // Prevents button from shrinking
          >
            Ask Questions
          </Button></div>
        </div>
      </div>
    </section>
  );
}

export default ExpertMentorCTA;