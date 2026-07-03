import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Placeholder } from "@/components/Placeholder";
import { careers } from "@/lib/content";

// Liminary blogs section analog: two columns. Column one feeds /changelog
// (entries are placeholders until real release notes exist); column two
// carries Selona's real open roles.
export function Updates() {
  return (
    <section id="careers" className="gutter scroll-mt-28 bg-mist py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex items-baseline justify-between">
            <Reveal as="h2" className="type-h2">
              Latest Updates
            </Reveal>
            <Link
              href="/changelog"
              className="text-sm font-medium text-action hover:text-sky"
            >
              See all &rarr;
            </Link>
          </div>
          <Placeholder
            slot="Updates feed"
            note="Release notes will list here once Selona publishes them. The live selona.ai changelog currently contains Framer template content, which was not carried over."
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-baseline justify-between">
            <Reveal as="h2" className="type-h2">
              Careers
            </Reveal>
            <Link
              href="/apply-now"
              className="text-sm font-medium text-action hover:text-sky"
            >
              Apply now &rarr;
            </Link>
          </div>
          <ul className="flex flex-col gap-4">
            {careers.map((c, i) => (
              <Reveal
                key={`${c.role}-${c.location}`}
                as="li"
                delay={i * 100}
              >
                <Link
                  href="/apply-now"
                  className="group block rounded-2xl border border-line bg-paper p-6 transition-colors duration-200 hover:border-sky"
                >
                  <h3 className="type-h3">{c.role}</h3>
                  <p className="type-body text-body-60">
                    {c.location}. Duration: {c.duration}. Start date: {c.startDate}.
                    Stipend: {c.stipend}.
                  </p>
                  <span className="text-sm font-medium text-action group-hover:text-sky">
                    {c.cta}&nbsp;&rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
