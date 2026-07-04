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
      className={`btn-premium-secondary ${className}`}
    >
      {children}
    </Link>
  );
}
