"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FRAME_HEIGHT,
  FRAME_WIDTH,
  PostRideFrame,
  RideDetailsFrame,
  SharedPricingFrame,
} from "./phone-frames";

/**
 * The product section: one card that rotates through the three screens.
 *
 * The screens are drawn rather than screenshotted (see phone-frames.tsx), so they
 * stay sharp at any density and can't drift out of date the way the JPEGs this
 * replaced had — those were still showing the pre-rebrand UI.
 *
 * Order is deliberate: the thing a rider is nervous about (getting into a
 * stranger's car), then the thing nobody else does (the price falling as seats
 * fill), then the reveal that the app has a second side you can post from.
 */

const SLIDES = [
  {
    id: "ride-details",
    Frame: RideDetailsFrame,
    eyebrow: "Before you book",
    title: "You can see who you're getting in the car with",
    body:
      "The driver, their rating, every stop and the exact price per seat — all on one screen, before you commit to anything.",
    note: "Verified with a .edu address. No strangers from outside your campus.",
  },
  {
    id: "shared-pricing",
    Frame: SharedPricingFrame,
    eyebrow: "While you wait",
    title: "The seat gets cheaper as it fills",
    body:
      "Every rider who joins drops the price for everyone already on board. Nobody has to negotiate and nobody gets charged more for booking first.",
    note: "$32 alone · $24 with two · $19.20 with three · $16 in a full car.",
  },
  {
    id: "post-ride",
    Frame: PostRideFrame,
    eyebrow: "The other side",
    title: "Every rider is also a driver",
    body:
      "Already making the drive home, or to the airport? Post it in under a minute and split what the trip was going to cost you anyway.",
    note: "Four seats at $16 pays the driver $64 — twice one seat at $32.",
  },
];

/** The flat curve from the motion spec. Reveals and navigation, never a spring. */
const FLAT = [0.22, 1, 0.36, 1] as const;
const HOLD_MS = 5000;
const SWAP_MS = 0.24;

export function AppShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Keyed on `active`, so choosing a dot restarts the hold rather than leaving
  // the visitor a fraction of a second before it moves on without them.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % SLIDES.length), HOLD_MS);
    return () => clearTimeout(t);
  }, [active, paused]);

  const slide = SLIDES[active];

  return (
    <section
      className="w-full py-16 md:py-24 overflow-x-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/*
        Frames are drawn at a fixed 390x844 and scaled from their top-left, so the
        wrapper reserves the scaled box. One custom property drives both.
      */}
      <style>{`
        .pu-showcase { --pu-s: 0.60; }
        @media (min-width: 480px)  { .pu-showcase { --pu-s: 0.68; } }
        @media (min-width: 1024px) { .pu-showcase { --pu-s: 0.62; } }
        @media (min-width: 1280px) { .pu-showcase { --pu-s: 0.70; } }
      `}</style>

      <div className="pu-showcase max-w-6xl mx-auto px-5 md:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, ease: FLAT }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            See poolUp in Action
          </h2>
          <p className="text-neutral-400 text-lg max-w-md mx-auto">
            Built for college students, from first ride to campus shuttle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: FLAT }}
          viewport={{ once: true, margin: "-80px" }}
          className="w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16
                       rounded-[28px] px-6 py-10 sm:px-10 md:px-14 md:py-14"
            style={{
              backgroundColor: "#0A0A0A",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Fixed box, so swapping screens never resizes the card. */}
            <div
              className="shrink-0 self-center lg:self-auto"
              style={{
                width: `calc(${FRAME_WIDTH}px * var(--pu-s))`,
                height: `calc(${FRAME_HEIGHT}px * var(--pu-s))`,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: SWAP_MS, ease: FLAT }}
                >
                  <div
                    style={{
                      width: FRAME_WIDTH,
                      height: FRAME_HEIGHT,
                      transform: "scale(var(--pu-s))",
                      transformOrigin: "top left",
                    }}
                    aria-hidden="true"
                  >
                    <slide.Frame />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex-1 max-w-xl">
              {/* Reserved height, so the card doesn't jump on the longest slide. */}
              <div className="lg:min-h-[280px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: SWAP_MS, ease: FLAT }}
                  >
                    <div
                      className="text-xs font-semibold tracking-[0.14em] uppercase mb-4"
                      style={{ color: "#00E5FF" }}
                    >
                      {slide.eyebrow}
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                      {slide.title}
                    </h3>

                    <p className="text-neutral-400 text-base md:text-lg mt-5 leading-relaxed">
                      {slide.body}
                    </p>

                    {/* The concrete number. A claim with no figure attached reads
                        as marketing. */}
                    <p
                      className="text-sm md:text-base text-neutral-300 mt-6 pl-4 leading-relaxed"
                      style={{ borderLeft: "2px solid rgba(0,229,255,0.45)" }}
                    >
                      {slide.note}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex gap-2 mt-8" role="tablist" aria-label="Product screens">
                {SLIDES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={s.title}
                    style={{
                      width: i === active ? 28 : 8,
                      height: 8,
                      borderRadius: 4,
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      backgroundColor: i === active ? "#00E5FF" : "rgba(255,255,255,0.2)",
                      transition: "width 240ms cubic-bezier(.22,1,.36,1), background-color 240ms",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
