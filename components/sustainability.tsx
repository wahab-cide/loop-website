"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconLeaf, IconWorld, IconCar } from "@tabler/icons-react";

export function Sustainability() {
  return (
    <section className="w-full bg-black py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold",
                "bg-gradient-to-r from-green-400 via-emerald-400 to-green-500",
                "bg-clip-text text-transparent"
              )}>
                Driving Towards a Greener Future
              </h2>
              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                Every shared ride makes a difference for our planet and campus community
              </p>
            </div>

            <div className="space-y-6">
              <EcoFeature
                icon={<IconLeaf className="w-6 h-6" />}
                title="Reduce carbon emissions by up to 45% per trip"
                description="Sharing rides significantly cuts down individual carbon footprints compared to solo driving"
              />
              <EcoFeature
                icon={<IconCar className="w-6 h-6" />}
                title="Each shared ride = fewer cars on the road"
                description="Less traffic congestion and reduced air pollution around campus areas"
              />
              <EcoFeature
                icon={<IconWorld className="w-6 h-6" />}
                title="Support eco-friendly campus transportation"
                description="Contribute to your university's sustainability goals and green initiatives"
              />
            </div>
          </motion.div>

          {/* Right stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-1 gap-6">
              {/* Main impact card */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-green-950/50 to-emerald-950/50 border border-green-500/20 backdrop-blur-sm">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-400/10 to-emerald-400/10" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6 mx-auto">
                    <IconLeaf className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                      45%
                    </div>
                    <div className="text-neutral-300 text-lg mb-2">
                      Less CO₂ Emissions
                    </div>
                    <div className="text-neutral-500 text-sm">
                      Per shared trip vs. individual driving
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface EcoFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function EcoFeature({ icon, title, description }: EcoFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500/30 transition-colors duration-300">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-neutral-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

