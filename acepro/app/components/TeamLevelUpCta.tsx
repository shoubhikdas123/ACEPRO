import React from 'react';
import { Button } from "@/components/ui/button";

export function TeamLevelUpCTA() {
  return (
    <section className="bg-white dark:bg-slate-900 md:py-48 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Card Wrapper */}
        <div className="relative w-full">

          {/* Background Layer - Clipped for Circle */}
          <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-0 bg-gradient-to-r from-blue-100 via-blue-50 to-cyan-50 dark:from-blue-950/60 dark:via-blue-900/40 dark:to-cyan-900/40 overflow-hidden">
            {/* Semi-Circle Background */}
            <div className="absolute bottom-0 right-20 md:right-[80px] w-[60px] h-[60px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[150px] bg-blue-200/50 dark:bg-blue-500/20 rounded-full  translate-y-1/4"></div>
          </div>

          {/* Content Layer - Visible Overflow for Image */}
          <div className="relative flex flex-row items-center justify-between rounded-[2.5rem]">

            {/* Left Content Area */}
            <div className="flex flex-col md:flex-row w-2/3 md:w-4/5 px-4 py-6 md:px-12 md:py-12 text-left items-start md:items-center gap-4 md:gap-0">
              <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-[40px] md:pr-8 font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                Looking to Level Up Your Team?
              </h2>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 md:px-10 md:py-6 text-xs sm:text-sm md:text-lg rounded-[4px] shadow-lg shadow-blue-600/20 whitespace-nowrap"
              >
                Contact Us
              </Button>
            </div>

            {/* Right Image Area */}
            <div className="relative w-1/3 md:w-1/5 flex justify-center md:justify-end self-end">
              {/* Image */}
              <img
                src="/girlthump.png"
                alt="Team member leveling up"
                className="relative lg:right-[120px] z-10 w-full max-w-[120px] sm:max-w-[180px]  lg:scale-[200%] h-auto object-contain md:-mt-[-20px] md:-mr-4 right-20 lg:-mt-[-20px] transform lg:top-[-60px]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamLevelUpCTA;