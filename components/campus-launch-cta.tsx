"use client";
import { motion } from "framer-motion";
import { IconArrowRight, IconMail } from "@tabler/icons-react";
import { useState } from "react";

import { CONTACT_EMAIL } from "@/lib/contact";

/**
 * Campus pilot intake.
 *
 * Campuses approach us before we approach them — Potsdam did — and a headline
 * over a bare mailto gives someone in a student government or a dean's office
 * nothing to act on. They need to know what a pilot involves before they
 * will write.
 *
 * There is no backend on this site, so the form composes a structured mail
 * instead of posting anywhere. That keeps a real intake shape — the fields we
 * would ask for anyway — without pretending to a server that doesn't exist.
 */

/** What a pilot actually involves, so the ask is legible before anyone writes. */
const STEPS = [
  {
    n: "01",
    title: "A conversation",
    body: "Twenty minutes on how students on your campus already get around, and where the gaps are.",
  },
  {
    n: "02",
    title: "Verified access for your domain",
    body: "We add your .edu domain so only your students can see and join rides. Nobody outside campus appears.",
  },
  {
    n: "03",
    title: "A term-long pilot",
    body: "Students share trips they were already making. We watch what gets used and report back to you.",
  },
];

const ROLES = [
  "Student government",
  "Dean or administration",
  "Sustainability office",
  "Transportation or parking",
  "Student organisation",
  "Something else",
];

export function CampusLaunchCTA() {
  const [campus, setCampus] = useState("");
  const [role, setRole] = useState(ROLES[0]);
  const [notes, setNotes] = useState("");

  const subject = campus
    ? `poolUp pilot enquiry — ${campus}`
    : "poolUp pilot enquiry";

  const body = [
    `Campus: ${campus || "(please add)"}`,
    `I'm with: ${role}`,
    "",
    notes || "What we're trying to solve:",
    "",
    "---",
    "Sent from looprides.dev",
  ].join("\n");

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section
      id="campus-pilot"
      className="py-20 md:py-28 px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-5"
            style={{ color: "#00E5FF" }}
          >
            Bring poolUp to your campus
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Start a pilot at your school.
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            We launch one campus at a time, with someone on the ground who
            actually wants it there. Nothing to procure and nothing to
            integrate: we verify your domain, and students take it from there.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 mt-14">
          {/* What a pilot is. Numbered because it is genuinely sequential. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {STEPS.map((step) => (
              <div key={step.n} className="flex gap-5">
                <div
                  className="text-sm font-bold tracking-widest pt-1 shrink-0"
                  style={{ color: "rgba(0,229,255,0.5)" }}
                >
                  {step.n}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5">
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}

            <p
              className="text-xs leading-relaxed pt-2"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Students share the cost of trips they were already taking — a
              trip&rsquo;s mileage at the IRS standard rate, split across
              everyone in the car including the driver. Nobody is paid to drive.
            </p>
          </motion.div>

          {/* Intake. Real fields, composed into a mail the reader can edit. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl p-7 md:p-8"
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="campus"
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Your campus
                </label>
                <input
                  id="campus"
                  type="text"
                  value={campus}
                  onChange={(e) => setCampus(e.target.value)}
                  placeholder="Your school"
                  className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors focus:border-[#00E5FF]"
                  style={{
                    backgroundColor: "#0A0A0A",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="role"
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  You&rsquo;re with
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors focus:border-[#00E5FF] appearance-none"
                  style={{
                    backgroundColor: "#0A0A0A",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {ROLES.map((r) => (
                    <option key={r} value={r} style={{ backgroundColor: "#0A0A0A" }}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="notes"
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  What are you trying to solve?
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Students can't get to the airport at break, parking is oversubscribed, nothing runs late…"
                  className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none resize-none transition-colors focus:border-[#00E5FF]"
                  style={{
                    backgroundColor: "#0A0A0A",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
              </div>

              <motion.a
                href={mailto}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 font-bold rounded-xl transition-all duration-300 mt-1"
                style={{ backgroundColor: "#00E5FF", color: "#000000" }}
              >
                <IconMail className="w-5 h-5" />
                Send the enquiry
                <IconArrowRight className="w-4 h-4" />
              </motion.a>

              <p
                className="text-xs text-center"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Opens in your mail app so you can check it before it sends. Or{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="underline underline-offset-2"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  email us directly
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
