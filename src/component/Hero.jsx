import React from "react";
import image from "/images/lady-01.png";
import image01 from "/images/lady-02.png";
import image02 from "/images/lady.png";

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 relative overflow-hidden">
      {/* ===== Left Side Text ===== */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 z-10">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide leading-tight">
          Discover <span className="text-gray-400">Confidence</span>,  
          <br /> Define <span className="text-gray-400">Style</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-md leading-relaxed">
          Darkatu is a fashion modeling brand focused on creativity, confidence,
          and style. We discover and develop diverse models, train them in
          posing and runway performance, and connect them with top fashion
          opportunities.
        </p>
        <button className="mt-4 px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
          Join as a Model
        </button>
      </div>

      {/* ===== Right Side Image Layout ===== */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 relative flex items-center justify-center">
        {/* Image 1 */}
        <div className="absolute -top-8 left-4 md:left-10 w-40 h-40 md:w-56 md:h-56 border-4 border-white rounded-full overflow-hidden transform rotate-[-10deg] hover:scale-105 transition-transform duration-300">
          <img
            src={image}
            alt="Model 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="absolute top-32 right-0 md:right-10 w-44 h-44 md:w-60 md:h-60 border-4 border-gray-500 rounded-3xl overflow-hidden transform rotate-[8deg] hover:scale-105 transition-transform duration-300">
          <img
            src={image01}
            alt="Model 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="absolute bottom-0 left-16 md:left-24 w-52 h-52 md:w-72 md:h-72 border-4 border-white rounded-t-[3rem] overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src={image02}
            alt="Model 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Background Circle Accent */}
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default Hero;
