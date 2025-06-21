import React from "react";
import { FaExternalLinkAlt, FaExpand, FaCertificate } from "react-icons/fa";

export default function Certifications() {
  const certificationsData = [
    {
      title: "Integration of Artificial Intelligence In Crisis Communication",
      issuer: "LILAC'24 International Conference",
      date: "2024",
      image: "/certificates/lilac.jpg",
      description:
        "Presented original research on the role of AI in effective crisis communication.",
    },
    {
      title: "Web Development Internship",
      issuer: "Code Bind Technologies",
      date: "2024",
      image: "/certificates/codebind-internship.jpg",
      description:
        "Developed a responsive Coffee Shop website, focusing on user interface design and frontend implementation.",
    },
    {
      title: "Essential Python Skills Internship",
      issuer: "Marcello Tech",
      date: "2023",
      image: "/certificates/python.jpg",
      description:
        "Gained practical experience and honed essential Python programming skills through hands-on projects.",
    },
    {
      title: "Software Testing",
      issuer: "NPTEL Elite",
      date: "2024",
      image: "/certificates/softwaretesting.jpg",
      description:
        "Gained in-depth knowledge of software testing methodologies and practices.",
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2025",
      image: "/certificates/CloudComputing.jpg",
      description:
        "Explored fundamental concepts and services related to cloud computing platforms.",
    },
    {
      title: "React Basics",
      issuer: "Meta Coursera",
      date: "2025",
      image: "/certificates/react.jpg",
      description:
        "Learned the foundational concepts of React for building user interfaces.",
    },
    {
      title: "Frontend for Java Full Stack Development",
      issuer: "Board Infinity",
      date: "2024",
      image: "/certificates/frontendforjava.jpg",
      description:
        "Completed a comprehensive program covering frontend for Java development.",
    },
    {
      title: "SQL",
      issuer: "University of Michigan",
      date: "2024",
      image: "/certificates/sql.jpg",
      description:
        "Developed strong skills in database querying and management using SQL.",
    },
    {
      title: "Fundamentals of Java Programming",
      issuer: "Board Infinity",
      date: "2024",
      image: "/certificates/fundamentalsofjava.jpg",
      description: "Mastered the core concepts of Java programming language.",
    },
    {
      title: "Agile Scrum in Practice",
      issuer: "Infosys Springboard",
      date: "2025",
      image: "/certificates/Agile.jpg",
      description:
        "Acquired practical knowledge of Agile methodologies and Scrum framework through real-world case studies and simulations.",
    },
  ];

  return (
    <section
      id="certifications"
      className="px-6 py-12 scroll-mt-40"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-semibold text-center text-gray-800 md:text-4xl">
          My Certifications
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="overflow-hidden relative p-6 rounded-lg shadow-lg transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-center mb-4 space-x-4">
                <FaCertificate className="text-3xl text-pink-700" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">{cert.description}</p>
              {cert.image && (
                <button
                  onClick={() => window.open(cert.image, "_blank")}
                  className="inline-flex items-center px-3 py-1 space-x-2 text-sm text-pink-700 rounded-md transition-colors duration-300 hover:text-pink-900"
                >
                  <span>View Image</span>
                  <FaExpand className="text-xs" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Optional Call to Action for more certifications */}
        <div className="p-6 mt-12 text-center rounded-lg shadow-lg">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">
            Explore More of My Learning Journey
          </h3>
          <p className="mb-6 text-gray-700">
            You can find a complete list of my online courses and certifications
            on my LinkedIn profile or relevant learning platforms.
          </p>
          <a
            href="https://www.linkedin.com/in/devis-aruna-devi-d/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 space-x-2 text-lg font-semibold text-purple-800 bg-white rounded-lg transition-all duration-300 hover:bg-pink-200"
          >
            <FaExternalLinkAlt />
            <span>View My LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
