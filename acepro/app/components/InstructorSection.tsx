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
    avatarSrc: "https://github.com/shadcn.png", // Placeholder
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
    <Card id="instructor" className="shadow-lg rounded-2xl h-full">
      <CardContent className="p-6">
        {/* Top section: Avatar, Name, Role */}
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={instructor.avatarSrc} alt={instructor.name} />
            <AvatarFallback>
              {instructor.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{instructor.name}</h3>
            <p className="text-sm text-muted-foreground">{instructor.role}</p>
          </div>
        </div>

        {/* Student Badge */}
        <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
          {instructor.students} Students
        </Badge>

        {/* Biography */}
        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          {bioText}
          {/* We use a Button styled as a link for the "Read More" toggle.
            Using 'inline-block' and 'pl-1' to make it flow with the text.
          */}
          <Button
            variant="link"
            className="text-blue-600 p-0 pl-1 h-auto inline-block"
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
    <section className="py-16 bg-gray-900 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Our Course Instructors
        </h2>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instructorData.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default InstructorsSection;