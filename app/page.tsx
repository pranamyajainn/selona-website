import { Hero } from "@/components/home/Hero";
import { Problems } from "@/components/home/Problems";
import { ControlMechanism } from "@/components/home/ControlMechanism";
import { FinanceLayers } from "@/components/home/FinanceLayers";
import { UseCases } from "@/components/home/UseCases";
import { TrustSection } from "@/components/home/TrustSection";
import { PrivateBeta } from "@/components/home/PrivateBeta";
import { CtaBand } from "@/components/home/CtaBand";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <ControlMechanism />
      <FinanceLayers />
      <UseCases />
      <TrustSection />
      <PrivateBeta />
      <CtaBand />
      <Faq />
    </>
  );
}
