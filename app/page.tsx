import { Hero } from "@/components/home/Hero";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Problems } from "@/components/home/Problems";
import { ControlMechanism } from "@/components/home/ControlMechanism";
import { WorkflowProof } from "@/components/home/WorkflowProof";
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
      <CredibilityStrip />
      <ProductShowcase />
      <Problems />
      <ControlMechanism />
      <WorkflowProof />
      <FinanceLayers />
      <UseCases />
      <TrustSection />
      <PrivateBeta />
      <CtaBand />
      <Faq />
    </>
  );
}
