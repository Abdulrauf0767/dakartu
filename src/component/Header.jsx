import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "/images/dakatu.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // ✅ Scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Training", path: "training" },
    { name: "Gallery", path: "gallery" },
    { name: "Join", path: "join" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 shadow-lg backdrop-blur-md"
          : "bg-black/70 backdrop-blur-sm"
      } text-white h-20 flex items-center justify-between px-6 md:px-12`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src={Image}
          alt="Darkatu Logo"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border border-gray-400"
        />
        <h1 className="text-xl md:text-2xl font-semibold tracking-wider">
          Darkatu
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-10">
        {navLinks.map((link) => (
          <ScrollLink
            key={link.name}
            to={link.path}
            smooth={true}
            duration={600}
            offset={-80}
            spy={true}
            activeClass="text-gray-300 border-b border-gray-300"
            className="hover:text-gray-300 cursor-pointer transition-all duration-300 pb-1"
          >
            {link.name}
          </ScrollLink>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <FiX
            size={28}
            className="cursor-pointer transition-all duration-300"
            onClick={toggleMenu}
          />
        ) : (
          <FiMenu
            size={28}
            className="cursor-pointer transition-all duration-300"
            onClick={toggleMenu}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-0 w-full bg-black text-white flex flex-col items-center space-y-6 py-6 z-40 md:hidden border-t border-gray-700 animate-fadeIn">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.path}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="text-gray-300"
              className="hover:text-gray-300 text-lg cursor-pointer transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
