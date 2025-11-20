import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertCircle } from 'lucide-react';
import Tick from '@/components/ui/Tick';
import RunClock from '@/components/ui/runclock';

// --- Data for the schedule cards ---
// We define the data as an array to easily map over it.
// In a real app, this would come from an API.
const scheduleData = [
  {
    id: 1,
    date: "Aug 16 - Aug 31",
    time: "06:30 PM - 12:30 AM IST",
    instructor: {
      name: "Mr. Pramod",
      role: "Instructor",
      avatarSrc: "https://github.com/shadcn.png", // Placeholder avatar
    },
    batchInfo: "Weekend Batch • 8 Sessions",
    price: "3,500",
    originalPrice: "7,000",
    discount: "50% Off",
    seatsAvailable: 5,
  },
  {
    id: 2,
    date: "Aug 16 - Aug 31",
    time: "06:30 PM - 12:30 AM IST",
    instructor: {
      name: "Mr. Pramod",
      role: "Instructor",
      avatarSrc: "https://github.com/shadcn.png", // Placeholder avatar
    },
    batchInfo: "Weekend Batch • 8 Sessions",
    price: "3,500",
    originalPrice: "7,000",
    discount: "50% Off",
    seatsAvailable: 5,
  },
  {
    id: 3,
    date: "Aug 16 - Aug 31",
    time: "06:30 PM - 12:30 AM IST",
    instructor: {
      name: "Mr. Pramod",
      role: "Instructor",
      avatarSrc: "https://github.com/shadcn.png", // Placeholder avatar
    },
    batchInfo: "Weekend Batch • 8 Sessions",
    price: "3,500",
    originalPrice: "7,000",
    discount: "50% Off",
    seatsAvailable: 5,
  },
];

/**
 * ScheduleCard
 * A reusable component for a single schedule item.
 */
function ScheduleCard({ item }: { item: (typeof scheduleData)[0] }) {
  return (
    <Card className="rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      <CardContent className="p-6">
        {/* Top Section with Tags and Discount Badge */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
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
          {/* 50% Off Badge */}
          <div
            className="h-6 w-24 text-white bg-no-repeat font-bold flex items-center justify-center"
            style={{ backgroundImage: 'url(/50percent.png)', backgroundSize: 'contain' }}
          >
            {item.discount}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Left Column */}
          <div className="flex-1 mb-6 lg:mb-0">
            {/* Date and Time */}
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {item.date}
            </h3>
            <p className="text-sm border-b-2 pb-2 text-muted-foreground mb-4">
              {item.time}
            </p>

            {/* Instructor */}
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={item.instructor.avatarSrc} alt={item.instructor.name} />
                <AvatarFallback>MP</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{item.instructor.name}</p>
                <p className="text-sm text-muted-foreground">{item.instructor.role}</p>
              </div>
            </div>

            {/* Batch Info */}
            <p className="text-sm text-muted-foreground">
              {item.batchInfo}
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full lg:w-auto lg:items-end lg:justify-between">
            {/* Price Section */}
            <div className="text-left lg:text-right mb-4">
              <div className="flex flex-col sm:flex-row items-baseline gap-2 mb-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  ₹{item.price}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  ₹{item.originalPrice}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">(Excl all taxes)</p>
            </div>
            <div className="flex flex-row gap-3 w-full lg:w-auto mt-6">
              <Button variant="outline" className="flex-1 text-[#016FC0] border-[#016FC0] border-2 rounded-md font-semibold hover:bg-blue-50">
                View Dates
              </Button>
              <Button className="flex-1 bg-[#016FC0] rounded-md font-semibold hover:bg-[#014A99]">
                Enroll Now
              </Button>
            </div>
            {/* Urgency Message */}
            {item.seatsAvailable > 0 && (
              <div className="flex items-center gap-1.5 text-destructive font-medium text-sm mt-4 lg:mt-2">
                <RunClock className="h-4 w-4" />
                <span>{item.seatsAvailable} Seats Available</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}

      </CardContent>
    </Card>
  );
}

/**
 * ScheduleSection
 * The main component that renders the "Schedule" heading and the list of cards.
 */
export function ScheduleSection() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 bg-amber-50 dark:bg-slate-900 p-6 md:p-10 rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Schedule
        </h2>

        {/* Cards Container */}
        <div className="">
          <div className="space-y-6">
            {scheduleData.map((item) => (
              <ScheduleCard key={item.id} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default ScheduleSection;