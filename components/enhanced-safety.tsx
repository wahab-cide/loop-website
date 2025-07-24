"use client";
import { cn } from "@/lib/utils";
import {
  IconCertificate,
  IconEye,
  IconFingerprint,
  IconMapPin,
  IconMessageCircle,
  IconPhone,
  IconShieldCheck
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const verificationSteps = [
  {
    icon: IconCertificate,
    title: "Government ID Verification",
    description: "Stripe Identity verifies government-issued ID documents using advanced security technology",
    features: ["Document authenticity check", "Real-time fraud detection", "Global database verification"]
  },
  {
    icon: IconFingerprint,
    title: "Biometric Authentication", 
    description: "Selfie verification ensures the person is who they claim to be",
    features: ["Live selfie capture", "Facial recognition matching", "Anti-spoofing protection"]
  }
];

const safetyFeatures = [
  {
    icon: IconMapPin,
    title: "Real-time Tracking",
    description: "Live GPS tracking for all rides with automatic route monitoring"
  },
  {
    icon: IconMessageCircle,
    title: "In-app Communication",
    description: "Secure messaging system keeps personal information private"
  },
  {
    icon: IconPhone,
    title: "Emergency Support",
    description: "Quick access to help when you need it most"
  },
  {
    icon: IconEye,
    title: "Community Oversight",
    description: "Two-way rating system builds trust and accountability"
  }
];

export function EnhancedSafety() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-green-950/10 to-black py-16 md:py-24 lg:py-32 overflow-hidden">
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
            Safe & Secure
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Verified drivers and secure rides.
          </p>
        </motion.div>

        {/* Verification Process */}
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Two-Step Verification Process
            </h3>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Powered by Stripe Identity - the same technology trusted by Fortune 500 companies
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {verificationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full">
                  {/* Connection Line */}
                  {index < verificationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 z-10">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                  )}
                  
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-500 h-full group-hover:transform group-hover:scale-105">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-xl font-bold text-white mb-4 text-center">
                      {step.title}
                    </h4>
                    <p className="text-neutral-400 text-center mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-neutral-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>

        {/* Safety Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Safety Features That
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}Actually Work
                </span>
              </h3>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Built-in safety tools that protect you throughout your entire journey, from booking to destination.
              </p>
            </div>

            <div className="space-y-4">
              {safetyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Shield */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative z-10 w-80 h-80 mx-auto"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 p-1 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500"></div>
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                      }}></div>
                    </div>
                    
                    {/* Shield Icon */}
                    <IconShieldCheck className="w-32 h-32 text-green-400 relative z-10" />
                    
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <div className="absolute top-8 left-8 w-4 h-4 bg-emerald-400 rounded-full opacity-60"></div>
                      <div className="absolute top-12 right-12 w-2 h-2 bg-green-400 rounded-full opacity-80"></div>
                      <div className="absolute bottom-16 left-16 w-3 h-3 bg-teal-400 rounded-full opacity-70"></div>
                      <div className="absolute bottom-8 right-8 w-5 h-5 bg-green-300 rounded-full opacity-50"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 opacity-20 blur-3xl scale-110"></div>
            </div>
          </motion.div>
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 md:mt-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "99.8%", label: "Safety Rating" },
              { number: "100%", label: "Verified Drivers" },
              { number: "24/7", label: "Support Available" },
              { number: "0", label: "Tolerance for Unsafe Behavior" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}