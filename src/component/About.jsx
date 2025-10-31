import React from "react";
import image from '/images/lady-about.jpg'

const About = () => {
  return (
    <section id="about"  className="w-full bg-white text-black py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* ===== Left Side: Image ===== */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex items-center justify-center">
        <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-3xl overflow-hidden border-4 border-black shadow-2xl hover:scale-105 transition-transform duration-500">
          <img
            src={image}
            alt="Fashion Model"
            className="w-full h-full object-cover"
          />
          {/* Decorative circle */}
          <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-black"></div>
        </div>
      </div>

      {/* ===== Right Side: Text ===== */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-5">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
          About <span className="text-gray-600">Darkatu</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
          Darkatu is a fashion modeling brand focused on <strong>creativity</strong>, 
          <strong> confidence</strong>, and <strong>style</strong>.  
          We aim to discover and develop diverse models, guiding them to excel in 
          runway and editorial performance.  
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
          Our mission is to connect emerging talent with top fashion opportunities 
          worldwide while maintaining professionalism and a strong visual identity.  
          We believe every individual has a unique spark — and we help them shine on stage.
        </p>
        <button className="mt-4 px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
