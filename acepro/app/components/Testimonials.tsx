"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ArrowLeft, ArrowRight, MoveLeft, MoveRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';

// --- Data for the testimonials ---
const testimonials = [
  {
    id: 1,
    name: "Sudipt Singh",
    date: "Oct 2023",
    avatarSrc: "https://github.com/shadcn.png", // Placeholder
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur. leo id leo mollis cursus mauris montes ipsum phasellus. Id urna amet aenean accumsan et sit sociis integer augue. Sagittis eget sapien aliquet nisl sagittis. Quam nulla placerat .",
  },
  {
    id: 2,
    name: "Sudipt Singh",
    date: "Oct 2023",
    avatarSrc: "https://github.com/shadcn.png", // Placeholder
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur. leo id leo mollis cursus mauris montes ipsum phasellus. Id urna amet aenean accumsan et sit sociis integer augue. Sagittis eget sapien aliquet nisl sagittis. Quam nulla placerat dictum amet arcu neque sit. Ipsum nisl malesuada dignissim pharetra ac vitae.",
  },
  {
    id: 3,
    name: "Sudipt Singh",
    date: "Oct 2023",
    avatarSrc: "https://github.com/shadcn.png", // Placeholder
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur. leo id leo mollis cursus mauris montes ipsum phasellus. Id urna amet aenean accumsan et sit sociis integer augue. Sagittis eget sapien aliquet nisl sagittis. Quam nulla placerat .",
  },
  {
    id: 4,
    name: "Jane Doe",
    date: "Nov 2023",
    avatarSrc: "https://github.com/shadcn.png", // Placeholder
    rating: 5,
    text: "This course was fantastic! Highly recommend to any aspiring project manager. The instructors were knowledgeable and supportive throughout the entire process.",
  },
];

/**
 * TestimonialCard
 * A reusable component for the inner content of each carousel item.
 */
function TestimonialCard({ item }: { item: (typeof testimonials)[0] }) {
  return (
    // Card with custom styling from the image
    <Card className="h-full rounded-2xl -4  bg-background shadow-lg">
      <CardContent className="flex h-full flex-col justify-between p-6">
        <div>
          {/* Star Rating */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            {Array.from({ length: 5 - item.rating }).map((_, i) => (
              <Star key={i + item.rating} className="h-5 w-5 text-gray-300" />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {item.text}
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={item.avatarSrc} alt={item.name} />
            <AvatarFallback>
              {item.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.date}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * TestimonialsSection
 * The main carousel component for "See what our students have to say".
 */
export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    // Assuming a dark background as per the image
    <section className="py-16  dark:bg-gray-950">
      <div className="container mx-auto px-4">

        {/* Header: Title & Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-3xl md:text-4xl ml-[24px] font-bold text-[#1E293B] mb-4 sm:mb-0">
            See what our students <br /> have to say about us
          </h2>

          {/* Custom Navigation Arrows - Desktop */}
          <div className="hidden sm:flex gap-3 ">
            <Button variant="outline" size="icon" className="w-[53px] h-[30px] rounded-[30px] border-2 border-blue-500 flex items-center bg-[#DEF1FF]  justify-center text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all" onClick={() => api?.scrollPrev()}>
              <MoveLeft className="w-6 h-6" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button className="w-[53px] h-[30px] rounded-[30px] border-2 border-blue-500 flex items-center bg-[#DEF1FF]  justify-center text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all" onClick={() => api?.scrollNext()}>
              <MoveRight className="w-6 h-6" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full scale-[0.97]"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <TestimonialCard item={item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* We hide the default arrows since we made custom ones */}
          <CarouselPrevious className="hidden" />
          <CarouselNext className="hidden" />
        </Carousel>

        {/* Custom Navigation Arrows - Mobile */}
        <div className="flex sm:hidden justify-center gap-3 mt-6">
          <Button variant="outline" size="icon" className="w-[53px] h-[30px] rounded-[30px] border-2 border-blue-500 flex items-center bg-[#DEF1FF]  justify-center text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all" onClick={() => api?.scrollPrev()}>
            <MoveLeft className="w-6 h-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button className="w-[53px] h-[30px] rounded-[30px] border-2 border-blue-500 flex items-center bg-[#DEF1FF]  justify-center text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all" onClick={() => api?.scrollNext()}>
            <MoveRight className="w-6 h-6" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                current === index ? "bg-white w-4" : "bg-white/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;