import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from "@/content/faq.json";

export const FaqContainer = () => (
  <div
    className="w-full py-10 lg:py-20 testimonial-wrapper overflow-hidden"
    id="faq"
  >
    <div className="container mx-auto relative overflow-hidden">
      <Image
        src={faqData.image}
        width={650}
        height={689}
        alt=""
        className="hero decor8 decor10 m-auto z-0"
        loading="lazy"
      />
      <div className="grid lg:grid-cols-2 gap-10 z-10 relative">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge>{faqData.badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                {faqData.title}
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                {faqData.description}
              </p>
            </div>
            <div>
              <a
                href={faqData.button.url}
                target="_blank"
                rel="nofollow noindex noreferrer"
                className="gap-4 outline-btn"
              >
                {faqData.button.text}
              </a>
            </div>
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full bg-muted p-2 faq"
        >
          {faqData.faqItems.map((item, index) => (
            <AccordionItem key={index} value={"index-" + index}>
              <AccordionTrigger>{item.label}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);
