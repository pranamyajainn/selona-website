import Image from "next/image";
import { Reveal, WordReveal } from "@/components/Reveal";
import { platformLead } from "@/lib/content";

// Lead shot for the product walkthrough: full-bleed ambient background
// (Selona's ink-deep + a soft action/sky radial glow) behind the real
// product screenshot, no bordered card around the image itself, generous
// negative space, matching how Liminary presents its own product shot.
export function PlatformLead() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-deep py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 35%, rgba(36,124,240,0.35) 0%, rgba(14,18,41,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 45% at 65% 70%, rgba(0,153,255,0.18) 0%, rgba(14,18,41,0) 70%)",
        }}
      />

      <div className="gutter relative mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-3">
          <Reveal>
            <p className="type-eyebrow text-sky">{platformLead.eyebrow}</p>
          </Reveal>
          <WordReveal
            as="h2"
            text={platformLead.heading}
            className="type-statement max-w-2xl text-white"
          />
        </div>

        <Reveal delay={200} className="w-full">
          <Image
            src={platformLead.image}
            alt="Selona's Context Accelerator: six-stage overview showing Build Context, Usecases, Input Data, Output, Skills & Plugins, and Library"
            width={2880}
            height={1144}
            sizes="(min-width: 1024px) 960px, 100vw"
            className="w-full rounded-xl shadow-2xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
