"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { platformStages } from "@/lib/content";

// Six-stage walkthrough of the real product. Structural pattern (interval-
// driven active tab, pause on hover) follows Services.tsx as a reference,
// rebuilt here as its own component since the tabs, copy, and media are
// entirely different content.
const INTERVAL_MS = 5000;

export function PlatformWalkthrough() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % platformStages.length),
      INTERVAL_MS,
    );
    return () => clearInterval(t);
  }, [paused]);

  const current = platformStages[active];

  return (
    <section className="gutter py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div
          role="tablist"
          aria-label="Context Accelerator stages"
          className="flex flex-wrap gap-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {platformStages.map((s, i) => (
            <button
              key={s.name}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`flex min-h-[44px] items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                i === active
                  ? "border-action bg-action text-white"
                  : "border-line bg-transparent text-ink hover:bg-tint"
              }`}
            >
              <span
                className={i === active ? "text-white/70" : "text-body-60"}
              >
                {s.step}
              </span>
              {s.name}
            </button>
          ))}
        </div>

        <Reveal
          key={current.name}
          className="grid gap-8 rounded-2xl border border-line bg-tint/50 p-6 md:grid-cols-2 md:items-center md:p-10"
        >
          <div className="flex flex-col gap-3 order-2 md:order-1">
            <span className="type-eyebrow text-ink">
              Stage {current.step}
            </span>
            <h3 className="type-h3">{current.name}</h3>
            <p className="type-lead text-body-60">{current.body}</p>
            <span className="text-sm font-medium text-action">
              {current.cta}&nbsp;&rarr;
            </span>
          </div>
          <div className="relative order-1 aspect-[3/2] w-full overflow-hidden rounded-xl border border-line bg-paper shadow-sm md:order-2">
            <Image
              src={current.image}
              alt={`${current.name} screen in Selona's Context Accelerator`}
              fill
              sizes="(min-width: 810px) 480px, 100vw"
              className="object-contain p-3"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
