import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ListChecks, FileText, Download } from 'lucide-react';
import Tick from '@/components/ui/Tick';
import QuestionLogo from '@/components/ui/question';
import ListLogo from '@/components/ui/listLogo';

// --- Data for the related courses ---
// In a real app, this data would come from an API.
// We are replicating the card 3 times as shown in the image.
const coursesData = [
  {
    id: 1,
    imageUrl: "/courseimage1.png", // Placeholder image
    tags: [
      { text: "Live Classes", className: "bg-blue-100 text-[#3E3E3E] " },
      { text: "Instructor Led Sessions", className: "bg-red-100 text-[#3E3E3E] " },
    ],
    title: "PMP Professional Course Project Management Exam Prep",
    description: "Lorem ipsum dolor sit amet consectetur. Augue sed odio augue urna nisl fusce. Nibh pretium consectetur sagittis felis sollicitudin morbi. Habita...",
    features: [
      { icon: <Clock className="h-4 w-4 text-destructive" />, text: "35+ Hours" },
      { icon: <ListChecks className="h-4 w-4 text-destructive" />, text: "1000+ Practice Questions, Mock Exams PMI Standard" },
      { icon: <FileText className="h-4 w-4 text-destructive" />, text: "Application review system & Custom Study Plan" },
    ],
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80", // Placeholder image
    tags: [
      { text: "Live Classes", className: "bg-blue-100 text-[#3E3E3E] " },
      { text: "Instructor Led Sessions", className: "bg-red-100 text-[#3E3E3E] " },
    ],
    title: "PMP Professional Course Project Management Exam Prep",
    description: "Lorem ipsum dolor sit amet consectetur. Augue sed odio augue urna nisl fusce. Nibh pretium consectetur sagittis felis sollicitudin morbi. Habita...",
    features: [
      { icon: <Clock className="h-4 w-4 text-destructive" />, text: "35+ Hours" },
      { icon: <ListChecks className="h-4 w-4 text-destructive" />, text: "1000+ Practice Questions, Mock Exams PMI Standard" },
      { icon: <FileText className="h-4 w-4 text-destructive" />, text: "Application review system & Custom Study Plan" },
    ],
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", // Placeholder image
    tags: [
      { text: "Live Classes", className: "bg-blue-100 text-[#3E3E3E] " },
      { text: "Instructor Led Sessions", className: "bg-red-100 text-[#3E3E3E] " },
    ],
    title: "PMP Professional Course Project Management Exam Prep",
    description: "Lorem ipsum dolor sit amet consectetur. Augue sed odio augue urna nisl fusce. Nibh pretium consectetur sagittis felis sollicitudin morbi. Habita...",
    features: [
      { icon: <QuestionLogo className="h-4 w-4 text-destructive" />, text: "35+ Hours" },
      { icon: <ListLogo className="h-4 w-4 text-destructive" />, text: "1000+ Practice Questions, Mock Exams PMI Standard" },
      { icon: <Clock className="h-4 w-4 text-destructive" />, text: "Application review system & Custom Study Plan" },
    ],
  },
];


export function RelatedCoursesSection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Related Courses
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <Card key={course.id} className="flex flex-col p-0 overflow-hidden shadow-lg rounded-xl">
              
              {/* Card Image */}
              <CardHeader className="p-0">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-54 object-cover"
                />
              </CardHeader>

              {/* Card Content (grows to fill space) */}
              <CardContent className="p-6 flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <Badge
                      key={tag.text}
                      variant="outline"
                      className={`${tag.className} hover:${tag.className}`}
                    >
                      {tag.text}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <CardTitle className="mb-2 text-lg">{course.title}</CardTitle>

                {/* Description */}
                <CardDescription className="mb-4 text-sm">
                  {course.description}
                </CardDescription>

                {/* Features List */}
                <ul className="space-y-3">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="flex-shrink-0 mt-0.5">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Card Footer */}
              <CardFooter className="p-6 pt-0 grid grid-cols-2 gap-4">
                <Button variant="outline" className='px-4 border-[#016FC0] text-[#016FC0] rounded-[4px]'>
                  Download Brochure
                  <Download className=" h-4 w-4" />
                </Button>
                <Button className='bg-[#016FC0] rounded-[4px]'>Enroll Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedCoursesSection;