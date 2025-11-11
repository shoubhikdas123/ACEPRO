import React from 'react';


export function OverviewSection() {

  const paragraphs = [
    "Globally recognized and demanded, the PMI-PMP® credential demonstrates to employers, clients and colleagues that a project manager processes project management knowledge, experience and skills to bring projects to successful completion.",
    "The PMI-PMP® credential recognizes the competence of an individual to perform in the role of a project manager, specifically experience in leading and directing projects. The credential has earned global recognition and commanded a higher salary for credentialed individuals over non-credentialed individuals.",
    "Organizations across the world see an increased success rate of executing projects with PMI-PMP® certified project managers that leads to lower project failures, increased customer satisfaction and profits.",
    "Build high-performance project teams to grow your business or compete more successfully, all paths inevitably lead to project management. PMI-PMP® credential will scale up your project teams and improve enterprise efficiency and effectiveness"
  ];

  return (
  
    <section className="py-16 " id="overview" >
      <div className="container mx-auto px-4">
 
        <div className="max-w-4xl">
      
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Overview
          </h2>

          {/* Body Text Container */}
          <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
            {paragraphs.map((text, index) => (
              <p key={index}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;