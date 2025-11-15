"use client";
import {
  IconCertificate,
  IconFingerprint,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const verificationSteps = [
  {
    icon: IconCertificate,
    title: "Campus Email Verification",
    description: "Verify your identity with your official .edu email address to join the campus community",
    features: ["Instant email verification", "Campus community access", "Student & staff validation"]
  },
  {
    icon: IconFingerprint,
    title: "Biometric Authentication", 
    description: "Selfie verification ensures the person is who they claim to be",
    features: ["Live selfie capture", "Facial recognition matching", "Anti-spoofing protection"]
  }
];


export function EnhancedSafety() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: '#181611' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Safe & Secure
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Verified drivers and secure rides.
          </p>
        </motion.div>

        
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Student Verification Process
            </h3>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Campus-only community verified through official .edu email addresses
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
                  
                  {index < verificationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-500 z-10">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                  )}
                  
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 h-full group-hover:transform group-hover:scale-105">
                    
                    <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-orange-500 to-orange-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    
                    <h4 className="text-xl font-bold text-white mb-4 text-center">
                      {step.title}
                    </h4>
                    <p className="text-neutral-400 text-center mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    
                    <div className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
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

      </div>
    </section>
  );
}