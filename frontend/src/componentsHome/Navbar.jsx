import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                VoiceCare
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 gap-8">
                <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                <a href="#how-it-works" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</a>
                <a href="#testimonials" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</a>
                <a href="#about" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">About Team</a>
                <Link to="/voicecare-signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Get Started</Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsOpen(false)}></div>

      <aside className={`fixed top-0 right-0 w-64 h-full bg-black shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50`}>
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <center className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-2xl">VoiceCare</center>
          <button className="text-white" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-4 mt-6 px-6">
          <center className="flex flex-col space-y-4 mt-6 px-6">
          <a href="#features" className="text-gray-300 hover:text-white text-lg transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white text-lg transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white text-lg transition-colors">Testimonials</a>
          </center>
          <a href="#about" className="bg-blue-400 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-lg text-center transition-colors">About Team</a>
          <Link to="/voicecare-signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-lg text-center transition-colors">Get Started</Link>
        </div>

        {/* Footer at Bottom */}
        <div className="absolute bottom-6 w-full text-center px-4 text-gray-400 text-sm">
          © 2025 VoiceCare Team - Hiyansh Chandel, Jatin Agrawal, Mohomad Shehzan. All rights reserved.
        </div>
      </aside>
    </>
  );
};

export default Navbar;
