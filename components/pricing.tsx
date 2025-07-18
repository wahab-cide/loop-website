"use client";
import React from "react";
import { IconCheck, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { IconGift } from "@/icons/gift";

import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export enum planType {
  basic = "basic",
  lifetime = "lifetime",
  yearly = "yearly",
}

export type Plan = {
  id: string;
  name: string;
  shortDescription: string;
  badge?: string;
  price: number;
  originalPrice?: number;
  period: string;
  features: {
    text: string;
    included: boolean;
  }[];
  buttonText: string;
  subText?: string | React.ReactNode;
  onClick: () => void;
};

const plans: Array<Plan> = [
  {
    id: planType.basic,
    name: "Rider",
    shortDescription: "For Students",
    badge: "",
    price: 0,
    period: "to join",
    features: [
      { text: "Book rides instantly", included: true },
      { text: "Verified student drivers", included: true },
      { text: "In-app messaging", included: true },
      { text: "Split fare with friends", included: true },
      { text: "24/7 support", included: true },
    ],
    buttonText: "Download App",
    subText: "Free to join, pay only for rides",
    onClick: () => {
    },
  },
  {
    id: planType.lifetime,
    name: "Driver ✦",
    shortDescription: "Earn Extra Money",
    price: 0,
    period: "to start",
    features: [
      { text: "Flexible schedule", included: true },
      { text: "Verified rider community", included: true },
      { text: "Weekly payouts", included: true },
      { text: "Route optimization", included: true },
      { text: "Driver support", included: true },
    ],
    buttonText: "Start Driving",
    subText: (
      <div className="flex gap-1 justify-center items-center">
        <IconGift />
        Earn up to $20/hour in your spare time
      </div>
    ),
    onClick: () => {
    },
  },
];

const MobileCard = ({ plan }: { plan: Plan }) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="bg-neutral-900 rounded-xl p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-white font-semibold">{plan.name}</h3>
            <p className="text-sm text-neutral-400">{plan.shortDescription}</p>
          </div>
          <div className="text-right">
            {plan.originalPrice && (
              <div className="text-xs text-neutral-500 line-through">
                ${plan.originalPrice}
              </div>
            )}
            <div className="text-xl font-bold text-white">${plan.price}</div>
            <div className="text-xs text-neutral-400">{plan.period}</div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {feature.included ? (
                <IconCheck className="h-4 w-4 text-neutral-400" />
              ) : (
                <IconX className="h-4 w-4 text-neutral-600" />
              )}
              <span
                className={cn(
                  "text-xs",
                  feature.included ? "text-neutral-300" : "text-neutral-500"
                )}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        <Button
          onClick={plan.onClick}
          variant={
            plan.id === planType.lifetime ? "gradient" : 
            plan.id === planType.basic ? "primary" : "secondary"
          }
          className="w-full py-2 text-sm rounded-lg"
        >
          {plan.buttonText}
        </Button>

        {plan.subText && (
          <p className="text-xs text-neutral-500 text-center mt-2">
            {plan.subText}
          </p>
        )}
      </div>
    </div>
  );
};

const DesktopCard = ({ plan }: { plan: Plan }) => {
  return (
    <div
      className={cn(
        "rounded-3xl bg-neutral-900 p-8 ring-1 ring-neutral-700",
        plan.badge && "ring-1 ring-neutral-700"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <div className="inline-flex items-center font-bold justify-center p-2 rounded-[10px] border border-[rgba(62,62,64,0.77)] bg-[rgba(255,255,255,0)]">
            <h3 className="text-sm text-white">{plan.name}</h3>
          </div>
          <div>
            <p className="text-md text-neutral-400 my-4">
              {plan.shortDescription}
            </p>
          </div>
          <div className="mt-4">
            {plan.originalPrice && (
              <span className="text-neutral-500 line-through mr-2">
                ${plan.originalPrice}
              </span>
            )}
            <span className="text-5xl font-bold text-white">${plan.price}</span>
            <span className="text-neutral-400 ml-2">{plan.period}</span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              {feature.included ? (
                <IconCheck className="h-5 w-5 text-neutral-400" />
              ) : (
                <IconX className="h-5 w-5 text-neutral-600" />
              )}
              <span
                className={cn(
                  "text-sm",
                  feature.included ? "text-neutral-300" : "text-neutral-500"
                )}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <Button
            onClick={plan.onClick}
            variant={
              plan.id === planType.lifetime ? "gradient" : 
              plan.id === planType.basic ? "primary" : "secondary"
            }
            className="w-full py-3 rounded-xl"
          >
            {plan.buttonText}
          </Button>
          {plan.subText && (
            <div className="text-sm text-neutral-500 text-center mt-4">
              {plan.subText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export function PricingList() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return (
      <div className="w-full px-4 py-4">
        <div className="max-w-md mx-auto">
          {plans.map((tier) => (
            <MobileCard plan={tier} key={tier.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {plans.map((tier) => (
          <DesktopCard plan={tier} key={tier.id} />
        ))}
      </div>
    </div>
  );
}

export function Pricing() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      id="pricing"
      className="relative isolate w-full overflow-hidden px-4 py-16 md:py-40 pt-10 md:pt-60 lg:px-4"
    >
      {!isMobile && (
        <div className="pt-32 md:pt-48 mt-[600px]">
          <BackgroundShape />
        </div>
      )}
      <div
        className={cn(
          "z-20",
          isMobile ? "flex flex-col mt-0 relative" : "absolute inset-0 mt-80"
        )}
      >
        <div
          className={cn(
            "relative z-50 mx-auto mb-4",
            isMobile ? "w-full" : "max-w-4xl text-center"
          )}
        >
          <h2
            className={cn(
              "inline-block text-3xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] ",
              "bg-clip-text text-transparent"
            )}
          >
            Simple & Transparent
          </h2>
        </div>
        <p
          className={cn(
            "text-sm text-neutral-400 mt-4 px-4",
            isMobile ? "w-full" : "max-w-lg text-center mx-auto"
          )}
        >
No hidden fees, no surge pricing. Just affordable, reliable transportation that works for students.
        </p>
        <div className="mx-auto mt-12 md:mt-20">
          <PricingList />
        </div>
      </div>
      {!isMobile && (
        <div
          className="absolute inset-0 rounded-[20px]"
          style={{
            background:
              "linear-gradient(179.87deg, rgba(0, 0, 0, 0) 0.11%, rgba(0, 0, 0, 0.8) 69.48%, #000000 92.79%)",
          }}
        />
      )}
    </div>
  );
}

function BackgroundShape() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const size = isMobile ? 600 : 1400;
  const innerSize = isMobile ? 400 : 1000;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(255,255,255,0.1)]"
        style={{
          width: size,
          height: size,
          clipPath: "circle(50% at 50% 50%)",
          background: `
            radial-gradient(
              circle at center,
              rgba(40, 40, 40, 0.8) 0%,
              rgba(20, 20, 20, 0.6) 30%,
              rgba(0, 0, 0, 0.4) 70%
            )
          `,
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: isMobile ? "20px 40px" : "60px 120px",
          }}
        />
      </div>
      <div
        className="absolute bg-black z-2 left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 rounded-full 
          border border-[rgba(255,255,255,0.1)]
          shadow-[0_0_200px_80px_rgba(255,255,255,0.1)]"
        style={{
          width: innerSize,
          height: innerSize,
        }}
      />
    </div>
  );
}
