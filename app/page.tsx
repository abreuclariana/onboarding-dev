"use client";
import { HeaderContainer } from "@/containers/HeaderContainer";
import { HeroKits } from "@/containers/HeroKits";
import { HeroRoles } from "@/containers/HeroRoles";
import { MainHero } from "@/containers/MainHeroContainer";
import { StacksHero } from "@/containers/StacksHero";
import { CtaContainer } from "@/containers/CtaContainer";
import { FooterContainer } from "@/containers/FooterContainer";
import { CaseContainer } from "@/containers/CaseContainer";
import { PricingContainer } from "@/containers/PricingContainer";
import { TestimonialsContainer } from "@/containers/TestimonialsContainer";
import { FaqContainer } from "@/containers/FaqContainer";

import { HeroDevAi } from "@/containers/HeroDevAi";
// import FeedbackContainer from "@/containers/FeedbackContainer";
import LogoGrid from "@/containers/LogosGridContainer";

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <MainHero />
      <StacksHero />
      <LogoGrid configName={"sponsors"} />

      <CaseContainer />
      <div className="max-w-screen-lg m-auto overflow-hidden">
        <HeroKits />
        <CtaContainer />
        
        <LogoGrid configName={"partners"} />

        <HeroRoles />
        <HeroDevAi />
        <CtaContainer />
        <PricingContainer />
        <TestimonialsContainer />

        <CtaContainer />
        <LogoGrid configName={"resources"} />

        <FaqContainer />
        {/* <FeedbackContainer
          emailPage={"milton@edu4.dev"}
          emailFolder={`home`}
          subject={"Contato: Edu4Dev - Escola de Programação"}
          yourName={`Seu Nome`}
          yourEmail={`Seu E-mail`}
          yourMessage={`Sua Mensagem`}
          sendRequest={`Enviar`}
          conversionID={null}
          elementID={null}
          gtagCounter={null}
          feedbackHeading={null}
        /> */}
      </div>
      <FooterContainer />
    </>
  );
}
