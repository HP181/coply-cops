'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Users, Server, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function AboutUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">CyberShield</div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Services</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Cybersecurity Background"
              layout="fill"
              objectFit="cover"
              className="opacity-30"
            />
          </div>
          <motion.div
            className="z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Securing Your Digital Future</h1>
            <p className="text-xl md:text-2xl mb-8">CyberShield: Your Trusted Cybersecurity Partner</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#mission" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center">
                Learn More
                <ChevronDown className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section id="mission" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                At CyberShield, we are committed to safeguarding businesses and individuals from the ever-evolving landscape of cyber threats. Our mission is to provide cutting-edge cybersecurity solutions that protect, defend, and empower our clients in the digital world.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose CyberShield?</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { icon: Shield, title: "Advanced Protection", description: "State-of-the-art security measures to safeguard your digital assets" },
                { icon: Lock, title: "Data Encryption", description: "Robust encryption techniques to keep your sensitive information secure" },
                { icon: Users, title: "Expert Team", description: "Highly skilled professionals with years of cybersecurity experience" },
                { icon: Server, title: "24/7 Monitoring", description: "Round-the-clock surveillance to detect and respond to threats in real-time" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                  variants={fadeInUp}
                >
                  <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { name: "Alex Johnson", role: "Chief Security Officer", image: "/placeholder.svg?height=300&width=300" },
                { name: "Samantha Lee", role: "Threat Intelligence Analyst", image: "/placeholder.svg?height=300&width=300" },
                { name: "Michael Chen", role: "Penetration Testing Expert", image: "/placeholder.svg?height=300&width=300" }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                  variants={fadeInUp}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 CyberShield. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}