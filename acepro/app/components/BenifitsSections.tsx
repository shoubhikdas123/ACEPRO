import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Assumed from shadcn setup

// --- Data for the tables ---

// We have two identical tables, just the currency changes.
// We can define the data once.
const designations = [
  { name: 'Project Coordinator', active: true },
  { name: 'Junior Project Manager', active: false },
  { name: 'Project Manager', active: false },
  // The image shows "Project Manager" twice, so we replicate that.
  { name: 'Project Manager', active: false },
];

// Placeholder logos
const companyLogos = [
  { src: "/logos/american-express.svg", alt: "American Express", className: "text-blue-600 font-bold" },
  { src: "/logos/wipro.svg", alt: "Wipro", className: "text-cyan-500 font-bold" },
  { src: "/logos/honeywell.svg", alt: "Honeywell", className: "text-red-600 font-bold" },
  { src: "/logos/accenture.svg", alt: "Accenture", className: "text-purple-600 font-bold" },
];

/**
 * SalaryTable Component
 * This is the inner card component that displays the salary info.
 * It's parameterized by currency.
 */
function SalaryTable({ currency }: { currency: 'INR' | 'USD' }) {
  const currencySymbol = currency === 'INR' ? '₹' : '$';

  return (
    <Card className="overflow-hidden shadow-lg">
      <CardContent className="p-0">
        {/* Table Header */}
        <div className="grid grid-cols-3 gap-4 p-6 border-b bg-slate-50 dark:bg-slate-800">
          <h3 className="font-semibold text-lg">Designation</h3>
          <h3 className="font-semibold text-lg text-center">Annual Salary ({currency})</h3>
          <h3 className="font-semibold text-lg text-center">Hiring Companies</h3>
        </div>

        {/* Table Body */}
        <div className="grid grid-cols-3">
          {/* Column 1: Designations */}
          <div className="flex flex-col border-r dark:border-slate-700">
            {designations.map((desg, index) => (
              <div
                key={index}
                className={cn(
                  "p-6",
                  desg.active && "bg-blue-50 dark:bg-blue-900/30",
                  index < designations.length - 1 && "border-b dark:border-slate-700"
                )}
              >
                <span className="font-medium text-gray-800 dark:text-gray-200">{desg.name}</span>
              </div>
            ))}
          </div>

          {/* Column 2: Salary Chart */}
          <div className="flex flex-col items-center justify-center p-6 border-r dark:border-slate-700">
            <div className="flex items-end justify-center gap-4 h-40 w-full max-w-xs">
              {/* Min Bar */}
              <div className="flex flex-col items-center text-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{currencySymbol}20L</span>
                <div className="w-10 md:w-12 h-24 bg-blue-200 dark:bg-blue-800 rounded-t-md"></div>
              </div>
              {/* Avg Bar */}
              <div className="flex flex-col items-center text-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{currencySymbol}20L</span>
                <div className="w-10 md:w-12 h-36 bg-blue-600 dark:bg-blue-500 rounded-t-md"></div>
              </div>
              {/* Max Bar */}
              <div className="flex flex-col items-center text-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{currencySymbol}20L</span>
                <div className="w-10 md:w-12 h-24 bg-blue-200 dark:bg-blue-800 rounded-t-md"></div>
              </div>
            </div>
            {/* Axis and Labels */}
            <div className="w-full max-w-xs border-t dark:border-slate-700 pt-2 mt-1">
              <div className="flex justify-around text-xs text-muted-foreground">
                <span>Min</span>
                <span>Average</span>
                <span>Max</span>
              </div>
            </div>
            <span className="text-xs text-muted-foreground mt-2">Source: Glassdoor</span>
          </div>

          {/* Column 3: Hiring Companies */}
          <div className="flex items-center justify-center p-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {companyLogos.map((logo) => (
                // Using img tags. If you don't have the logos,
                // you can fall back to the text in logo.alt.
                <img
                  key={logo.alt}
                  src={logo.src} // Placeholder path - replace with your actual logo paths
                  alt={logo.alt}
                  className="h-8 w-auto object-contain"
                  // Fallback text if images are broken
                  
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * BenefitsSection
 * The main component that includes the intro text and the two salary tables.
 */
export function BenefitsSection() {
  return (
    // Section wrapper with the light cream background
    <section className="py-16 bg-amber-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        
        {/* Introduction Text */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            How PMP Boosts your Salary and Opportunities
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Recognized globally, the PMP® certification positions you for leadership roles in high-impact industries such as IT, finance, manufacturing, and healthcare. PMP® certified professionals consistently drive project efficiency, stakeholder satisfaction, and command premium compensation.
            </p>
            <p>
              "PMP® certified professionals earn 16% more globally (PMI report)"
            </p>
            <p>
              "Median PMP® salary in the U.S. is 32% higher"
            </p>
          </div>
        </div>

        {/* Salary Tables Container */}
        <div className="space-y-8">
          <SalaryTable currency="INR" />
          <SalaryTable currency="USD" />
        </div>
        
      </div>
    </section>
  );
}

export default BenefitsSection;