"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <div className="w-full max-w-7xl mx-auto my-20 py-20 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-[40%]">
          <div className="sticky top-20">
            <h2 className="text-3xl text-center lg:text-left md:text-6xl text-white font-bold leading-tight">
              Community Loves <br />
              poolUp
            </h2>
            <p className="text-sm text-center lg:text-left mx-auto lg:mx-0 text-neutral-400 mt-6 max-w-sm">
Real stories from community members who have tried Loop Platform.
            </p>
          </div>
        </div>

        <div className="w-full grid gap-6 grid-cols-1 lg:grid-cols-2 md:w-[60%] mx-auto">
          <TestimonialCard
            name="Ian Dominic"
            role="Community Member"
            quote="This is an amazing App"
          />
          <TestimonialCard
            name="Hussien Tannira"
            role="Verified Driver"
            quote="Great job on building this application"
            className="lg:mt-[40px]"
          />
          <TestimonialCard
            name="Shahwar Akbar"
            role="Rider"
            quote="poolUp is a Lifesaver now"
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
            role="Verified Driver"
            quote="Great App"
            className="lg:mt-[-20px]"
          />
          <TestimonialCard
            name="Pierre Cativiela"
            role="Community Member"
            quote="I love the UI, it's beautiful"
            className="lg:mt-[30px]"
          />
          <TestimonialCard
            name="Norman Affirim"
            role="Rider"
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
        "border border-gray-800 hover:border-gray-700",
        "bg-gray-950",
        "shadow-sm hover:shadow-md",
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
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-base text-gray-300 leading-relaxed flex-grow">
        &quot;{quote}&quot;
      </p>
      <div className="mt-4 h-1 w-full bg-gray-200 rounded-full"></div>
    </motion.div>
  );
};
