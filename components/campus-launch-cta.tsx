"use client";
import { motion } from "framer-motion";
import { IconMail } from "@tabler/icons-react";

export function CampusLaunchCTA() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: '#252319' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Want To Launch poolUp on your Campus?
          </h2>
          <motion.a
            href="mailto:ac44@williams.edu?subject=Launch poolUp on My Campus"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <IconMail className="w-5 h-5" />
            Reach Out to Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
