import React from 'react';
import { CheckCircle2 } from 'lucide-react';

// --- Data for the target audience ---
const targetAudience = [
  "Mid-Level, Senior Project Managers",
  "Project Coordinators",
  "Project Analysts",
  "Project Leaders",
  "Product Managers",
  "Program Managers",
];

/**
 * CourseAudienceSection
 * A component showing the target audience for a course in a styled box.
 * Uses React, TailwindCSS, and lucide-react for icons.
 */
export function CourseAudienceSection() {
  return (
    // Section wrapper with padding
    <section className="py-16">
      <div className="container mx-auto px-4">
        
        {/* Main Container Card
          - Styled with a light beige background, green border, and rounded corners
        */}
        <div className="bg-amber-50 dark:bg-slate-800/20 border border-green-500 dark:border-green-700 rounded-2xl p-8 md:p-12">
          
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Who this course is for
          </h2>

          {/* Grid of Audience Items
            - `max-w-5xl` and `mx-auto` are used to control the width of the grid
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5 max-w-5xl mx-auto">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default CourseAudienceSection;