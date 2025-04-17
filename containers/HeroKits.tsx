import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import content from "@/content/kits-hero.json";

export const HeroKits = () => (
  <div className="w-full py-10 lg:py-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2 relative z-10">
        <div className="flex gap-4 flex-col z-10">
          <div>
            <Badge variant={"outline"}>{content.badge.text}</Badge>
          </div>
          <div className="flex gap-4 flex-col">
           
          </div>
          <div className="flex flex-row gap-4 cta-btn">
            <Link
              href={content.ctaButton.href}
              className={
                "bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-8 gap-4 purple-btn"
              }
            >
              {content.ctaButton.text} <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        {content.image && (
          <div className="rounded-md aspect-square flex items-center ml-auto">
            <Image
              src={content.image.src}
              width={content.image.width}
              height={content.image.height}
              alt={content.image.alt}
            />
          </div>
        )}
      </div>
    </div>
  </div>
);
