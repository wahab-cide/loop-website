"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const SCREENS = [
  {
    id: "feed",
    src: "/app_screens/IMG_1950.jpg",
    label: "Discover Rides",
    desc: "Browse verified peer rides from your campus",
  },
  {
    id: "post",
    src: "/app_screens/IMG_1946.jpg",
    label: "Post a Ride",
    desc: "Share your journey and earn money on your route",
  },
  {
    id: "request",
    src: "/app_screens/IMG_1951.jpg",
    label: "Request a Ride",
    desc: "Find a ride that fits your schedule and budget",
  },
  {
    id: "posts",
    src: "/app_screens/IMG_1947.jpg",
    label: "Manage Your Rides",
    desc: "Track all your rides, bookings, and requests in one place",
  },
  {
    id: "profile",
    src: "/app_screens/IMG_1952.jpg",
    label: "Your Profile",
    desc: "Campus shuttles, settings, and everything you need",
  },
  {
    id: "home",
    src: "/app_screens/IMG_2172.PNG",
    label: "Home Feed",
    desc: "Available rides, shuttles, and drivers — all in one place",
  },
];

export function AppShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % SCREENS.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            See poolUp in Action
          </h2>
          <p className="text-neutral-400 text-lg max-w-md mx-auto">
            Built for college students, from first ride to campus shuttle.
          </p>
        </motion.div>

        {/* Phone frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Cyan glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: "rgba(0,229,255,0.1)" }}
          />

          {/* iPhone shell */}
          <div className="relative z-10">
            <div className="relative p-[2.5px] rounded-[46px] shadow-2xl" style={{ background: "linear-gradient(180deg, #555 0%, #222 50%, #111 100%)" }}>
              <div className="bg-black rounded-[44px] p-[6px] relative">
                <div className="relative bg-black rounded-[39px] overflow-hidden">
                  {/* Dynamic island */}
                  <div
                    className="absolute top-3 left-1/2 -translate-x-1/2 z-30 rounded-full"
                    style={{ width: 90, height: 26, backgroundColor: "#000", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)" }}
                  />

                  {/* Screen */}
                  <div className="relative overflow-hidden" style={{ width: 280, height: 610, borderRadius: 39, backgroundColor: "#080808" }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ position: "absolute", top: 34, left: 6, right: 6, bottom: 6, borderRadius: 6, overflow: "hidden" }}
                      >
                        <Image
                          src={SCREENS[active].src}
                          alt={SCREENS[active].label}
                          fill
                          style={{ objectFit: "cover", objectPosition: "top" }}
                          priority={active === 0}
                          sizes="268px"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Side buttons */}
                <div className="absolute -left-[3px] top-28 w-[3px] h-10 rounded-l-full" style={{ background: "linear-gradient(180deg,#555,#222)" }} />
                <div className="absolute -left-[3px] top-44 w-[3px] h-16 rounded-l-full" style={{ background: "linear-gradient(180deg,#555,#222)" }} />
                <div className="absolute -left-[3px] top-64 w-[3px] h-16 rounded-l-full" style={{ background: "linear-gradient(180deg,#555,#222)" }} />
                <div className="absolute -right-[3px] top-40 w-[3px] h-14 rounded-r-full" style={{ background: "linear-gradient(180deg,#555,#222)" }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Label + dots */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="text-base font-bold text-white">{SCREENS[active].label}</div>
              <div className="text-sm text-neutral-400 mt-1">{SCREENS[active].desc}</div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex gap-2 mt-1">
            {SCREENS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 24 : 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: i === active ? "#00E5FF" : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
