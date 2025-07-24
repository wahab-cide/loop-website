"use client";
import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Sign Up & Verify",
    description: "Create your account and complete our secure verification process with Stripe ID authentication.",
    color: "from-green-500 to-emerald-500",
    features: ["Stripe ID Verification", "Selfie Authentication"]
  },
  {
    number: "02", 
    title: "Find or Post Rides",
    description: "Browse available rides in your area or post your own trip for others to join.",
    color: "from-blue-500 to-cyan-500", 
    features: ["15km Radius Search", "Smart Matching", "Flexible Scheduling"]
  },
  {
    number: "03",
    title: "Connect & Travel",
    description: "Chat with your driver or riders, share costs automatically, and enjoy safe transportation.",
    color: "from-emerald-500 to-green-500",
    features: ["In-app Messaging", "Auto Fare Split", "Real-time Tracking"]
  }
];

export function HowItWorks() {
  return (
    <section className="w-full bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
            "bg-gradient-to-r from-white via-green-100 to-emerald-200",
            "bg-clip-text text-transparent"
          )}>
            How Loop Works
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Getting started is simple.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              {/* Content */}
              <div className="max-w-2xl space-y-6 text-center">
                <div className="flex items-center gap-4">
                  <span className={cn(
                    "text-6xl md:text-7xl font-black bg-gradient-to-r",
                    step.color,
                    "bg-clip-text text-transparent"
                  )}>
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {step.title}
                </h3>
                
                <p className="text-lg text-neutral-400 leading-relaxed max-w-lg">
                  {step.description}
                </p>

                <div className="space-y-3">
                  {step.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * idx }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                        <IconCheck className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-neutral-300 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 md:mt-32"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm">
            <span className="text-green-400 font-semibold">Ready to start?</span>
            <span className="text-neutral-400">Download coming soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}