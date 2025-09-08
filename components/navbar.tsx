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
      
      <motion.div ref={ref} className="w-full fixed top-2 inset-x-0 z-50 hidden lg:block">
        <DesktopNav visible={visible} navItems={navItems} />
      </motion.div>
      
      
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
        background: visible ? "rgba(124, 58, 237, 0.95)" : "rgba(255, 255, 255, 0.9)",
        width: visible ? "50%" : "90%",
        height: visible ? "56px" : "72px",
        y: visible ? 8 : 0,
        borderColor: visible ? "rgba(124, 58, 237, 0.3)" : "rgba(229, 231, 235, 0.5)",
      }}
      initial={{
        width: "90%",
        height: "72px",
        background: "rgba(255, 255, 255, 0.9)",
        borderColor: "rgba(229, 231, 235, 0.5)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      className={cn(
        "hidden lg:flex flex-row self-center items-center justify-between py-3 mx-auto px-8 rounded-2xl relative z-[60] backdrop-saturate-[1.8] border shadow-lg"
      )}
    >
      <Logo visible={visible} />
      <motion.div
        className="lg:flex flex-row flex-1 items-center justify-center space-x-2 text-base"
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
              className={cn(
                "relative px-4 py-2 transition-colors font-medium text-base",
                visible 
                  ? "text-white hover:text-white/80" 
                  : "text-gray-700 hover:text-primary"
              )}
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
                variant="gradient"
                className="hidden md:block rounded-xl"
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
  const { showToast } = useToast();
  return (
    <>
      
      <div className="lg:hidden absolute top-4 left-4 right-4 z-50">
        <div className="flex justify-between items-center">
          
          <Logo />
          
          
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "backdrop-blur-md rounded-full p-3 transition-all touch-manipulation shadow-lg",
              open 
                ? "bg-primary text-white border border-primary" 
                : "bg-white/90 border border-gray-200 text-gray-700 hover:text-primary"
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
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.2
              }}
              className="absolute top-16 left-0 right-0 bg-white backdrop-blur-xl rounded-2xl border border-gray-200 shadow-2xl px-6 py-6 flex flex-col gap-2"
            >
              {navItems.map((navItem, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 hover:text-primary hover:bg-primary/5 text-lg font-medium transition-all py-3 px-4 rounded-xl"
                >
                  {navItem.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Button
                  as="button"
                  onClick={() => {
                    setOpen(false);
                    showToast("Coming Soon");
                  }}
                  variant="gradient"
                  className="w-full rounded-xl"
                >
                  Download App
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
