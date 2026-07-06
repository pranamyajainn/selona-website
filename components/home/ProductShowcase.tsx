"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

const showcasePosterSrc = "/media/thinkaiwork-showcase-poster.webp";
const showcaseVideoSrc = "/media/thinkaiwork-showcase.mp4";

export function ProductShowcase() {
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAllowMotion(!media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const showVideo = showcaseVideoSrc.length > 0 && allowMotion;

  return (
    <section
      id="product-preview"
      className="gutter relative isolate overflow-hidden bg-paper py-14 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(238,245,251,0.72) 48%, rgba(245,247,250,0.48) 100%)",
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-7 md:gap-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <Reveal>
            <p className="type-eyebrow text-action">Inside ThinkAIWork</p>
          </Reveal>
          <Reveal delay={90}>
            <p className="type-lead text-balance text-body-60">
              See how finance workflows become structured, repeatable, and
              auditable.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={160}
          className="relative mx-auto w-full max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-[24px] border border-line bg-white/78 shadow-[0_28px_90px_rgba(13,22,48,0.10)] backdrop-blur-md md:rounded-[34px]">
            <div className="relative aspect-[16/10] sm:aspect-video">
              {showVideo ? (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={showcasePosterSrc}
                  aria-label="ThinkAIWork product preview"
                >
                  <source src={showcaseVideoSrc} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={showcasePosterSrc}
                  alt="ThinkAIWork product workspace preview"
                  fill
                  priority
                  unoptimized
                  sizes="(min-width: 1400px) 1150px, (min-width: 810px) calc(100vw - 34px), calc(100vw - 34px)"
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
