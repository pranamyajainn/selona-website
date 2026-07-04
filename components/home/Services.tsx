"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";

// Liminary switcher analog: auto-advancing tab switcher. Tabs are Selona's
// four services. The active-tab indicator is the orbit satellite dot, the
// site's signature element.
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

          <div
            role="tabpanel"
            className="min-h-40 rounded-2xl border border-line bg-tint/50 p-8 md:p-12"
          >
            <h3 className="type-h3 mb-3">{current.name}</h3>
            <p className="type-lead max-w-2xl text-body-60">{current.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
