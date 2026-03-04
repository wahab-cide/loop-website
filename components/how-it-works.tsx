"use client";
import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Join Your Campus Community",
    description: "Create your profile and verify with your .edu email to connect with verified students at your college.",
    color: "text-orange-500",
    features: [".edu Email Verification", "Student Community Access", "Profile & Connections"]
  },
  {
    number: "02",
    title: "Share or Find Rides",
    description: "Post your travel plans to share rides with students going your way, or browse available options.",
    color: "text-blue-500",
    features: ["15km Radius Search", "Smart Matching", "Flexible Scheduling"]
  },
  {
    number: "03",
    title: "Connect & Coordinate",
    description: "Message other students, form travel groups, and arrange cost-sharing for gas and tolls.",
    color: "text-orange-500",
    features: ["In-app Messaging", "Group Coordination", "Cost Sharing"]
  },
  {
    number: "04",
    title: "Access College Fleet",
    description: "Create pool groups and request vehicles from your college's fleet for group trips.",
    color: "text-blue-500",
    features: ["Pool Group Formation", "Fleet Vehicle Requests", "Admin Approval System"]
  }
];

export function HowItWorks() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
            "text-white"
          )}>
            How poolUp Works
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Getting started is simple.
          </p>
        </motion.div>

        
        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-center"
            >
              
              <div className="max-w-2xl space-y-6 text-center">
                <div className="flex items-center gap-4">
                  <span className="text-6xl md:text-7xl font-black text-orange-500">
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-white/10"></div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {step.title}
                </h3>
                
                <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                  {step.description}
                </p>

                <div className="space-y-3">
                  {step.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.4, delay: 0.15 * idx, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                        <IconCheck className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-20 md:mt-32"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <span className="text-orange-500 font-semibold">Ready to start?</span>
            <span className="text-gray-400">Download coming soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}