import React from 'react'
import { motion } from 'framer-motion'
import videoFile from "./budha.mp4";

const features = [
    {
      icon: "🔊",
      title: "Voice-Activated Assistant",
      description: "Intuitive voice commands make technology accessible for seniors with limited tech experience."
    },
    {
      icon: "💊",
      title: "Medication Reminders",
      description: "Never miss important medications with personalized voice reminders and tracking."
    },
    {
      icon: "🗣️",
      title: "Meaningful Conversations",
      description: "Combat loneliness with an AI companion that engages in personalized conversations."
    },
    {
      icon: "🚨",
      title: "Emergency Alerts",
      description: "Quick access to emergency contacts with simple voice commands like 'Call my daughter'."
    }
  ]

const Featuressection = () => {
  return (
    <section id="features" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Designed for Elderly and Dementia Patients</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            VoiceCare combines cutting-edge AI with an intuitive interface to support independence and quality of life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer bg-gradient-to-b from-blue-400 to-purple-500 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-900">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16  relative rounded-2xl overflow-hidden shadow-2xl">
  <div className="aspect-w-16 aspect-h-9 relative">
    <video 
      src={videoFile}
      autoPlay
      loop
      muted
      className="object-cover w-full "
    ></video>
    </div>
  </div>
</div>
    </section>
  )
  
}

export default Featuressection