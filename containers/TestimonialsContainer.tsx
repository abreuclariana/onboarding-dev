"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import testimonialsData from "@/content/testimonials.json";

export const TestimonialsContainer = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = testimonialsData.testimonials || [];

  return (
    <div className="w-full mb-24" id="depoimentos">
      <div className="container mx-auto z-10 relative">
        <div className="flex flex-col gap-10 testimonial items-center">
          <h2 className="text-3xl md:text-3xl max-w-2xl text-center font-regular sedgwickAve font-bold mb-10">
            {testimonialsData.title}
          </h2>

          {testimonials.length > 0 && (
            <div className="bg-muted testimonial-bg rounded-md p-6 flex flex-col items-center justify-center text-center max-w-xl w-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl tracking-tight">
                    {testimonials[current].label}
                  </h3>
                  <p className="text-muted-foreground text-base">
                    {testimonials[current].content}
                  </p>
                </div>
                <p className="flex flex-row gap-2 text-sm items-center justify-center">
                  <span className="text-muted-foreground">By</span>
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src={
                        testimonials[current].avatar ||
                        `/assets/images/logo-github.png`
                      }
                      alt={testimonials[current].author}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span>{testimonials[current].author}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
