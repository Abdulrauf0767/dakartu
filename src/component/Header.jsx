import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Menu & Close icons
import Image from "/images/dakatu.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Training", path: "/training" },
    { name: "Gallery", path: "/gallery" },
    { name: "Join", path: "/join" },
  ];

  return (
    <header className="w-full bg-black text-white h-20 flex items-center justify-between px-6 relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={Image}
          alt="Darkatu Logo"
          className="w-14 h-14 rounded-full object-cover border border-white"
        />
        <h1 className="text-xl font-semibold tracking-wider">Darkatu</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:text-gray-300 transition-all duration-300"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <FiX
            size={28}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <FiMenu
            size={28}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>

      {/* Mobile Menu (Slide Down) */}
      {menuOpen && (
        <div className="absolute top-20 right-0 w-full bg-black text-white flex flex-col items-center space-y-6 py-6 z-50 md:hidden border-t border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-gray-300 text-lg transition-all duration-300"
              onClick={() => setMenuOpen(false)} // close menu after click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
