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
    <section className="py-16">
      
      {/* Top Part: Title with dark background */}
      <div className="bg-gray-900 dark:bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Our clients benefiting from <br /> ACEPRO, Excel in Top companies
          </h2>
        </div>
      </div>

      {/* Bottom Part: Logos with light background */}
      <div className="bg-white dark:bg-slate-800 py-12 shadow-inner">
        <div className="container mx-auto px-4">
          {/* Flex container for logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-around">
            {clientLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src} // <-- REPLACE with your actual logo paths
                alt={logo.alt}
               
                // Add a grayscale filter for dark mode to maintain contrast
                className="h-10 md:h-12 w-auto object-contain dark:invert dark:grayscale"
              />
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default ClientLogosSection;