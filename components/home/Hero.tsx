import { WordReveal, Reveal } from "@/components/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { site } from "@/lib/content";

// Matches selona.ai's live hero technique: an oversized video sits absolutely
// behind the centered text stack, desaturated (grayscale + invert + dimmed)
// rather than color-graded, with a radial white vignette between the video
// and the text so it reads as ambient light, not a discrete video card.
// Two encodes ship (desktop 1280w, mobile 720w, no audio track) so mobile
// doesn't pay for 4K bytes it will crop and desaturate anyway.
export function Hero() {
  return (
    <section className="gutter relative isolate flex min-h-[560px] items-center overflow-hidden pt-40 pb-20 md:min-h-[640px] md:pt-48 md:pb-28">
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 object-cover [filter:brightness(0.75)_grayscale(1)_invert(1)]"
      >
        <source
          media="(max-width: 767px)"
          src="/brand/selona-loop-mobile.mp4"
          type="video/mp4"
        />
        <source src="/brand/selona-loop-desktop.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 40%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 75%, #fff 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center gap-5 text-center">
        <Reveal>
          <p className="type-eyebrow text-ink">{site.badge}</p>
        </Reveal>
        <WordReveal as="h1" text={site.headline} className="type-h1" />
        <WordReveal
          as="p"
          text="AI agency that delivers smart solutions built to perform"
          className="type-lead max-w-lg text-body-60"
          startDelay={400}
        />
        <Reveal
          delay={700}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <PrimaryButton href="/contact">{site.ctaPrimary}</PrimaryButton>
          <SecondaryButton href="/#services">
            {site.ctaSecondary}
          </SecondaryButton>
        </Reveal>
      </div>
    </section>
  );
}
