import Image from "next/image";
import { Reveal, WordReveal } from "@/components/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { site, traction } from "@/lib/content";

// Liminary ratings band analog. Formerly an honest placeholder (no real
// data existed); now filled with real traction data and signed partnerships
// from the investor deck (Slide 6).
export function Traction() {
  return (
    <section className="gutter py-10">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[24px] border border-line bg-ink-deep px-6 py-16 md:px-16 md:py-24">
          <Image
            src="/brand/trust-placeholder.webp"
            alt="ThinkAIWork traction background"
            fill
            priority
            sizes="(min-width: 1200px) 1100px, 95vw"
            className="object-cover opacity-60 mix-blend-screen"
          />
          <div className="relative z-10 flex flex-col items-center gap-10 text-center">
            <div className="flex flex-col items-center gap-4">
              <Reveal>
                <p className="type-eyebrow text-sky">{traction.eyebrow}</p>
              </Reveal>
              <WordReveal
                as="h3"
                text={traction.heading}
                className="type-h2 text-white max-w-xl"
                onScroll
              />
              <Reveal delay={200}>
                <p className="type-lead text-white/70 max-w-lg">
                  {traction.sub}
                </p>
              </Reveal>
            </div>

            <div className="grid w-full gap-y-8 md:grid-cols-3">
              {traction.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 100} className="flex flex-col gap-1">
                  <p className="type-display text-white">{s.value}</p>
                  <p className="type-eyebrow text-white/60">{s.label}</p>
                </Reveal>
              ))}
            </div>

            <div className="flex w-full flex-col gap-4 border-t border-white/15 pt-8">
              <Reveal>
                <p className="type-eyebrow text-white/60">
                  {traction.partnershipsLabel}
                </p>
              </Reveal>
              <div className="grid gap-6 text-left md:grid-cols-3 md:text-center">
                {traction.partnerships.map((p, i) => (
                  <Reveal key={p.name} delay={i * 100} className="flex flex-col gap-1">
                    <p className="type-h3 text-white">{p.name}</p>
                    <p className="type-body text-white/60">{p.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Liminary CTA band analog with Selona's real support line and CTAs.
export function CtaBand() {
  return (
    <section className="gutter bg-ink-deep py-20 text-white md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        {/* DRAFT: Pending Rahul's approval (audience per deck Slide 1/3) */}
        <WordReveal
          as="h2"
          text="Ready to automate your finance workflows?"
          className="type-h2 max-w-2xl"
          onScroll
        />
        <Reveal className="flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton href="/contact">{site.ctaPrimary}</PrimaryButton>
          <SecondaryButton
            href="/#platform"
            className="text-white"
          >
            {site.ctaSecondary}
          </SecondaryButton>
        </Reveal>
        <Reveal delay={300} className="mt-4">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-[44px] items-center text-sm font-medium text-white/50 hover:text-white transition-colors duration-200 underline underline-offset-4"
          >
            Looking for a sales conversation? Book a consultation &rarr;
          </a>
        </Reveal>
        <Reveal as="p" className="type-body text-white/60">
          Feel free to mail us for any enquiries : {site.email}
        </Reveal>
      </div>
    </section>
  );
}
