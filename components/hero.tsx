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
import { Button } from "./button";
import { useToast } from "./toast";

export function Hero() {
  const { showToast } = useToast();
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
      className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12 md:px-8 md:pt-24 md:pb-16 bg-white"
    >
      <div className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-4xl font-semibold tracking-tight text-gray-900 md:text-7xl">
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
              "inline-block text-gray-900 drop-shadow-lg"
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
        className="relative z-20 mx-auto mt-4 max-w-xl px-4 text-center text-base/6 text-gray-600  sm:text-base"
      >
Connect with students and staff on campus for safe, affordable rides to events, and off-campus destinations.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center"
      >
        <Button
          as="button"
          onClick={() => showToast("Coming Soon")}
          variant="gradient"
          className="w-full sm:w-auto px-8 py-3 rounded-xl"
        >
          Get Started
        </Button>
        <Button
          as="button"
          onClick={() => showToast("Coming Soon")}
          variant="secondary"
          className="w-full sm:w-auto px-8 py-3 rounded-xl border-2 border-gray-300 bg-transparent hover:bg-gray-50"
        >
          Learn How It Works
        </Button>
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
