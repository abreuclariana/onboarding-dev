import React from "react";
import Image from "next/image";
import content from "@/content/main-hero.json";

export const MainHero = () => {
  const { logo, decorImage } = content;
  const showDecorImage = decorImage.src && decorImage.src.trim() !== "";

  return (
    <div className="w-full m-auto">
      <div className="container m-auto">
        <div className="flex items-center justify-center relative">
          <Image
            src={logo.src}
            alt={logo.alt}
            className="mt-20 z-10"
            width={logo.width}
            height={logo.height}
          />
          {showDecorImage && (
            <Image
              src={decorImage.src}
              width={decorImage.width}
              height={decorImage.height}
              alt={logo.alt}
              className="hero decor1 m-auto z-0"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  );
};
