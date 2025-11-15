"use client";
import { IconQuote } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const driverTestimonials = [
  {
    quote: "If three riders chip in $25 each, my trip home will be free—and we'll blast music the whole way.",
    name: "Chris",
    title: "Dartmouth Engineering Senior",
  },
  {
    quote: "I'm a senior with off-campus rent, parking fees, and a dog. poolUp will cover my gas without adding a single mile I wasn't already driving.",
    name: "Alex",
    title: "Senior Economics Major",
  },
  {
    quote: "I've driven the same route to NYC for years. With poolUp, it'll turn into a mini social. I'll probably meet other students—and maybe another comic or two.",
    name: "Jules",
    title: "Junior",
  },
  {
    quote: "I might be nervous at first, but seeing mutual friends and rider ratings will give me full control. I'll definitely check the app before every long weekend.",
    name: "Sam",
    title: "Sophomore",
  },
  {
    quote: "I won't drive every weekend, but when I do, I'll post. It'll be passive income. I can easily make $160 in a month just by adding riders to trips I'm already taking.",
    name: "Carlisle",
    title: "Pre-med Senior",
  },
];

const riderTestimonials = [
  {
    quote: "I'll happily split $40 for a ride home with classmates and a real conversation. It'll beat a lonely bus ride—and make going home feel like part of the break.",
    name: "Angie",
    title: "Sophomore",
  },
  {
    quote: "I'll make a friend, play DJ, and get home for under $35. Peter Pan could never.",
    name: "Tyler",
    title: "Junior",
  },
  {
    quote: "The driver will probably have mutuals with me—or even be in one of my classes. It'll feel natural.",
    name: "Maya",
    title: "Freshman",
  },
  {
    quote: "Sometimes I'll catch a ride, sometimes I'll offer one. Either way, I'll save money and meet people I'd otherwise never cross paths with.",
    name: "Brandon",
    title: "Senior",
  },
];

interface TestimonialCarouselProps {
  type?: "driver" | "rider";
}

export function TestimonialCarousel({ type = "driver" }: TestimonialCarouselProps) {
  const testimonials = type === "driver" ? driverTestimonials : riderTestimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ backgroundColor: '#0f0e0b' }}>
      
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950/10 via-transparent to-orange-950/10" />
      
      <div className="max-w-5xl mx-auto relative">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What {type === "driver" ? "Drivers" : "Riders"} Are Saying
          </h2>
          <p className="text-gray-400 text-lg">
            Real stories from students looking forward to {type === "driver" ? "driving" : "riding"} with Loop Platform
          </p>
        </motion.div>

        
        <div className="relative min-h-[320px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4 md:px-12"
            >
              
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-orange-950/30 flex items-center justify-center">
                  <IconQuote className="w-8 h-8 text-orange-500" />
                </div>
              </div>

              
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-light italic mb-8 text-white leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              
              <div className="space-y-1">
                <p className="text-orange-400 font-semibold text-lg">
                  — {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        
        <div className="mt-12">
          
          <div className="flex items-center justify-center gap-8 mb-3">
            
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors group"
              style={{ backgroundColor: '#181611' }}
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-2 bg-orange-500"
                      : "w-2 h-2 bg-gray-700 hover:bg-gray-600"
                  } rounded-full`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors group"
              style={{ backgroundColor: '#181611' }}
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          
          {isAutoPlaying && (
            <motion.div
              className="h-[2px] bg-orange-500/30"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              key={`progress-${currentIndex}`}
            />
          )}
        </div>
      </div>
    </section>
  );
}