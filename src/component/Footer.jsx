import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 pl-6 pr-6 md:pl-20 md:pr-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 text-center md:text-left">
        
        {/* Left - Brand Info */}
        <div className="md:w-1/3 w-full flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold uppercase tracking-widest">Darkatu</h2>
          <p className="text-gray-400 mt-3 max-w-xs">
            Empowering confidence, creativity, and global fashion talent.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="md:w-1/3 w-full flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-4 uppercase">Quick Links</h3>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/training" className="hover:text-white transition">Training</Link>
            <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
            <Link to="/join" className="hover:text-white transition">Join</Link>
          </ul>
        </div>

        {/* Right - Social Media */}
        <div className="md:w-1/3 w-full flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-4 uppercase">Follow Us</h3>
          <div className="flex items-center justify-center md:justify-end gap-5">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-white hover:text-black transition-all duration-500"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-white hover:text-black transition-all duration-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-white hover:text-black transition-all duration-500"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-800 my-8"></div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Darkatu. All rights reserved.
        <br className="md:hidden" /> Designed with 🖤 for Fashion & Creativity.
      </div>
    </footer>
  );
};

export default Footer;
