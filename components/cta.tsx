"use client";
import React, { useEffect } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { useToast } from "./toast";

const BackgroundGrid = ({ className }: { className?: string }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controls}
        className="absolute w-full h-full"
        style={{
          background: `radial-gradient(circle at center, rgba(40,40,40,0.8) 0%, rgba(20,20,20,0.6) 30%, rgba(0,0,0,0.4) 70%)`,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "120px 120px",
          }}
        />
      </motion.div>
    </div>
  );
};


export default function CTA() {
  const { showToast } = useToast();
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    }
  }, [controls, inView]);

  return (
    <div className="bg-black w-full max-w-7xl mx-auto min-h-[80vh] md:min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="w-full max-w-4xl mx-auto text-center py-8 md:py-12 lg:py-20 pb-16 md:pb-32 lg:pb-48 relative z-10"
      >
        <div className="relative z-20">
          <h2
            className={cn(
              "inline-block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold",
              "bg-gradient-to-b from-[#3B3B3B] via-[#FFFFFF] to-[#3B3B3B]",
              "bg-clip-text text-transparent",
              "px-4 md:px-8"
            )}
          >
            Ready to Join the Loop?
          </h2>
          <p className="max-w-lg text-xs sm:text-sm md:text-base text-neutral-400 text-center mx-auto my-4 md:my-6 lg:my-8 px-4">
Download Loop today and start experiencing safe, affordable, community-driven transportation that&apos;s built for everyone.
          </p>
        </div>
        <BackgroundGrid className="mt-8 md:mt-16 lg:mt-36 z-0" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-20"
        >
          <Button 
            as="button"
            onClick={() => showToast("Coming Soon")}
            className="h-10 md:h-12 lg:h-16 w-32 md:w-40 lg:w-48 rounded-full text-xs sm:text-sm md:text-base font-medium"
          >
Download App
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
