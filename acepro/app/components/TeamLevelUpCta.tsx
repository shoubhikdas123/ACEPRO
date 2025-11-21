import React from 'react';
import { Button } from "@/components/ui/button";

export function TeamLevelUpCTA() {
  return (
    <section className="bg-white  dark:bg-slate-900 md:py-48  overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Card Container */}
        <div className="relative w-full rounded-[2.5rem] bg-gradient-to-r from-blue-100 via-blue-50 to-cyan-50 dark:from-blue-950/60 dark:via-blue-900/40 dark:to-cyan-900/40">

          {/* Flex Wrapper */}
          <div className="flex  flex-col md:flex-row items-center">

            {/* Left Content Area */}
            <div className="flex flex-col md:flex-row w-full md:w-4/5 px-4 md:px-12 py-6 md:py-6 text-center md:text-left items-center md:items-start gap-4 md:gap-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] md:pr-16 font-bold text-gray-900 dark:text-white leading-tight tracking-tight mb-0 md:mb-8">
                Looking to Level Up Your Team?
              </h2>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 md:px-10 py-4 md:py-6 text-base md:text-lg rounded-[4px] shadow-lg shadow-blue-600/20"
              >
                Contact Us
              </Button>
            </div>

            {/* Right Image Area - "Pop Out" Effect */}
            <div className="relative w-full md:w-1/5 flex justify-center md:justify-end self-center md:self-end">
              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/20 blur-3xl rounded-full -z-10"></div>

              {/* Image with negative margin on desktop to pop out top */}
              <img
                src="/girlthump.png"
                alt="Team member leveling up"
                className="w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[380px] lg:max-w-[450px] h-auto object-contain md:-mt-24 md:-mr-4 lg:-mt-32"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamLevelUpCTA;