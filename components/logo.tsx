"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

const LogoIcon = () => (
  <div
    className={cn(
      "w-8 h-8 bg-blue-600 rounded-full",
      "inline-flex items-center justify-center"
    )}
  >
    <div className="w-3 h-3 bg-white rounded-full"></div>
  </div>
);

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex gap-2 items-center text-sm text-black px-2 py-1 shrink-0 relative z-20"
    >
      <LogoIcon />

      <span className="font-medium text-white">Loop</span>
    </Link>
  );
};
