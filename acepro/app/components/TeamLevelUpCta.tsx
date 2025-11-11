import React from 'react';
import { Button } from "@/components/ui/button";

/**
 * TeamLevelUpCTA
 * A call-to-action banner for corporate/team services.
 * Uses React, TailwindCSS, and shadcn/ui Button.
 *
 * NOTE: This component relies on an image with a transparent background
 * for the person. The `src` of the image ("./woman-thumbs-up.png")
 * is a placeholder and MUST be replaced.
 */
export function TeamLevelUpCTA() {
  return (
    // The outer section provides the light gray background and vertical padding.
    <section className="bg-slate-100 dark:bg-slate-800 py-16">
      <div className="container mx-auto px-4">
        {/* Relative container to position the image */}
        <div className="relative">
          
          {/* Image Container
            - Positioned absolutely to break out of the blue banner.
            - `bottom-0` aligns it with the bottom of the blue banner.
            - `right-16` (and responsive variants) positions it.
            - `z-20` ensures it's on top of the blue banner.
            - `w-64` (and variants) controls the size.
          */}
          <div className="absolute -bottom-8 right-8 sm:right-16 w-48 sm:w-56 md:w-64 h-auto z-20 pointer-events-none">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-300/30 dark:bg-blue-500/30 rounded-full blur-2xl z-10"></div>
            
            {/* Person Image
              - Needs to be a PNG with a transparent background.
              - Replace './woman-thumbs-up.png' with your image path.
              - `relative` and `z-20` keep it on top of the glow.
            */}
            <img
              src="./woman-thumbs-up.png" // <-- REPLACE THIS with your image path
              alt="Team member"
              className="relative z-20 w-full h-auto object-contain object-bottom"
            />
          </div>

          {/* Blue Banner Content
            - `relative z-10` to sit below the image.
            - `pr-64` (and variants) creates empty space on the right for the image.
          */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 min-h-[160px] p-8 md:p-12 pr-8 md:pr-64 rounded-3xl bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 shadow-lg">
            
            {/* Text */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center sm:text-left">
              Looking to Level Up Your Team?
            </h2>
            
            {/* Button */}
            <Button size="lg" className="flex-shrink-0">
              Contact Us
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default TeamLevelUpCTA;