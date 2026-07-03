import { Reveal, WordReveal } from "@/components/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { Placeholder } from "@/components/Placeholder";
import { site } from "@/lib/content";

// Liminary ratings band analog: no Selona counterpart exists (no store
// rating), so the slot is a labeled placeholder.
export function RatingsPlaceholder() {
  return (
    <section className="gutter py-10">
      <div className="mx-auto max-w-6xl">
        <Placeholder
          slot="Trust and ratings band"
          note="Liminary shows its Chrome Web Store rating here. Selona has no equivalent third-party rating yet; supply client logos, certifications, or review data to fill this slot."
        />
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
            className="border-white/30 text-white hover:bg-white/10"
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
