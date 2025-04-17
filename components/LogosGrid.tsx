import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface LogoGridProps {
  title: string;
  logos: Logo[];
  gridClasses: string;
}

export default function LogoGrid({ title, logos, gridClasses }: LogoGridProps) {
  return (
    <div className="container mx-auto p-4 space-y-8 z-10 relative logosGrid">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-3xl max-w-2xl text-center font-regular sedgwickAve font-bold m-auto mb-10">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={gridClasses}>
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <Image
                  src={`assets/images/${logo.src}`}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
