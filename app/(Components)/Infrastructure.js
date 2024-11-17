"use client"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Infrastructure  = () => {
  return (
    <section className="py-16 px-6 md:py-24">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Infrastructure Penetration Testing
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold text-[#ff4d4f]">
              Find weaknesses others overlook
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
              An infrastructure penetration testing assessment uncovers
              vulnerabilities residing in your IT and network systems and
              provides a tailored approach to each environment.
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-[#ff4d4f] mb-4">
              Infrastructure Penetration Testing can help you:
            </h2>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-3">
              <li>Reduce the risk of a breach within system infrastructure</li>
              <li>Identify gaps in processes and procedures</li>
              <li>Strengthen your cybersecurity posture</li>
              <li>
                Protect your data from ransomware, trojans, and phishing attacks
              </li>
              <li>Highlight how a vulnerability can lead to compromise</li>
              <li>
                Explain to key stakeholders or board members where
                vulnerabilities lie and what to do about it
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Button */}
        <motion.div
          className="mt-12 text-center md:text-left"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="bg-[#ff4d4f] text-neutral-100  rounded-md text-lg font-medium hover:bg-[#e04444] transition duration-300" size="lg">
            Explore Service
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Infrastructure;
