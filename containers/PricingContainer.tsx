import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import pricingData from "@/content/pricing-box.json";

export const PricingContainer = () => {
  const plan = pricingData.plans[0]; // único plano: Mentoria Dev
  const linkedInURL = "https://www.linkedin.com/in/clariana-abreu-dev/";

  return (
    <div
      className="w-full py-16 lg:py-20 anchor-hack overflow-hidden"
      id="pricing"
    >
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col z-10 relative">
          <Badge>{pricingData.sectionTitle}</Badge>

          <div className="flex gap-2 flex-col relative max-w-screen-md w-full">
            <h2 className="text-3xl z-10 md:text-5xl tracking-tighter max-w-xl text-center font-regular m-auto">
              {pricingData.sectionSubtitle}
            </h2>
            <p className="text-lg z-10 leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center m-auto">
              {pricingData.sectionDescription}
            </p>

            <Image
              src={pricingData.gifImages.src}
              width={pricingData.gifImages.width}
              height={pricingData.gifImages.height}
              alt={pricingData.gifImages.alt}
              className="m-auto mt-10 rounded overflow-hidden edu4devgif"
              loading="lazy"
            />

            <Image
              src={pricingData.decorImage.src}
              width={pricingData.decorImage.width}
              height={pricingData.decorImage.height}
              alt={pricingData.decorImage.alt}
              className="decor1"
              loading="lazy"
            />
          </div>

          <div className="pt-20 text-left w-full max-w-xl z-10">
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    {plan.title}
                  </span>
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start items-center">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">
                      {plan.priceUnit}
                    </span>
                  </p>

                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>{feature.title}</p>
                        {feature.items.map((item, j) => (
                          <p key={j} className="text-muted-foreground text-sm">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}

                  <a
                    href={linkedInURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-4 gold-btn text-center"
                  >
                    Vamos conversar no LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
