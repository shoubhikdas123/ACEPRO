import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react'; // Using 'Play' for the filled triangle

// --- Data for the curriculum accordion ---
const curriculumData = [
  {
    id: "item-1",
    title: "1. Introduction to the Workshop",
    subItems: [
      "Introduction to the participants",
      "Introduction to the course objectives",
      "Introduction to the Project Management Professional (PMP)",
    ],
  },
  {
    id: "item-2",
    title: "2. Creating a High-Performing Team",
    subItems: [
      "Sub-item for Team Performance", // Placeholder content
      "Another sub-item",
    ],
  },
  {
    id: "item-3",
    title: "3. Starting the Project",
    subItems: [
      "Sub-item for Starting Project", // Placeholder content
    ],
  },
  {
    id: "item-4",
    title: "4. Programming Tools",
    subItems: [
      "Sub-item for Tools", // Placeholder content
    ],
  },
  {
    id: "item-5",
    title: "5. Security Criteria",
    subItems: [
      "Sub-item for Security", // Placeholder content
    ],
  },
];

/**
 * CurriculumSection
 * An accordion component displaying the course curriculum.
 * Uses React, TailwindCSS, and shadcn/ui (Accordion, Button).
 */
export function CurriculumSection() {
  return (
    // Section wrapper with padding and a light background
    <section id="curriculum" className="py-16 ">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Section Heading */}


        {/* Accordion Container
          - `bg-background` gives it the white card look
          - `rounded-2xl` and `shadow-xl` match the outer container style
        */}
        <div className="dark:bg-slate-900 bg-[#F6F6F6] rounded-2xl  p-6 md:p-10">
          <h2 className="text-3xl md:text-[24px] font-bold text-gray-900 dark:text-white mb-8">
            PMP Certification Course Curriculum
          </h2>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1" // First item is open by default
            className="w-full "
          >
            {curriculumData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="mb-4 bg-white rounded-lg shadow-sm border border-gray-200 data-[state=open]:border-[#FFABAB] data-[state=open]:bg-white dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:border-red-800/40"
              >
                <AccordionTrigger className="p-5 font-semibold text-base md:text-lg hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4 px-5">
                  <ul className="space-y-3 pl-2">
                    {item.subItems.map((subItem, index) => (
                      <li key={index} className="flex  items-center gap-3">
                        <Play className="h-4 w-4 flex-shrink-0 fill-current text-gray-600 dark:text-gray-400" />
                        <span className="text-[18px] text-[#676B72]  dark:text-gray-300">
                          {subItem}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Download Button */}
          <div className="text-center mt-8">
            <Button className="w-[218px] h-[42px] rounded-[4px] bg-[#016FC0]">
              Download Curriculum
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CurriculumSection;