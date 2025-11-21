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
  { src: "/american.png", alt: "American Express", className: "w-4" },
  { src: "/wipro.png", alt: "Wipro", className: "" },
  { src: "/honeywell.png", alt: "Honeywell", className: "w-6" },
  { src: "/accenture.png", alt: "Accenture", className: "w-36 h-36" },
];

/**
 * SalaryTable Component
 * This is the inner card component that displays the salary info.
 * It's parameterized by currency.
 */
function SalaryTable({ currency }: { currency: 'INR' | 'USD' }) {
  const currencySymbol = currency === 'INR' ? '₹' : '$';

  return (
    <Card className="overflow-hidden scale-[0.98]  lg:ml-[12px] mb-[12px] p-0 ">
      <CardContent className="p-0">
        {/* Table Header */}
        <div className="grid grid-cols-3  p-6 border-b-[1px] border-[#DCE7EF] bg-[white] dark:bg-slate-800">
          <h3 className="font-semibold text-center text-lg border-bottom-[1px] border-[#DCE7EF]">Designation</h3>
          <h3 className="font-semibold text-center text-lg border-bottom-[1px] border-[#DCE7EF] text-center">Annual Salary ({currency})</h3>
          <h3 className="font-semibold text-center text-lg border-bottom-[1px] border-[#DCE7EF] text-center">Hiring Companies</h3>
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
                  desg.active && "bg-blue-50  dark:bg-blue-900/30 font-medium text-[#016FC0]",
                  index < designations.length - 1 && "border-b dark:border-slate-700"
                )}
              >
                <span className="font-regular pl-4 text-[14px] ">{desg.name}</span>
              </div>
            ))}
          </div>

          {/* Column 2: Salary Chart */}
          <div className="flex flex-col items-center justify-center p-6 border-r dark:border-slate-700">
            <div className="flex items-end justify-center gap-4 h-40 w-full max-w-xs">
              {/* Min Bar */}
              <div className="flex flex-col items-center text-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{currencySymbol}20L</span>
                <div className="w-10 md:w-12 h-24 bg-blue-200 dark:bg-blue-800 "></div>
              </div>
              {/* Avg Bar */}
              <div className="flex flex-col items-center text-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{currencySymbol}20L</span>
                <div className="w-10 md:w-12 h-36 bg-blue-600 dark:bg-blue-500 "></div>
              </div>
              {/* Max Bar */}
              <div className="flex flex-col items-center text-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{currencySymbol}20L</span>
                <div className="w-10 md:w-12 h-24 bg-blue-200 dark:bg-blue-800 "></div>
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

interface SalaryData {
  designation: string;
  salary: string;
  source?: string;
}

const mobileDataINR: SalaryData[] = [
  { designation: 'Project Coordinator', salary: '₹ 8L' },
  { designation: 'Junior Project Manager', salary: '₹ 12L' },
  { designation: 'Project Manager', salary: '₹ 17L' },
  { designation: 'Senior PM/Program Manager', salary: '₹ 24L+' },
];

const mobileDataUSD: SalaryData[] = [
  { designation: 'Project Coordinator', salary: '$68,900', source: '(Source - Indeed)' },
  { designation: 'Junior Project Manager', salary: '$105,600', source: '(Source - The Digital Project Manager - Full Time PMs)' },
  { designation: 'Senior PM/Program Manager', salary: '$140,000', source: '(Source - Glassdoor Data)' },
];

function MobileSalaryTable({ currency }: { currency: 'INR' | 'USD' }) {
  const data = currency === 'INR' ? mobileDataINR : mobileDataUSD;
  const title = currency === 'INR' ? 'Avg Annual Salary (INR)' : 'Avg Annual Salary (USD)';

  return (
    <Card className="overflow-hidden mb-4 border-none shadow-none">
      <CardContent className="p-0">
        {/* Header */}
        <div className="grid grid-cols-2 bg-white dark:bg-slate-800 text-center">
          <div className="font-semibold text-sm text-gray-900 dark:text-white p-4 border-b border-r border-gray-200 dark:border-slate-700 flex items-center justify-center">
            Designation
          </div>
          <div className="font-semibold text-sm text-gray-900 dark:text-white p-4 border-b border-gray-200 dark:border-slate-700 flex items-center justify-center">
            {title}
          </div>
        </div>

        {/* Body */}
        <div className="dark:divide-slate-700">
          {data.map((item, idx) => (
            <div key={idx} className="grid grid-cols-2">
              {/* Left Column: Designation */}
              <div className="p-4 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 border-b border-r border-gray-200 dark:border-slate-700">
                <span className="text-sm font-medium text-[#016FC0] dark:text-blue-400 text-center">
                  {item.designation}
                </span>
              </div>

              {/* Right Column: Salary */}
              <div className="p-4 flex flex-col items-center justify-center bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {item.salary}
                </span>
                {item.source && (
                  <span className="text-[10px] text-gray-500 mt-1 text-center leading-tight">
                    {item.source}
                  </span>
                )}
              </div>
            </div>
          ))}
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
    <section id="benefits" className=" mt-[48px] pb-[12px] rounded-[20px] bg-[#FEF7EA] dark:bg-slate-950">
      <div className="container mx-auto px-4">

        {/* Introduction Text */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-[24px] lg:ml-[24px] mt-[24px] pt-[36px]  font-bold text-gray-900 dark:text-white mb-6">
            How PMP Boosts your Salary and Opportunities
          </h2>
          <div className="space-y-4 lg:ml-[24px] text-[#676B72] leading-[26px] dark:text-gray-300">
            <p>
              Recognized globally, the PMP<span className="text-[12px] top-[-5px] relative">®</span>certification positions you for leadership roles in high-impact industries such as IT, finance, manufacturing, and healthcare. PMP® certified professionals consistently drive project efficiency, stakeholder satisfaction, and command premium compensation.
            </p>
            <p>
              "PMP<span className="text-[12px] top-[-5px] relative">®</span> certified professionals earn 16% more globally (PMI report)"
            </p>
            <p>
              "Median PMP<span className="text-[12px] top-[-5px] relative">®</span> salary in the U.S. is 32% higher"
            </p>
          </div>
        </div>

        {/* Salary Tables Container */}
        <div className="space-y-8">
          {/* Desktop View */}
          <div className="hidden lg:block space-y-8">
            <SalaryTable currency="INR" />
            <SalaryTable currency="USD" />
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-8">
            <MobileSalaryTable currency="INR" />
            <MobileSalaryTable currency="USD" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default BenefitsSection;