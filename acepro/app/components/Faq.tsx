import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Play } from 'lucide-react'; // Using 'Play' for the triangle icon

// --- Data for the FAQ ---
// Storing as an array of objects makes the component cleaner.
const faqData = [
  {
    id: "item-1",
    question: "Question 1",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "item-2",
    question: "Question 2",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "item-3",
    question: "Question 3",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "item-4",
    question: "Question 4",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

/**
 * FaqSection
 * A component displaying a list of frequently asked questions
 * using the shadcn/ui Accordion component.
 */
export function FaqSection() {
  return (
    // Section wrapper with padding and a light background
    <section id="faqs" className="py-16 mx-8 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-[1240px]">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Frequently Asked Questions
        </h2>

        {/* Accordion Component */}
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1" // First item is open by default
          className="w-full "
        >
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-background dark:bg-slate-900 border border-gray-200 data-[state=open]:border-[#FFABAB] hover:border-[#FFABAB] dark:border-gray-700 rounded-lg shadow-sm mb-4"
              // Add special styling for the open item
             
            >
              <AccordionTrigger className="p-5 font-semibold text-base md:text-lg hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-5 px-5">
                <div className="flex items-start gap-3">
                  <Play className="h-4 w-4 flex-shrink-0 fill-current text-gray-600 dark:text-gray-400 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-800 dark:text-gray-200">Answer:</strong>
                    <br />
                    {item.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}

export default FaqSection;