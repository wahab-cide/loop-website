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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/website photos/students.jpeg"
            alt="Happy Loop Platform Riders"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Ride. Save. Connect.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Join felllow students saving money and making friends on every ride. 
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => showToast("Coming Soon")}
              variant="primary"
              className="bg-green-600 hover:bg-green-700"
            >
              Start Riding Today
            </Button>
            <Link href="#savings">
              <Button variant="secondary">
                See How Much You'll Save
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <TestimonialCarousel type="rider" />

      {/* Benefits Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Why Ride with Loop Platform?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {riderBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Story Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
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
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Never Miss Out Again
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Whether it's a late-night pharmacy run, weekend adventures, or getting 
                home for the holidays, Loop Platform connects you with drivers heading your way.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl font-bold">•</span>
                  <span>Find rides 24/7, even when campus shuttles stop</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl font-bold">•</span>
                  <span>See mutual friends and shared interests with drivers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl font-bold">•</span>
                  <span>Track your ride and share trip details with friends</span>
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
                alt="Students enjoying a Loop Platform ride"
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
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Built for Students, By Students
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                We understand the unique challenges of campus life. Limited budgets, 
                odd hours, and the need for reliable transportation. Loop Platform is designed 
                specifically for your college experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <div id="savings">
        <SavingsCarousel />
      </div>

      {/* How It Works */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
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
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join the Loop Platform?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start saving money and making connections on every ride.
          </p>
          <Button
            onClick={() => showToast("Coming Soon")}
            variant="primary"
            className="bg-green-600 hover:bg-green-700"
          >
            Download Loop Platform & Start Riding
          </Button>
        </motion.div>
      </section>
    </div>
  );
}