"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Server,
  Globe,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [email, setEmail] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const linkHoverVariants = {
    hover: { scale: 1.1, color: "#3B82F6" },
  };

  return (
    <footer className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
              <motion.span variants={iconVariants}>
                <Shield className="mr-2 h-6 w-6 text-blue-500" />
              </motion.span>
              CyberGuard
            </h3>
            <p className="text-gray-400 dark:text-gray-300">
              Protecting your digital world with cutting-edge cybersecurity
              solutions.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Services", "About Us", "Contact"].map((link) => (
                <motion.li key={link} whileHover="hover">
                  <span className="hover:text-blue-500  text-gray-400 dark:text-gray-300 cursor-pointer transition-colors duration-200">
                    {link}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                { icon: Lock, text: "Penetration Testing" },
                { icon: Server, text: "Network Security" },
                { icon: Globe, text: "Web Application Security" },
              ].map(({ icon: Icon, text }) => (
                <motion.li
                  key={text}
                  className="flex items-center space-x-2"
                  whileHover="hover"
                >
                  <Icon className="h-4 w-4 text-blue-500" />
                  <span className="hover:text-blue-500 text-gray-400 dark:text-gray-300 cursor-pointer transition-colors duration-200">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Stay Updated
            </h4>
            <p className="text-gray-400 dark:text-gray-300 mb-4">
              Subscribe to our newsletter for the latest cybersecurity insights.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-white border-gray-700 focus:border-blue-500 dark:bg-gray-900 dark:text-white"
                required
              />
              <Button
                type="submit"
                variant="outline"
                size="icon"
                onClick={() => setEmail("")}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm text-center mb-4 sm:mb-0"
          >
            © 2024 CyberGuard. All rights reserved.
          </motion.p>
          <motion.div variants={itemVariants} className="flex space-x-4">
            {[Twitter, Facebook, Linkedin, Instagram].map((Icon, index) => (
              <motion.span
                key={index}
                className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-200"
                whileHover="hover"
                variants={linkHoverVariants}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">Social Media Link</span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
