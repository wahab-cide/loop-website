"use client";
import { Button } from "@/components/button";
import { useToast } from "@/components/toast";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { SavingsCarousel } from "@/components/savings-carousel";
import { IconCalendarEvent, IconPigMoney, IconShieldCheck, IconUsers } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function RiderPage() {
  const { showToast } = useToast();

  const riderBenefits = [
    {
      icon: IconPigMoney,
      title: "Save on Every Trip",
      description: "Split costs with fellow students. Pay less than traditional rideshare apps."
    },
    {
      icon: IconUsers,
      title: "Travel with Friends",
      description: "Meet new people from your campus. Turn boring commutes into social experiences."
    },
    {
      icon: IconShieldCheck,
      title: "Verified Drivers",
      description: "All drivers are verified students from your campus community."
    },
    {
      icon: IconCalendarEvent,
      title: "Book in Advance",
      description: "Reserve your spot for breaks and events up to 2 weeks early."
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12 md:px-8 md:pt-24 md:pb-16 bg-white">
        <div className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-4xl font-semibold tracking-tight text-gray-900 md:text-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-gray-900 drop-shadow-lg"
          >
            Ride. Save. Connect.
          </motion.h1>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 mx-auto mt-4 max-w-xl px-4 text-center text-base/6 text-gray-600 sm:text-base"
        >
          Join fellow students saving money and making friends on every campus ride.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center"
        >
          <Button
            as="button"
            onClick={() => showToast("Coming Soon")}
            variant="gradient"
            className="w-full sm:w-auto px-8 py-3 rounded-xl"
          >
            Start Riding Today
          </Button>
          <Link href="#savings">
            <Button
              as="button"
              variant="secondary"
              className="w-full sm:w-auto px-8 py-3 rounded-xl border-2 border-gray-300 bg-transparent hover:bg-gray-50"
            >
              See How Much You'll Save
            </Button>
          </Link>
        </motion.div>
      </section>

      
      <section className="w-full relative h-[600px] md:h-[700px] lg:h-[800px]">
        <Image
          src="/website photos/students.jpeg"
          alt="Happy poolUp Riders"
          fill
          className="object-cover"
          priority
        />
      </section>

      
      <TestimonialCarousel type="rider" />

      
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            Why Ride with poolUp?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {riderBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            Your Campus Life, Connected
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Never Miss Out Again
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                Whether it's a late-night pharmacy run, weekend adventures, or getting 
                home for the holidays, poolUp connects you with drivers heading your way.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-bold">•</span>
                  <span className="text-white/90">Find rides 24/7, even when campus shuttles stop</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-bold">•</span>
                  <span className="text-white/90">See mutual friends and shared interests with drivers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-bold">•</span>
                  <span className="text-white/90">Track your ride and share trip details with friends</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden order-1 md:order-2"
            >
              <Image
                src="/website photos/happy_passenger3.jpeg"
                alt="Students enjoying a poolUp ride"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/website photos/carpool_with_others.jpg"
                alt="Students carpooling together"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Built for Students, By Students
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                We understand the unique challenges of campus life. Limited budgets, 
                odd hours, and the need for reliable transportation. poolUp is designed 
                specifically for your college experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      
      <div id="savings">
        <SavingsCarousel />
      </div>

      
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            Getting Started is Easy
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Download & Verify",
                description: "Sign up with your .edu email and get verified as a student"
              },
              {
                step: "2",
                title: "Find Your Ride",
                description: "Browse available rides or post a request for where you need to go"
              },
              {
                step: "3",
                title: "Connect & Go",
                description: "Chat with your driver, split costs, and enjoy the journey"
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Join poolUp?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start saving money and making connections on every ride.
          </p>
          <Button
            onClick={() => showToast("Coming Soon")}
            variant="gradient"
            className="px-8 py-3 rounded-xl"
          >
            Download poolUp & Start Riding
          </Button>
        </motion.div>
      </section>
    </div>
  );
}