"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Crosshair, BadgeCheck } from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ServiceCards = () => {
  return (
    <section id="services" className="mb-16">
      <motion.h2
        className="text-3xl font-bold mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Card 1 */}
        <motion.div variants={cardVariants}>
          <Card className="hover:shadow-2xl transition-transform transform hover:scale-105 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
            <CardHeader className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 20, scale: 1.1 }}
                className="p-2 bg-white rounded-full text-blue-600"
              >
                <ShieldCheck size={28} />
              </motion.div>
              <CardTitle>Vulnerability Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mt-2">
                Identify and assess potential security weaknesses in your systems and applications.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={cardVariants}>
          <Card className="hover:shadow-2xl transition-transform transform hover:scale-105 bg-gradient-to-br from-green-500 to-green-700 text-white">
            <CardHeader className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: -20, scale: 1.1 }}
                className="p-2 bg-white rounded-full text-green-600"
              >
                <Crosshair size={28} />
              </motion.div>
              <CardTitle>Penetration Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mt-2">
                Simulate real-world attacks to uncover vulnerabilities in your network and infrastructure.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={cardVariants}>
          <Card className="hover:shadow-2xl transition-transform transform hover:scale-105 bg-gradient-to-br from-purple-500 to-purple-700 text-white">
            <CardHeader className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 20, scale: 1.1 }}
                className="p-2 bg-white rounded-full text-purple-600"
              >
                <BadgeCheck size={28} />
              </motion.div>
              <CardTitle>SOC 2 Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mt-2">
                Achieve and maintain SOC 2 compliance to build trust with your clients and partners.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ServiceCards
