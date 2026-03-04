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

  const translateY = useTransform(scrollY, [0, 300], [0, -20]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.97]);
  const blurPx = useTransform(scrollY, [0, 300], [0, 4]);
  const filterBlurPx = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <div
      ref={parentRef}
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-8 md:px-8 md:pt-32 md:pb-12"
      style={{ backgroundColor: '#000000' }}
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
            transition={{ duration: 1.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
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
        transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 mx-auto mt-6 max-w-2xl px-4 text-center text-lg leading-8 text-gray-400 sm:text-xl"
      >
        Verified peer rides for college students — affordable, trusted, and built for your campus.
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
    }, 3800);

    return () => clearInterval(interval);
  }, [words.length]);

  const getWordColor = (word: string) => {
    switch (word) {
      case "Smart":
        return "text-blue-400";
      case "Affordable":
        return "text-emerald-400";
      case "Convenient":
        return "text-orange-400";
      case "Safe":
        return "text-white";
      default:
        return "text-blue-400";
    }
  };

  return (
    <span className="relative inline-block w-full text-center h-[1em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 12, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(12px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "absolute left-0 right-0 font-semibold",
            getWordColor(words[currentWordIndex])
          )}
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
