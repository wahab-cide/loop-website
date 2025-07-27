"use client";
import { cn } from "@/lib/utils";
import { IconBolt, IconCar, IconCheck, IconCoin, IconEye, IconGasStation, IconScale, IconSettings, IconPlane, IconBuilding, IconShoppingCart } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";

const pricingModels = [
  {
    id: "gas",
    title: "Gas Only",
    icon: IconGasStation,
    price: 8,
    description: "Just split the gas costs",
    details: "Perfect for students and budget-conscious riders. Faculty and staff offer rides at cost.",
    features: [
      "Split fuel costs only",
      "Most affordable option", 
      "Community-driven pricing",
      "Perfect for regular commutes"
    ]
  },
  {
    id: "small_fee",
    title: "Gas + Fee",
    icon: IconCoin,
    price: 15,
    description: "Gas + small convenience fee",
    details: "Fair compensation for drivers while keeping rides affordable for everyone.",
    features: [
      "Gas costs + $2 base fee",
      "$0.25 per mile",
      "Fair driver compensation",
      "Still budget-friendly"
    ]
  },
  {
    id: "standard", 
    title: "Standard",
    icon: IconCar,
    price: 32,
    description: "Full rideshare pricing",
    details: "Professional rideshare experience with competitive rates and full service.",
    features: [
      "Market-rate pricing",
      "Professional service",
      "Premium experience",
      "Reliable availability"
    ]
  }
];

const scenarios = [
  { name: "Campus to Airport", distance: "43 miles", prices: [14, 26, 55], icon: IconPlane },
  { name: "Downtown Trip", distance: "8 miles", prices: [4, 8, 18], icon: IconBuilding },
  { name: "Grocery Run", distance: "5 miles", prices: [3, 6, 12], icon: IconShoppingCart }
];

export function SmartPricing() {
  const [selectedModel, setSelectedModel] = useState("gas");
  const [selectedScenario, setSelectedScenario] = useState(0);

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Smart Pricing for</span>{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Student Budget</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Choose the pricing model that works for you. From budget-friendly gas sharing to full rideshare service
          </p>
        </motion.div>

        {/* Scenario Selector - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
            {/* Scenario Selector */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center text-white">Choose your trip</h3>
              <div className="grid grid-cols-3 gap-4">
                {scenarios.map((scenario, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedScenario(index)}
                    className={cn(
                      "relative p-6 rounded-xl border transition-all duration-300",
                      selectedScenario === index
                        ? "border-green-500/50 bg-gradient-to-b from-green-500/10 to-transparent"
                        : "border-gray-800 bg-black hover:border-gray-700"
                    )}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300",
                        selectedScenario === index 
                          ? "bg-gradient-to-br from-green-500/20 to-green-600/20" 
                          : "bg-gray-900"
                      )}>
                        <scenario.icon 
                          className={cn(
                            "w-6 h-6 transition-colors duration-300",
                            selectedScenario === index ? "text-green-400" : "text-gray-500"
                          )} 
                        />
                      </div>
                      <div className={cn(
                        "text-base font-semibold transition-colors duration-300",
                        selectedScenario === index ? "text-green-400" : "text-white"
                      )}>
                        {scenario.name}
                      </div>
                      <div className={cn(
                        "text-sm transition-colors duration-300",
                        selectedScenario === index ? "text-green-300" : "text-neutral-500"
                      )}>
                        {scenario.distance}
                      </div>
                      {selectedScenario === index && (
                        <motion.div
                          layoutId="scenarioIndicator"
                          className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-b-xl"
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
        </motion.div>

        {/* Pricing Cards - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {pricingModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedModel(model.id)}
              className={cn(
                "h-full rounded-2xl border cursor-pointer transition-all duration-300 group relative overflow-hidden",
                selectedModel === model.id
                  ? "border-green-500/50 bg-gradient-to-b from-green-500/10 to-transparent scale-105"
                  : "border-gray-800 bg-black hover:border-gray-700"
              )}
            >
              <div className="p-8 flex flex-col h-full">
                {/* Icon and Title */}
                <div className="text-center mb-6">
                  <div className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300",
                    selectedModel === model.id ? "bg-gradient-to-br from-green-500/20 to-green-600/20" : "bg-gray-900"
                  )}>
                    <model.icon 
                      className={cn(
                        "w-10 h-10 transition-colors duration-300",
                        selectedModel === model.id ? "text-green-400" : "text-gray-500"
                      )} 
                      style={{ strokeWidth: 1.5 }}
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {model.title}
                  </h4>
                  <p className="text-sm text-neutral-400">
                    {model.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-white mb-1">
                    ${scenarios[selectedScenario].prices[index]}
                  </div>
                  <div className="text-sm text-neutral-500">
                    for {scenarios[selectedScenario].name}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 flex-1">
                  {model.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                        <IconCheck className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Selection indicator */}
                {selectedModel === model.id && (
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-400 to-green-600" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Transparent", desc: "No hidden fees", icon: IconEye },
            { label: "Flexible", desc: "Choose your budget", icon: IconSettings },
            { label: "Fair", desc: "Works for everyone", icon: IconScale },
            { label: "Smart", desc: "AI-powered matching", icon: IconBolt }
          ].map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-black border border-gray-800 hover:border-green-500/30 transition-all duration-300 group"
            >
              <benefit.icon className="w-8 h-8 text-gray-600 group-hover:text-green-400 transition-colors duration-300 mx-auto mb-3" />
              <div className="text-lg font-bold text-white mb-1">{benefit.label}</div>
              <div className="text-sm text-neutral-400">{benefit.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}