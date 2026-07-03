import Link from "next/link";
import { WordReveal, Reveal } from "@/components/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { careers, site } from "@/lib/content";

// Liminary hero structure: two-column row, text stack left (h1 with per-word
// reveal, lead, CTA row, press line), 16:9 autoplaying video card right,
// announcement card + badge row under the text column.
export function Hero() {
  const spotlightRole = careers[0];

  return (
    <section className="gutter overflow-hidden pt-36 pb-10 md:pt-40 xl:pt-[159px]">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-14 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full max-w-xl flex-col gap-5">
          <Reveal>
            <p className="type-eyebrow text-ink">{site.badge}</p>
          </Reveal>
          <WordReveal as="h1" text={site.headline} className="type-h1" />
          <WordReveal
            as="p"
            text="AI agency that delivers smart solutions built to perform"
            className="type-lead text-body-60"
            startDelay={400}
          />
          <Reveal delay={700} className="flex flex-wrap items-center gap-3 pt-1">
            <PrimaryButton href="/contact">{site.ctaPrimary}</PrimaryButton>
            <SecondaryButton href="/#services">
              {site.ctaSecondary}
            </SecondaryButton>
          </Reveal>

          <Reveal delay={850} className="mt-6">
            <Link
              href="/apply-now"
              className="group flex flex-col gap-1 rounded-2xl border border-line bg-tint/60 p-5 transition-colors duration-200 hover:border-sky"
            >
              <span className="type-eyebrow text-ink">We are hiring</span>
              <span className="type-h3">{spotlightRole.role}</span>
              <span className="type-body text-body-60">
                {spotlightRole.location}. Stipend {spotlightRole.stipend}.
              </span>
              <span className="text-sm font-medium text-action group-hover:text-sky">
                {spotlightRole.cta}&nbsp;&rarr;
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="relative w-full md:max-w-[52%]">
          <div
            className="orbit -top-10 -right-10 hidden h-52 w-52 md:block"
            aria-hidden="true"
          >
            <div className="satellite-arm">
              <div className="satellite" />
            </div>
          </div>
          <Reveal delay={300} className="relative z-10">
            {/* Video slot: 16:9 card matching the verified Liminary hero
                player. Selona's existing loop asset plays here; the hue
                rotation grades its violet orb into the brand's blue family.
                Swap the src and drop the filter when a dedicated hero video
                is produced. */}
            <video
              src="/brand/selona-loop.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="aspect-video w-full rounded-lg object-cover shadow-sm [filter:hue-rotate(-55deg)_saturate(0.85)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
