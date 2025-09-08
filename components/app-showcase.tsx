"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const appScreens = [
  {
    id: "discover",
    title: "Discover Rides",
    description: "Browse available rides in your area with our personalized feed",
    image: "/loop-app-screens/home_feed.PNG",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "book",
    title: "Book Instantly",
    description: "Quick and easy booking process with upfront pricing",
    image: "/loop-app-screens/book-ride.PNG", 
    color: "from-purple-500 to-purple-500"
  },
  {
    id: "track",
    title: "Track Your Ride",
    description: "Real-time tracking and communication with your driver",
    image: "/loop-app-screens/track_ride.PNG",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "manage",
    title: "Manage Bookings",
    description: "View and manage all your past and upcoming rides",
    image: "/loop-app-screens/manage_bookings.PNG",
    color: "from-orange-500 to-red-500"
  }
];

export function AppShowcase() {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <section className="w-full bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
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
            "bg-gradient-to-r from-white via-purple-100 to-purple-200",
            "bg-clip-text text-transparent"
          )}>
            See poolUp in Action
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Experience the app that's transforming how students and communities share rides
          </p>
        </motion.div>

        
        <div className="block lg:hidden">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center mb-12"
          >
            
            <div className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-30 transition-colors duration-500",
              `bg-gradient-to-r ${appScreens[activeScreen].color}`
            )} />
            
            
            <div className="relative z-10">
              
              <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black p-[3px] rounded-[45px] shadow-2xl">
                
                <div className="bg-black rounded-[42px] p-2 relative">
                  
                  <div className="relative bg-black rounded-[34px] overflow-hidden">
                    
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />
                    
                    
                    <div className="relative w-[280px] h-[600px] rounded-[34px] overflow-hidden">
                      <Image
                        key={activeScreen}
                        src={appScreens[activeScreen].image}
                        alt={appScreens[activeScreen].title}
                        width={280}
                        height={600}
                        className="object-cover object-top w-full h-full"
                        priority
                        quality={100}
                      />
                    </div>
                  </div>
                  
                  
                  <div className="absolute -left-[3px] top-32 w-[3px] h-12 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-lg" />
                  <div className="absolute -left-[3px] top-52 w-[3px] h-20 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-lg" />
                  <div className="absolute -left-[3px] top-80 w-[3px] h-20 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-lg" />
                  <div className="absolute -right-[3px] top-44 w-[3px] h-16 bg-gradient-to-b from-gray-700 to-gray-900 rounded-r-lg" />
                </div>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {appScreens.map((screen, index) => (
              <motion.div
                key={screen.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                
                {index < appScreens.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-6 bg-gradient-to-b from-neutral-600 to-neutral-800" />
                )}
                
                <button
                  className="w-full text-left group"
                  onClick={() => setActiveScreen(index)}
                >
                  <div className="flex items-start space-x-4">
                    
                    <div className={cn(
                      "relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
                      "shadow-lg backdrop-blur-sm border",
                      activeScreen === index
                        ? "bg-gradient-to-br from-purple-400 to-purple-500 text-black border-purple-300"
                        : "bg-neutral-900 text-neutral-400 border-neutral-700 group-hover:border-neutral-600 group-hover:text-white"
                    )}>
                      <span className="relative z-10">{index + 1}</span>
                      
                      
                      {activeScreen === index && (
                        <motion.div
                          initial={{ scale: 1, opacity: 0 }}
                          animate={{ scale: 1.2, opacity: [0, 0.6, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full border-2 border-purple-400"
                        />
                      )}
                    </div>
                    
                    
                    <div className="flex-1 pt-1">
                      <h3 className={cn(
                        "text-lg font-semibold transition-colors duration-300 mb-1",
                        activeScreen === index 
                          ? "text-purple-400" 
                          : "text-white group-hover:text-purple-300"
                      )}>
                        {screen.title}
                      </h3>
                      <p className={cn(
                        "text-sm leading-relaxed transition-colors duration-300",
                        activeScreen === index
                          ? "text-neutral-300"
                          : "text-neutral-400 group-hover:text-neutral-300"
                      )}>
                        {screen.description}
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {appScreens.map((screen, index) => (
              <motion.div
                key={screen.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                
                {index < appScreens.length - 1 && (
                  <div className="absolute left-7 top-20 w-0.5 h-8 bg-gradient-to-b from-neutral-600 to-neutral-800" />
                )}
                
                <button
                  className="w-full text-left group transition-all duration-300 hover:translate-x-2"
                  onClick={() => setActiveScreen(index)}
                >
                  <div className="flex items-start space-x-6">
                    
                    <div className={cn(
                      "relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300",
                      "shadow-xl backdrop-blur-sm border",
                      activeScreen === index
                        ? "bg-gradient-to-br from-blue-400 to-cyan-500 text-black border-blue-300 scale-110"
                        : "bg-neutral-900 text-neutral-400 border-neutral-700 group-hover:border-neutral-600 group-hover:text-white group-hover:scale-105"
                    )}>
                      <span className="relative z-10">{index + 1}</span>
                      
                      
                      {activeScreen === index && (
                        <motion.div
                          initial={{ scale: 1, opacity: 0 }}
                          animate={{ scale: 1.3, opacity: [0, 0.8, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full border-2 border-purple-400"
                        />
                      )}
                    </div>
                    
                    
                    <div className="flex-1 pt-2">
                      <h3 className={cn(
                        "text-2xl font-bold transition-colors duration-300 mb-3",
                        activeScreen === index 
                          ? "text-purple-400" 
                          : "text-white group-hover:text-purple-300"
                      )}>
                        {screen.title}
                      </h3>
                      <p className={cn(
                        "text-base leading-relaxed transition-colors duration-300",
                        activeScreen === index
                          ? "text-neutral-300"
                          : "text-neutral-400 group-hover:text-neutral-300"
                      )}>
                        {screen.description}
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            
            <div className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-30 transition-colors duration-500",
              `bg-gradient-to-r ${appScreens[activeScreen].color}`
            )} />
            
            
            <div className="relative z-10">
              
              <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black p-[3px] rounded-[45px] shadow-2xl">
                
                <div className="bg-black rounded-[42px] p-2 relative">
                  
                  <div className="relative bg-black rounded-[34px] overflow-hidden">
                    
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />
                    
                    
                    <div className="relative w-[300px] h-[650px] rounded-[34px] overflow-hidden">
                      <Image
                        key={activeScreen}
                        src={appScreens[activeScreen].image}
                        alt={appScreens[activeScreen].title}
                        width={300}
                        height={650}
                        className="object-cover object-top w-full h-full"
                        priority
                        quality={100}
                      />
                    </div>
                  </div>
                  
                  
                  <div className="absolute -left-[3px] top-32 w-[3px] h-12 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-lg" />
                  <div className="absolute -left-[3px] top-52 w-[3px] h-20 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-lg" />
                  <div className="absolute -left-[3px] top-80 w-[3px] h-20 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-lg" />
                  <div className="absolute -right-[3px] top-44 w-[3px] h-16 bg-gradient-to-b from-gray-700 to-gray-900 rounded-r-lg" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}