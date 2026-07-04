import { Hero } from "@/components/home/Hero";
import { Mission } from "@/components/home/Mission";
import { About } from "@/components/home/About";
import { PlatformLead } from "@/components/home/PlatformLead";
import { PlatformWalkthrough } from "@/components/home/PlatformWalkthrough";
import { Services } from "@/components/home/Services";
import { Journey } from "@/components/home/Journey";
import { Credentials } from "@/components/home/Credentials";
import { Ticker } from "@/components/home/Ticker";
import { RatingsPlaceholder, CtaBand } from "@/components/home/CtaBand";
import { Updates } from "@/components/home/Updates";
import { Faq } from "@/components/Faq";

// Section order mirrors the confirmed Liminary structural map:
// hero, statement, claim/proof, [product walkthrough], narrative steps,
// switcher, card wall, ticker band, ratings band (placeholder), CTA,
// posts/updates, FAQ, footer. The product walkthrough sits right after
// About (which makes the claim) and before Services (which covers the
// broader offering), so it proves the claim with the real product before
// the site widens back out.
export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <About />
      <PlatformLead />
      <PlatformWalkthrough />
      <Journey />
      <Services />
      <Credentials />
      <Ticker />
      <RatingsPlaceholder />
      <CtaBand />
      <Updates />
      <Faq />
    </>
  );
}
