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
    <section className="container mx-auto my-32 px-4 py-12">
      <div className="relative h-[180px] flex justify-end bg-amber-100 dark:bg-neutral-800  rounded-2xl shadow-sm">
        {/* Image Container
          Positioned absolutely to break the container's bottom boundary.
          It's placed first in the DOM for stacking context, but z-index could also be used.
        */}
        <div className="absolute top-[-110px]  overflow-hidden left-4 sm:left-8 md:left-12 w-36 sm:w-40 md:w-52">
          {/* Background Circle */}
          <div className="absolute top-[150px] left-1/2 -translate-x-1/2 w-[200px] h-[200px] sm:w-36 sm:h-36 md:w-48 md:h-48 bg-amber-200 dark:bg-neutral-700 rounded-full"></div>
          <Image className="relative   z-10 w-full h-auto object-contain object-bottom scale-x-[-1]" src={"/girl.png"} width={200} height={200} alt="Mentor Circle Background" />
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
        <div className="relative w-2/3    z-20 flex flex-row  items-center justify-around   ">
          <h2 className="text-[40px]  sm:text-xl md:text-2xl font-bold text-neutral-900 dark:text-white text-center sm:text-left">
            Book 1:1 call with our Expert Mentor
          </h2>
          <Button 
            size="lg" 
            className="flex-shrink-0 bg-[#016FC0] rounded-[4px]" // Prevents button from shrinking
          >
            Ask Questions
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ExpertMentorCTA;