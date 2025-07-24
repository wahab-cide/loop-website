"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconShield, IconClock, IconRefresh, IconCheck } from "@tabler/icons-react";

const refundTiers = [
  {
    timeRange: "24+ hours",
    refundPercentage: 100,
    fee: 0,
    title: "Free Cancellation",
    description: "Full refund, no questions asked",
    color: "from-green-500 to-emerald-500",
    icon: IconCheck
  },
  {
    timeRange: "2-24 hours", 
    refundPercentage: 80,
    fee: 20,
    title: "Standard Cancellation",
    description: "Most of your money back",
    color: "from-blue-500 to-cyan-500",
    icon: IconClock
  },
  {
    timeRange: "30min-2 hours",
    refundPercentage: 50, 
    fee: 50,
    title: "Late Cancellation",
    description: "Partial refund available",
    color: "from-yellow-500 to-orange-500",
    icon: IconRefresh
  },
  {
    timeRange: "Less than 30min",
    refundPercentage: 0,
    fee: 100,
    title: "No Refund",
    description: "Too close to departure",
    color: "from-red-500 to-pink-500",
    icon: IconShield
  }
];

export function SmartRefunds() {
  const [selectedAmount, setSelectedAmount] = useState(50);

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
            "bg-gradient-to-r from-green-400 via-emerald-300 to-green-500",
            "bg-clip-text text-transparent"
          )}>
            Smart Refund Policy
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Fair, transparent, and automatic. Our intelligent refund system protects both riders and drivers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Refund Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                See Your Refund Amount
              </h3>
              
              {/* Amount Selector */}
              <div className="space-y-4">
                <label className="text-neutral-400 text-sm font-medium">
                  Original Ride Cost
                </label>
                <div className="flex gap-3">
                  {[25, 50, 75, 100].map((amount) => (
                    <motion.button
                      key={amount}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedAmount(amount)}
                      className={cn(
                        "px-4 py-2 rounded-lg border-2 transition-all duration-300 font-semibold",
                        selectedAmount === amount
                          ? "border-green-500 bg-green-500/10 text-green-400"
                          : "border-gray-700 bg-gray-800/50 text-neutral-400 hover:border-gray-600"
                      )}
                    >
                      ${amount}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Refund Breakdown */}
              <motion.div
                key={selectedAmount}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700/50"
              >
                <div className="space-y-4">
                  {refundTiers.map((tier, index) => {
                    const refundAmount = (selectedAmount * tier.refundPercentage) / 100;
                    const feeAmount = selectedAmount - refundAmount;
                    
                    return (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-8 h-8 rounded-full bg-gradient-to-r flex items-center justify-center",
                            tier.color
                          )}>
                            <tier.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm">
                              {tier.timeRange}
                            </div>
                            <div className="text-neutral-400 text-xs">
                              {tier.description}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={cn(
                            "font-bold",
                            tier.refundPercentage > 0 ? "text-green-400" : "text-red-400"
                          )}>
                            ${refundAmount.toFixed(0)}
                          </div>
                          {feeAmount > 0 && (
                            <div className="text-xs text-neutral-500">
                              -${feeAmount.toFixed(0)} fee
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Policy Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                How It Works
              </h3>
              
              <div className="space-y-6">
                {refundTiers.map((tier, index) => (
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
                        tier.color,
                        "group-hover:scale-110 transition-transform duration-300"
                      )}>
                        <tier.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">
                            {tier.title}
                          </h4>
                          <span className={cn(
                            "text-sm font-bold px-2 py-1 rounded",
                            tier.refundPercentage > 0 ? "text-green-400 bg-green-500/10" : "text-red-400 bg-red-500/10"
                          )}>
                            {tier.refundPercentage}% refund
                          </span>
                        </div>
                        <p className="text-neutral-400 text-sm mb-2">
                          Cancel {tier.timeRange} before departure
                        </p>
                        <p className="text-neutral-500 text-sm">
                          {tier.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
              <h4 className="text-lg font-semibold text-white mb-4">
                Why Our Refund Policy Works
              </h4>
              <div className="space-y-3">
                {[
                  "Automatic Stripe processing within minutes",
                  "No manual approval needed",
                  "Transparent timeline-based fees",
                  "Protects both riders and drivers"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-neutral-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}