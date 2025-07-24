"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconTrendingUp, IconClock, IconWallet, IconUsers } from "@tabler/icons-react";

const earningsData = [
  { rides: 5, hours: 10, earnings: 75, passengers: 8 },
  { rides: 10, hours: 20, earnings: 165, passengers: 18 },
  { rides: 15, hours: 30, earnings: 270, passengers: 28 },
  { rides: 20, hours: 40, earnings: 385, passengers: 40 }
];

const benefits = [
  {
    icon: IconTrendingUp,
    title: "25% More Earnings",
    description: "Earn extra when passengers share rides with our intelligent fare splitting",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: IconClock,
    title: "Flexible Schedule", 
    description: "Drive when you want, post rides that fit your existing commute",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: IconWallet,
    title: "Weekly Payouts",
    description: "Get paid weekly through Stripe Connect with automatic deposits",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: IconUsers,
    title: "Verified Community",
    description: "Drive for trusted, verified community members you can count on",
    color: "from-teal-500 to-green-500"
  }
];

export function DriverEarnings() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900/50 to-black py-16 md:py-24 lg:py-32 overflow-hidden">
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
            "bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400",
            "bg-clip-text text-transparent"
          )}>
            Earn More as a Driver
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Turn your daily commute into extra income. Join verified drivers earning up to $400+ per week.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Earnings Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Calculate Your Potential Earnings
              </h3>
              
              {/* Plan Selector */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {earningsData.map((plan, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPlan(index)}
                    className={cn(
                      "p-4 rounded-xl border-2 transition-all duration-300 text-center",
                      selectedPlan === index
                        ? "border-green-500 bg-green-500/10 shadow-lg shadow-green-500/20"
                        : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                    )}
                  >
                    <div className="text-2xl font-bold text-white">{plan.rides}</div>
                    <div className="text-xs text-neutral-400">rides/week</div>
                  </motion.button>
                ))}
              </div>

              {/* Earnings Display */}
              <motion.div
                key={selectedPlan}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 rounded-2xl p-6 border border-green-500/20"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-green-400">
                      ${earningsData[selectedPlan].earnings}
                    </div>
                    <div className="text-neutral-400">per week</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {earningsData[selectedPlan].passengers}
                    </div>
                    <div className="text-neutral-400">happy passengers</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-green-500/20">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Base earnings</span>
                    <span className="text-white">${Math.round(earningsData[selectedPlan].earnings * 0.8)}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-green-400">Fare splitting bonus</span>
                    <span className="text-green-400">+${Math.round(earningsData[selectedPlan].earnings * 0.2)}</span>
                  </div>
                </div>
              </motion.div>

              <div className="text-xs text-neutral-500 text-center">
                *Earnings vary by location, demand, and ride frequency.
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Why Drive with Loop?
            </h3>
            
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-green-500/30 transition-all duration-300">
                  <div className={cn(
                    "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0",
                    benefit.color,
                    "group-hover:scale-110 transition-transform duration-300"
                  )}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-neutral-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20"
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm">
            <div className="text-xl font-semibold text-green-400">
              Ready to start earning?
            </div>
            <div className="text-neutral-400 text-center max-w-md">
              Complete verification in under 5 minutes and start accepting ride requests
            </div>
            <div className="px-6 py-2 rounded-full bg-green-500/20 border border-green-500/30">
              <span className="text-green-400 font-medium">Download coming soon</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}