"use client";

import { cn } from "@/lib/utils";
import {
  IconCheck,
  IconShieldCheck
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GlowingEffect } from "./ui/glowing-effect";

export function Features() {
  return (
    <div
      id="product"
      className="w-full max-w-7xl mx-auto py-4 px-4 md:px-8 md:my-20 md:py-20"
    >
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center text-lg font-semibold tracking-tight text-neutral-300 md:text-3xl">
        <h2
          className={cn(
            "inline-block text-3xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B82F6_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#10B981_100%)]",
            "bg-clip-text text-transparent"
          )}
        >
Why Choose Loop
        </h2>
      </div>
      <p className="max-w-lg text-sm text-center mx-auto mt-4 text-neutral-400">
Built by students, for students.
      </p>
      
      {/* Verification Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 mb-12 max-w-4xl mx-auto"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/verification.png"
            alt="Driver verification and safety features"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </motion.div>
      
      <div className="mt-12 grid cols-1 lg:grid-cols-5 gap-4 auto-rows-[25rem] max-w-3xl mx-auto lg:max-w-none">
        <Card className="flex flex-col relative justify-between lg:col-span-2">
          <CardContent className="h-full flex flex-col justify-center items-center text-center py-12">
            <CardTitle>
              Student
              <br /> Community
            </CardTitle>
            <CardDescription className="mt-4 max-w-sm mx-auto">
              Connect with verified students from your campus and nearby colleges.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex relative flex-col lg:col-span-3">
          <CardContent className="h-full flex flex-col justify-between p-8 pb-10">
            <div>
              <div className="mb-6">
                <IconShieldCheck className="w-16 h-16 text-green-400" />
              </div>
              <CardTitle>
                Safety <br /> First
              </CardTitle>
              <CardDescription className="mt-4">
                Every driver completes Stripe ID verification and selfie authentication to ensure they are who they say they are. Your safety is our top priority.
              </CardDescription>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <IconCheck className="w-5 h-5 text-green-400" />
                <span className="text-neutral-300">Stripe ID verified drivers</span>
              </div>
              <div className="flex items-center gap-3">
                <IconCheck className="w-5 h-5 text-green-400" />
                <span className="text-neutral-300">Real-time trip tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <IconCheck className="w-5 h-5 text-green-400" />
                <span className="text-neutral-300">Drivers living within 15km radius</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col relative justify-between lg:col-span-3">
          <CardSkeletonBody>
            <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-950/20 to-green-950/20">
              <GhanaUniversitiesMap />
            </div>
          </CardSkeletonBody>
          <CardContent className="h-40 relative mb-4">
            <CardTitle>
Expanding <br /> to Africa
            </CardTitle>
            <CardDescription>
Bringing Loop to University of Ghana, KNUST, and other leading Ghanaian universities. Connecting African students with safe, affordable transportation.
            </CardDescription>
          </CardContent>
          <div className="absolute right-4 bottom-4 opacity-60 md:opacity-100">
            <GhanaFlag />
          </div>
        </Card>

        <Card className="flex flex-col justify-between lg:col-span-2">
          <CardContent className="h-40">
            <CardTitle>
Student <br /> Approved
            </CardTitle>
            <CardDescription>
Safe rides, friendly drivers, and budget-friendly prices.
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <div className="w-full h-full p-4 rounded-lg px-10 mt-6">
              <CardStack items={CARDS} />
            </div>
          </CardSkeletonBody>
        </Card>
      </div>
    </div>
  );
}

export const SkeletonTwo = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent mt-10"></div>
  );
};

const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("overflow-hidden relative w-full h-full", className)}>
      {children}
    </div>
  );
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "inline-block text-xl md:text-4xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B82F6_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#10B981_100%)]  bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </h3>
  );
};
const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "font-sans max-w-sm text-sm font-normal tracking-tight mt-2 text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        "group relative isolate flex flex-col rounded-2xl bg-gradient-to-br from-neutral-900 via-blue-950/10 to-green-950/10 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] border border-blue-500/10 hover:border-green-500/20 overflow-hidden transition-all duration-300",
        className
      )}
    >
      <GlowingEffect
        spread={60}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={5}
        blur={10}
      />
      {children}
    </motion.div>
  );
};

let interval: NodeJS.Timeout;
type Card = {
  id: number;
  name: string;
  designation?: string;
  content: React.ReactNode;
};
export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-48 md:h-36 w-full mx-auto">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute w-full h-full p-4 flex flex-col justify-between rounded-[16px] bg-[linear-gradient(180deg,#1D1D1D_0%,#131313_100%)] shadow-[0px_1px_1px_0px_rgba(121,121,121,0.70)_inset] border border-white/[0.1]"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
              <IconLogo className="w-6 h-6 sm:w-auto sm:h-auto" />
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <p className="text-sm sm:text-base  font-medium text-white">
                  {card.name}
                </p>
                {card.designation && (
                  <p className="text-sm sm:text-base font-normal text-neutral-200">
                    {card.designation}
                  </p>
                )}
              </div>
            </div>
            <div className="font-normal text-xs sm:text-sm text-neutral-200 mt-2">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-gradient-to-r from-blue-100 to-green-100 bg-blue-700/[0.2] text-blue-500 px-1 py-0.5 rounded",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Ian Dominic",
    content: (
      <p>
        This is an <Highlight>amazing App</Highlight>! 
      </p>
    ),
  },
  {
    id: 1,
    name: "Hussien Tannira",
    content: (
      <p>
        <Highlight>Great job</Highlight> on building this application!
      </p>
    ),
  },
  {
    id: 2,
    name: "Shahwar Akbar",
    content: (
      <p>
        Loop is a <Highlight>Lifesaver now</Highlight>!
      </p>
    ),
  },
];

const IconLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="33"
      viewBox="0 0 29 33"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_i_997_4364)">
        <rect y="0.790039" width="28" height="28" rx="5" fill="#262626" />
      </g>
      <g filter="url(#filter1_d_997_4364)">
        <circle
          cx="14.5"
          cy="15.29"
          r="10.5"
          fill="url(#paint0_radial_997_4364)"
        />
        <circle
          cx="14.5"
          cy="15.29"
          r="10.2"
          stroke="url(#paint1_linear_997_4364)"
          strokeWidth="0.6"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_997_4364"
          x="0"
          y="0.790039"
          width="28"
          height="29"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.473682 0 0 0 0 0.473682 0 0 0 0 0.473682 0 0 0 0.7 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_997_4364"
          />
        </filter>
        <filter
          id="filter1_d_997_4364"
          x="0"
          y="3.79004"
          width="29"
          height="29"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_997_4364"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_997_4364"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_997_4364"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.08333 9.16504) rotate(49.9697) scale(19.0456)"
        >
          <stop stopColor="#252525" />
          <stop offset="0.463081" stopColor="#1A1A1A" />
          <stop offset="1" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_997_4364"
          x1="14.5"
          y1="4.79004"
          x2="14.5"
          y2="25.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CBCBCB" />
          <stop offset="1" stopColor="#666666" />
        </linearGradient>
      </defs>
    </svg>
  );
};


const GhanaUniversitiesMap = () => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Coming Soon Badge */}
      <div className="absolute top-4 right-4 bg-yellow-500/90 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-yellow-400">
        Coming Soon
      </div>
      
      {/* Ghana Flag in corner */}
      <div className="absolute bottom-4 left-4">
        <GhanaFlag />
      </div>
      
      {/* Centered text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-lg md:text-2xl font-bold mb-2">
            Accra, Ghana
          </h3>
          <p className="text-sm md:text-base opacity-90">
            Loop expansion coming to major universities
          </p>
        </div>
      </div>
    </div>
  );
};

const GhanaFlag = () => {
  return (
    <div className="flex flex-col w-12 h-8 rounded border border-white/20 overflow-hidden shadow-lg">
      <div className="h-1/3 bg-red-600"></div>
      <div className="h-1/3 bg-yellow-400 flex items-center justify-center">
        <div className="w-2 h-2">
          <svg viewBox="0 0 24 24" fill="black" className="w-full h-full">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>
      <div className="h-1/3 bg-green-600"></div>
    </div>
  );
};
