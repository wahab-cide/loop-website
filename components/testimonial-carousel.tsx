"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const driverTestimonials = [
  {
    quote: "If three riders chip in $25 each, my trip home will be free — and we'll blast music the whole way.",
    name: "Chris",
    title: "Engineering Senior",
  },
  {
    quote: "I'm a senior with off-campus rent, parking fees, and a dog. poolUp will cover my gas without adding a single mile I wasn't already driving.",
    name: "Alex",
    title: "Senior Economics Major",
  },
  {
    quote: "I've driven the same route to NYC for years. With poolUp, it'll turn into a mini social. I'll probably meet other students — and maybe another comic or two.",
    name: "Jules",
    title: "Junior",
  },
  {
    quote: "Seeing mutual friends and rider ratings before accepting gives me full control. I'll definitely check the app before every long weekend.",
    name: "Sam",
    title: "Sophomore",
  },
  {
    quote: "I won't drive every weekend, but when I do, I'll post. I can easily make $160 in a month just by adding riders to trips I'm already taking.",
    name: "Carlisle",
    title: "Pre-med Senior",
  },
];

const riderTestimonials = [
  {
    quote: "I'll happily split $40 for a ride home with classmates and a real conversation. It'll beat a lonely bus ride — and make going home feel like part of the break.",
    name: "Angie",
    title: "Sophomore",
  },
  {
    quote: "I'll make a friend, play DJ, and get home for under $35. Peter Pan could never.",
    name: "Tyler",
    title: "Junior",
  },
  {
    quote: "The driver will probably have mutuals with me — or even be in one of my classes. It'll feel natural.",
    name: "Maya",
    title: "Freshman",
  },
  {
    quote: "Sometimes I'll catch a ride, sometimes I'll offer one. Either way, I'll save money and meet people I'd otherwise never cross paths with.",
    name: "Brandon",
    title: "Senior",
  },
];

interface TestimonialCarouselProps {
  type?: "driver" | "rider";
}

export function TestimonialCarousel({ type = "driver" }: TestimonialCarouselProps) {
  const testimonials = type === "driver" ? driverTestimonials : riderTestimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const go = (next: number) => {
    setDirection(next > currentIndex ? 1 : -1);
    setCurrentIndex(next);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => go(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  const next = () => go((currentIndex + 1) % testimonials.length);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -40 }),
  };

  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Header row: label left, arrows right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#00E5FF" }}>
              What students say
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              From our users.
            </h2>
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-3 mb-1">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Quote area */}
        <div className="relative min-h-[200px] md:min-h-[160px]">
          {/* Decorative large quote mark */}
          <div
            className="absolute -top-6 -left-2 text-[160px] font-bold leading-none select-none pointer-events-none"
            style={{ color: "rgba(255,255,255,0.035)", fontFamily: "Georgia, serif" }}
          >
            "
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <blockquote
                className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug mb-10 max-w-4xl"
                style={{ letterSpacing: "-0.01em" }}
              >
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-6 h-px" style={{ backgroundColor: "#00E5FF" }} />
                <span className="font-semibold text-white">{testimonials[currentIndex].name}</span>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {testimonials[currentIndex].title}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress lines */}
        <div className="flex gap-2 mt-14">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
              style={{
                width: i === currentIndex ? 40 : 16,
                backgroundColor: "rgba(255,255,255,0.12)",
              }}
            >
              {i === currentIndex && isAutoPlaying && (
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ backgroundColor: "#00E5FF" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  key={`fill-${currentIndex}`}
                />
              )}
              {i === currentIndex && !isAutoPlaying && (
                <div className="absolute inset-0 rounded-full" style={{ backgroundColor: "#00E5FF" }} />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
