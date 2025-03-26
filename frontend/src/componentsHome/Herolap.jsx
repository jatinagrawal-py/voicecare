import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import videoFile from "./ghumtihui.mp4";

const Herolap = () => {
  return (
    <div className="relative pt-5 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="container relative mx-auto px-4">
        <div className="relative w-full min-h-[500px] md:h-[650px] rounded-2xl overflow-hidden">
          <video 
            src={videoFile} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover aspect-video"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50">
            <motion.div 
              initial={{ opacity: 0, y: 250 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  VoiceCare
                </span>
              </h1>
              
              <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-8">
                An <span className="font-bold">AI-Powered Conversational Assistant</span> for <br />
                <span className="font-bold">Elderly and Dementia Patients</span>
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/voicecare-signup" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                  Get Started
                </Link>
                <Link to="/voicecare-login" className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
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

export default Herolap
