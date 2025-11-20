"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertCircle, BookOpen, Download } from 'lucide-react';
import RunClock from '@/components/ui/runclock';

/**
 * ScheduleSidebarCard
 * The top card showing course schedule details.
 */
function ScheduleSidebarCard() {
  return (
    <Card className="rounded-2xl shadow-lg  overflow-hidden">
      <CardContent className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge
            variant="outline"
            className="bg-blue-100 text-[#3E3E3E] border-blue-200"
          >
            Online
          </Badge>
          <Badge
            variant="outline"
            className="bg-pink-100 text-[#3E3E3E] border-pink-200"
          >
            PMP Exam Prep
          </Badge>
        </div>

        {/* Date and Time */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Aug 16 - Aug 31
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          06:30 PM - 12:30 AM IST
        </p>

        <Separator className="mb-4" />

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-10 w-10">
            <AvatarImage className="object-cover" src="/mrpramod.jpg" alt="Mr. Pramod" />
            <AvatarFallback>MP</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Mr. Pramod</p>
            <p className="text-sm text-muted-foreground">Instructor</p>
          </div>
        </div>

        {/* Batch Info */}
        <p className="text-sm text-muted-foreground mb-4">
          Weekend Batch • 8 Sessions
        </p>

        {/* Price Section */}
        <div className="mb-4">
          <div
            className=" h-6 mb-2 pl-4 w-24 text-white bg-no-repeat font-bold"
            style={{ backgroundImage: 'url(/50percent.png)' }}
          >  50% Off
          </div>
          <div className="flex items-baseline ">
            <span className="text-3xl mr-4 font-extrabold  text-gray-900 dark:text-white">
              ₹3,500
            </span>
            <span className="text-lg text-muted-foreground line-through">
              ₹7,000
            </span>
          </div>
          <div className=" flex ">
            <p className="text-[14px]  mr-2 text-muted-foreground">(Excl all taxes)</p>
            <div className="flex w-1/2 items-center text-destructive font-medium text-sm">
              <RunClock />
              <span>5 Seats Available</span>
            </div>
          </div>
        </div>

        {/* Urgency Message */}

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Button size="lg" className="w-full bg-[#016FC0] rounded-[4px]">
            Enroll Now
          </Button>
          <Button variant="link" size="lg" className="w-full text-[#016FC0]">
            View Dates
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * BrochureSidebarCard
 * The bottom card for downloading the brochure.
 */
function BrochureSidebarCard() {
  return (
    <Card className="rounded-2xl shadow-lg   dark:border-gray-600 overflow-hidden">
      <CardContent className="p-8 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
          <BookOpen className="h-8 w-8" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Know more about the Course
        </h3>

        {/* Button */}
        <Button variant="outline" className="w-full">
          Download Brochure
          <Download className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

/**
 * CourseSidebar
 * A component that combines the Schedule and Brochure cards,
 * typically used in a sidebar.
 */
export function CourseSidebar() {
  const [isSticky, setIsSticky] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const instructorsSection = document.getElementById('instructor');
      if (!instructorsSection) return;
      const sectionTop = instructorsSection.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY;
      if (scrollY + 72 >= sectionTop) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={isSticky ? "sticky top-24 w-full scale-[0.95] max-w-sm space-y-6" : "top-24 scale-[0.95] w-full max-w-sm space-y-6"}>
      <ScheduleSidebarCard />
      <BrochureSidebarCard />
    </div>
  );
}

export default CourseSidebar;