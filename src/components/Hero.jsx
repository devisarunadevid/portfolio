import React from "react";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";
import Bubble from "./Bubble";

export default function Hero({ openModal }) {
  const bubbles = [
    { size: "60px", delay: "0s", duration: 8, color: "#B68BC2", opacity: 0.2 },
    {
      size: "120px",
      delay: "1.5s",
      duration: 10,
      color: "#F3A7D6",
      opacity: 0.15,
    },
    { size: "90px", delay: "3s", duration: 7, color: "#B68BC2", opacity: 0.25 },
    {
      size: "180px",
      delay: "4.5s",
      duration: 12,
      color: "#F3A7D6",
      opacity: 0.1,
    },
    { size: "70px", delay: "6s", duration: 9, color: "#B68BC2", opacity: 0.3 },
    {
      size: "100px",
      delay: "7.5s",
      duration: 11,
      color: "#F3A7D6",
      opacity: 0.2,
    },
    {
      size: "140px",
      delay: "9s",
      duration: 8,
      color: "#B68BC2",
      opacity: 0.18,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/devisarunadevid",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/devis-aruna-devi-d",
      label: "LinkedIn",
    },
    {
      icon: <SiLeetcode className="text-2xl" />,
      url: "https://leetcode.com/u/devisarunadevid/",
      label: "LeetCode",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      url: "mailto:devisarunadevidd@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="flex overflow-hidden relative flex-col justify-center items-center min-h-screen scroll-mt-40"
      data-aos="fade-up"
    >
      {/* Animated Bubbles */}
      {bubbles.map((bubble, index) => (
        <Bubble key={index} {...bubble} />
      ))}

      <div className="relative z-10 px-4 text-center">
        {/* Greeting */}
        <p className="mb-4 text-lg text-purple-700 md:text-xl animate-fade-in">
          Hi, I'm
        </p>

        {/* Name */}
        <h1 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 md:text-6xl">
          Devis Aruna Devi D
        </h1>

        {/* Title */}
        <h2 className="mb-8 text-xl md:text-2xl">
          <ReactTyped
            strings={[
              "Full-stack Developer",
              "MERN Stack Developer",
              "UI/UX Enthusiast",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="text-purple-700"
          />
        </h2>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
          A passionate developer focused on creating beautiful and functional
          web applications. Currently pursuing B.E in Computer Science and
          exploring new technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => openModal("projects")}
            className="px-8 py-3 font-semibold text-purple-800 bg-white rounded-lg transition-all duration-300 transform cursor-pointer hover:bg-pink-100 hover:scale-105"
          >
            View Projects
          </button>
          <button
            onClick={() => openModal("contact")}
            className="px-8 py-3 font-semibold text-purple-800 bg-white rounded-lg transition-all duration-300 transform cursor-pointer hover:bg-pink-100 hover:scale-105"
          >
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transition-colors duration-300 transform hover:text-pink-600 hover:scale-110"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
