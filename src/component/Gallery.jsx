import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "/images/gallery-img-01.jpg",
      caption: "Editorial",
    },
    {
      src: "/images/gallery-img-02.jpg",
      caption: "Runway",
    },
    {
      src: "/images/gallery-img-03.jpg",
      caption: "Street Fashion",
    },
    {
      src: "/images/gallery-img-04.jpg",
      caption: "Editorial",
    },
    {
      src: "/images/gallery-img-05.jpg",
      caption: "Runway",
    },
    {
      src: "/images/gallery-img-06.jpg",
      caption: "Street Fashion",
    },
    {
      src: "/images/gallery-img.jpg",
      caption: "Editorial",
    },
    {
      src: "/images/lady-02.png",
      caption: "Runway",
    },
    {
      src: "/images/lady-01.png",
      caption: "Street Fashion",
    },
  ];

  return (
    <section className="w-full bg-[#111] text-white py-20 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold uppercase">
          Gallery <span className="text-gray-400">& Portfolio</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Capturing the art of fashion — from runway to the streets.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group cursor-pointer"
          >
            {/* Image */}
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-80 object-cover filter grayscale group-hover:scale-110 transition-all duration-700 ease-in-out"
            />

            {/* Overlay Caption */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <p className="text-white text-xl font-semibold tracking-widest uppercase">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
