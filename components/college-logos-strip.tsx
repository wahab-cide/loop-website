"use client";
import { motion } from "motion/react";
import Image from "next/image";

const LEFT_LOGOS = [
  { src: "/college_logos/Williams_College_Seal.svg.png", alt: "Williams College", width: 36, height: 36 },
  { src: "/college_logos/Colby_College_logo.svg.png", alt: "Colby College", width: 56, height: 28 },
  { src: "/college_logos/bates-college-logo-png_seeklogo-426296.png", alt: "Bates College", width: 52, height: 28 },
];

const RIGHT_LOGOS = [
  { src: "/college_logos/AC-Color.png", alt: "Amherst College", width: 36, height: 36 },
  { src: "/college_logos/Hamilton College.png", alt: "Hamilton College", width: 96, height: 28 },
  { src: "/college_logos/Tufts_University_logo.png", alt: "Tufts University", width: 52, height: 28 },
  { src: "/college_logos/mdl_master_left_blue.png", alt: "Middlebury College", width: 80, height: 24 },
];

const LogoItem = ({
  logo,
  index,
  side,
}: {
  logo: (typeof LEFT_LOGOS)[0];
  index: number;
  side: "left" | "right";
}) => (
  <motion.div
    initial={{ opacity: 0, x: side === "left" ? -16 : 16 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.8 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="flex items-center justify-center"
    style={{ width: logo.width + 8, height: 40 }}
  >
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      className="object-contain opacity-55 transition-opacity duration-300 hover:opacity-85"
      style={{ filter: "grayscale(100%) invert(1) brightness(180%)", maxHeight: 36 }}
    />
  </motion.div>
);

export function CollegeLogosStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="flex items-center justify-center gap-3 md:gap-5 mt-8 px-4 flex-wrap md:flex-nowrap"
    >
      {/* Left logos */}
      <div className="flex items-center gap-3 md:gap-4">
        {LEFT_LOGOS.map((logo, i) => (
          <LogoItem key={logo.alt} logo={logo} index={i} side="left" />
        ))}
      </div>

      {/* Divider + label */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="flex items-center gap-2 md:gap-3 shrink-0"
      >
        <div className="hidden md:block h-px w-6 bg-gray-700" />
        <span className="text-[10px] md:text-xs text-gray-600 font-medium tracking-widest uppercase whitespace-nowrap">
          Coming to these colleges
        </span>
        <div className="hidden md:block h-px w-6 bg-gray-700" />
      </motion.div>

      {/* Right logos */}
      <div className="flex items-center gap-3 md:gap-4">
        {RIGHT_LOGOS.map((logo, i) => (
          <LogoItem key={logo.alt} logo={logo} index={i} side="right" />
        ))}
      </div>
    </motion.div>
  );
}
