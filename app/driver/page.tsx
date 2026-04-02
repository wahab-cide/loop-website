"use client";
import { useToast } from "@/components/toast";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { CampusLaunchCTA } from "@/components/campus-launch-cta";
import {
  IconArrowRight,
  IconCalendar,
  IconCash,
  IconShield,
  IconStar,
  IconUsers,
} from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const benefits = [
  {
    icon: IconCash,
    num: "01",
    title: "Offset Your Costs",
    body: "Turn trips you're already making into income. Cover gas, tolls, and parking — or pocket the difference.",
  },
  {
    icon: IconUsers,
    num: "02",
    title: "Ride with People You Trust",
    body: "Every rider is a verified student from your campus network. Mutual connections shown on every booking.",
  },
  {
    icon: IconCalendar,
    num: "03",
    title: "Post in 30 Seconds",
    body: "Set your route, price, and seats. poolUp handles the rest. No commitments, no minimums.",
  },
  {
    icon: IconShield,
    num: "04",
    title: "Safe by Design",
    body: "Verified .edu emails, student reviews, and a platform built exclusively for college communities.",
  },
];

const stats = [
  { value: "$180+", label: "avg. monthly savings" },
  { value: "30s",   label: "to post a ride" },
  { value: "100%",  label: "verified campus riders" },
  { value: "4.9★",  label: "average driver rating" },
];

const steps = [
  {
    num: "1",
    title: "Post Your Route",
    body: "Enter pickup, destination, date, and available seats. Done in under a minute.",
  },
  {
    num: "2",
    title: "Accept Riders",
    body: "See each rider's rating, .edu verification, and mutual connections before accepting.",
  },
  {
    num: "3",
    title: "Drive & Get Paid",
    body: "Complete the trip. Riders pay via Venmo, CashApp, or Zelle — on your terms.",
  },
];

const earnings = [
  { route: "Weekend trips home",  riders: "Shared with 3", earning: "$48", freq: "2× per month", note: "Gas & tolls almost fully covered" },
  { route: "Airport drop-offs",   riders: "Shared with 2", earning: "$35", freq: "Monthly",       note: "Trip pays for itself" },
  { route: "Grocery & errands",   riders: "Shared with 1", earning: "$12", freq: "Weekly",        note: "Adds up to $48/month" },
];

export default function DriverPage() {
  const { showToast } = useToast();

  const photoRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start end", "end start"] });
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.18]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000000" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col justify-center min-h-[60vh] px-6 md:px-8 pt-36 pb-16"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: "rgba(0,229,255,0.1)",
                border: "1px solid rgba(0,229,255,0.25)",
                color: "#00E5FF",
              }}
            >
              <IconStar size={14} />
              Exclusively for college students
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Drive Your Route.<br />Share Your Costs.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
              Post a ride in 30 seconds. Share costs on trips you're already making — with verified students from your campus.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => showToast("Coming Soon")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base"
                style={{ backgroundColor: "#00E5FF", color: "#000000" }}
              >
                Start Driving <IconArrowRight size={18} />
              </motion.button>
              <motion.button
                onClick={() =>
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl font-bold text-base text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
              >
                How it works
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FULL-WIDTH PHOTO ──────────────────────────────────────────────── */}
      <section ref={photoRef} className="w-full relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: photoScale }}>
          <Image
            src="/website photos/happyDriverMain.jpeg"
            alt="poolUp driver"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#0A0A0A",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: "#00E5FF" }}>
                  {s.value}
                </div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY POOLUP ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#00E5FF" }}
            >
              Why poolUp
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
              Everything a student driver needs
            </h2>
          </motion.div>

          {/* Border-grid layout */}
          <div
            className="grid md:grid-cols-2"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-8 md:p-10"
                style={{
                  backgroundColor: "#0A0A0A",
                  borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <div className="flex items-start gap-5">
                  {/* Icon box */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(0,229,255,0.08)",
                      border: "1px solid rgba(0,229,255,0.15)",
                    }}
                  >
                    <b.icon size={22} style={{ color: "#00E5FF" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold tracking-widest mb-2"
                      style={{ color: "rgba(255,255,255,0.18)" }}
                    >
                      {b.num}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{b.title}</h3>
                    <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {b.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 md:py-32" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Steps */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "#00E5FF" }}
                >
                  Getting started
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Simple from start<br />to finish
                </h2>
              </motion.div>

              <div>
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 pb-10 relative"
                  >
                    {/* Vertical connector */}
                    {i < steps.length - 1 && (
                      <div
                        className="absolute left-5 top-12 bottom-0 w-px"
                        style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                      />
                    )}
                    {/* Step number circle */}
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold z-10"
                      style={{
                        backgroundColor: "rgba(0,229,255,0.1)",
                        border: "1px solid rgba(0,229,255,0.25)",
                        color: "#00E5FF",
                      }}
                    >
                      {step.num}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {step.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative h-[480px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/website photos/driver2.jpg"
                alt="poolUp driver"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      {/* ── EARNINGS ─────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#00E5FF" }}
            >
              Monthly transportation savings
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Savings that actually add up.
            </h2>
            <p className="max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>
              How much drivers save on transportation costs by sharing seats they already have
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {earnings.map((item, i) => (
              <motion.div
                key={item.route}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: "#0A0A0A",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="text-xs font-semibold tracking-wide mb-4"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  {item.freq}
                </div>
                <div className="text-4xl font-bold mb-1" style={{ color: "#00E5FF" }}>
                  {item.earning}
                </div>
                <div className="text-white font-semibold mb-1">{item.route}</div>
                <div className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.32)" }}>
                  {item.riders}
                </div>
                <div
                  className="text-xs font-medium px-3 py-1.5 rounded-full inline-block"
                  style={{
                    backgroundColor: "rgba(0,229,255,0.07)",
                    color: "rgba(0,229,255,0.65)",
                    border: "1px solid rgba(0,229,255,0.14)",
                  }}
                >
                  {item.note}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-10 text-sm"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Average monthly savings:{" "}
            <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
              $120–$200
            </span>{" "}
            on transportation costs, driving 3–5 shared trips per month
          </motion.p>
        </div>
      </section>

      <CampusLaunchCTA />

    </div>
  );
}
