"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Services from "@/lib/ServicesData";

const Page = () => {
  const [clickedIndex, setClickedIndex] = useState(0);

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 md:mb-16">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {[0, 4, 7].map((start, colIndex) => (
            <div key={colIndex} className="space-y-6">
              {Services.slice(start, start + (colIndex === 0 ? 4 : 3)).map((service, index) => {
                const serviceIndex = start + index;

                return (
                  <motion.div
                    key={serviceIndex}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`border-b border-gray-700 pb-4 ${
                      index === (colIndex === 0 ? 3 : 2) ? "border-b-0" : ""
                    }`}
                  >
                    <motion.h3
                      onClick={() => setClickedIndex(serviceIndex)}
                      className={`text-lg font-medium cursor-pointer transition-colors duration-300 ${
                        clickedIndex === serviceIndex ? "text-red-500" : ""
                      }`}
                    >
                      {service.title}
                    </motion.h3>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
