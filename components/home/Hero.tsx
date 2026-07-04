"use client";

import { useEffect, useRef } from "react";
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
  const headlineRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = headlineRef.current.querySelectorAll(".word-inner");

    if (prefersReducedMotion) {
      // Instantly visible
      targets.forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.filter = "none";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    // Dynamic import of GSAP to optimize bundle weight and keep it off the main critical path
    import("gsap").then(({ default: gsap }) => {
      const isMobile = window.matchMedia("(max-width: 639px)").matches;

      if (isMobile) {
        // 2D animation below 640px to prevent Safari stutter and clutter
        gsap.fromTo(
          targets,
          {
            y: 30,
            filter: "blur(4px)",
            opacity: 0,
          },
          {
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
            duration: 0.8,
            stagger: 0.09,
            ease: "power4.out",
            onComplete: () => {
              gsap.set(targets, { clearProps: "all" });
            },
          }
        );
      } else {
        // 3D perspective animation for desktop
        gsap.fromTo(
          targets,
          {
            transform: "translateZ(-400px) scale(0.85)",
            filter: "blur(12px)",
            opacity: 0,
          },
          {
            transform: "translateZ(0px) scale(1)",
            filter: "blur(0px)",
            opacity: 1,
            duration: 0.8,
            stagger: 0.09,
            ease: "power4.out",
            onComplete: () => {
              gsap.set(targets, { clearProps: "all" });
            },
          }
        );
      }
    });
  }, []);

  const words = site.headline.split(" ");

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

      {/* Extended glow ambient radial gradient layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(110% 100% at 50% 45%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.65) 75%, rgba(255,255,255,0.9) 92%, #fff 100%)",
        }}
      />

      {/* Grain/noise texture layer consistent with the site's design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center gap-5 text-center">
        <Reveal>
          <p className="type-eyebrow text-ink">{site.badge}</p>
        </Reveal>

        <h1
          ref={headlineRef}
          className="type-h1"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
          aria-label={site.headline}
        >
          {words.map((word, i) => (
            <span key={i}>
              <span
                className="word-wrapper inline-block overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  paddingTop: "0.2em",
                  paddingBottom: "0.25em",
                  marginTop: "-0.2em",
                  marginBottom: "-0.25em",
                  verticalAlign: "bottom",
                }}
              >
                <span
                  className="word-inner inline-block will-change-[transform,opacity,filter]"
                  style={{
                    transformStyle: "preserve-3d",
                    opacity: 0,
                  }}
                >
                  {word}
                </span>
              </span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>

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
