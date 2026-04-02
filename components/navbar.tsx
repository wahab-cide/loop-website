"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Button } from "./button";
import { Logo } from "./logo";
import { useToast } from "./toast";

interface NavbarProps {
  navItems: { name: string; link: string }[];
  visible: boolean;
}

export const Navbar = () => {
  const navItems = [
    { name: "Home",         link: "/#home" },
    { name: "How it Works", link: "/#how-it-works" },
    { name: "Driver",       link: "/driver" },
    { name: "Rider",        link: "/rider" },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 80);
  });

  return (
    <motion.div ref={ref} className="w-full fixed top-3 inset-x-0 z-50">
      <DesktopNav visible={visible} navItems={navItems} />
      <MobileNav  visible={visible} navItems={navItems} />
    </motion.div>
  );
};

const DesktopNav = ({ navItems, visible }: NavbarProps) => {
  const { showToast } = useToast();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHoveredIndex(null)}
      animate={{
        width:   visible ? "62%" : "72%",
        height:  visible ? "56px" : "66px",
        background: visible
          ? "rgba(0, 28, 32, 0.55)"
          : "rgba(0, 22, 26, 0.28)",
        borderColor: visible
          ? "rgba(0,229,255,0.22)"
          : "rgba(0,229,255,0.12)",
        boxShadow: visible
          ? "0 4px 32px rgba(0,229,255,0.06), inset 0 1px 0 rgba(0,229,255,0.08)"
          : "0 2px 20px rgba(0,229,255,0.04), inset 0 1px 0 rgba(0,229,255,0.06)",
        backdropFilter: "blur(24px) saturate(1.6)",
        y: visible ? 4 : 0,
      }}
      initial={{
        width: "72%",
        height: "66px",
        background: "rgba(0, 22, 26, 0.28)",
        borderColor: "rgba(0,229,255,0.12)",
      }}
      transition={{ type: "spring", stiffness: 160, damping: 28 }}
      className="hidden lg:flex items-center justify-between mx-auto px-8 rounded-2xl border z-[60]"
      style={{ WebkitBackdropFilter: "blur(24px) saturate(1.6)" }}
    >
      {/* Logo */}
      <Logo />

      {/* Nav items */}
      <motion.div
        className="flex items-center gap-0.5"
        animate={{ scale: visible ? 0.95 : 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 28 }}
      >
        {navItems.map((item, idx) => (
          <motion.div
            key={item.name}
            className="relative"
            onHoverStart={() => setHoveredIndex(idx)}
          >
            <Link
              href={item.link}
              className="relative z-10 block px-4 py-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
            {hoveredIndex === idx && (
              <motion.div
                layoutId="nav-hover"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0,229,255,0.12) 0%, rgba(0,229,255,0.06) 60%, transparent 100%)",
                  border: "1px solid rgba(0,229,255,0.18)",
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.15 } }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.35 }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* CTA — fades out when scrolled */}
      <AnimatePresence mode="popLayout" initial={false}>
        {!visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400, damping: 26 } }}
            exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.18 } }}
          >
            <Button
              as="button"
              onClick={() => showToast("Coming Soon")}
              variant="gradient"
              className="px-5 py-2 text-sm rounded-full"
            >
              Download App
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MobileNav = ({ navItems, visible }: NavbarProps) => {
  const { showToast } = useToast();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={{
        width: visible ? "94%" : "96%",
        background: visible
          ? "rgba(0, 28, 32, 0.55)"
          : "rgba(0, 22, 26, 0.28)",
        borderColor: visible
          ? "rgba(0,229,255,0.22)"
          : "rgba(0,229,255,0.12)",
        boxShadow: "0 2px 20px rgba(0,229,255,0.05), inset 0 1px 0 rgba(0,229,255,0.07)",
        backdropFilter: "blur(24px) saturate(1.6)",
        y: visible ? 2 : 0,
      }}
      initial={{
        width: "96%",
        background: "rgba(0, 22, 26, 0.28)",
        borderColor: "rgba(0,229,255,0.12)",
      }}
      transition={{ type: "spring", stiffness: 380, damping: 32 }}
      className="flex lg:hidden flex-col mx-auto border px-4 py-3 z-50 rounded-2xl"
      style={{ WebkitBackdropFilter: "blur(24px) saturate(1.6)" }}
    >
      {/* Top row */}
      <div className="flex justify-between items-center w-full">
        <Logo />
        <button
          onClick={() => setOpen(!open)}
          className="p-1.5 text-white/80 hover:text-[#00E5FF] transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <IconX className="w-5 h-5" /> : <IconMenu2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pt-3 pb-2 border-t mt-2" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm font-medium py-2 px-3 rounded-xl transition-colors",
                    "text-white/70 hover:text-[#00E5FF]",
                    "border border-transparent hover:border-primary/20 hover:bg-primary/10"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 mt-1" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <Button
                  as="button"
                  onClick={() => { setOpen(false); showToast("Coming Soon"); }}
                  variant="gradient"
                  className="w-full py-2.5 text-sm rounded-xl"
                >
                  Download App
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
