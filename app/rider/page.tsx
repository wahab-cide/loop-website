"use client";
import { useToast } from "@/components/toast";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { IconArrowRight } from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const comparisons = [
  { route: "Airport run",    solo: "~$42 solo",  poolup: "$13", save: "save $29" },
  { route: "Grocery trip",   solo: "~$18 solo",  poolup: "$6",  save: "save $12" },
  { route: "Home for break", solo: "~$55 solo",  poolup: "$17", save: "save $38" },
];

const safetyRows = [
  {
    title: ".edu Verified Only",
    body: "Every driver is verified with a college email. No exceptions, no strangers.",
  },
  {
    title: "See Mutual Friends",
    body: "Before you confirm, see the mutual connections you share with your driver.",
  },
  {
    title: "Verified Reviews",
    body: "Honest ratings from verified students — not anonymous internet strangers.",
  },
  {
    title: "In-App Chat",
    body: "Message your driver directly before the trip. No phone numbers required.",
  },
  {
    title: "Live Trip Sharing",
    body: "Share your real-time location with anyone you choose during the ride.",
  },
  {
    title: "Campus-Only Network",
    body: "Built exclusively for college students. Your community, your platform.",
  },
];

const scenarios = [
  {
    label: "Airport Runs",
    sub: "Beat the surge. Share the cost.",
    save: "Save ~$29",
    img: "/website photos/moreRiderPhoto.jpeg",
  },
  {
    label: "Grocery & Errands",
    sub: "Split the trip, not your budget.",
    save: "Save ~$12",
    img: "/website photos/grocery_run.jpeg",
  },
  {
    label: "Home for Break",
    sub: "Book weeks ahead. Secure your seat.",
    save: "Save ~$38",
    img: "/website photos/carpool_with_others.jpg",
  },
  {
    label: "Late Nights",
    sub: "Get home safely, any hour.",
    save: "Save ~$15",
    img: "/website photos/happy_passenger3.jpeg",
  },
];

const steps = [
  {
    n: "1",
    title: "Browse",
    body: "See every driver heading your way — route, share per seat, rating, and mutual connections.",
  },
  {
    n: "2",
    title: "Book",
    body: "Reserve your seat in one tap. Confirm when you've checked the driver's profile.",
  },
  {
    n: "3",
    title: "Ride",
    body: "Show up, split costs via Venmo or CashApp, and rate the trip when you're home.",
  },
];

export default function RiderPage() {
  const { showToast } = useToast();

  const photoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.18]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000000" }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12 md:px-8 md:pt-24 md:pb-16"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-4xl font-semibold tracking-tight text-white md:text-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-white drop-shadow-lg"
          >
            Ride. Save. Connect.
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 mx-auto mt-4 max-w-xl px-4 text-center text-base/6 text-gray-400 sm:text-base"
        >
          Join fellow students saving money and making friends on every campus ride.
        </motion.p>
      </section>

      {/* ── FULL-WIDTH PHOTO ──────────────────────────────────────────────── */}
      <section ref={photoRef} className="w-full relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: photoScale }}>
          <Image
            src="/website photos/students.jpeg"
            alt="Happy poolUp Riders"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* ── SAVINGS — editorial two-column ────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: "#00E5FF" }}>
                What you actually pay
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                Split between riders.<br />Not your whole wallet.
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
                Because you're sharing a ride someone is already making — not paying for a dedicated trip.
              </p>
              {/* Big savings callout */}
              <div
                className="inline-block rounded-2xl px-8 py-6"
                style={{
                  backgroundColor: "#0A0A0A",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-6xl font-bold mb-1" style={{ color: "#00E5FF" }}>$38</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                  saved on a single airport run
                </div>
              </div>
            </motion.div>

            {/* Right: comparison rows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="lg:pt-20"
            >
              {comparisons.map((c, i) => (
                <div
                  key={c.route}
                  className="py-6 flex items-center justify-between gap-4"
                  style={{
                    borderBottom: i < comparisons.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                  }}
                >
                  <div>
                    <div className="text-white font-semibold mb-1">{c.route}</div>
                    <div className="text-sm line-through" style={{ color: "rgba(255,255,255,0.22)" }}>
                      {c.solo}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl font-bold mb-1" style={{ color: "#00E5FF" }}>
                      {c.poolup}
                    </div>
                    <div className="text-xs" style={{ color: "rgba(0,229,255,0.5)" }}>
                      {c.save}
                    </div>
                  </div>
                </div>
              ))}
              <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                What a solo rideshare fare costs, against your share of the same trip on poolUp
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SAFETY — full-width row list ──────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8">

          {/* Section header spanning full width */}
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#00E5FF" }}>
                Safety
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ride knowing exactly who you're with.
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed lg:pt-16"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              poolUp is built exclusively for college students. That means every single person on the platform — driver or rider — has verified themselves with a .edu email from your campus network.
            </motion.p>
          </div>

          {/* Row list — no cards */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {safetyRows.map((row, i) => (
              <motion.div
                key={row.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-[1fr_2fr] gap-6 py-7 items-baseline"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <h3 className="text-base font-bold text-white">{row.title}</h3>
                <p className="text-base" style={{ color: "rgba(255,255,255,0.4)" }}>{row.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRIP SCENARIOS ────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#00E5FF" }}>
              Every trip covered
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg">
              Wherever campus life takes you
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scenarios.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="relative h-[320px] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={s.img}
                  alt={s.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div
                    className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3"
                    style={{
                      backgroundColor: "rgba(0,229,255,0.12)",
                      border: "1px solid rgba(0,229,255,0.2)",
                      color: "#00E5FF",
                    }}
                  >
                    {s.save}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{s.label}</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{s.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <TestimonialCarousel type="rider" />

      {/* ── HOW IT WORKS — large typographic layout ───────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              It takes about<br />thirty seconds.
            </h2>
          </motion.div>

          <div>
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] items-start py-10"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Decorative large number */}
                <div
                  className="text-6xl md:text-8xl font-bold leading-none select-none"
                  style={{ color: "rgba(255,255,255,0.06)" }}
                >
                  {step.n}
                </div>
                <div className="pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-base md:text-lg leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — photo background, no stats strip ────────────────────────── */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
        <Image
          src="/website photos/happyPassengerMain1.jpeg"
          alt="poolUp riders"
          fill
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-6 md:px-8 py-20 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your next ride is<br />waiting.
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
            Find a driver already going your way. Book a seat. Pay a share, not a fare.
          </p>
          <motion.button
            onClick={() => showToast("Coming Soon")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base"
            style={{ backgroundColor: "#00E5FF", color: "#000000" }}
          >
            Start Riding <IconArrowRight size={18} />
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
}
