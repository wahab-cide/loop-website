"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { GlowingEffect } from "./ui/glowing-effect";
import { useToast } from "./toast";

export function Hero() {
  const { showToast } = useToast();
  const containerRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const parentRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const { scrollY } = useScroll({
    target: parentRef,
  });

  const translateY = useTransform(scrollY, [0, 100], [0, -20]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.96]);
  const blurPx = useTransform(scrollY, [0, 100], [0, 5]);
  const filterBlurPx = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <div
      ref={parentRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 md:px-8 md:pt-40 bg-black"
    >
      <div className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-4xl font-semibold tracking-tight text-neutral-300 md:text-7xl">
        <Balancer>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              y: translateY,
              scale,
              filter: filterBlurPx,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "inline-block bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
              "bg-clip-text text-transparent"
            )}
          >
            <DynamicWord /> Rideshare Solution
          </motion.h1>
        </Balancer>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="relative z-20 mx-auto mt-4 max-w-xl px-4 text-center text-base/6 text-gray-500  sm:text-base"
      >
Connect with drivers in your community for safe, affordable, and convenient rideshare.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.7 }}
        className="mb-8 mt-6 sm:mb-10 sm:mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 sm:px-8 sm:flex-row md:mb-20"
      >
        <Button
          as="button"
          onClick={() => showToast("Coming Soon")}
          variant="primary"
          className="w-full sm:w-40 h-12 rounded-full flex items-center justify-center"
        >
Download App
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
        ref={containerRef}
        className="relative mx-auto w-full max-w-7xl p-2 backdrop-blur-lg md:p-4"
      >
        <div className="rounded-[50px] relative">
          <GlowingEffect
            spread={60}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={5}
            blur={10}
          />
          <Image
            src="/dashboard.png"
            alt="Loop rideshare app dashboard showing ride booking interface, student driver profiles, and safety features"
            width={1920}
            height={1080}
            className="rounded-[20px]  h-auto object-cover  w-full"
          />
          <div
            className="absolute inset-0 rounded-[20px]"
            style={{
              background:
                "linear-gradient(179.87deg, rgba(0, 0, 0, 0) 0.11%, rgba(0, 0, 0, 0.8) 69.48%, #000000 92.79%)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

const DynamicWord = () => {
  const words = ["Smart", "Affordable", "Convenient", "Safe"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  const getWordColor = (word: string) => {
    switch (word) {
      case "Smart":
        return "bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B82F6_0%,#60A5FA_50%,#3B82F6_100%)]";
      case "Affordable":
        return "bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#10B981_0%,#34D399_50%,#10B981_100%)]";
      case "Convenient":
        return "bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#8B5CF6_0%,#A78BFA_50%,#8B5CF6_100%)]";
      case "Safe":
        return "bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#F59E0B_0%,#FBBF24_50%,#F59E0B_100%)]";
      default:
        return "bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B82F6_0%,#60A5FA_50%,#3B82F6_100%)]";
    }
  };

  return (
    <span className="relative inline-block min-w-[280px] md:min-w-[450px] h-[1em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={cn(
            "absolute top-0 left-0 w-full bg-clip-text text-transparent font-semibold text-center",
            getWordColor(words[currentWordIndex])
          )}
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
