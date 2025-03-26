import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Ctasection = () => {
  return (
    <section id="contact" className="py-20 bg-black/50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-700"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to provide better care?</h2>
            <p className="text-lg text-blue-200">
              Start your journey today and experience how VoiceCare can transform elderly care.
            </p>
          </div>
          <div className="md:w-1/3">
            <Link to="/voicecare-signup" className="block text-center bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Start Your Journey
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default Ctasection