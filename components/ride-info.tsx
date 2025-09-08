"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function RideInfo() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.02]);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-primary py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <motion.div 
        className="max-w-full mx-auto px-6 md:px-12 lg:px-16"
        style={{ y, opacity, scale }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold",
                "text-white"
              )}>
                Discover rides near you
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Connect with your community and share rides to common destinations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <FeatureItem
                title="Personalized ride feed"
                description="See all available rides within a 15km radius on your customized home feed"
              />
              <FeatureItem
                title="Carpool with neighbors"
                description="View and book rides at budget-friendly prices. Split costs with fellow riders heading in the same direction"
              />
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto lg:max-w-none">
                <Image
                  src="/website photos/happyDriver.jpeg"
                  alt="Happy Loop Platform driver ready to connect with passengers"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </motion.div>
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7,
        ease: [0.25, 0.25, 0.25, 0.75],
        delay: Math.random() * 0.2
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-white">
          {title}
        </h3>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}