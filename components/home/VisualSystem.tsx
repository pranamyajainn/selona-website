import Image from "next/image";
import type { ReactNode } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function VisualFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[24px] border border-line bg-paper shadow-[0_24px_80px_rgba(13,22,48,0.06)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 18% 0%, rgba(110,182,255,0.18), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.92), rgba(238,245,251,0.64))",
        }}
      />
      {children}
    </div>
  );
}

export function MiniArtifact({
  label,
  title,
  meta,
  tone = "blue",
  className,
}: {
  label: string;
  title: string;
  meta: string;
  tone?: "blue" | "navy" | "green" | "amber";
  className?: string;
}) {
  const toneClass = {
    blue: "bg-action/10 text-action",
    navy: "bg-ink-deep text-white",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
  }[tone];

  return (
    <div
      className={cn(
        "rounded-[16px] border border-line bg-white/88 p-3 shadow-[0_12px_34px_rgba(13,22,48,0.05)]",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold", toneClass)}>
          {label}
        </span>
        <span className="text-[11px] font-medium text-body-60">{meta}</span>
      </div>
      <p className="text-sm font-semibold leading-snug text-ink-deep">{title}</p>
      <div className="mt-3 grid gap-1.5" aria-hidden="true">
        <span className="h-1.5 w-11/12 rounded-full bg-line/70" />
        <span className="h-1.5 w-8/12 rounded-full bg-line/55" />
        <span className="h-1.5 w-10/12 rounded-full bg-line/45" />
      </div>
    </div>
  );
}

export function ProductCrop({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[16px] border border-line bg-tint/50",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1400px) 360px, (min-width: 810px) 42vw, calc(100vw - 64px)"
        className="object-cover object-top"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/22"
      />
    </div>
  );
}

export function SystemChip({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex min-w-0 items-center rounded-full border px-3 py-1.5 text-sm font-medium",
        tone === "dark"
          ? "border-white/14 bg-white/10 text-white/82"
          : "border-line bg-white/76 text-ink",
      )}
    >
      {children}
    </span>
  );
}
