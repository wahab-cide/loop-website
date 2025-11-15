"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

const LogoIcon = () => (
  <div
    className={cn(
      "w-8 h-8 bg-primary rounded-full",
      "inline-flex items-center justify-center"
    )}
  >
    <div className="w-3 h-3 bg-gray-950 rounded-full"></div>
  </div>
);

export const Logo = ({ visible = false }: { visible?: boolean }) => {
  return (
    <Link
      href="/"
      className="font-normal flex gap-2 items-center text-sm px-2 py-1 shrink-0 relative z-20"
    >
      <LogoIcon />

      <span className={cn(
        "font-bold font-jua text-lg transition-colors",
        visible ? "text-white" : "text-white"
      )}>poolUp</span>
    </Link>
  );
};
