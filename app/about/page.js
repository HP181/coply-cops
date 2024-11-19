"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Users, Server, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen  ">
      <main>
        <section className="relative h-[75vh] flex items-center justify-center text-white overflow-hidden shadow-blue-500 shadow-lg rounded-lg">
          <div className="absolute inset-0 z-0">
            <Image
              src="/ai.webp"
              alt="Cybersecurity Background"
              layout="fill"
              objectFit="cover"
              className="rounded-xl opacity-100 invert-0 dark:opacity-70"
            />
          </div>
          <motion.div
            className="z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Securing Your Digital Future
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              CyberShield: Your Trusted Cybersecurity Partner
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#mission"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center"
              >
                Learn More
                <ChevronDown className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section id="mission" className="py-20">
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
                At CyberShield, we are committed to safeguarding businesses and
                individuals from the ever-evolving landscape of cyber threats.
                Our mission is to provide cutting-edge cybersecurity solutions
                that protect, defend, and empower our clients in the digital
                world.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose CyberShield?
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Shield,
                  title: "Advanced Protection",
                  description:
                    "State-of-the-art security measures to safeguard your digital assets",
                },
                {
                  icon: Lock,
                  title: "Data Encryption",
                  description:
                    "Robust encryption techniques to keep your sensitive information secure",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description:
                    "Highly skilled professionals with years of cybersecurity experience",
                },
                {
                  icon: Server,
                  title: "24/7 Monitoring",
                  description:
                    "Round-the-clock surveillance to detect and respond to threats in real-time",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className=" p-6 rounded-lg shadow-lg"
                  variants={fadeInUp}
                >
                  <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 ">
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
                {
                  name: "Alex Johnson",
                  role: "Chief Security Officer",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Samantha Lee",
                  role: "Threat Intelligence Analyst",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Michael Chen",
                  role: "Penetration Testing Expert",
                  image: "/placeholder.svg?height=300&width=300",
                },
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
                    <h3 className="text-xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="py-2 mb-5">
          <section className="w-full flex justify-center items-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.648732769578!2d-71.07913608998714!3d42.35001193561873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a0c86fc8453%3A0x7d6c3c465b6c40e2!2sCopley%20Square%2C%20Boston%2C%20MA%2002116%2C%20USA!5e0!3m2!1sen!2sca!4v1732005065149!5m2!1sen!2sca"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>
      </main>
    </div>
  );
}
