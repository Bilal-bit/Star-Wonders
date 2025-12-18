import React, { useState, useEffect } from "react";
import StarIcon from "../assets/starlogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["Home", "Types of Stars", "Star Gallery", "About", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center p-5 transition-colors duration-300 ${
        scrolled ? "bg-black bg-opacity-70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
 
      <img src={StarIcon} alt="logo" className="w-15 cursor-pointer" />


      <ul className="hidden md:flex items-center justify-center mx-auto">
        {links.map((link, index) => (
          <li key={index} className="li-underline cursor-pointer ms-3">
            {link}
          </li>
        ))}
      </ul>


      <button
        className="md:hidden text-white ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>


      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black bg-opacity-80 flex flex-col items-center gap-4 py-6 md:hidden">
          {links.map((link, index) => (
            <li
              key={index}
              className="li-underline cursor-pointer text-white"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;