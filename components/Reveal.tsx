"use client";

import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "p" | "h2" | "h3" | "li" | "span";
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error ref type narrows per tag at runtime
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export function WordReveal({
  text,
  className = "",
  as: Tag = "h1",
  startDelay = 0,
  onScroll = false,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  startDelay?: number;
  onScroll?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!onScroll) {
      const t = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [onScroll]);

  const words = text.split(" ");
  return (
    <Tag
      // @ts-expect-error ref type narrows per tag at runtime
      ref={ref}
      className={`word-reveal ${visible ? "is-visible" : ""} ${className}`}
      aria-label={text}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          <span
            aria-hidden="true"
            className="word"
            style={
              {
                "--word-delay": `${startDelay + i * 100}ms`,
              } as React.CSSProperties
            }
          >
            {w}
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
