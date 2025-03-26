import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../componentsHome/Navbar'
import Herosection from '../componentsHome/Herosection'
import Featuressection from '../componentsHome/Featuressection'
import Testimonial from '../componentsHome/Testimonial'
import Ctasection from '../componentsHome/Ctasection'
import Footer from '../componentsHome/Footer'
import Works from '../componentsHome/Works'
import Demovid from '../componentsHome/Demovid'

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Herosection />
      <Works></Works>
      <Demovid></Demovid>
      <Featuressection />
      <Testimonial/>
      <Ctasection />
      <Footer />
    </div>
  )
}

export default Home