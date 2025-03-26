import React from 'react'
import { motion } from 'framer-motion'
import { Link , useNavigate} from "react-router-dom";
import videoFile from "./ghumtihui.mp4";

const Herosection = () => {
  return (
    <div className="relative pt-5 pb-32 flex content-center items-center justify-center min-h-screen ">
      <div className="container relative mx-auto px-4">
  <div className="relative w-full h-[650px] rounded-2xl ">
    <video 
      src={videoFile} 
      autoPlay 
      loop 
      muted 
      className="absolute inset-0 w-full h-full object-cover"
    />


    <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50">
      <motion.div 
        initial={{ opacity: 0, y: 250 }}
        animate={{ opacity: 5, y: 0 }}
        transition={{ duration: 3.0 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              VoiceCare</span>
        </h1>
        
        <p className=" text-2xl md:text-2xl text-gray-300 leading-relaxed mb-12">
          An <span className='font-bold '>AI-Powered Conversational Assistant</span> for <br /> <span className='font-bold '>Elderly and Dementia Patients</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/voicecare-signup" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-600 transform hover:-translate-y-3 shadow-lg hover:shadow-xl">
            Get Started
          </Link>
          <Link to="/voicecare-login" className="px-13 py-4 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-3">
            Login
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
</div>

    </div>
  )
  
}

export default Herosection