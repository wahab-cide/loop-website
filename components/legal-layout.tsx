import React from "react";
import { cn } from "@/lib/utils";

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
  className?: string;
}

export function LegalLayout({ 
  title, 
  lastUpdated, 
  children, 
  className 
}: LegalLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-black text-white", className)}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-neutral-400 text-sm">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="text-neutral-300 leading-relaxed space-y-8">
            {children}
          </div>
        </div>

        {/* Footer Contact */}
        <div className="mt-16 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-400 text-sm">
            Have questions about this document? Contact us at{" "}
            <a 
              href="mailto:developer.loop.acc@icloud.com" 
              className="text-neutral-400 hover:text-white transition-colors underline"
            >
              developer.loop.acc@icloud.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
        {title}
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}

interface SubsectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export function Subsection({ title, children, id }: SubsectionProps) {
  return (
    <div id={id} className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-neutral-100">
        {title}
      </h3>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

interface ListItemProps {
  children: React.ReactNode;
  number?: string;
}

export function ListItem({ children, number }: ListItemProps) {
  return (
    <div className="flex gap-3 mb-3">
      {number && (
        <span className="text-neutral-400 font-medium min-w-[2rem]">
          {number}.
        </span>
      )}
      <div className="flex-1 text-neutral-300">
        {children}
      </div>
    </div>
  );
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-neutral-300 leading-relaxed mb-4">
      {children}
    </p>
  );
}

export function BulletList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-2 ml-4">
      {children}
    </ul>
  );
}

export function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-neutral-300 flex items-start">
      <span className="text-neutral-400 mr-3 mt-2">•</span>
      <span>{children}</span>
    </li>
  );
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-neutral-300 font-medium">
      {children}
    </span>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return (
    <strong className="text-white font-semibold">
      {children}
    </strong>
  );
}