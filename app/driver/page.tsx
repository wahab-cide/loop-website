"use client";
import { Button } from "@/components/button";
import { useToast } from "@/components/toast";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { IconCalendar, IconCash, IconShield, IconUsers } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function DriverPage() {
  const { showToast } = useToast();

  const driverBenefits = [
    {
      icon: IconCash,
      title: "Offset Your Costs",
      description: "Turn your daily commute into income. Cover gas, parking, and more."
    },
    {
      icon: IconUsers,
      title: "Build Connections",
      description: "Meet fellow students and create lasting friendships on every ride."
    },
    {
      icon: IconCalendar,
      title: "Flexible Schedule",
      description: "Post rides in seconds. Drive when you want, where you want."
    },
    {
      icon: IconShield,
      title: "Verified Community",
      description: "All riders are verified students from your campus network."
    }
  ];

  const earnings = [
    { route: "Campus → Boston", riders: 3, earning: "$75", frequency: "2x/month" },
    { route: "Campus → NYC", riders: 4, earning: "$160", frequency: "Monthly" },
    { route: "Grocery Runs", riders: 2, earning: "$20", frequency: "Weekly" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/website photos/happyDriverMain.jpeg"
            alt="Happy Loop Platform Driver"
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
            Drive. Earn. Connect.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            You are going there anyway. Why not turn your empty seats into extra cash and meaningful connections along the way?

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
              Start Driving Today
            </Button>
            <Link href="#earnings">
              <Button variant="secondary">
                See Potential Earnings
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <TestimonialCarousel />

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
            Why Drive with Loop Platform?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {driverBenefits.map((benefit, index) => (
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                More Than Just a Ride
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Every trip is an opportunity. Whether you're heading home for break, 
                going on weekend adventures, or just running errands, Loop Platform helps you 
                turn those empty seats into connections and cash.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl font-bold">•</span>
                  <span>Post trips in under 30 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl font-bold">•</span>
                  <span>Choose riders based on ratings and mutual connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl font-bold">•</span>
                  <span>Set your own prices and get paid instantly</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/website photos/driver2.jpg"
                alt="Loop Platform driver with passengers"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section id="earnings" className="py-20 px-6 bg-green-950/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Your Earning Potential
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {earnings.map((item, index) => (
              <motion.div
                key={item.route}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black rounded-xl p-6 border border-green-900/30"
              >
                <div className="text-sm text-gray-400 mb-2">{item.frequency}</div>
                <h3 className="text-xl font-semibold mb-2">{item.route}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-green-500">{item.earning}</span>
                  <span className="text-gray-400">with {item.riders} riders</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Average Monthly Earnings: <span className="text-green-500">$150-$400</span>
            </h3>
            <p className="text-gray-400">
              Based on driving 3-5 times per month with 2-4 riders per trip
            </p>
          </motion.div>
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
            Ready to Start Driving?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the Loop Platform community and turn every drive into an opportunity.
          </p>
          <Button
            onClick={() => showToast("Coming Soon")}
            variant="primary"
            className="bg-green-600 hover:bg-green-700"
          >
            Download Loop Platform & Start Driving
          </Button>
        </motion.div>
      </section>
    </div>
  );
}