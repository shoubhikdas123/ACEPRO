import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertCircle } from 'lucide-react';

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
    <Card className="shadow-lg overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          
          {/* Left Side: Info */}
          <div className="flex-1 space-y-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                Online
              </Badge>
              <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">
                PMP Exam Prep
              </Badge>
            </div>
            
            {/* Date and Time */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.date}</h3>
              <p className="text-sm text-muted-foreground">{item.time}</p>
            </div>
            
            {/* Instructor */}
            <div className="flex items-center gap-3">
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
            <p className="text-sm text-muted-foreground">{item.batchInfo}</p>
          </div>
          
          {/* Right Side: Price & Actions */}
          <div className="flex flex-col items-start md:items-end gap-3 md:w-auto">
            {/* Price */}
            <div className="text-right">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mb-1">
                {item.discount}
              </Badge>
              <div className="flex items-baseline gap-2 justify-end">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ₹{item.price}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  ₹{item.originalPrice}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">(Excl all taxes)</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 w-full md:w-auto">
              <Button variant="outline" className="w-full">
                View Dates
              </Button>
              <Button className="w-full">
                Enroll Now
              </Button>
            </div>
            
            {/* Urgency Message */}
            {item.seatsAvailable > 0 && (
              <div className="flex items-center gap-1.5 text-destructive font-medium text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{item.seatsAvailable} Seats Available</span>
              </div>
            )}
          </div>
        </div>
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
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Schedule
        </h2>
        
        {/* Cards Container */}
        <div className="bg-amber-50 dark:bg-slate-900 p-6 md:p-10 rounded-2xl">
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