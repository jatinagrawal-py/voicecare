import React from 'react'
import videoFile from "./record.mp4";

const Demovid = () => {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-lg shadow-2xl my-10'>
      <center className="text-2xl font-bold text-white mb-4">Demo Video</center>
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <video 
          src={videoFile} 
          autoPlay 
          loop 
          muted 
          controls
          className='w-full h-auto rounded-xl hover:opacity-95 transition-opacity duration-300'
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <center className="text-black mt-4 text-sm">Video demonstration of our <span className='font-bold text-black'>Setup Form</span></center>
    </div>
  )
}

export default Demovid