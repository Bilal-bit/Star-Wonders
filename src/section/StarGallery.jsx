import React, { useState } from "react";
import Sirius from "../assets/Sirius.jpg";
import Betelgeuse from "../assets/Betelgeuse.jpg";
import CrabNebula from "../assets/CrabNebula.jpeg";
import PleiadesCluster from "../assets/PleiadesCluster.jpeg";
import AndromedaGalaxy from "../assets/AndromedaGalaxy.jpeg";
import vega from "../assets/vega_star.webp";
import rigel from "../assets/rigel.jpeg";
import polaris from "../assets/polaris.jpeg";

const galleryImages = [
  {
    src: Betelgeuse,
    title: "Betelgeuse",
    description: "A red supergiant star, 700 times larger than the Sun.",
    distance: "~642 light years",
    magnitude: "0.42 (very bright)",
    type: "Red Supergiant",
    funFact: "Known in mythology as part of Orion’s shoulder.",
  },
  {
    src: Sirius,
    title: "Sirius",
    description: "The brightest star in Earth's night sky.",
    distance: "~8.6 light years",
    magnitude: "-1.46 (brightest in night sky)",
    type: "Binary Star System (A-type main-sequence + white dwarf)",
    funFact: "Called the 'Dog Star' in Canis Major constellation.",
  },
  {
    src: CrabNebula,
    title: "Crab Nebula",
    description: "Remnant of a supernova explosion observed in 1054 AD.",
    distance: "~6,500 light years",
    magnitude: "8.4",
    type: "Supernova Remnant + Pulsar",
    funFact: "Contains a rapidly spinning neutron star (pulsar).",
  },
  {
    src: PleiadesCluster,
    title: "Pleiades Cluster",
    description: "A group of young, hot stars also known as the Seven Sisters.",
    distance: "~444 light years",
    magnitude: "1.6 (combined brightness)",
    type: "Open Star Cluster",
    funFact: "Visible to the naked eye, mentioned in many mythologies.",
  },
  {
    src: AndromedaGalaxy,
    title: "Andromeda Galaxy",
    description: "The nearest spiral galaxy to the Milky Way.",
    distance: "~2.5 million light years",
    magnitude: "3.4",
    type: "Spiral Galaxy",
    funFact: "On a collision course with the Milky Way in ~4 billion years.",
  },
  {
    src: vega,
    title: "Vega",
    description: "One of the brightest stars in the Lyra constellation.",
    distance: "~25 light years",
    magnitude: "0.03",
    type: "A-type Main Sequence Star",
    funFact: "Was the northern pole star around 12,000 BC.",
  },
  {
    src: rigel,
    title: "Rigel",
    description: "A blue supergiant star in Orion constellation.",
    distance: "~860 light years",
    magnitude: "0.12",
    type: "Blue Supergiant",
    funFact: "Outshines Betelgeuse despite being farther away.",
  },
  {
    src: polaris,
    title: "Polaris",
    description: "The North Star, guiding navigators for centuries.",
    distance: "~433 light years",
    magnitude: "1.98",
    type: "Yellow Supergiant (part of triple star system)",
    funFact: "Appears almost fixed in the sky due to Earth's axis alignment.",
  },
];

function StarGallery() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16"
      id="star-gallery"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 bartle">
          Star Gallery
        </h2>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.slice(0, visibleCount).map((img, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{img.title}</h3>
                <p className="text-gray-400 text-sm">{img.description}</p>
              </div>
            </div>
          ))}
        </div>


        {visibleCount < galleryImages.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="inline-block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 
               text-white px-8 py-3 rounded-full shadow-lg 
               transition-all duration-500 ease-in-out 
               transform hover:scale-105 
               hover:from-pink-500 hover:via-purple-600 hover:to-blue-600 
               hover:shadow-[0_0_20px_rgba(99,102,241,0.8)] cursor-pointer"
            >
              Load More Stars
            </button>
          </div>
        )}

 
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative bg-gray-900 rounded-lg p-6 max-w-2xl">
              <button
                className="absolute top-2 right-2 text-white text-xl cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 mb-4">{selectedImage.description}</p>

         
              <div className="text-gray-400 text-sm space-y-2">
                <p><span className="font-semibold">Distance:</span> {selectedImage.distance}</p>
                <p><span className="font-semibold">Magnitude:</span> {selectedImage.magnitude}</p>
                <p><span className="font-semibold">Type:</span> {selectedImage.type}</p>
                <p><span className="font-semibold">Fun Fact:</span> {selectedImage.funFact}</p>
              </div>

          
              <div className="mt-4 text-center">
                <a
                  href="https://science.nasa.gov/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 
                     text-white px-6 py-2 rounded-full shadow-lg 
                     transition hover:scale-105 hover:from-pink-500 hover:via-purple-600 hover:to-blue-600"
                >
                  Learn More 🔭
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default StarGallery;