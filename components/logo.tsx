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
    <path d="M23,43 L23,60 A27,27 0 0 0 77,60 L77,43 A7,7 0 0 0 63,43 L63,60 A13,13 0 0 1 37,60 L37,43 A7,7 0 0 0 23,43 Z" />
    <circle cx="30" cy="20" r="7.5" />
    <circle cx="70" cy="20" r="7.5" />
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
