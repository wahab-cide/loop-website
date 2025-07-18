"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <div className="w-full max-w-7xl mx-auto my-20 py-20 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-[40%]">
          <div className="sticky top-20">
            <h2
              className={cn(
                "text-3xl text-center lg:text-left md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B82F6_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#10B981_100%)] ",
                "bg-clip-text text-transparent leading-tight"
              )}
            >
              Students Love <br />
              Loop
            </h2>
            <p className="text-sm text-center lg:text-left mx-auto lg:mx-0 text-neutral-400 mt-6 max-w-sm">
Real stories from students and community members who love using Loop for their daily transportation needs.
            </p>
          </div>
        </div>

        <div className="w-full grid gap-6 grid-cols-1 lg:grid-cols-2 md:w-[60%] mx-auto">
          <TestimonialCard
            name="Ian Dominic"
            role="Student"
            quote="This is an amazing App"
          />
          <TestimonialCard
            name="Hussien Tannira"
            role="Student"
            quote="Great job on building this application"
            className="lg:mt-[40px]"
          />
          <TestimonialCard
            name="Shahwar Akbar"
            role="Student"
            quote="Loop is a Lifesaver now"
            className="lg:mt-[-40px]"
          />
          <TestimonialCard
            name="Dr. S.P. Boateng"
            role="Professor"
            quote="Wow, I can't wait for this to start working! Brilliant"
            className="lg:mt-[20px]"
          />
          <TestimonialCard
            name="Edris Yawar"
            role="Student"
            quote="Great App"
            className="lg:mt-[-20px]"
          />
          <TestimonialCard
            name="Pierre Cativiela"
            role="Student"
            quote="I love the UI, it's beautiful"
            className="lg:mt-[30px]"
          />
          <TestimonialCard
            name="Norman Affirim"
            role="Student"
            quote="This is the best rideshare App"
            className="lg:mt-[-30px]"
          />
        </div>
      </div>
    </div>
  );
}

const TestimonialCard = ({
  name,
  role,
  quote,
  className,
}: {
  name: string;
  role: string;
  quote: string;
  className?: string;
}) => {
  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = () => {
    return 'bg-gradient-to-br from-blue-500 to-blue-600';
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        "flex flex-col h-80 p-6 rounded-[17px]",
        "border border-blue-500/20 hover:border-green-500/30",
        "bg-gradient-to-br from-blue-900/10 via-gray-900/90 to-green-900/10",
        "backdrop-blur-sm hover:from-blue-800/20 hover:to-green-800/20",
        "relative isolate transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-white/20 shadow-lg",
          getAvatarColor()
        )}>
          {getInitials(name)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-blue-300">{role}</p>
        </div>
      </div>
      <p className="text-base text-neutral-300 leading-relaxed flex-grow">
        &quot;{quote}&quot;
      </p>
      <div className="mt-4 h-1 w-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-30"></div>
    </motion.div>
  );
};
