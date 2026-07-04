import { Hero } from "@/components/home/Hero";
import { Problems } from "@/components/home/Problems";
import { Mission } from "@/components/home/Mission";
import { About } from "@/components/home/About";
import { PlatformLead } from "@/components/home/PlatformLead";
import { PlatformWalkthrough } from "@/components/home/PlatformWalkthrough";
import { Testimonials } from "@/components/home/Testimonials";
import { Journey } from "@/components/home/Journey";
import { PromotedStat } from "@/components/home/PromotedStat";
import { Credentials } from "@/components/home/Credentials";
import { Ticker } from "@/components/home/Ticker";
import { Traction, CtaBand } from "@/components/home/CtaBand";
import { Faq } from "@/components/Faq";

// Section order mirrors the confirmed Liminary structural map:
// hero, problem (tension), [product walkthrough], statement, claim/proof,
// narrative steps, promoted stat, switcher, card wall, ticker band,
// traction band, CTA, FAQ, footer. Problems fills the tension-building
// section-3 slot from the Liminary map, right before the platform block,
// so the walkthrough reads as the resolution. Testimonials sit directly
// after the narrative steps, before Credentials.
export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <PlatformLead />
      <PlatformWalkthrough />
      <Mission />
      <About />
      <PromotedStat />
      <Journey />
      <Testimonials />
      <Credentials />
      <Ticker />
      <Traction />
      <CtaBand />
      <Faq />
    </>
  );
}
