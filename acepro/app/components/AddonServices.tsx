import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CalendarDays, Clock, List } from 'lucide-react';
import QuestionLogo from '@/components/ui/question';
import ListLogo from '@/components/ui/listLogo';

// --- Data for the cards ---
// We define the data separately to keep the component clean.
// In a real app, this might come from an API.
const services = [
  {
    id: 1,
    imageUrl: "/addon1.png", // Placeholder image
    tags: [
      { text: "Live Classes", variant: "default", background: "#DEF1FF" },
      { text: "Instructor Led Sessions", variant: "secondary", background: "#FCEAEA" },
    ],
    title: "PMP Professional Course Project Management Exam Prep",
    description: "Lorem ipsum dolor sit amet consectetur. Augue sed odio augue urna nisl fusce. Nibh pretium consectetur...",
    features: [
      { icon: <QuestionLogo className="h-4 w-4 text-destructive" />, text: "Lorem ipsum dolor sit amet consectetu augue" },
      { icon: <ListLogo className="h-4 w-4 text-destructive" />, text: "Lorem ipsum dolor sit amet consectetu augue" },
      { icon: <Clock className="h-4 w-4 text-destructive" />, text: "Lorem ipsum dolor sit amet consectetu augue" },
    ],
    buttonText: "View Schedule",
  },
  {
    id: 2,
    imageUrl: "addon2.png", // Placeholder image
    tags: [
      { text: "Offers", variant: "default", background: "#DEF1FF" },
      { text: "Mock Exam", variant: "secondary", background: "#FCEAEA" },
    ],
    title: "PMI-PMP Question Bank",
    description: "Lorem ipsum dolor sit amet consectetur. Augue sed odio augue urna nisl fusce. Nibh pretium consectetur...",
    features: [
      { icon: <QuestionLogo className="h-4 w-4 text-destructive" />, text: "Lorem ipsum dolor sit amet consectetu augue" },
      { icon: <ListLogo className="h-4 w-4 text-destructive" />, text: "Lorem ipsum dolor sit amet consectetu augue" },
      { icon: <Clock className="h-4 w-4 text-destructive" />, text: "Lorem ipsum dolor sit amet consectetu augue" },
    ],
    buttonText: null, // No button for this card
  },
  {
    id: 3,
    imageUrl: "/ddon3.png", // Placeholder image
    tags: [
      { text: "Offers", variant: "default", background: "#DEF1FF" },
      { text: "Expert Guidance", variant: "destructive", background: "#FCEAEA" }, // Use 'destructive' for the red-like tag
    ],
    title: "PMI-PMP Application Review Service",
    description: "Lorem ipsum dolor sit amet consectetur. Augue sed odio augue urna nisl fusce. Nibh pretium consectetur...",
    features: [
      { icon: <QuestionLogo className="h-4 w-4 text-destructive" />, text: "Lorem ipsum dolor sit amet consectetu augue" },
      { icon: <ListLogo className="h-4 w-4 text-destructive" />, text: "Lorem ipsum dolor sit amet consectetu augue" },
      { icon: <Clock className="h-4 w-4 text-destructive" />, text: "Lorem ipsum dolor sit amet consectetu augue" },
    ],
    buttonText: null, // No button for this card
  },
];

// --- The React Component ---

/**
 * AddonServices Component
 * Renders a section with a grid of service cards.
 * Uses React, TailwindCSS, and shadcn/ui components (Card, Badge, Button).
 * Assumes `lucide-react` is installed for icons.
 */
export function AddonServices() {
  return (
    <section className=" py-16">
      <div className="container lg:mx-[36px] ">
        <h2 className="text-[36px] text-[#1E293B] font-bold  mb-12">
          Add-on Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="flex rounded-top-[20px] rounded-bottom-0 flex-col overflow-hidden w-full max-w-[390px]  shadow-md p-0 m-0">
              {/* Card Image */}
              <CardHeader className="m-0 p-0  ">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full rounded-top-[20px] h-[250px] object-cover"
                />
              </CardHeader>

              {/* Card Content (grows to fill space) */}
              <CardContent className="flex-1">
                {/* Tags */}
                <div className="flex text-[12px] text-[#3E3E3E] flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <Badge
                      key={tag.text}
                      style={{ background: tag.background }}
                      variant={tag.variant as any}
                      className='text-[#3E3E3E]'
                    >
                      {tag.text}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <CardTitle className="mb-2 text-lg text-[#1E293B]">{service.title}</CardTitle>

                {/* Description */}
                <CardDescription className="mb-4 text-sm">
                  {service.description}
                </CardDescription>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="flex-shrink-0 mt-0.5">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Card Footer (only shown if buttonText exists) */}
              {service.buttonText && (
                <CardFooter className="p-6  mb-4 pt-0">
                  <Button className="w-full  bg-[#016FC0]">{service.buttonText}</Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AddonServices;