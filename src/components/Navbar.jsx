import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ openModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  // const navOffset = -100; // Removed, using scroll-margin-top on sections

  const navLinks = ["about", "skills", "projects", "certifications", "contact"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-white shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl p-4 mx-auto">
        <h1 className="mr-16 text-xl font-bold text-gray-800 whitespace-nowrap">
          Devis Aruna Devi D
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => {
                openModal(link);
                setIsOpen(false);
              }}
              className="text-lg text-gray-800 capitalize cursor-pointer hover:text-pink-600 focus:outline-none"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white w-full transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => {
                openModal(link);
                setIsOpen(false);
              }}
              className="text-lg text-gray-800 capitalize cursor-pointer hover:text-pink-600 focus:outline-none"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
