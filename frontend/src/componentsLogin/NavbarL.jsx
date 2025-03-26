import React from "react";
import { Link } from "react-router-dom";

const NavbarL = () => {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            VoiceCare
          </span>

          {/* Buttons */}
          <div className="flex items-center md:space-x-4">
            {/* Home (Always Visible) */}
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>

            {/* Get Started (Hidden on Mobile, Visible on Larger Screens) */}
            <Link
              to="/voicecare-signup"
              className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarL;
