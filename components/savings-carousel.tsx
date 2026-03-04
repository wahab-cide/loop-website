"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const tripScenarios = [
  {
    id: "grocery",
    title: "Weekend Grocery Run",
    subtitle: "Split a ride to Target with 2 other students",
    image: "/website photos/shopping.jpeg",
    cost: "$8-12",
    traditional: "$25-35",
    description: "Weekend Grocery Run - Split a ride to Target with 2 other students"
  },
  {
    id: "break",
    title: "Trip Home for Break", 
    subtitle: "Share a comfortable ride home with fellow students",
    image: "/website photos/happyPassengerMain1.jpeg",
    cost: "$30-40",
    traditional: "$120-150",
    description: "Trip Home for Break - Share a comfortable ride home with fellow students"
  },
  {
    id: "airport",
    title: "Airport Transfer",
    subtitle: "Coordinate with others on the same flight",
    image: "/website photos/happyPassengerMain2.jpeg",
    cost: "$15-20", 
    traditional: "$60-80",
    description: "Airport Transfer - Coordinate with others on the same flight"
  }
];

export function SavingsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 px-6 overflow-hidden" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Savings, Real Rides
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            poolUp makes everyday rides affordable. Here's what students like you are saving.
          </p>
        </motion.div>

        
        <div className="block lg:hidden mb-12">
          <div className="relative h-[500px] rounded-3xl overflow-hidden mx-4">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              
              <Image
                src={tripScenarios[activeIndex].image}
                alt={tripScenarios[activeIndex].title}
                fill
                className="object-cover"
                quality={100}
                priority
              />
              
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="text-white">
                  <h3 className="text-4xl md:text-5xl font-bold mb-3">
                    {tripScenarios[activeIndex].title}
                  </h3>
                  <p className="text-lg text-gray-200">
                    {tripScenarios[activeIndex].subtitle}
                  </p>
                </div>
              </div>
            </motion.div>

            
            <button
              onClick={() => setActiveIndex((prev) => prev === 0 ? tripScenarios.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white/90 flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => setActiveIndex((prev) => prev === tripScenarios.length - 1 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white/90 flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Next"
            >
              →
            </button>
          </div>

          
          <div className="px-4 mt-6 text-center">
            
            <div className="flex justify-center items-center gap-4 text-sm mb-6">
              <div>
                <span className="text-gray-300">From </span>
                <span className="text-2xl font-bold text-orange-400">{tripScenarios[activeIndex].cost}</span>
              </div>
              <div>
                <span className="text-gray-400 line-through">{tripScenarios[activeIndex].traditional}</span>
                <span className="text-gray-300 ml-2">with others</span>
              </div>
            </div>
          </div>

          
          <div className="flex justify-center space-x-3">
            {tripScenarios.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-700",
                  activeIndex === index 
                    ? "bg-orange-500 w-8" 
                    : "bg-gray-600 w-2 hover:bg-gray-500"
                )}
              />
            ))}
          </div>
        </div>

        
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6">
            {tripScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.id}
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative h-[600px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 group",
                  activeIndex === index 
                    ? "ring-2 ring-orange-500 scale-105 shadow-2xl shadow-orange-500/20" 
                    : "hover:scale-102 hover:shadow-xl"
                )}
              >
                
                <Image
                  src={scenario.image}
                  alt={scenario.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  quality={95}
                />
                
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div></div>
                  
                  
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-3">
                      {scenario.title}
                    </h3>
                    <p className="text-lg mb-6 text-gray-200">
                      {scenario.subtitle}
                    </p>

                    
                    <div className="flex items-center gap-3 text-sm">
                      <div>
                        <span className="text-gray-300">From </span>
                        <span className="text-xl font-bold text-orange-400">{scenario.cost}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 line-through">{scenario.traditional}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Average Monthly Savings: <span className="text-orange-500">$200-$400</span>
          </h3>
          <p className="text-gray-400">
            Based on 3-5 rides per month compared to traditional rideshare services
          </p>
        </motion.div>
      </div>
    </section>
  );
}