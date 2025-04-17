"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import content from "@/content/cases-hero.json";

export const CaseContainer = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const logos = useMemo(() => content.logos, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="w-full py-16 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 relative">
          <h2 className={content.header.class}>{content.header.text}</h2>

          {content.decorations.map((decoration, index) => (
            <Image
              key={index}
              src={`/assets/images/${decoration.src}`}
              width={decoration.width}
              height={decoration.height}
              alt={decoration.alt}
              className={`decor${index + 1} z-0`}
              loading="lazy"
            />
          ))}

          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {logos.concat(logos).map((logo, index) => (
                <CarouselItem
                  className="basis-1/4 lg:basis-1/6 logos-carousel"
                  key={index}
                >
                  <Image
                    src={`/assets/images/${logo.src}`}
                    width={logo.width}
                    height={logo.height}
                    alt={logo.alt}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
