"use client"

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"; // Using Button for the 'Read More' link
import { cn } from "@/lib/utils";

// --- Data for the instructors ---
const instructorData = [
  {
    id: 1,
    name: "Pramod",
    role: "PMP® Coach",
    avatarSrc: "/pramod.jpg", // Placeholder
    students: "1000+",
    bioShort: "Pramod holds a Bachelor and a Master's degree in Computer and Information Science from Toronto, Canada. He has specialized in the stream of Cryptogra...",
    bioFull: "Pramod holds a Bachelor and a Master's degree in Computer and Information Science from Toronto, Canada. He has specialized in the stream of Cryptography, and has been a key speaker at many international conferences on the subject. (Full bio text here)",
  },
  {
    id: 2,
    name: "Sudipt Singh",
    role: "PMP® Coach",
    avatarSrc: "https://github.com/shadcn.png", // Placeholder
    students: "1000+",
    bioShort: "Sudipt Singh – PMI-Authorized Training Provider With over 15 years of expertise in Program and Project Management across IT Infrastructure, Software, USA Health...",
    bioFull: "Sudipt Singh – PMI-Authorized Training Provider With over 15 years of expertise in Program and Project Management across IT Infrastructure, Software, USA Health. (Full bio text here)",
  },
  // Add more instructors here as needed
];

/**
 * InstructorCard
 * A reusable component for displaying a single instructor's profile.
 * Includes a "Read More" toggle for the biography.
 */
function InstructorCard({ instructor }: { instructor: (typeof instructorData)[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const bioText = isExpanded ? instructor.bioFull : instructor.bioShort;
  const readMoreText = isExpanded ? "Read Less" : "Read More";

  return (
    <Card id="instructor" className="shadow-lg scale-[0.97] w-[437px] rounded-2xl bg-[#F8F8F8] border border-gray-200">
      <CardContent className="">
        {/* Top section: Avatar, Name, Role, Students */}
        <div className="flex gap-4 mb-4">
          <Avatar className="h-20 w-20 flex-shrink-0 rounded-lg">
            <AvatarImage src={instructor.avatarSrc} className='object-cover' alt={instructor.name} />
            <AvatarFallback>
              {instructor.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{instructor.name}</h3>
            <p className="text-sm text-[#7E828A] dark:text-gray-400 mb-3">{instructor.role}</p>
            <Badge  className="bg-blue-50 text-blue-600  text-xs">
              <span className="text-blue-600 font-semibold">{instructor.students}</span>
            </Badge>
            <span className="ml-1 text-gray-600">Students</span>
          </div>
        </div>

        {/* Biography */}
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {bioText}
          <Button
            variant="link"
            className="text-blue-600 p-0 h-auto inline ml-1 font-semibold"
            onClick={toggleReadMore}
          >
            {readMoreText}
          </Button>
        </p>
      </CardContent>
    </Card>
  );
}

/**
 * InstructorsSection
 * The main component that renders the "Our Course Instructors" heading
 * and a grid of InstructorCards.
 */
export function InstructorsSection() {
  return (
    // Assuming a dark background as per the image's text color
    <section className="py-16  dark:bg-gray-950">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-8">
          Our Course Instructors
        </h2>

        {/* Instructors Grid */}
        <div className="w-full flex flex-row ">
          {instructorData.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default InstructorsSection;