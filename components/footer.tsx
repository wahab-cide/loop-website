"use client";
import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import { useToast } from "./toast";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function Footer() {
  const { showToast } = useToast();

  const legal = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Community Guidelines", href: "/community-guidelines" },
  ];

  const socials = [
    { title: "Twitter", href: "#", icon: IconBrandTwitter, onClick: () => showToast("Coming Soon") },
    { title: "LinkedIn", href: "#", icon: IconBrandLinkedin, onClick: () => showToast("Coming Soon") },
    { title: "Instagram", href: "#", icon: IconBrandInstagram, onClick: () => showToast("Coming Soon") },
  ];

  return (
    <div className="relative border-t border-white/[0.06] px-8 py-20 w-full overflow-hidden mx-auto max-w-7xl" style={{ backgroundColor: '#000000' }}>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-px flex h-8 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] w-56">
          <div className="w-full flex-none [background-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,#FFFFFF_32.29%,rgba(255,255,255,0.3)_67.19%,rgba(255,255,255,0)_100%)] blur-xs" />
        </div>
      </div>

      <div className="max-w-7xl my-28 mx-auto text-sm text-neutral-400 flex flex-col md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start w-full">
          <div className="mb-10 md:mb-0">
            <Logo />
            <p className="text-neutral-500 text-sm mt-3 mb-6">
              by Loop Platform, Inc.
            </p>
            <div className="flex gap-3">
              {socials.map((social, idx) => (
                <SocialIcon key={`social-${idx}`} href={social.href} onClick={social.onClick}>
                  <social.icon strokeWidth={1.5} width={15} height={15} />
                </SocialIcon>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-end gap-x-16 gap-y-10">
            {/* Campus staff need a way in that does not depend on being sent a
                link, so the portal is discoverable from the public site. */}
            <div className="flex flex-col space-y-4">
              <p className="text-white font-semibold">For campuses</p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://app.looprides.dev"
                    className="hover:text-white transition-colors"
                  >
                    Fleet portal sign in
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-white font-semibold">Legal</p>
              <ul className="space-y-3">
                {legal.map((item, idx) => (
                  <li key={`legal-${idx}`}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-16 pt-8 text-center">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Loop Platform, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

interface SocialIconProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function SocialIcon({ href, onClick, children }: SocialIconProps) {
  const className = "w-10 h-10 bg-transparent rounded-full flex items-center justify-center hover:bg-white/[0.06] transition-all border border-white/[0.08]";
  
  if (href === "#" && onClick) {
    return (
      <button
        onClick={onClick}
        className={className}
      >
        <div className="w-5 h-5 text-neutral-400 hover:text-white transition-colors flex justify-center items-center">
          {children}
        </div>
      </button>
    );
  }
  
  return (
    <Link
      href={href}
      className={className}
    >
      <div className="w-5 h-5 text-neutral-400 hover:text-white transition-colors flex justify-center items-center">
        {children}
      </div>
    </Link>
  );
}
