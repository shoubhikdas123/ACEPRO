import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Tick from '@/components/ui/Tick';
// --- Data for the list ---
// Storing as an array of objects makes the component cleaner.
// We use React fragments (<>) to allow for mixed bold/regular text.
const takeaways = [
  { id: 1, text: <>Comprehensive <span className="text-[#60636A] font-semibold dark:text-white">Exam Prep</span> Support</> },
  { id: 2, text: <><strong className="text-[#60636A] font-semibold dark:text-white">12-Week</strong> Study Plan to Become PMP® Certified</> },
  { id: 3, text: <><strong className="text-[#60636A] font-semibold dark:text-white">PMP application</strong> process overview</> },
  { id: 4, text: <><strong className="text-[#60636A] font-semibold dark:text-white">Domain-Specific</strong> Practice Question Bank</> },
  { id: 5, text: <>Courseware aligned with the <strong className="text-[#60636A] font-semibold dark:text-white">PMI current exam framework</strong></> },
  { id: 6, text: <>Access to <strong className="text-[#60636A] font-semibold dark:text-white">Exam Simulator</strong> & Industry-Leading <strong className="text-[#60636A] font-semibold dark:text-white">Mock Exams</strong></> },
  { id: 7, text: <><strong className="text-[#60636A] font-semibold dark:text-white">PMP Exam</strong> Application Assistance</> },
  { id: 8, text: <>Course Completion <strong className="text-[#60636A] font-semibold dark:text-white">Certificate</strong></> },
  { id: 9, text: <><strong className="text-[#60636A] font-semibold dark:text-white">35 contact hours</strong> of formal education required to appear for PMI-PMP® certification exam</> },
  { id: 10, text: <>Discussion oriented classroom/online training designed for <strong className="text-[#60636A] font-semibold dark:text-white">working professionals</strong></> },
];

/**
 * TakeawaysSection
 * A component showing a list of course takeaways alongside an image.
 * Uses React, TailwindCSS, and lucide-react for icons.
 */
export function TakeawaysSection() {
  return (
    // Section wrapper with padding and a light background
    <section className=" bg-[#F6F6F6] pb-[24px]  rounded-[20px] ">
      <div className="container   ">
        
        {/* Section Heading */}
        <div className="text-[24px] ml-[28px] pt-[28px]  font-bold text-[#1E293B] ">
          Takeaways From the Course
        </div>

        {/* Main Content Card: A flex container that wraps on mobile */}
        <div className="flex  scale-[0.95]  flex-col lg:flex-row bg-background dark:bg-slate-900   shadow-xl ">
          
          {/* Left Side: List of Takeaways */}
          <div className="w-full  lg:w-5/6  mt-[28px] ml-[28px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {takeaways.map((item) => (
                <div key={item.id} className="flex text-[#60636A] items-start gap-3">
                  <Tick
                    className="h-5 w-5  flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 text-[16px] dark:text-gray-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-3/6">
            {/* - `min-h-[400px]` ensures the image is visible on mobile.
              - `lg:h-full` makes it fill the container height on large screens.
              - `object-cover` ensures the image covers the area without distortion.
            */}
            <img
              src="/manformal.png" // Placeholder image
              alt="Professional working on a laptop"
              className=" h-[410px] mb-[24px] mt-[24px] ml-[12px] pr-[24px] object-cover min-h-[400px] "
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default TakeawaysSection;