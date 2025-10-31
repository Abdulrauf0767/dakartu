import React from "react";
import { Link } from "react-router-dom";


const Join = () => {
  return (
    <section id="join"
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/images/man.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-6">
          Ready to walk the runway with us?
        </h2>

        <Link
          to="/apply"
          className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full border-2 border-white hover:bg-black hover:text-white transition-all duration-500"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default Join;
