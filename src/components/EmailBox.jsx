import React from 'react'
import { motion } from "framer-motion";


function EmailBox() {
  return (
    <div>
      <section
        id="contact"
        className="py-24 px-6 md:px-20  text-center"
      >
        <h2 className="text-4xl font-bold text-indigo-400 mb-10">
          Get in Touch
        </h2>
        <motion.form
          className="max-w-lg mx-auto text-left space-y-6 bg-gray-950 p-8 rounded-2xl shadow-lg border border-gray-800"
        >
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              rows="4"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Let's collaborate..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-900 hover:bg-indigo-800 py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </motion.form>
      </section>
    </div>
  )
}

export default EmailBox
