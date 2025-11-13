import React from 'react';

/**
 * CertificateSection
 * A component highlighting the course certificate.
 * Uses React and TailwindCSS.
 */
export function CertificateSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        
        {/* Main Container
          - Styled with a light blue gradient and rounded corners
        */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-8 md:p-12 shadow-lg">
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Left Column: Text Content */}
            <div className="md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="text-blue-600 dark:text-blue-400">Elevate Your Career</span> with Acepro's Project Management Certification
              </h2>
              <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Vitae at phasellus vitae lectus at orci at. At feugiat porttitor viverra id.
              </p>
            </div>

            {/* Right Column: Certificate Image */}
            <div className="flex items-center justify-center">
              <img
                // Using a placeholder that resembles the certificate
                src="/Certificate.png" 
                alt="Course Certificate"
                className="rounded-lg shadow-xl md:w-[433px] sm:w-[336px] max-w-lg border-4 border-white dark:border-gray-800"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificateSection;