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
      className={`inline-flex items-center justify-center rounded-full bg-action px-6 py-3 font-medium text-sm text-white transition-colors duration-200 hover:bg-action-hover ${className}`}
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
      className={`inline-flex items-center justify-center rounded-full border border-line bg-transparent px-6 py-3 font-medium text-sm text-ink transition-colors duration-200 hover:bg-tint ${className}`}
    >
      {children}
    </Link>
  );
}
