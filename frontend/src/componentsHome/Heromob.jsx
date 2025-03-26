import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Video from "../pages/stable.mp4";

const Heromob = () => {
  return (
    <div className="relative pt-5 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="container relative mx-auto px-4">
        <div className="relative w-full min-h-[400px] md:h-[650px] rounded-2xl overflow-hidden">
          <video 
            src={Video} 
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
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  VoiceCare
                </span>
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Mobile View - Content Below Video */}
        <div className="text-center mt-4">  {/* Changed from mt-6 to mt-4 */}
          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-6">  {/* Reduced mb-8 to mb-6 */}
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
        </div>
      </div>
    </div>
  );
}

export default Heromob;