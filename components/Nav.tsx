"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/content";

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
      className="nav-drop fixed inset-x-4 z-50 min-[768px]:inset-x-[60px] xl:inset-x-[100px]"
      style={{ top: "max(0.75rem, env(safe-area-inset-top))" }}
    >
      <header
        className={`flex items-center justify-between rounded-full px-4 py-1.5 transition-all duration-300 min-[768px]:px-6 min-[768px]:py-2.5 ${
          scrolled || open
            ? "border border-line bg-white/78 shadow-sm backdrop-blur-xl"
            : "bg-transparent shadow-none"
        }`}
        style={
          scrolled || open ? { WebkitBackdropFilter: "blur(20px)" } : undefined
        }
      >
        <Link
          href="/"
          aria-label="Selona home"
          onClick={() => setOpen(false)}
          className="inline-flex min-h-[44px] min-w-[44px] items-center"
        >
          <Logo className="h-6 w-auto md:h-7" />
        </Link>

        <nav className="hidden items-center gap-7 min-[768px]:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="inline-flex min-h-[44px] min-w-[44px] items-center text-sm font-medium text-ink transition-colors duration-200 hover:text-sky"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden min-h-[44px] items-center rounded-full border border-line bg-white/55 px-5 py-2.5 text-sm font-medium text-ink backdrop-blur-md transition-colors duration-200 hover:border-action/30 hover:text-action min-[768px]:inline-flex"
        >
          Contact
        </Link>

        <div className="flex items-center gap-3 min-[768px]:hidden">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-[44px] w-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 rounded-full"
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
        aria-hidden={!open}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 min-[768px]:hidden ${
          open ? "pointer-events-auto grid-rows-[1fr] pt-2" : "pointer-events-none grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden rounded-2xl border bg-white/94 shadow-[0_16px_44px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-opacity duration-200 ${
            open ? "border-line opacity-100" : "border-transparent opacity-0"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-1 p-3">
              {[
                ...navLinks,
                { label: "Contact", href: "/contact" },
                { label: "Book a walkthrough", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className="block min-h-[44px] rounded-full px-4 py-3 text-sm font-medium text-ink hover:bg-tint"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
