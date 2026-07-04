import Link from "next/link";
import { Logo } from "./Logo";
import { footerColumns, site } from "@/lib/content";

// Mega-footer structure mirrors the Liminary map: tagline row, link columns,
// oversized wordmark, bottom bar. All copy is Selona's.
export function Footer() {
  return (
    <footer className="gutter bg-mist pt-20 pb-28 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <p className="type-h3 max-w-xl">{site.footerTagline}</p>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="type-eyebrow mb-4 text-body-60">{col.title}</h3>
              <ul className="flex flex-col gap-1">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="type-body inline-block min-h-[44px] py-2.5 text-ink transition-colors duration-200 hover:text-sky"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="type-eyebrow mb-4 text-body-60">Enquiries</h3>
            <a
              href={`mailto:${site.email}`}
              className="type-body inline-block min-h-[44px] py-2.5 text-ink transition-colors duration-200 hover:text-sky"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="border-t border-line pt-10">
          <Logo className="h-auto w-full max-w-4xl opacity-90" />
        </div>

        <div className="flex flex-col gap-1 text-sm text-body-60 md:flex-row md:items-center md:justify-between">
          <p className="py-2.5">Selona. AI automation for business processes.</p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="inline-flex min-h-[44px] items-center px-2 hover:text-sky"
            >
              Privacy
            </Link>
            <Link
              href="/changelog"
              className="inline-flex min-h-[44px] items-center px-2 hover:text-sky"
            >
              Updates
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
