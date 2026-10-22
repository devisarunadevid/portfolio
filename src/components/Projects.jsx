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
      title: "Librario — Library Management System",
      description:
        "A full-stack Library Management System built during the Infosys Springboard Virtual Internship 6.0 to modernize cataloging, membership, lending, and fine management. Role-based access for Admins, Librarians, and Members, with automated notifications — later extended with an AI chatbot for member support.",
      images: [
        "/librario/Loginpage.png",
        "/librario/Bookmanagement.png",
        "/librario/Chatbot.png",
      ],
      technologies: [
        "React.js",
        "Java",
        "Spring Boot",
        "Spring Security",
        "MySQL",
        "Gemini API",
        "Razorpay",
      ],
      features: [
        "Role-based access for Admin, Librarian, and Member (Spring Security + BCrypt)",
        "Book catalog with CRUD, search, and real-time inventory tracking",
        "Membership plans with borrowing limits, issue/return/renew, and automated fine calculation",
        "Email notifications for due dates, overdue alerts, and reservation updates",
        "Online fine payment using Razorpay",
        "AI-powered chatbot using Gemini API",
      ],
      githubLink:
        "https://github.com/devisarunadevid/library-management-system-with-real-time-inventory-and-lending",
      liveLink: "https://library-management-system-with-real.vercel.app/",
      imageAlt: "Librario Library Management System",
    },
    {
      title: "VCET LeetCode Status Tracker",
      description:
        "A web application designed to help VCET students track their LeetCode problem-solving progress and monitor their coding practice.",
      images: [
        "/vcet-leetcode/dashboard.png",
        "/vcet-leetcode/students.png",
        "/vcet-leetcode/progress.png",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Track students' LeetCode problem-solving progress",
        "Monitor coding practice and solved problems",
        "Organize student coding progress in one place",
        "View progress through a centralized dashboard",
      ],
      githubLink: "https://github.com/devisarunadevid/leetcode-status-tracker",
      liveLink: "https://leet-code-status-tracker.vercel.app/",
      imageAlt: "VCET LeetCode Status Tracker Dashboard",
    },
    {
      title: "GPA Calculator",
      description:
        "A web application for calculating semester GPA and tracking academic performance, with user authentication and PDF export.",
      images: [
        "/gpa-calculator/dashboard.png",
        "/gpa-calculator/calculation.png",
        "/gpa-calculator/pdf-export.png",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: [
        "User authentication",
        "GPA calculation for multiple semesters",
        "PDF export functionality",
        "Data persistence using MongoDB",
      ],
      githubLink: "https://github.com/devisarunadevid/gpa-cgpa-app",
      liveLink: "https://gpa-cgpa-app.vercel.app/",
      imageAlt: "GPA Calculator",
    },
    {
      title: "Coffee Bite",
      description:
        "A café website built to present menu information and support customer registration and contact enquiries.",
      images: [
        "/coffee-shop/home.png",
        "/coffee-shop/menu.png",
        "/coffee-shop/ordering.png",
        "/coffee-shop/contact.png",
      ],
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      features: [
        "Responsive café website interface",
        "Google Maps location integration",
        "Customer registration functionality",
        "Contact form with validation",
      ],
      githubLink: "https://github.com/devisarunadevid/coffee-bite",
      liveLink: "https://coffeebite.infinityfreeapp.com/?i=1",
      imageAlt: "Coffee Bite Website",
    },
  ];

  const [currentImageIndices, setCurrentImageIndices] = useState(
    projects.map(() => 0),
  );

  const changeImage = (projectIndex, direction) => {
    setCurrentImageIndices((previous) =>
      previous.map((imageIndex, index) => {
        if (index !== projectIndex) return imageIndex;

        const imageCount = projects[index].images.length;
        return (imageIndex + direction + imageCount) % imageCount;
      }),
    );
  };

  return (
    <section id="projects" className="px-4 py-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, projectIndex) => {
            const imageIndex = currentImageIndices[projectIndex];

            return (
              <article
                key={project.title}
                className="overflow-hidden transition-all duration-300 rounded-lg shadow-lg hover:scale-[1.02]"
              >
                <div className="overflow-hidden relative h-52 bg-gray-100">
                  <img
                    src={project.images[imageIndex]}
                    alt={`${project.imageAlt} - Image ${imageIndex + 1}`}
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none from-black/40" />

                  {project.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => changeImage(projectIndex, -1)}
                        aria-label={`Previous image for ${project.title}`}
                        className="absolute left-2 top-1/2 z-10 p-2 text-pink-600 rounded-full -translate-y-1/2 bg-white/90 hover:bg-white"
                      >
                        <FaChevronLeft size={18} />
                      </button>

                      <button
                        type="button"
                        onClick={() => changeImage(projectIndex, 1)}
                        aria-label={`Next image for ${project.title}`}
                        className="absolute right-2 top-1/2 z-10 p-2 text-pink-600 rounded-full -translate-y-1/2 bg-white/90 hover:bg-white"
                      >
                        <FaChevronRight size={18} />
                      </button>

                      <span className="absolute right-2 bottom-2 z-10 px-3 py-1 text-sm text-white rounded-full bg-black/70">
                        {imageIndex + 1} / {project.images.length}
                      </span>
                    </>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800 md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mb-5 leading-relaxed text-gray-700">
                    {project.description}
                  </p>

                  <div className="mb-5">
                    <h4 className="mb-3 font-semibold text-gray-800">
                      Technologies Used
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm text-pink-700 bg-pink-100 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold text-gray-800">
                      Key Features
                    </h4>

                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-2 items-start text-gray-700"
                        >
                          <span className="text-pink-600">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex gap-2 items-center px-4 py-2 text-purple-800 bg-white rounded-lg hover:bg-pink-100"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex gap-2 items-center px-4 py-2 text-purple-800 bg-white rounded-lg hover:bg-pink-100"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="p-6 mt-12 text-center rounded-lg shadow-lg">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">
            Want to See More?
          </h3>

          <p className="mb-6 text-gray-700">
            Explore my GitHub profile for more projects and code.
          </p>

          <a
            href="https://github.com/devisarunadevid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-2 items-center px-6 py-3 text-lg font-semibold text-purple-800 bg-white rounded-lg hover:bg-pink-100"
          >
            <FaGithub />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
