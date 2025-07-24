"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function RideInfo() {
  return (
    <section className="w-full bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
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
                "bg-gradient-to-r from-white to-neutral-400",
                "bg-clip-text text-transparent"
              )}>
                Discover rides near you
              </h2>
              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                Connect with your community and share rides to common destinations
              </p>
            </div>

            <div className="space-y-6">
              <FeatureItem
                title="Personalized ride feed"
                description="See all available rides within a 15km radius on your customized home feed"
              />
              <FeatureItem
                title="Affordable shared rides"
                description="View and book rides at budget-friendly prices. Split costs with fellow riders heading in the same direction"
              />
              <FeatureItem
                title="Carpool with neighbors"
                description="Connect with verified community members who live around you. Build a trusted network for regular commutes"
              />
              <FeatureItem
                title="Real-time updates"
                description="Track your ride in real-time, get instant notifications, and communicate directly with drivers through the app"
              />
            </div>
          </motion.div>

          {/* Right images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 lg:pr-20">
              {/* Main ride card image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="/RideCard.png"
                  alt="Loop ride card interface displaying available rides within 15km radius with driver photos, ratings, and trip details"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating ride details card - hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="hidden lg:block absolute -bottom-10 -right-10 w-72 md:w-80 rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/RideDetails.png"
                  alt="Loop ride details screen showing driver profile, trip route, fare breakdown, and safety features for community rideshare"
                  width={400}
                  height={600}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  title: string;
  description: string;
}

function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full group-hover:bg-green-500 transition-colors duration-300" />
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
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