import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-white bartle">
              Star Wonders
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Exploring the universe, one star at a time.
            </p>
          </div>

   
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <a href="#home" className="li-underline transition">
              Home
            </a>
            <a href="#star-types" className="li-underline transition">
              Types
            </a>
            <a href="#star-gallery" className="li-underline transition">
              Gallery
            </a>
            <a href="#about" className="li-underline transition">
              About
            </a>
            <a href="#contact" className="li-underline transition">
              Contact
            </a>
          </div>


        <div className="flex justify-center md:justify-end gap-4">
           
            <a
              href="https://www.facebook.com/BilalAsif012/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:scale-110 transition"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

           
            <a
              href="https://www.linkedin.com/in/bilal-asif-941720206/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:scale-110 transition"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 
                2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

    
            <a
              href="https://github.com/Bilal-bit"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:scale-110 transition"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3
                m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
                c3.14-.35 6.44-1.54 6.44-7
                A5.44 5.44 0 0 0 20 4.77
                A5.07 5.07 0 0 0 19.91 1
                S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0
                C6.27.65 5.09 1 5.09 1
                A5.07 5.07 0 0 0 5 4.77
                a5.44 5.44 0 0 0-1.5 3.78
                c0 5.42 3.3 6.61 6.44 7
                A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>

        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Star Wonders. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
