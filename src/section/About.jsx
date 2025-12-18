import React from "react";
import GalaxyImg from "../assets/galaxy.png";

function AboutSection() {
  return (
    <section
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20"
      id="about"
    >
      <h2 className="text-2xl md:text-4xl font-extrabold mb-10 bartle text-white text-center">
        About Star Wonders
      </h2>
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img
            src={GalaxyImg}
            alt="Galaxy illustration"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Welcome to{" "}
            <span className="text-blue-300 font-semibold">Star Wonders</span>,
            your gateway to the cosmos. Our mission is to make astronomy
            accessible, engaging, and inspiring for everyone. From the mysteries
            of black holes to the beauty of nebulae, we bring the universe
            closer to you.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            This site showcases unique stars, galaxies, and cosmic phenomena
            through interactive sections, HD galleries, and educational content.
            Whether you're a student, a space enthusiast, or just curious about
            the night sky, you'll find something here to spark your imagination.
          </p>

          <div className="mt-6">
            <a
              href="#star-gallery"
              className="inline-block 
               bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 
               text-white px-8 py-3 rounded-full 
               shadow-lg 
               transition-all duration-500 ease-in-out 
               transform hover:scale-105 
               hover:from-pink-500 hover:via-purple-600 hover:to-blue-600 
               hover:shadow-[0_0_20px_rgba(99,102,241,0.8)]"
            >
              Explore the Stars ✨
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
