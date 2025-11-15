"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
} from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./button";
import { Logo } from "./logo";
import { useToast } from "./toast";

interface NavItem {
  name: string;
  link: string;
}

export const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/#home",
    },
    {
      name: "How it Works",
      link: "/#how-it-works",
    },
    {
      name: "Driver",
      link: "/driver",
    },
    {
      name: "Rider",
      link: "/rider",
    },
  ];

  return (
    <>
      <div className="w-full hidden lg:block">
        <DesktopNav navItems={navItems} />
      </div>
      
      
      <div className="lg:hidden">
        <MobileNav navItems={navItems} />
      </div>
    </>
  );
};

const DesktopNav = ({ navItems }: { navItems: NavItem[] }) => {
  const { showToast } = useToast();

  return (
    <div
      className={cn(
        "hidden lg:grid grid-cols-[auto_1fr_auto] items-center w-full px-8 py-4 mx-auto",
        "backdrop-blur-lg border-b border-gray-800/50",
        "fixed top-0 left-0 right-0 z-50"
      )}
      style={{ backgroundColor: 'rgba(29, 27, 21, 0.8)' }}
    >
      {/* Logo */}
      <Logo />

      {/* Centered Nav Items */}
      <div className="flex items-center justify-center gap-1">
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`nav-item-${idx}`}
            className={cn(
              "px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
            )}
            href={navItem.link}
          >
            {navItem.name}
          </Link>
        ))}
      </div>

      {/* Right CTAs */}
      <div className="flex items-center gap-3">
        <Button
          as="button"
          onClick={() => showToast("Coming Soon")}
          variant="gradient"
          className="px-5 py-2 text-sm rounded-lg"
        >
          Download App
        </Button>
      </div>
    </div>
  );
};

const MobileNav = ({ navItems }: { navItems: NavItem[] }) => {
  const [open, setOpen] = useState(false);
  const { showToast } = useToast();
  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gray-800/50" style={{ backgroundColor: 'rgba(29, 27, 21, 0.8)' }}>
        <div className="flex justify-between items-center px-4 py-3">
          <Logo />

          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "p-2 transition-colors rounded-lg",
              open
                ? "bg-gray-800 text-white"
                : "text-gray-300 hover:bg-gray-800"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <IconX className="w-5 h-5" />
            ) : (
              <IconMenu2 className="w-5 h-5" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut"
              }}
              className="border-t border-gray-800/50 backdrop-blur-lg overflow-hidden"
              style={{ backgroundColor: 'rgba(29, 27, 21, 0.95)' }}
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navItems.map((navItem: NavItem, idx: number) => (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="text-gray-300 hover:text-white hover:bg-gray-800 text-sm font-medium transition-all py-2 px-3 rounded-lg"
                  >
                    {navItem.name}
                  </Link>
                ))}
                <div className="mt-3 pt-3 border-t border-gray-800">
                  <Button
                    as="button"
                    onClick={() => {
                      setOpen(false);
                      showToast("Coming Soon");
                    }}
                    variant="gradient"
                    className="w-full px-4 py-2 text-sm rounded-lg"
                  >
                    Download App
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
