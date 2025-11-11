import React from 'react';
import { CheckCircle2 } from 'lucide-react';

// --- Data for the list ---
// Storing as an array of objects makes the component cleaner.
// We use React fragments (<>) to allow for mixed bold/regular text.
const takeaways = [
  { id: 1, text: <><strong className="text-gray-900 dark:text-white">Comprehensive Exam Prep</strong> Support</> },
  { id: 2, text: <><strong className="text-gray-900 dark:text-white">12-Week</strong> Study Plan to Become PMP® Certified</> },
  { id: 3, text: <><strong className="text-gray-900 dark:text-white">PMP application</strong> process overview</> },
  { id: 4, text: <><strong className="text-gray-900 dark:text-white">Domain-Specific</strong> Practice Question Bank</> },
  { id: 5, text: <>Courseware aligned with the <strong className="text-gray-900 dark:text-white">PMI current exam framework</strong></> },
  { id: 6, text: <>Access to <strong className="text-gray-900 dark:text-white">Exam Simulator</strong> & Industry-Leading <strong className="text-gray-900 dark:text-white">Mock Exams</strong></> },
  { id: 7, text: <><strong className="text-gray-900 dark:text-white">PMP Exam</strong> Application Assistance</> },
  { id: 8, text: <>Course Completion <strong className="text-gray-900 dark:text-white">Certificate</strong></> },
  { id: 9, text: <><strong className="text-gray-900 dark:text-white">35 contact hours</strong> of formal education required to appear for PMI-PMP® certification exam</> },
  { id: 10, text: <>Discussion oriented classroom/online training designed for <strong className="text-gray-900 dark:text-white">working professionals</strong></> },
];

/**
 * TakeawaysSection
 * A component showing a list of course takeaways alongside an image.
 * Uses React, TailwindCSS, and lucide-react for icons.
 */
export function TakeawaysSection() {
  return (
    // Section wrapper with padding and a light background
    <section className="py-16 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Takeaways From the Course
        </h2>

        {/* Main Content Card: A flex container that wraps on mobile */}
        <div className="flex flex-col lg:flex-row bg-background dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
          
          {/* Left Side: List of Takeaways */}
          <div className="w-full lg:w-1/2 p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {takeaways.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 text-green-600 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2">
            {/* - `min-h-[400px]` ensures the image is visible on mobile.
              - `lg:h-full` makes it fill the container height on large screens.
              - `object-cover` ensures the image covers the area without distortion.
            */}
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" // Placeholder image
              alt="Professional working on a laptop"
              className="w-full h-full object-cover min-h-[400px] lg:h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default TakeawaysSection;