import React from 'react';

/**
 * CertificateSection
 * A component highlighting the course certificate.
 * Uses React and TailwindCSS.
 */
export function CertificateSection() {
  return (
    <section className="py-16">
      <div className="container w-full mx-auto px-4">

        {/* Main Container
          - Styled with a light blue gradient and rounded corners
        */}
        <div className="rounded-2xl w-full bg-gradient-to-r from-blue-50 to-[#C5E6FF] dark:from-blue-950/30 dark:to-cyan-950/30 p-8 md:p-12 shadow-lg">

          {/* Grid Layout */}
          <div className="flex flex-col md:flex-row w-full  md:grid-cols-2 gap-6 items-center">

            {/* Left Column: Text Content */}
            <div className="md:pr-8 w-2/3 ">
              <h2 className="text-[27px] md:text-[44px]  font-bold text-gray-900 dark:text-white leading-tight">
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
                className="rounded-lg shadow-xl scale-75 sm:scale-90 md:scale-100 md:w-[433px] sm:w-[336px] w-full h-auto max-w-lg border-4 border-white dark:border-gray-800"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificateSection;