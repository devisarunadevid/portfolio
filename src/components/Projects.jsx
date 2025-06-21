import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Coffee Bite",
      description:
        "A café management web application for customer interaction and registration, featuring a clean design and user-friendly interface.",
      images: [
        "/coffee-shop/home.png",
        "/coffee-shop/menu.png",
        "/coffee-shop/ordering.png",
        "/coffee-shop/contact.png",
      ],
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      features: [
        "Clean and responsive UI with consistent theme and user-friendly navigation",
        "Google Maps integration for location display",
        "Online registering system",
        "Contact form with validation",
      ],
      githubLink: "https://github.com/devisarunadevid/coffee-bite",
      liveLink: "https://coffee-bite.infinityfreeapp.com/",
      imageAlt: "Coffee Shop Website Preview",
    },
    {
      title: "GPA Calculator",
      description:
        "A comprehensive GPA calculator with user authentication and instant PDF export functionality.",
      images: [
        "/gpa-calculator/dashboard.png",
        "/gpa-calculator/calculation.png",
        "/gpa-calculator/pdf-export.png",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      features: [
        "User authentication system",
        "GPA calculation for multiple semesters",
        "PDF export functionality",
        "Data persistence with MongoDB",
      ],
      githubLink: "https://github.com/devisarunadevid/gpa-cgpa-calculator",
      liveLink: "https://gpa-cgpa-calculator-orcin.vercel.app",
      imageAlt: "GPA Calculator Preview",
    },
  ];

  // Initialize state for each project
  const [currentImageIndices, setCurrentImageIndices] = useState(
    projects.reduce((acc, _, index) => {
      acc[index] = 0;
      return acc;
    }, {})
  );

  const nextImage = (projectIndex) => {
    setCurrentImageIndices((prev) => {
      const newIndices = { ...prev };
      newIndices[projectIndex] =
        (prev[projectIndex] + 1) % projects[projectIndex].images.length;
      return newIndices;
    });
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndices((prev) => {
      const newIndices = { ...prev };
      newIndices[projectIndex] =
        (prev[projectIndex] - 1 + projects[projectIndex].images.length) %
        projects[projectIndex].images.length;
      return newIndices;
    });
  };

  return (
    <section
      id="projects"
      className="px-6 py-12 scroll-mt-40"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-semibold text-center text-gray-800 md:text-4xl">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image Slider */}
              <div className="overflow-hidden relative h-48 group">
                <img
                  src={project.images[currentImageIndices[projectIndex]]}
                  alt={`${project.imageAlt} - Image ${
                    currentImageIndices[projectIndex] + 1
                  }`}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.src = "/placeholder-project.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/60"></div>

                {/* Navigation Buttons */}
                <button
                  onClick={() => prevImage(projectIndex)}
                  className="absolute left-2 top-1/2 z-10 p-2 text-pink-500 rounded-full transition-all duration-300 -translate-y-1/2 bg-white/90 hover:bg-white"
                  aria-label="Previous image"
                >
                  <FaChevronLeft size={20} />
                </button>
                <button
                  onClick={() => nextImage(projectIndex)}
                  className="absolute right-2 top-1/2 z-10 p-2 text-pink-500 rounded-full transition-all duration-300 -translate-y-1/2 bg-white/90 hover:bg-white"
                  aria-label="Next image"
                >
                  <FaChevronRight size={20} />
                </button>

                {/* Image Counter */}
                <div className="absolute right-2 bottom-2 z-10 px-3 py-1 text-sm text-white rounded-full bg-black/70">
                  {currentImageIndices[projectIndex] + 1} /{" "}
                  {project.images.length}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-700">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="mb-2 text-lg font-semibold text-gray-800">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm text-pink-700 bg-pink-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="mb-2 text-lg font-semibold text-gray-800">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-pink-600">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 space-x-2 text-purple-800 bg-white rounded-lg transition-colors duration-300 hover:bg-pink-100"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 space-x-2 text-purple-800 bg-white rounded-lg transition-colors duration-300 hover:bg-pink-100"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="p-6 mt-12 text-center rounded-lg shadow-lg">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">
            Want to see more?
          </h3>
          <p className="mb-6 text-gray-700">
            Check out my GitHub profile for more projects and contributions.
          </p>
          <a
            href="https://github.com/devisarunadevid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 space-x-2 text-lg font-semibold text-purple-800 bg-white rounded-lg transition-all duration-300 hover:bg-pink-100"
          >
            <FaGithub />
            <span>View GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}
