"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Building, ShieldCheck } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Industries = () => {
  return (
    <section id="industries" className="mb-16">
      <motion.h2
        className="text-3xl font-bold mb-8 text-indigo-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Industries We Serve
      </motion.h2>
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {/* Card 1 */}
        <motion.div variants={cardVariants}>
          <Card className="hover:shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-br from-teal-400 to-cyan-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ rotate: 20, scale: 1.1 }}
                  className="p-2 bg-white rounded-full text-teal-600"
                >
                  <Building className="h-6 w-6" />
                </motion.div>
                <span>Financial Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mt-2">
                Protect sensitive financial data and comply with industry regulations.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={cardVariants}>
          <Card className="hover:shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ rotate: -20, scale: 1.1 }}
                  className="p-2 bg-white rounded-full text-amber-600"
                >
                  <Briefcase className="h-6 w-6" />
                </motion.div>
                <span>Healthcare</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mt-2">
                Safeguard patient information and ensure HIPAA compliance.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={cardVariants}>
          <Card className="hover:shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-br from-pink-500 to-rose-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ rotate: 20, scale: 1.1 }}
                  className="p-2 bg-white rounded-full text-pink-600"
                >
                  <ShieldCheck className="h-6 w-6" />
                </motion.div>
                <span>Government</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mt-2">
                Meet strict security requirements for government agencies and contractors.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Industries
