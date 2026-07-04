import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Placeholder } from "@/components/Placeholder";

// Liminary blogs section analog, updates column only. Hiring content
// (previously a second Careers column here) lives solely on /apply-now
// per the client's request to keep the public homepage free of hiring
// copy; this section now runs full width at the same section padding.
export function Updates() {
  return (
    <section className="gutter bg-mist py-20 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
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
    </section>
  );
}
