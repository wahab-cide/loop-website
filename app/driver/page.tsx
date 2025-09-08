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
    <div className="min-h-screen bg-white">
      
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12 md:px-8 md:pt-24 md:pb-16 bg-white">
        <div className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-4xl font-semibold tracking-tight text-gray-900 md:text-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-gray-900 drop-shadow-lg"
          >
            Drive. Earn. Connect.
          </motion.h1>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 mx-auto mt-4 max-w-xl px-4 text-center text-base/6 text-gray-600 sm:text-base"
        >
          Turn your daily commute into income. Share rides with verified students and build meaningful campus connections.
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
            Start Driving Today
          </Button>
          <Link href="#earnings">
            <Button 
              as="button"
              variant="secondary"
              className="w-full sm:w-auto px-8 py-3 rounded-xl"
            >
              See Potential Earnings
            </Button>
          </Link>
        </motion.div>
      </section>

      
      <section className="w-full bg-gray-50 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  Join Our Driver Community
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Become part of a trusted network of student drivers making campus transportation safer and more affordable.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-primary">
                    Flexible Earning
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Drive on your own schedule and earn up to $400+ per month sharing rides with fellow students
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-primary">
                    Verified Community
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    All riders are verified campus members, ensuring safe and trusted connections on every trip
                  </p>
                </div>
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto lg:max-w-none">
                  <Image
                    src="/website photos/happyDriverMain.jpeg"
                    alt="Happy poolUp Driver ready to connect with passengers"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      
      <TestimonialCarousel />

      
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            Why Drive with poolUp?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {driverBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 rounded-2xl p-8 border border-white/20 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-white/80">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                More Than Just a Ride
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Every trip is an opportunity. Whether you're heading home for break, 
                going on weekend adventures, or just running errands, poolUp helps you 
                turn those empty seats into connections and cash.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl font-bold">•</span>
                  <span className="text-gray-700">Post trips in under 30 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl font-bold">•</span>
                  <span className="text-gray-700">Choose riders based on ratings and mutual connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl font-bold">•</span>
                  <span className="text-gray-700">Set your own prices and get paid instantly</span>
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
                alt="poolUp driver with passengers"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      
      <section id="earnings" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
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
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
              >
                <div className="text-sm text-gray-600 mb-2">{item.frequency}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.route}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-purple-600">{item.earning}</span>
                  <span className="text-gray-600">with {item.riders} riders</span>
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
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Average Monthly Earnings: <span className="text-purple-600">$150-$400</span>
            </h3>
            <p className="text-gray-600">
              Based on driving 3-5 times per month with 2-4 riders per trip
            </p>
          </motion.div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-primary">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Driving?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join the poolUp community and turn every drive into an opportunity.
          </p>
          <Button
            onClick={() => showToast("Coming Soon")}
            variant="gradient"
            className="px-8 py-3 rounded-xl"
          >
            Download poolUp & Start Driving
          </Button>
        </motion.div>
      </section>
    </div>
  );
}