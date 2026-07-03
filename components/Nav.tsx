"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/content";

// Structure mirrors the verified Liminary nav: a fixed pill at top 20 /
// inset 100 on desktop with a 1.1s drop-in; on phones a bottom-centered
// blurred pill that springs up. One deliberate deviation from Liminary
// (which keeps a transparent nav at all scroll depths): after scrolling,
// this nav gains a blurred white background so ink links stay readable
// over the dark CTA band.
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
    <>
      <div className="nav-drop fixed top-5 left-4 right-4 z-50 hidden md:left-[60px] md:right-[60px] md:block xl:left-[100px] xl:right-[100px]">
        <header
          className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
            scrolled
              ? "border border-line bg-white/70 shadow-sm backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
          style={scrolled ? { WebkitBackdropFilter: "blur(20px)" } : undefined}
        >
          <Link href="/" aria-label="Selona home">
            <Logo />
          </Link>
          <nav className="flex items-center gap-7">
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
            className="rounded-full bg-action px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-action-hover"
          >
            {site.ctaPrimary}
          </a>
        </header>
      </div>

      <div className="nav-rise fixed bottom-[50px] left-1/2 z-50 w-[calc(100vw-32px)] max-w-md md:hidden">
        <header
          className="rounded-full border border-line bg-white/70 px-5 py-3 shadow-lg backdrop-blur-xl"
          style={{ WebkitBackdropFilter: "blur(20px)" }}
        >
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Selona home" onClick={() => setOpen(false)}>
              <Logo className="h-6 w-auto" />
            </Link>
            <div className="flex items-center gap-3">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-action px-4 py-2 text-xs font-medium text-white"
              >
                {site.ctaPrimary}
              </a>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full"
              >
                <span
                  className={`block h-0.5 w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-1 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-1 -rotate-45" : ""}`}
                />
              </button>
            </div>
          </div>
          <div
            className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          >
            <nav className="overflow-hidden">
              <ul className="flex flex-col gap-1 pt-3 pb-1">
                {[...navLinks, { label: "Contact Us", href: "/contact" }].map(
                  (l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-full px-3 py-2 text-sm font-medium text-ink hover:bg-tint"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
