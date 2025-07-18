"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Button = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles = cn(
    "px-6 py-3 rounded-lg text-sm font-medium relative",
    "cursor-pointer hover:opacity-90 transition duration-200",
    "inline-flex items-center justify-center",
    "text-white"
  );

  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-transparent border border-white/20 hover:bg-white/10 text-white",
    dark: "bg-gray-800 hover:bg-gray-900 text-white",
    gradient: "bg-green-600 hover:bg-green-700 text-white",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
