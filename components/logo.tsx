"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * The poolUp symbol. Inlined rather than loaded from /favicon.svg so it renders
 * with no extra request and inherits colour from `currentColor` — the navbar and
 * footer both sit on dark ground, but the mark is reused elsewhere on light.
 */
export const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className={cn("w-8 h-8", className)}
  >
    {/* The circuit is a stroke, not a silhouette — it has to carry the round
        caps the counters sit on, so it takes currentColor on `stroke` while the
        counters take it on `fill`. */}
    <path
      d="M28,30 V52 A22,22 0 0 0 72,52 V30"
      fill="none"
      stroke="currentColor"
      strokeWidth="14"
      strokeLinecap="round"
    />
    <circle cx="28" cy="30" r="11" />
    <circle cx="72" cy="30" r="11" />
  </svg>
);

/** Wordmark only — `pool` inherits, `Up` takes the accent. */
export const Wordmark = ({ className }: { className?: string }) => (
  <span className={cn("font-bold tracking-tight", className)}>
    pool<span className="text-primary">Up</span>
  </span>
);

export const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="poolUp — home"
      className="font-normal flex gap-2 items-center text-sm px-2 py-1 shrink-0 relative z-20"
    >
      <LogoIcon className="w-8 h-8 text-primary" />
      <Wordmark className="text-lg text-white" />
    </Link>
  );
};
