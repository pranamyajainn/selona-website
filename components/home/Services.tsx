"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";

const INTERVAL_MS = 5000;

export function Services() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % services.length),
      INTERVAL_MS,
    );
    return () => clearInterval(t);
  }, [paused]);

  const current = services[active];

  return (
    <section id="services" className="gutter scroll-mt-28 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <Reveal>
            <p className="type-eyebrow text-ink">Services &amp; Features</p>
          </Reveal>
          <Reveal as="h2" className="type-h2">
            Our AI-Driven Solutions
          </Reveal>
          <Reveal as="p" className="type-lead max-w-xl text-body-60">
            Leverage AI features that boost performance to your business.
          </Reveal>
        </div>

        <Reveal
          className="flex flex-col gap-8"
        >
          <div
            role="tablist"
            aria-label="Selona services"
            className="flex flex-wrap gap-2"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {services.map((s, i) => (
              <button
                key={s.name}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`relative flex min-h-[44px] items-center rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  i === active
                    ? "border-action bg-action text-white"
                    : "border-line bg-transparent text-ink hover:bg-tint"
                }`}
              >
                {i === active && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-sky"
                  />
                )}
                {s.name}
              </button>
            ))}
          </div>

          <Reveal
            key={current.name}
            className="grid gap-8 rounded-2xl border border-line bg-tint/50 p-6 md:grid-cols-2 md:items-center md:p-10"
          >
            <div className="flex flex-col gap-3 order-2 md:order-1">
              <h3 className="type-h3">{current.name}</h3>
              <p className="type-lead text-body-60">{current.body}</p>
            </div>
            <div className="relative order-1 aspect-[3/2] w-full overflow-hidden rounded-xl border border-line bg-paper shadow-sm md:order-2">
              <Image
                src={current.image}
                alt={`${current.name} - Selona AI solutions`}
                fill
                sizes="(min-width: 810px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
