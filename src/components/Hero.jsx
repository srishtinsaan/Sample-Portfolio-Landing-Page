import React from "react";
import vk from "../assets/vk.jpeg"
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="min-h-screen w-full relative bg-black overflow-hidden">
      {/* Indigo Cosmos Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
      />

      {/* Hero */}
      <section
        id="home"
        className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 md:px-20 relative z-10">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-lg p-10 rounded-3xl shadow-2xl md:w-1/2"
        >
          <p className="text-lg md:text-2xl font-semibold mb-4 text-gray-300">
            Hi, This is
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 text-indigo-400">
            Vedant Kaushik
          </h1>
          <p className="text-gray-400 text-lg max-w-md">
           Founder & CEO, Brandkaro
          </p>
          <p className="text-gray-400 text-md max-w-md">
           India's Growing AI-Powered Personal Branding Company
          </p>
        </motion.div>

        {/* Right: Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-1 md:mt-0 md:ml-12 flex justify-center md:w-1/2"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-indigo-500 overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.5)]">
            <img
              src={vk} 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
