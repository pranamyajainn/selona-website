"use client";

import { useEffect, useRef, Fragment } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

// Matches selona.ai's live hero technique: an oversized video sits absolutely
// behind the centered text stack, desaturated (grayscale + invert + dimmed)
// rather than color-graded, with a radial white vignette between the video
// and the text so it reads as ambient light, not a discrete video card.
// Two encodes ship (desktop 1280w, mobile 720w, no audio track) so mobile
// doesn't pay for 4K bytes it will crop and desaturate anyway.
export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = headlineRef.current.querySelectorAll(".word-inner");

    if (prefersReducedMotion) {
      videoRef.current?.pause();
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
            stagger: 0.015,
            ease: "power4.out",
            onComplete: () => {
              gsap.set(targets, { clearProps: "all" });
            },
          }
        );
      } else {
        // Ensure starting 3D state
        gsap.set(targets, {
          transform: "translateZ(-900px) scale(0.55)",
          filter: "blur(12px)",
          opacity: 0,
        });

        // 3D perspective animation for desktop with momentum entry, overshoot, and settling
        gsap.to(targets, {
          keyframes: [
            {
              // Fast initial approach (40% of duration)
              transform: "translateZ(-250px) scale(0.85)",
              filter: "blur(3px)", // Near-sharp by midpoint (40%)
              opacity: 0.85,
              ease: "power2.in",
              duration: 0.32,
            },
            {
              // Deceleration and scale overshoot (next 45% of duration)
              transform: "translateZ(30px) scale(1.04)",
              filter: "blur(0px)",
              opacity: 1,
              ease: "power3.out",
              duration: 0.36,
            },
            {
              // Settle back to 1.0 (final 15% of duration)
              transform: "translateZ(0px) scale(1)",
              filter: "blur(0px)",
              opacity: 1,
              ease: "power3.out",
              duration: 0.12,
            }
          ],
          stagger: 0.015, // Near-simultaneous mass entrance
          duration: 0.8,
          onComplete: () => {
            gsap.set(targets, { clearProps: "all" });
          },
        });
      }
    });
  }, []);

  const words = site.headline.split(" ");

  return (
    <section className="gutter relative isolate flex min-h-[82svh] items-center overflow-hidden pt-28 pb-20 md:min-h-[86svh] md:pt-36 md:pb-24">
      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // Mobile renders the video at its native landscape aspect (sized by
        // width) instead of covering the portrait section — object-cover in
        // a portrait box zooms the 720x406 frame ~4.5x and the droplet reads
        // as a giant bouncing ball. Desktop keeps the original treatment.
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 aspect-video h-auto w-[200%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover [filter:brightness(0.75)_grayscale(1)_invert(1)] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] md:aspect-auto md:h-[150%] md:w-[150%] md:max-w-full md:[mask-image:none]"
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
            "radial-gradient(145% 130% at 50% 48%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0.28) 78%, rgba(255,255,255,0.72) 94%, #fff 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-white to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-white to-transparent"
      />

      {/* Grain/noise texture layer consistent with the site's design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center gap-6 text-center md:gap-7">
        <Reveal delay={150}>
          <p className="inline-flex min-h-[40px] items-center rounded-full border border-line bg-white/66 px-4 text-sm font-medium text-ink shadow-sm backdrop-blur-md">
            {site.eyebrow}
          </p>
        </Reveal>

        <h1
          ref={headlineRef}
          className="type-hero hero-3d text-balance"
          aria-label={site.headline}
        >
          {words.map((word, i) => (
            <Fragment key={i}>
              <span
                className="word-wrapper inline-block overflow-hidden"
                style={{
                  paddingTop: "0.25em",
                  paddingBottom: "0.28em",
                  marginTop: "-0.25em",
                  marginBottom: "-0.28em",
                  verticalAlign: "bottom",
                }}
              >
                <span
                  className="word-inner inline-block will-change-[transform,opacity,filter]"
                  style={{ opacity: 0 }}
                >
                  {word}
                </span>
              </span>
              {i < words.length - 1 ? " " : ""}
            </Fragment>
          ))}
        </h1>

        <Reveal
          as="p"
          delay={420}
          className="type-lead max-w-[660px] text-balance text-body-60"
        >
          {site.subheadline}
        </Reveal>
        <Reveal
          delay={560}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <Link
            href="/#control-layer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-ink-deep px-5 text-sm font-medium text-white shadow-[0_10px_24px_rgba(13,22,48,0.12)] transition-colors duration-200 hover:bg-ink"
          >
            See how it works
          </Link>
          <Link
            href="/#use-cases"
            className="inline-flex min-h-[44px] items-center justify-center text-sm font-medium text-ink underline decoration-line underline-offset-8 transition-colors duration-200 hover:text-action"
          >
            View use cases
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
