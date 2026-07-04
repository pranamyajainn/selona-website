import Image from "next/image";
import { Reveal, WordReveal } from "@/components/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { Placeholder } from "@/components/Placeholder";
import { site } from "@/lib/content";

// Liminary ratings band analog: no Selona counterpart exists (no store
// rating), so the slot displays a premium brand trust card.
export function RatingsPlaceholder() {
  return (
    <section className="gutter py-10">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[24px] border border-line bg-ink-deep px-6 py-16 md:py-24 text-center">
          <Image
            src="/brand/trust-placeholder.webp"
            alt="Selona secure and reliable AI automation background"
            fill
            priority
            sizes="(min-width: 1200px) 1100px, 95vw"
            className="object-cover opacity-60 mix-blend-screen"
          />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <Reveal>
              <p className="type-eyebrow text-sky">TRUST &amp; SECURITY</p>
            </Reveal>
            <WordReveal
              as="h3"
              text="Secure, Enterprise-Grade AI Automation"
              className="type-h2 text-white max-w-xl"
              onScroll
            />
            <Reveal delay={200}>
              <p className="type-lead text-white/70 max-w-md">
                Privacy-first agents designed for secure local deployments and scale.
              </p>
            </Reveal>
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
        <WordReveal
          as="h2"
          text="Have questions or need any help? We're here to help you with that"
          className="type-h2 max-w-2xl"
          onScroll
        />
        <Reveal className="flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton href="/contact">{site.ctaPrimary}</PrimaryButton>
          <SecondaryButton
            href="/#services"
            className="text-white"
          >
            {site.ctaSecondary}
          </SecondaryButton>
        </Reveal>
        <Reveal as="p" className="type-body text-white/60">
          Feel free to mail us for any enquiries : {site.email}
        </Reveal>
      </div>
    </section>
  );
}
