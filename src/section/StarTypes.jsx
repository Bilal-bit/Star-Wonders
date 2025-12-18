import React from "react";
import BlackHole from '../assets/blackhole.webp'
import mainsq from '../assets/mainSqStar.jpeg'
import redstar from '../assets/redStar.webp'
import whitedwarf from '../assets/whitestar.webp'
import neutron from '../assets/neutron.jpeg'
import brownstar from '../assets/browndwarf.webp'
const starsData = [
  {
    name: "Main Sequence Stars",
    description: "Most common stars like our Sun, burning hydrogen in their cores.",
    image: mainsq,
  },
  {
    name: "Red Giants & Supergiants",
    description: "Massive aging stars that expand and glow red as they near end of life.",
    image: redstar,
  },
  {
    name: "White Dwarfs",
    description: "Dense remnants of small stars, extremely compact and faint.",
    image: whitedwarf,
  },
  {
    name: "Neutron Stars",
    description: "Ultra-dense collapsed cores, spinning hundreds of times per second.",
    image: neutron,
  },
  {
    name: "Black Holes",
    description: "Final stage of massive stars, with gravity so strong even light cannot escape.",
    image: BlackHole,
  },
  {
    name: "Brown Dwarfs",
    description: "Failed stars between planets and stars, unable to sustain hydrogen fusion.",
    image: brownstar,
  },
];

function StarTypes() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16" id="star-types">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 bartle">
          Types of Stars
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {starsData.map((star, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={star.image}
                alt={star.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{star.name}</h3>
                <p className="text-gray-300">{star.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StarTypes;