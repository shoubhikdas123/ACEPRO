import React from 'react';

// --- Logo Data ---
// In a real app, these would come from your assets or a CMS.
// Using placeholder alt text and src paths.
const clientLogos = [
  { src: "/logos/wipro-color.svg", alt: "Wipro" },
  { src: "/logos/ge-color.svg", alt: "General Electric" },
  { src: "/logos/ltimindtree-color.svg", alt: "LTIMindtree" },
  { src: "/logos/siemens-color.svg", alt: "Siemens" },
  { src: "/logos/ntt-data-color.svg", alt: "NTT Data" },
];

/**
 * ClientLogosSection
 * A component displaying a title on a dark background and a strip
 * of client logos on a light background.
 * Uses React and TailwindCSS.
 */
export function ClientLogosSection() {
  return (
    // We use a <section> wrapper and two inner divs for the distinct backgrounds.
    <section className="py-16 w-full">
      
      {/* Top Part: Title with dark background */}
      <div className=" dark:bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E293B]">
            Our clients benefiting from <br /> ACEPRO, Excel in Top companies
          </h2>
        </div>
      </div>

      {/* Bottom Part: Logos with light background */}
      <div className='w-full h-[80px]  relative overflow-hidden'>
      <img
        src="/client.png"
        alt="Client Logos Background"
        className="object-cover w-full scale-[150%] relative top-[-40px] h-[100px]"
      />
      </div>
    </section>
  );
}

export default ClientLogosSection;