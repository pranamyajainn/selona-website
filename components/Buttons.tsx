import Link from "next/link";
import type { ReactNode } from "react";

const external = (href: string) => href.startsWith("http");

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target={external(href) ? "_blank" : undefined}
      rel={external(href) ? "noopener" : undefined}
      className={`btn-premium-primary ${className}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      // backdrop-blur-md rather than backdrop-filter inside
      // .btn-premium-secondary: Lightning CSS collapses the plain declaration
      // to -webkit- only and Chromium then drops it; the utility's var() form
      // survives compilation.
      className={`btn-premium-secondary backdrop-blur-md ${className}`}
    >
      {children}
    </Link>
  );
}
