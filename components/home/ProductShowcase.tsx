"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const showcaseImageSrc = "/media/thinkaiwork-context-accelerator.jpeg";
// Previous MP4 retained for rollback at /media/archive/thinkaiwork-showcase.mp4.

export function ProductShowcase() {
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
            <div className="relative bg-[#faf8f4]">
              <Image
                src={showcaseImageSrc}
                alt="ThinkAIWork context accelerator workflow preview"
                width={1600}
                height={637}
                priority
                unoptimized
                sizes="(min-width: 1400px) 1150px, (min-width: 810px) calc(100vw - 34px), calc(100vw - 34px)"
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
