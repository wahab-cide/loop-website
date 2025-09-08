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
    <section className="w-full bg-gradient-to-b from-purple-50 to-purple-100 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
            "bg-gradient-to-r from-purple-600 via-purple-600 to-purple-700",
            "bg-clip-text text-transparent"
          )}>
            Driving Campus Sustainability
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Every shared ride makes a meaningful impact on our environment and campus community. 
            Join the movement towards greener transportation.
          </p>
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {sustainabilityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 border border-purple-200 shadow-lg h-full">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-purple-600 font-semibold text-lg mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-purple-200 shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            How Ride Sharing Helps Our Planet
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group text-left"
    >
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

