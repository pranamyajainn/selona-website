import { Reveal, WordReveal } from "@/components/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { cta, site, traction } from "@/lib/content";

export function Traction() {
  return (
    <section className="gutter py-10">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-lg border border-line bg-ink-deep px-6 py-16 text-white md:px-16 md:py-20">
          <div className="flex flex-col items-center gap-10 text-center">
            <Reveal>
              <p className="type-eyebrow text-sky">{traction.eyebrow}</p>
            </Reveal>
            <WordReveal
              as="h3"
              text={traction.heading}
              className="type-h2 max-w-xl"
              onScroll
            />
            <Reveal delay={200}>
              <p className="type-lead max-w-lg text-white/70">{traction.sub}</p>
            </Reveal>

            <div className="grid w-full gap-y-8 md:grid-cols-3">
              {traction.stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 100}
                  className="flex flex-col gap-1"
                >
                  <p className="type-display text-white">{s.value}</p>
                  <p className="type-eyebrow text-white/60">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="gutter bg-ink-deep py-20 text-white md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <Reveal>
          <p className="type-eyebrow text-sky">{cta.eyebrow}</p>
        </Reveal>
        <WordReveal
          as="h2"
          text={cta.heading}
          className="type-h2 max-w-2xl"
          onScroll
        />
        <Reveal delay={120}>
          <p className="type-lead max-w-2xl text-white/70">{cta.sub}</p>
        </Reveal>
        <Reveal className="flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton href="/contact">{site.ctaPrimary}</PrimaryButton>
          <SecondaryButton href="/#control-layer" className="text-white">
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
            Prefer a calendar link? Book directly →
          </a>
        </Reveal>
        <Reveal as="p" className="type-body text-white/60">
          For enquiries: {site.email}
        </Reveal>
      </div>
    </section>
  );
}
