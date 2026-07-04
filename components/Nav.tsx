"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/content";

// Fixed pill nav, top-anchored on every breakpoint (moved off Liminary's
// bottom-pill mobile pattern per client feedback: a bottom nav read as
// broken rather than a header). Desktop keeps the wide inset pill; mobile
// keeps the same rounded, blurred visual language and menu open/close
// behavior, just relocated to the top with safe-area padding for notched
// devices.
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="nav-drop fixed inset-x-4 z-50 md:inset-x-[60px] xl:inset-x-[100px]"
      style={{ top: "max(1.25rem, env(safe-area-inset-top))" }}
    >
      <header
        className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 md:px-6 md:py-3 ${
          scrolled || open
            ? "border border-line bg-white/70 shadow-sm backdrop-blur-xl"
            : "border border-transparent bg-transparent md:bg-transparent"
        }`}
        style={
          scrolled || open ? { WebkitBackdropFilter: "blur(20px)" } : undefined
        }
      >
        <Link href="/" aria-label="Selona home" onClick={() => setOpen(false)}>
          <Logo className="h-6 w-auto md:h-7" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-ink transition-colors duration-200 hover:text-sky"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener"
          className="hidden rounded-full bg-action px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-action-hover md:inline-flex"
        >
          {site.ctaPrimary}
        </a>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            className="flex min-h-[44px] items-center rounded-full bg-action px-4 text-xs font-medium text-white"
          >
            {site.ctaPrimary}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full"
          >
            <span
              className={`block h-0.5 w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-1 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-1 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <div
        id="mobile-nav-menu"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr] pt-2" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden rounded-3xl border border-line bg-white/90 shadow-lg backdrop-blur-xl">
          <nav>
            <ul className="flex flex-col gap-1 p-3">
              {[...navLinks, { label: "Contact Us", href: "/contact" }].map(
                (l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block min-h-[44px] rounded-full px-4 py-3 text-sm font-medium text-ink hover:bg-tint"
                    >
                      {l.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
