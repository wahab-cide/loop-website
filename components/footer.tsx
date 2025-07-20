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
  const forRiders = [
    { title: "How to Book", href: "#", onClick: () => showToast("Coming Soon") },
    { title: "Safety Tips", href: "#", onClick: () => showToast("Coming Soon") },
    { title: "Fare Splitting", href: "#", onClick: () => showToast("Coming Soon") },
    { title: "Campus Coverage", href: "#", onClick: () => showToast("Coming Soon") },
    { title: "Support", href: "#", onClick: () => showToast("Coming Soon") },
  ];

  const forDrivers = [
    { title: "Start Driving", href: "#", onClick: () => showToast("Coming Soon") },
    { title: "Driver Requirements", href: "#", onClick: () => showToast("Coming Soon") },
    { title: "Earnings", href: "#", onClick: () => showToast("Coming Soon") },
    { title: "Driver Support", href: "#", onClick: () => showToast("Coming Soon") },
  ];

  const company = [
    { title: "About Us", href: "#", onClick: () => showToast("Coming Soon") },
    { title: "Contact", href: "#", onClick: () => showToast("Coming Soon") },
    { title: "Careers", href: "#", onClick: () => showToast("Coming Soon") },
    { title: "Press", href: "#", onClick: () => showToast("Coming Soon") },
  ];

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
    <div className="relative border-t border-white/[0.1] px-8 py-20 bg-black w-full overflow-hidden mx-auto max-w-7xl">
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-px flex h-8 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] w-56">
          <div className="w-full flex-none [background-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,#FFFFFF_32.29%,rgba(255,255,255,0.3)_67.19%,rgba(255,255,255,0)_100%)] blur-xs" />
        </div>
      </div>

      <div className="max-w-7xl my-28 mx-auto text-sm text-neutral-400 flex flex-col justify-between md:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-10 md:mb-0">
            <Logo />
            <div className="flex gap-3 mt-6">
              {socials.map((social, idx) => (
                <SocialIcon key={`social-${idx}`} href={social.href} onClick={social.onClick}>
                  <social.icon strokeWidth={1.5} width={15} height={15} />
                </SocialIcon>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-20">
            <div className="flex flex-col space-y-4">
              <p className="text-white font-semibold">For Riders</p>
              <ul className="space-y-3">
                {forRiders.map((item, idx) => (
                  <li key={`riders-${idx}`}>
                    {item.href === "#" ? (
                      <button
                        onClick={item.onClick}
                        className="hover:text-white transition-colors text-left"
                      >
                        {item.title}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="hover:text-white transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-white font-semibold">For Drivers</p>
              <ul className="space-y-3">
                {forDrivers.map((item, idx) => (
                  <li key={`drivers-${idx}`}>
                    {item.href === "#" ? (
                      <button
                        onClick={item.onClick}
                        className="hover:text-white transition-colors text-left"
                      >
                        {item.title}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="hover:text-white transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-white font-semibold">Company</p>
              <ul className="space-y-3">
                {company.map((item, idx) => (
                  <li key={`company-${idx}`}>
                    {item.href === "#" ? (
                      <button
                        onClick={item.onClick}
                        className="hover:text-white transition-colors text-left"
                      >
                        {item.title}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="hover:text-white transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
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
  const className = "w-10 h-10 bg-transparent rounded-full flex items-center justify-center hover:bg-neutral-700/20 transition-all border border-neutral-700/50 shadow-[2px_-2px_15px_rgba(0,0,0,0.2)] hover:shadow-[4px_-4px_20px_rgba(0,0,0,0.3)] relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-full";
  
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
