import React from 'react'
import { Github, Linkedin, Instagram } from 'lucide-react'
import Jatin from "./jatin.jpg";


const Footer = () => {
  return (
    <footer id='about' className="bg-black/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <center className='text-2xl md:text-2xl font-bold leading-tight mb-6 text-white'><span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>About Team</span></center>
        {/* Team Section with Photos */}
        <div className="flex justify-center items-center gap-8 mb-12">
          {/* Jatin's Card */}
          <div className="bg-black/30 rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition duration-300 flex flex-col items-center">
            {/* Circular Photo */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-blue-500 mb-4">
              <img 
                src={Jatin} 
                alt="Jatin Agrawal" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Details */}
            <h3 className="text-xl font-bold text-white">Jatin Agrawal</h3>
            <p className="text-gray-400 mt-1 text-center">AI & Data Engineering</p>
            <p className="text-gray-400 text-center">NIT Jaipur</p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-500 hover:bg-gray-700 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-600 hover:bg-gray-700 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-pink-500 hover:bg-gray-700 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Hiyansh's Card */}
          <div className="bg-black/30 rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition duration-300 flex flex-col items-center">
            {/* Circular Photo */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500 mb-4">
              <img 
                src="/api/placeholder/150/150" 
                alt="Hiyansh Chandel" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Details */}
            <h3 className="text-xl font-bold text-white">Hiyansh Chandel</h3>
            <p className="text-gray-400 mt-1 text-center">AI & Data Engineering</p>
            <p className="text-gray-400 text-center">NIT Jaipur</p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-500 hover:bg-gray-700 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-600 hover:bg-gray-700 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-pink-500 hover:bg-gray-700 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="bg-black/30 rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition duration-300 flex flex-col items-center">
            {/* Circular Photo */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500 mb-4">
              <img 
                src="/api/placeholder/150/150" 
                alt="Hiyansh Chandel" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Details */}
            <h3 className="text-xl font-bold text-white">Mohammad Shehzan</h3>
            <p className="text-gray-400 mt-1 text-center">AI & Data Engineering</p>
            <p className="text-gray-400 text-center">NIT Jaipur</p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-500 hover:bg-gray-700 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-600 hover:bg-gray-700 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-pink-500 hover:bg-gray-700 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Full-width VoiceCare Section */}
        <div className="w-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 backdrop-blur-sm border border-gray-800">
        <div className="text-center flex flex-col">
  <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-0">
    VoiceCare
  </span>
  <p className="text-gray-300 md:max-w-2xl text-center mx-auto">
    AI-powered voice assistant designed to improve the quality of life for elderly individuals and dementia patients.
  </p>
</div>

        </div>
        
        {/* Copyright Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-center">&copy; 2025 VoiceCare Team - Hiyansh Chandel , Jatin Agrawal and Mohammad Shehzan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer