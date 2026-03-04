"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconLeaf, IconWorld, IconCar, IconUsers } from "@tabler/icons-react";

const sustainabilityStats = [
  {
    icon: IconLeaf,
    number: "45%",
    label: "Less CO₂ Emissions",
    description: "Per shared trip vs. individual driving"
  },
  {
    icon: IconCar,
    number: "3.2M",
    label: "Miles Saved",
    description: "Through ride sharing this year"
  },
  {
    icon: IconWorld,
    number: "1,200",
    label: "Tons CO₂ Avoided",
    description: "Equivalent to 260 cars off the road"
  },
  {
    icon: IconUsers,
    number: "89%",
    label: "Student Participation",
    description: "In sustainable transportation"
  }
];

export function Sustainability() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className={cn(
            "inline-block text-3xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
            "bg-clip-text text-transparent mb-6"
          )}>
            Driving Campus Sustainability
          </h2>
          <p className="max-w-lg text-sm text-center mx-auto text-neutral-400 px-4">
            Every shared ride makes a meaningful impact on our environment and campus community.
          </p>
        </motion.div>


        <div className="max-w-4xl mx-auto mb-20 md:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
            {sustainabilityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center md:text-left"
              >
                <div className="flex items-center gap-4 mb-3 justify-center md:justify-start">
                  <stat.icon className="w-8 h-8 text-neutral-500" strokeWidth={1.5} />
                  <div className="text-4xl md:text-5xl font-bold text-neutral-200">
                    {stat.number}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-medium text-neutral-200 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-neutral-400">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-medium text-neutral-200 text-center mb-12 md:mb-16">
            How Ride Sharing Helps Our Planet
          </h3>

          <div className="divide-y divide-neutral-800">
            <EcoFeature
              title="Reduce Carbon Footprint"
              description="Cut individual emissions by sharing rides with fellow students heading to the same destination"
            />
            <EcoFeature
              title="Less Traffic Congestion"
              description="Fewer cars on campus roads means reduced traffic, shorter commutes, and cleaner air"
            />
            <EcoFeature
              title="Campus Sustainability Goals"
              description="Contribute directly to your university's environmental initiatives and green campus programs"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface EcoFeatureProps {
  title: string;
  description: string;
}

function EcoFeature({ title, description }: EcoFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.4 }}
      className="py-6 md:py-8"
    >
      <div className="space-y-2">
        <h4 className="text-base md:text-lg font-medium text-neutral-200">
          {title}
        </h4>
        <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
