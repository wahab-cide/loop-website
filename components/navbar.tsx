"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Button } from "./button";
import { Logo } from "./logo";
import { useToast } from "./toast";

interface NavbarProps {
  navItems: {
    name: string;
    link: string;
  }[];
  visible: boolean;
}

export const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/#home",
    },
    {
      name: "Driver",
      link: "/driver",
    },
    {
      name: "Rider",
      link: "/rider",
    },
    {
      name: "Download",
      link: "/#download",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <>
      {/* Desktop - Fixed */}
      <motion.div ref={ref} className="w-full fixed top-2 inset-x-0 z-50 hidden lg:block">
        <DesktopNav visible={visible} navItems={navItems} />
      </motion.div>
      
      {/* Mobile - Not fixed, floating */}
      <div className="lg:hidden">
        <MobileNav navItems={navItems} />
      </div>
    </>
  );
};

const DesktopNav = ({ navItems, visible }: NavbarProps) => {
  const { showToast } = useToast();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHoveredIndex(null)}
      animate={{
        backdropFilter: "blur(16px)",
        background: visible ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.4)",
        width: visible ? "38%" : "80%",
        height: visible ? "48px" : "64px",
        y: visible ? 8 : 0,
      }}
      initial={{
        width: "80%",
        height: "64px",
        background: "rgba(0, 0, 0, 0.4)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      className={cn(
        "hidden lg:flex flex-row self-center items-center justify-between py-2 mx-auto px-6 rounded-full relative z-[60] backdrop-saturate-[1.8]"
      )}
    >
      <Logo />
      <motion.div
        className="lg:flex flex-row flex-1 items-center justify-center space-x-1 text-sm"
        animate={{
          scale: visible ? 0.9 : 1,
          justifyContent: visible ? "flex-end" : "center",
        }}
      >
        {navItems.map((navItem, idx) => (
          <motion.div
            key={`nav-item-${idx}`}
            onHoverStart={() => setHoveredIndex(idx)}
            className="relative"
          >
            <Link
              className="text-white/90 relative px-3 py-1.5 transition-colors"
              href={navItem.link}
            >
              <span className="relative z-10">{navItem.name}</span>
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="menu-hover"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1.1,
                    background:
                      "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.4,
                  }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex items-center gap-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {!visible && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                },
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Button
                as="button"
                onClick={() => showToast("Coming Soon")}
                variant="primary"
                className="hidden md:block rounded-full bg-white/20 hover:bg-white/30 text-white border-0"
              >
Download App
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const MobileNav = ({ navItems }: { navItems: NavbarProps['navItems'] }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Floating minimal mobile nav - not sticky */}
      <div className="lg:hidden absolute top-4 left-4 right-4 z-50">
        <div className="flex justify-between items-center">
          {/* Logo - floating, no extra container */}
          <Logo />
          
          {/* Menu button - floating circle */}
          <button
            onClick={() => setOpen(!open)}
            className="bg-black/70 backdrop-blur-md rounded-full p-3 border border-white/20 text-white/90 hover:text-white transition-colors touch-manipulation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <IconX className="w-5 h-5" />
            ) : (
              <IconMenu2 className="w-5 h-5" />
            )}
          </button>
        </div>

      
        {/* Menu dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.2
              }}
              className="absolute top-16 left-0 right-0 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/20 px-6 py-6 flex flex-col gap-4"
            >
              {navItems.map((navItem, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  onClick={() => setOpen(false)}
                  className="text-white/90 hover:text-white text-lg font-medium transition-colors py-2 px-2 hover:bg-white/10 rounded-lg"
                >
                  {navItem.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
