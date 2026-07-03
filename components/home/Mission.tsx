import Image from "next/image";
import { WordReveal, Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

// Liminary section 2 analog: oversized statement heading revealed on scroll,
// with an attribution row. Content is Selona's mission and founder.
export function Mission() {
  return (
    <section className="gutter py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <WordReveal
          as="h2"
          text={site.mission}
          className="type-statement max-w-5xl"
          onScroll
        />
        <Reveal className="flex items-center gap-4">
          <Image
            src="/brand/founder.jpg"
            alt={`${site.founderName}, ${site.founderAttribution}`}
            width={56}
            height={56}
            className="rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{site.founderName}</p>
            <p className="type-body text-body-60">{site.founderAttribution}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
