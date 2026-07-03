"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { faqs, site } from "@/lib/content";

// Liminary FAQ analog: accordion with toggle plus/close affordance.
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="gutter scroll-mt-28 py-20 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <div className="flex flex-col gap-3 text-center">
          <Reveal as="h2" className="type-h2">
            Questions? Answers!
          </Reveal>
          <Reveal as="p" className="type-lead text-body-60">
            Find Some quick answers to the most common questions.
          </Reveal>
        </div>

        <ul className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <Reveal as="li" key={f.q} delay={i * 60}>
                <div className="rounded-2xl border border-line">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="type-h3">{f.q}</span>
                    <span
                      aria-hidden="true"
                      className={`text-2xl text-action transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="type-body px-6 pb-6 text-body-60">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <p className="type-body text-center text-body-60">
          Feel free to mail us for any enquiries :{" "}
          <a href={`mailto:${site.email}`} className="text-action hover:text-sky">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
