"use client";
import { IconArrowRight } from "@/icons/arrow-right";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const FAQs = [
  {
    question: "How does poolUp ensure rider and driver safety?",
    answer:
      "All users verify with their official .edu email address, ensuring a campus-only community of verified students and staff. We provide in-app emergency features, real-time trip tracking, and 24/7 support monitoring all rides.",
  },
  {
    question: "How much does a ride on poolUp cost?",
    answer:
      "There is no fare. A trip costs what it costs to drive — its mileage at the IRS standard rate — and that is divided across everyone in the car, the driver included. So a rider pays a share of a journey, never a price for a service. No surge pricing, and poolUp takes no commission.",
  },
  {
    question: "What happens if more people join my ride?",
    answer:
      "Everyone pays less, including you. The trip's cost is fixed by its distance, so each rider who joins divides that same figure further — and it recalculates automatically for people who already booked. Nobody is charged more for booking first, and the driver never collects more than the trip cost.",
  },
  {
    question: "How do I offer rides on poolUp?",
    answer:
      "Download the app, verify with your .edu email address, add your vehicle details, and post a trip you were already making. You confirm the journey was happening anyway, and set the most you'll accept per seat — poolUp caps that at half the trip's cost so a rider never covers more than their share.",
  },
];
export function FrequentlyAskedQuestions() {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto my-10 md:my-20 py-10 md:py-20 px-4 md:px-8">
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center">
        <h2
          className={cn(
            "inline-block text-3xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
            "bg-clip-text text-transparent"
          )}
        >
          Frequently Asked Questions
        </h2>
      </div>
      <p className="max-w-lg text-sm  text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0">
Read more in our Terms of Service and Community Guidelines.
      </p>
      <div className="mt-10 md:mt-20 max-w-3xl mx-auto divide-y divide-neutral-800">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <motion.div
      className="cursor-pointer py-4 md:py-6"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start justify-between">
        <div className="pr-8 md:pr-12">
          <h3 className="text-base md:text-lg font-medium text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden text-sm md:text-base text-neutral-400 mt-2"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative mr-2 md:mr-4 mt-1 h-5 w-5 md:h-6 md:w-6 flex-shrink-0">
          <motion.div
            animate={{
              scale: isOpen ? [0, 1] : [1, 0, 1],
              rotate: isOpen ? 90 : 0,
              marginLeft: isOpen ? "1.5rem" : "0rem",
            }}
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <IconArrowRight className="absolute inset-0 h-5 w-5 md:h-6 md:w-6 transform text-white-500" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
