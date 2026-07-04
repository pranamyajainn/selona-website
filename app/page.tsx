import { Hero } from "@/components/home/Hero";
import { Mission } from "@/components/home/Mission";
import { About } from "@/components/home/About";
import { PlatformLead } from "@/components/home/PlatformLead";
import { PlatformWalkthrough } from "@/components/home/PlatformWalkthrough";
import { Testimonials } from "@/components/home/Testimonials";
import { Services } from "@/components/home/Services";
import { Journey } from "@/components/home/Journey";
import { PromotedStat } from "@/components/home/PromotedStat";
import { Credentials } from "@/components/home/Credentials";
import { Ticker } from "@/components/home/Ticker";
import { RatingsPlaceholder, CtaBand } from "@/components/home/CtaBand";
import { Faq } from "@/components/Faq";

// Section order mirrors the confirmed Liminary structural map:
// hero, statement, claim/proof, [product walkthrough], [testimonials],
// narrative steps, promoted stat, switcher, card wall, ticker band, ratings band
// (placeholder), CTA, posts/updates, FAQ, footer. The product walkthrough
// sits right after About (which makes the claim) and before Services
// (which covers the broader offering), so it proves the claim with the
// real product before the site widens back out. Testimonials sit directly
// after the product walkthrough, before Credentials.
export default function Home() {
  return (
    <>
      <Hero />
      <PlatformLead />
      <PlatformWalkthrough />
      <Mission />
      <About />
      <PromotedStat />
      <Journey />
      <Testimonials />
      <Credentials />
      <Ticker />
      <RatingsPlaceholder />
      <CtaBand />
      <Faq />
    </>
  );
}
