import React from "react";

const ModelDevelopment = () => {
  const data = [
    {
      title: "Discover",
      text: "We find talent across the world.",
      image: "/images/discover.jpg",
    },
    {
      title: "Develop",
      text: "We train models for runway and editorial work.",
      image: "/images/develop.jpg",
    },
    {
      title: "Connect",
      text: "We link talent with top fashion opportunities.",
      image: "/images/Adobe Express - file.png",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold uppercase">
          Model <span className="text-gray-400">Training & Development</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Discover. Develop. Connect. — The foundation of every Darkatu model.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-3xl overflow-hidden border border-gray-300 bg-[#1f1f1f] hover:shadow-2xl hover:shadow-gray-800 transition-all duration-500"
          >
            {/* Image */}
            <div className="w-full h-72">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
              <h3 className="text-3xl font-bold mb-3 text-white transition-all duration-500">
                {item.title}
              </h3>
              <p className="text-gray-300 text-lg transition-all duration-500">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModelDevelopment;
