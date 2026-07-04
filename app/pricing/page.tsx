import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { PrimaryButton } from "@/components/Buttons";
import { CtaBand } from "@/components/home/CtaBand";
import { pricingIntro, pricingTiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description: pricingIntro.sub,
};

// Structure cloned from liminary.io/pricing: eyebrow + display heading +
// sub line, tier cards, closing CTA band, mega footer. Tiers are the four
// real revenue streams from the investor deck (Slide 7); dollar figures are
// deliberately absent pending Rahul's input.
export default function PricingPage() {
  return (
    <>
      <section className="gutter">
        <PageHeader
          eyebrow={pricingIntro.eyebrow}
          heading={pricingIntro.heading}
          sub={pricingIntro.sub}
        />

        <div className="mx-auto grid max-w-6xl gap-6 pb-10 md:grid-cols-2 xl:grid-cols-4">
          {pricingTiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 100}
              className={`flex flex-col gap-5 rounded-2xl p-8 ${
                tier.highlighted
                  ? "bg-ink-deep text-white"
                  : "border border-line bg-paper"
              }`}
            >
              <p
                className={`type-eyebrow ${
                  tier.highlighted ? "text-sky" : "text-body-60"
                }`}
              >
                {tier.model}
              </p>
              <h2 className="type-h3">{tier.name}</h2>
              <p>
                <span className="type-h2">{tier.price}</span>
                <span
                  className={
                    tier.highlighted ? "text-white/60" : "text-body-60"
                  }
                >
                  {tier.period}
                </span>
              </p>
              <p
                className={`type-body ${tier.highlighted ? "text-white/70" : "text-body-60"}`}
              >
                {tier.description}
              </p>
              <PrimaryButton href="/contact" className="w-full">
                Get Started
              </PrimaryButton>
              {tier.features.length > 0 && (
                <ul className="flex flex-col gap-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span aria-hidden="true" className="mt-0.5 text-sky">
                        &#10003;
                      </span>
                      <span
                        className={`type-body ${tier.highlighted ? "text-white/80" : ""}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {tier.note && (
                <p
                  className={`type-body rounded-xl p-4 text-sm ${
                    tier.highlighted
                      ? "bg-white/10 text-white/70"
                      : "bg-tint text-body-60"
                  }`}
                >
                  {tier.note}
                </p>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="type-body pb-20 text-center text-body-60">
          {pricingIntro.donation}
        </Reveal>
      </section>
      <CtaBand />
    </>
  );
}
