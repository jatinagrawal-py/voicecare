import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
    {
      quote: "VoiceCare has been a lifesaver for my mother who lives alone. Now I don't worry about her missing her medications.",
      author: "Deepak agrawal",
      role: "Daughter of 78-year-old user"
    },
    {
      quote: "As someone with early-stage dementia, this assistant helps me maintain my independence and gives my family peace of mind.",
      author: "Rajkumari Yadav",
      role: "VoiceCare User, 72"
    },
    {
      quote: "The conversational abilities are impressive. It's like having a companion who's always there to chat with my father.",
      author: "Santosh Goyal",
      role: "Son of 81-year-old user"
    }
  ]

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Families Are Saying</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto typing-effect">
            Hear from families whose lives have been improved with VoiceCare's assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-blue-400 to-purple-500 rounded-xl p-8 shadow-xl "
            >
              <svg className="h-8 w-8 text-blue-500 mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-900 mb-6 italic ">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-black typing-effect">{testimonial.author}</p>
                <p className="text-gray-700 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial