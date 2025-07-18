"use client";

import { cn } from "@/lib/utils";
import {
  IconBook,
  IconBook2,
  IconBuilding,
  IconCertificate,
  IconPencil,
  IconSchool,
  IconUsers
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
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
      <div className="mt-20  grid cols-1 lg:grid-cols-5 gap-4 auto-rows-[25rem] max-w-3xl mx-auto lg:max-w-none">
        <Card className="flex flex-col relative justify-between lg:col-span-2">
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/3">
            <LogoOrbit />
          </div>
          <CardContent className="h-40 absolute bottom-0">
            <CardTitle>
Student
              <br /> Community
            </CardTitle>
            <CardDescription>
Connect with verified students from your campus and nearby colleges.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex relative flex-col justify-between lg:col-span-3">
          <CardContent className="h-40">
            <CardTitle>
Campus <br /> Coverage
            </CardTitle>
            <CardDescription>
Find rides to the airport, off-campus housing, and weekend destinations.
            </CardDescription>
          </CardContent>
          <div className="absolute inset-0">
            <MapView />
          </div>
          <h1
            className={cn(
              "inline-block p-6 text-2xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B82F6_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#10B981_100%)]  bg-clip-text text-transparent"
            )}
          >
50+
            <br />
            Cities
          </h1>
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



const OrbitingIcons = ({
  centerIcon,
  orbits,
  className,
}: {
  centerIcon?: React.ReactNode;
  orbits: Array<{
    icons: React.ReactNode[];
    radius?: number;
    speed?: number;
    rotationDirection?: "clockwise" | "anticlockwise";
    revealTime?: number;
    delay?: number;
  }>;
  className?: string;
}) => {
  // Precalculate all orbit data
  const orbitData = React.useMemo(() => {
    return orbits.map((orbit, orbitIndex) => {
      const radius = orbit.radius || 100 + orbitIndex * 80;
      const speed = orbit.speed || 1;
      const revealTime = orbit.revealTime || 0.5;
      const orbitDelay = orbit.delay || 0;
      const iconCount = orbit.icons.length;

      // Calculate angles for each icon
      const angleStep = 360 / iconCount;
      const angles = Array.from({ length: iconCount }, (_, i) => angleStep * i);

      // Precalculate positions and animations for each icon
      const iconData = angles.map((angle) => {
        const randomDelay = -Math.random() * speed;
        const rotationAngle =
          orbit.rotationDirection === "clockwise"
            ? [angle, angle - 360]
            : [angle, angle + 360];

        return {
          angle,
          randomDelay,
          rotationAngle,
          position: {
            x: radius * Math.cos((angle * Math.PI) / 180),
            y: radius * Math.sin((angle * Math.PI) / 180),
          },
          animation: {
            initial: {
              rotate: angle,
              scale: 0,
              opacity: 0,
            },
            animate: {
              rotate: rotationAngle,
              scale: 1,
              opacity: 1,
            },
            transition: {
              rotate: {
                duration: speed,
                repeat: Infinity,
                ease: "linear",
                delay: randomDelay + orbitDelay,
              },
              scale: {
                duration: revealTime,
                delay: Math.abs(randomDelay) + orbitDelay,
              },
              opacity: {
                duration: revealTime,
                delay: Math.abs(randomDelay) + orbitDelay,
              },
            },
            counterRotation: {
              initial: { rotate: -angle },
              animate: {
                rotate:
                  orbit.rotationDirection === "clockwise"
                    ? [-angle, -angle + 360]
                    : [-angle, -angle - 360],
              },
              transition: {
                duration: speed,
                repeat: Infinity,
                ease: "linear",
                delay: randomDelay + orbitDelay,
              },
            },
          },
        };
      });

      return {
        radius,
        speed,
        revealTime,
        orbitDelay,
        iconData,
        rotationDirection: orbit.rotationDirection,
      };
    });
  }, [orbits]);

  return (
    <div className={cn("relative w-[300px] h-[300px]", className)}>
      {centerIcon && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {centerIcon}
        </div>
      )}
      {orbitData.map((orbit, orbitIndex) => (
        <div
          key={orbitIndex}
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: orbits.length - orbitIndex }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[343.721px] border border-[#545454] bg-[linear-gradient(189deg,#252525_5.97%,#0E0E0E_92.92%)] shadow-[0px_115px_32px_0px_rgba(0,0,0,0.01),_0px_74px_29px_0px_rgba(0,0,0,0.05),_0px_41px_25px_0px_rgba(0,0,0,0.16),_0px_18px_18px_0px_rgba(0,0,0,0.27),_0px_5px_10px_0px_rgba(0,0,0,0.31),inset_0px_0px_20px_rgba(0,0,0,0.5)]"
            style={{
              width: orbit.radius * 2 + "px",
              height: orbit.radius * 2 + "px",
            }}
          />

          {orbit.iconData.map((icon, iconIndex) => (
            <motion.div
              key={iconIndex}
              className="absolute"
              style={{
                width: "40px",
                height: "40px",
                left: `calc(50% - 20px)`,
                top: `calc(50% - 20px)`,
                transformOrigin: "center center",
              }}
              initial={icon.animation.initial}
              animate={icon.animation.animate}
              transition={icon.animation.transition}
            >
              <div
                style={{
                  position: "absolute",
                  left: `${orbit.radius}px`,
                  transformOrigin: "center center",
                }}
              >
                <motion.div
                  initial={icon.animation.counterRotation.initial}
                  animate={icon.animation.counterRotation.animate}
                  transition={icon.animation.counterRotation.transition}
                  className="w-10 h-10 rounded-[5px] bg-[#151515] flex items-center justify-center shadow-[0px_23px_7px_0px_rgba(0,0,0,0.01),0px_15px_6px_0px_rgba(0,0,0,0.06),0px_8px_5px_0px_rgba(0,0,0,0.19),0px_4px_4px_0px_rgba(0,0,0,0.32),0px_1px_2px_0px_rgba(0,0,0,0.37)]"
                >
                  {orbits[orbitIndex].icons[iconIndex]}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

const LogoOrbit = () => {
  const collegeIcons = [
    <IconSchool
      key="school"
      className="w-8 h-8 text-blue-400"
    />,
    <IconBook
      key="book"
      className="w-8 h-8 text-green-400"
    />,
    <IconCertificate
      key="certificate"
      className="w-8 h-8 text-purple-400"
    />,
  ];

  const campusIcons = [
    <IconUsers
      key="users"
      className="w-6 h-6 text-blue-300"
    />,
    <IconBook2
      key="book2"
      className="w-6 h-6 text-green-300"
    />,
    <IconBuilding
      key="campus"
      className="w-6 h-6 text-purple-300"
    />,
    <IconPencil
      key="pencil"
      className="w-6 h-6 text-amber-300"
    />,
    <CollegeLogo
      key="college1"
      name="SU"
      color="bg-blue-500"
    />,
    <CollegeLogo
      key="college2"
      name="TC"
      color="bg-green-500"
    />,
  ];

  return (
    <OrbitingIcons
      orbits={[
        {
          icons: collegeIcons,
          rotationDirection: "clockwise",
          radius: 80,
          speed: 7,
        },
        {
          icons: campusIcons,
          rotationDirection: "anticlockwise",
          radius: 140,
          speed: 15,
        },
      ]}
    />
  );
};

const CollegeLogo = ({ name, color }: { name: string; color: string }) => {
  return (
    <div className={cn(
      "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold",
      color
    )}>
      {name}
    </div>
  );
};

const MapView = () => {
  const locations = useMemo(() => [
    // Universities & Colleges - spread across different areas
    { name: "State University", x: 15, y: 25, color: "bg-blue-500", type: "campus" },
    { name: "Tech Institute", x: 40, y: 15, color: "bg-green-500", type: "campus" },
    { name: "Community College", x: 75, y: 20, color: "bg-purple-500", type: "campus" },
    
    // Shopping & Entertainment - distributed around the map
    { name: "City Mall", x: 85, y: 40, color: "bg-orange-500", type: "shopping" },
    { name: "Downtown Plaza", x: 25, y: 75, color: "bg-orange-400", type: "shopping" },
    { name: "Outlet Center", x: 10, y: 60, color: "bg-red-500", type: "shopping" },
    { name: "Fashion District", x: 65, y: 80, color: "bg-pink-500", type: "shopping" },
    
    // Transportation Hubs - strategic locations
    { name: "Metro Airport", x: 90, y: 70, color: "bg-gray-500", type: "airport" },
    { name: "Union Station", x: 35, y: 35, color: "bg-gray-400", type: "transit" },
    { name: "Bus Terminal", x: 55, y: 85, color: "bg-gray-600", type: "transit" },
    
    // Culture & Recreation - spread throughout
    { name: "Art Museum", x: 60, y: 25, color: "bg-indigo-500", type: "culture" },
    { name: "Science Center", x: 80, y: 85, color: "bg-indigo-400", type: "culture" },
    { name: "Central Park", x: 20, y: 45, color: "bg-emerald-500", type: "recreation" },
    { name: "Sports Complex", x: 70, y: 55, color: "bg-emerald-400", type: "recreation" },
    
    // Business District - downtown area
    { name: "Financial District", x: 45, y: 50, color: "bg-slate-500", type: "business" },
    { name: "Tech Hub", x: 55, y: 65, color: "bg-slate-600", type: "business" },
    
    // Additional destinations for better coverage
    { name: "Medical Center", x: 30, y: 85, color: "bg-red-600", type: "medical" },
    { name: "Conference Center", x: 85, y: 15, color: "bg-cyan-500", type: "business" },
  ], []);

  const connectionLines = useMemo(() => [
    // Campus network - connecting universities
    { from: [15, 25], to: [40, 15], type: "primary" },
    { from: [40, 15], to: [75, 20], type: "primary" },
    { from: [15, 25], to: [75, 20], type: "primary" },
    
    // Campus to key destinations
    { from: [15, 25], to: [35, 35], type: "secondary" }, // State U to Union Station
    { from: [40, 15], to: [60, 25], type: "secondary" }, // Tech to Art Museum
    { from: [75, 20], to: [85, 40], type: "secondary" }, // Community to City Mall
    
    // Shopping network
    { from: [85, 40], to: [65, 80], type: "secondary" },
    { from: [25, 75], to: [10, 60], type: "secondary" },
    
    // Airport connections
    { from: [90, 70], to: [85, 40], type: "airport" }, // Airport to City Mall
    { from: [90, 70], to: [80, 85], type: "airport" }, // Airport to Science Center
    
    // Cultural circuit
    { from: [60, 25], to: [80, 85], type: "culture" },
    { from: [20, 45], to: [70, 55], type: "culture" }, // Park to Sports
    
    // Business district connections
    { from: [45, 50], to: [55, 65], type: "transit" },
    { from: [35, 35], to: [45, 50], type: "transit" }, // Station to Financial
    { from: [55, 85], to: [55, 65], type: "transit" }, // Bus Terminal to Tech Hub
    
    // Medical/emergency routes
    { from: [30, 85], to: [25, 75], type: "emergency" }, // Medical to Downtown
    { from: [85, 15], to: [90, 70], type: "business" }, // Conference to Airport
  ], []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Map Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full h-full">
          {/* Grid Pattern */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Campus Areas */}
          <circle cx="100" cy="90" r="25" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" />
          <circle cx="180" cy="120" r="30" fill="rgba(16, 185, 129, 0.1)" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
          <circle cx="260" cy="75" r="20" fill="rgba(139, 92, 246, 0.1)" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
          
          {/* Shopping Districts */}
          <rect x="300" y="90" width="40" height="30" rx="5" fill="rgba(249, 115, 22, 0.1)" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1" />
          <rect x="180" y="200" width="50" height="25" rx="5" fill="rgba(251, 146, 60, 0.1)" stroke="rgba(251, 146, 60, 0.3)" strokeWidth="1" />
          
          {/* Airport Zone */}
          <polygon points="320,160 350,160 350,190 320,190" fill="rgba(107, 114, 128, 0.1)" stroke="rgba(107, 114, 128, 0.3)" strokeWidth="1" />
          
          {/* Cultural District */}
          <ellipse cx="240" cy="150" rx="35" ry="20" fill="rgba(99, 102, 241, 0.1)" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" />
          
          {/* Recreation Area */}
          <path d="M 100 120 Q 140 110 160 140 Q 140 170 100 160 Q 80 140 100 120" fill="rgba(16, 185, 129, 0.1)" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
        </svg>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {connectionLines.map((line, i) => {
          const getLineColor = (type: string) => {
            switch (type) {
              case "primary": return "rgba(59, 130, 246, 0.6)";
              case "secondary": return "rgba(16, 185, 129, 0.5)";
              case "airport": return "rgba(107, 114, 128, 0.5)";
              case "culture": return "rgba(99, 102, 241, 0.5)";
              case "transit": return "rgba(245, 158, 11, 0.5)";
              case "emergency": return "rgba(239, 68, 68, 0.5)";
              case "business": return "rgba(6, 182, 212, 0.5)";
              default: return "rgba(59, 130, 246, 0.3)";
            }
          };
          
          return (
            <motion.line
              key={i}
              x1={line.from[0]}
              y1={line.from[1]}
              x2={line.to[0]}
              y2={line.to[1]}
              stroke={getLineColor(line.type)}
              strokeWidth={line.type === "primary" ? "0.8" : "0.5"}
              strokeDasharray={line.type === "airport" ? "3,1" : "2,2"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.7, 0]
              }}
              transition={{
                duration: line.type === "primary" ? 3 : 5,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Location Markers */}
      <div className="absolute inset-0">
        {locations.map((location, i) => {
          const getBuildingIcon = (type: string, color: string) => {
            const colorClass = color.replace('bg-', 'text-');
            
            switch (type) {
              case "campus":
                return (
                  <svg className={`w-5 h-5 ${colorClass}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
                );
              case "shopping":
                return (
                  <svg className={`w-4 h-4 ${colorClass}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v12z"/>
                  </svg>
                );
              case "airport":
                return (
                  <svg className={`w-5 h-5 ${colorClass}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                );
              case "culture":
                return (
                  <svg className={`w-4 h-4 ${colorClass}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                );
              case "business":
                return (
                  <svg className={`w-4 h-4 ${colorClass}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                );
              case "recreation":
                return (
                  <svg className={`w-4 h-4 ${colorClass}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C8.83 17.34 10.7 13.4 17 11c6.3 2.4 8.17 6.34 11.29 11l1.89-.66C28.1 16.17 26 10 17 8z"/>
                  </svg>
                );
              case "transit":
                return (
                  <svg className={`w-4 h-4 ${colorClass}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                  </svg>
                );
              case "medical":
                return (
                  <svg className={`w-4 h-4 ${colorClass}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
                  </svg>
                );
              default:
                return (
                  <svg className={`w-3 h-3 ${colorClass}`} fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                );
            }
          };

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0, opacity: 0, y: 10 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 1, 0.9],
                y: [10, 0, 0]
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.15,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.3,
                z: 10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className={cn(
                  "absolute inset-0 rounded-full blur-sm opacity-30 group-hover:opacity-60 transition-opacity",
                  location.color
                )} />
                
                {/* Building icon */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/20 shadow-lg group-hover:bg-white/20 transition-all">
                  {getBuildingIcon(location.type, location.color)}
                </div>
                
                {/* Pulsing indicator */}
                <div className={cn(
                  "absolute -bottom-1 -right-1 w-2 h-2 rounded-full animate-pulse",
                  location.color.replace('bg-', 'bg-').replace('-500', '-400')
                )} />
                
                {/* Sequential Label Animation */}
                <motion.div 
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: 5, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    y: [5, 0, 0, -5],
                    scale: [0.8, 1, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    delay: (i % 5) * 1.5 + 1, // Stagger groups of 5 labels
                    repeat: Infinity,
                    repeatDelay: 8,
                    ease: "easeInOut",
                  }}
                >
                  <div className="bg-black/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap font-medium shadow-lg backdrop-blur-sm border border-white/20">
                    {location.name}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/90"></div>
                </motion.div>
                
                {/* Hover Label (still available on hover) */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-blue-600/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap font-medium shadow-lg">
                    {location.name}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-blue-600/90"></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Route Indicators */}
      <div className="absolute inset-0" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [1, 1.5, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
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
