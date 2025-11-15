"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Balancer from "react-wrap-balancer";

export function Hero() {
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
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-8 md:px-8 md:pt-32 md:pb-12"
      style={{ backgroundColor: '#1d1b15' }}
    >
      <div className="text-balance relative z-20 mx-auto mb-6 mt-4 max-w-5xl text-center text-4xl font-bold tracking-tight text-white md:text-6xl">
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
              "inline-block text-white drop-shadow-lg"
            )}
          >
            <DynamicWord />
            <br />
            <span className="sm:whitespace-nowrap">Campus Rideshare Solution</span>
          </motion.h1>
        </Balancer>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="relative z-20 mx-auto mt-6 max-w-2xl px-4 text-center text-lg leading-8 text-gray-400 sm:text-xl"
      >
Connect with students for affordable rides to events, and off-campus destinations.
      </motion.p>
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
        return "bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#FB923C_0%,#FDBA74_50%,#FB923C_100%)]";
      case "Safe":
        return "bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#F59E0B_0%,#FBBF24_50%,#F59E0B_100%)]";
      default:
        return "bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B82F6_0%,#60A5FA_50%,#3B82F6_100%)]";
    }
  };

  return (
    <span className="relative inline-block w-full text-center h-[1em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={cn(
            "absolute left-0 right-0 bg-clip-text text-transparent font-semibold",
            getWordColor(words[currentWordIndex])
          )}
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
