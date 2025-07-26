"use client";
import { cn } from "@/lib/utils";
import { IconBolt, IconCar, IconCheck, IconCoin, IconEye, IconGasStation, IconScale, IconSettings } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";

const pricingModels = [
  {
    id: "gas",
    title: "Gas Only",
    icon: IconGasStation,
    color: "from-green-400 to-green-500",
    borderColor: "border-green-500/50",
    bgColor: "bg-green-500/10",
    textColor: "text-green-400",
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
    color: "from-blue-400 to-blue-500", 
    borderColor: "border-blue-500/50",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
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
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500/50", 
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
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
  { name: "Campus to Airport", distance: "25 miles", prices: [8, 15, 32] },
  { name: "Downtown Trip", distance: "8 miles", prices: [4, 8, 18] },
  { name: "Grocery Run", distance: "5 miles", prices: [3, 6, 12] }
];

export function SmartPricing() {
  const [selectedModel, setSelectedModel] = useState("gas");
  const [selectedScenario, setSelectedScenario] = useState(0);

  const selectedPricingModel = pricingModels.find(model => model.id === selectedModel) || pricingModels[0];

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
            "bg-gradient-to-r from-green-400 to-blue-500",
            "bg-clip-text text-transparent"
          )}>
            Smart Pricing for Student Budget
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Choose the pricing model that works for you. From budget-friendly gas sharing to full rideshare service, 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Interactive Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Scenario Selector */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Choose a trip scenario:</h3>
              <div className="flex flex-wrap gap-3">
                {scenarios.map((scenario, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedScenario(index)}
                    className={cn(
                      "px-4 py-2 rounded-lg border-2 transition-all duration-300 font-medium text-sm",
                      selectedScenario === index
                        ? "border-blue-500 bg-blue-500/10 text-blue-400"
                        : "border-gray-700 bg-gray-800/50 text-neutral-400 hover:border-gray-600"
                    )}
                  >
                    {scenario.name}
                    <span className="block text-xs text-neutral-500">{scenario.distance}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Pricing Model Cards */}
            <div className="space-y-4">
              {pricingModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedModel(model.id)}
                  className={cn(
                    "p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group",
                    selectedModel === model.id
                      ? `${model.borderColor} ${model.bgColor}`
                      : "border-gray-700 bg-gray-800/30 hover:border-gray-600"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-full bg-gradient-to-r flex items-center justify-center flex-shrink-0",
                        model.color
                      )}>
                        <model.icon 
                          className="w-5 h-5 text-white" 
                          style={{ strokeWidth: 1.5 }}
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                          {model.title}
                        </h4>
                        <p className="text-sm text-neutral-400">
                          {model.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={cn(
                        "text-3xl font-bold transition-colors",
                        selectedModel === model.id ? model.textColor : "text-white"
                      )}>
                        ${scenarios[selectedScenario].prices[index]}
                      </div>
                      <div className="text-xs text-neutral-500">per seat</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Model Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Selected Model Details */}
            <motion.div
              key={selectedModel}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "p-8 rounded-2xl border-2",
                selectedPricingModel.borderColor,
                selectedPricingModel.bgColor
              )}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={cn(
                  "w-16 h-16 rounded-full bg-gradient-to-r flex items-center justify-center flex-shrink-0",
                  selectedPricingModel.color
                )}>
                  <selectedPricingModel.icon 
                    className="w-7 h-7 text-white" 
                    style={{ strokeWidth: 1.5 }}
                  />
                </div>
                <div>
                  <h3 className={cn("text-2xl font-bold", selectedPricingModel.textColor)}>
                    {selectedPricingModel.title}
                  </h3>
                  <p className="text-neutral-300">
                    {selectedPricingModel.details}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">What's included:</h4>
                <div className="space-y-3">
                  {selectedPricingModel.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={cn(
                        "w-6 h-6 rounded-full bg-gradient-to-r flex items-center justify-center flex-shrink-0",
                        selectedPricingModel.color
                      )}>
                        <IconCheck className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-neutral-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Community Message */}
            <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-2xl p-6 border border-blue-500/20">
              <h4 className="text-lg font-semibold text-white mb-4">
                Built for Community
              </h4>
              <div className="space-y-3 text-sm text-neutral-300">
                <p>
                  <span className="font-semibold text-green-400">Gas Only:</span> Faculty and staff help students save money by sharing rides at cost.
                </p>
                <p>
                  <span className="font-semibold text-blue-400">Gas + Fee:</span> Fair compensation for drivers while keeping rides affordable.
                </p>
                <p>
                  <span className="font-semibold text-blue-400">Standard:</span> Professional service for those who need reliable, market-rate transportation.
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Transparent", desc: "No hidden fees", icon: IconEye },
                { label: "Flexible", desc: "Choose your budget", icon: IconSettings },
                { label: "Fair", desc: "Works for everyone", icon: IconScale },
                { label: "Smart", desc: "AI-powered matching", icon: IconBolt }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors group"
                >
                  <benefit.icon className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors mx-auto mb-2" />
                  <div className="text-lg font-bold text-white mb-1">{benefit.label}</div>
                  <div className="text-xs text-neutral-400">{benefit.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}