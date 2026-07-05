import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { changelogEntries, changelogIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Updates",
  description: changelogIntro.sub,
};

export default function ChangelogPage() {
  return (
    <section className="gutter pb-24">
      <PageHeader
        eyebrow={changelogIntro.eyebrow}
        heading={changelogIntro.heading}
        sub={changelogIntro.sub}
      />

      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        {changelogEntries.length ? (
          changelogEntries.map((entry, i) => (
            <Reveal
              key={entry.title}
              delay={i * 100}
              className="rounded-lg border border-line bg-tint/40 p-8"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-action px-3 py-1 text-xs font-medium text-white">
                  {entry.tag}
                </span>
                <span className="text-sm text-body-60">{entry.date}</span>
              </div>
              <h2 className="type-h3 mb-2">{entry.title}</h2>
              <p className="type-body text-body-60">{entry.body}</p>
            </Reveal>
          ))
        ) : (
          <Reveal className="rounded-lg border border-line bg-tint/50 p-8 text-center">
            <p className="type-body text-body-60">
              No public release notes are available yet.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
