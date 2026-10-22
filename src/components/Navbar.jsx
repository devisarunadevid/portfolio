import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ openModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navLinks = [
    "about",
    "education",
    "skills",
    "projects",
    "certifications",
    "contact",
  ];

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
      <div className="flex items-center justify-between gap-4 p-4 mx-auto max-w-6xl">
        <h1 className="text-lg font-bold text-gray-800 whitespace-nowrap md:text-xl">
          Devis Aruna Devi D
        </h1>

        <div className="hidden lg:flex flex-wrap items-center justify-end gap-x-5">
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

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-white w-full transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "py-4 max-h-screen opacity-100"
            : "overflow-hidden max-h-0 opacity-0"
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
