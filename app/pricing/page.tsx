import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { pricingIntro, pricingTiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description: pricingIntro.sub,
};

export default function PricingPage() {
  return (
    <>
      <section className="gutter">
        <PageHeader
          eyebrow={pricingIntro.eyebrow}
          heading={pricingIntro.heading}
          sub={pricingIntro.sub}
        />

        <div className="mx-auto grid max-w-6xl gap-5 pb-10 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 100}
              className={`flex min-h-full flex-col gap-5 rounded-lg p-6 md:p-8 ${
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
              <p
                className={`type-body ${tier.highlighted ? "text-white/70" : "text-body-60"}`}
              >
                {tier.description}
              </p>
              <Link
                href="/contact"
                className={`inline-flex min-h-[44px] w-full items-center justify-center rounded-full px-5 text-sm font-medium shadow-[0_10px_24px_rgba(13,22,48,0.10)] transition-colors duration-200 ${
                  tier.highlighted
                    ? "bg-white text-ink-deep hover:bg-tint"
                    : "bg-ink-deep text-white hover:bg-ink"
                }`}
              >
                {tier.cta}
              </Link>
              <ul className="flex flex-col gap-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="mt-0.5 text-sky">
                      ✓
                    </span>
                    <span
                      className={`type-body ${tier.highlighted ? "text-white/80" : "text-body-60"}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          className="type-body mx-auto max-w-3xl pb-20 text-center text-body-60"
        >
          {pricingIntro.note}
        </Reveal>
      </section>
      <CtaBand />
    </>
  );
}
