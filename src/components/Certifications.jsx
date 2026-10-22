import React from "react";
import { FaExternalLinkAlt, FaExpand, FaCertificate } from "react-icons/fa";

export default function Certifications() {
  const certificationsData = [
    // 1. Core Technical Certifications
    {
      title: "Software Testing",
      issuer: "NPTEL Elite",
      date: "2024",
      image: "/certificates/softwaretesting.jpg",
      description:
        "Gained in-depth knowledge of software testing methodologies and practices.",
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
      title: "Master SQL for Data Science",
      issuer: "Udemy – Job Ready Programmer",
      date: "2025",
      image: "/certificates/master-sql-data-science.jpg",
      description:
        "Learned SQL concepts and techniques for querying and analyzing data for data science applications.",
    },
    {
      title: "SQL and PostgreSQL for Beginners: Become a SQL Expert",
      issuer: "Udemy – Jon Avis",
      date: "2025",
      image: "/certificates/sql-postgresql-beginners.png",
      description:
        "Studied SQL and PostgreSQL fundamentals for database querying and management.",
    },
    {
      title: "Fundamentals of Java Programming",
      issuer: "Board Infinity",
      date: "2024",
      image: "/certificates/fundamentalsofjava.jpg",
      description: "Mastered the core concepts of Java programming language.",
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
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2025",
      image: "/certificates/CloudComputing.jpg",
      description:
        "Explored fundamental concepts and services related to cloud computing platforms.",
    },

    // 2. AI and Data
    {
      title: "Generative AI Unleashing",
      issuer: "Infosys Springboard",
      date: "2025",
      image: "/certificates/generative-ai.png",
      description:
        "Completed learning on generative AI concepts and applications.",
    },
    {
      title: "Data Science for Beginners",
      issuer: "Board Infinity",
      date: "2026",
      image: "/certificates/data-science-beginners.jpg",
      description: "Completed introductory training in data science concepts.",
    },
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      issuer: "Microsoft",
      date: "2026",
      image: "/certificates/power-bi-data-analyst.jpg",
      description:
        "Completed Microsoft Power BI training for data modeling, visualization, and analysis.",
    },

    // 3. Internship and Practical Experience
    {
      title:
        "Internship 6.0 (B1): Library Management System with Real-Time Inventory and Lending",
      issuer: "Infosys Springboard",
      date: "2025",
      image: "/certificates/librario-internship.png",
      description:
        "Completed an internship assignment focused on a Library Management System with real-time inventory and lending.",
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

    // 4. Enterprise Tools and Additional Technologies
    {
      title: "Introduction to SAP ABAP Platform Fundamentals",
      issuer: "SAP",
      date: "2025",
      image: "/certificates/sap-abap.png",
      description:
        "Learned the fundamentals of the SAP ABAP platform, including its user interface and software logistics infrastructure.",
    },
    {
      title: "Executing Basic ERP Processes with SAP S/4HANA",
      issuer: "SAP Learning",
      date: "2026",
      image: "/certificates/sap-s4hana.jpg",
      description:
        "Learned basic ERP business processes, including procurement, production planning, and order-to-cash.",
    },
    {
      title: "Exploring Internet of Things with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "2026",
      image: "/certificates/iot-cisco.png",
      description:
        "Completed training exploring IoT concepts using Cisco Packet Tracer.",
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy / EdCreate Foundation",
      date: "2026",
      image: "/certificates/cybersecurity-essentials.png",
      description: "Completed foundational cybersecurity training.",
    },
    {
      title: "UiPath Automation Business Analyst Training",
      issuer: "UiPath",
      date: "2026",
      image: "/certificates/uipath-business-analyst.png",
      description:
        "Completed training in business analysis for automation workflows.",
    },
    {
      title: "Salesforce Training: Master the Essentials",
      issuer: "Salesforce",
      date: "2026",
      image: "/certificates/salesforce-essentials.jpg",
      description: "Completed introductory Salesforce training.",
    },
    {
      title: "Agile Scrum in Practice",
      issuer: "Infosys Springboard",
      date: "2025",
      image: "/certificates/Agile.jpg",
      description:
        "Acquired practical knowledge of Agile methodologies and Scrum framework through real-world case studies and simulations.",
    },

    // 5. Research and Other Learning
    {
      title: "Integration of Artificial Intelligence In Crisis Communication",
      issuer: "LILAC'24 International Conference",
      date: "2024",
      image: "/certificates/lilac.jpg",
      description:
        "Presented original research on the role of AI in effective crisis communication.",
    },
  ];

  return (
    <section id="certifications" className="px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              className="relative p-6 overflow-hidden transition-all duration-300 rounded-lg shadow-lg hover:transform hover:scale-105 group"
            >
              <div className="flex items-center mb-4 space-x-4">
                <FaCertificate className="text-3xl text-pink-700 shrink-0" />

                <div className="min-w-0">
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
                  type="button"
                  onClick={() =>
                    window.open(cert.image, "_blank", "noopener,noreferrer")
                  }
                  className="inline-flex items-center px-3 py-1 space-x-2 text-sm text-pink-700 transition-colors duration-300 rounded-md hover:text-pink-900"
                >
                  <span>View Image</span>
                  <FaExpand className="text-xs" />
                </button>
              )}
            </div>
          ))}
        </div>

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
            className="inline-flex items-center px-6 py-3 space-x-2 text-lg font-semibold text-purple-800 transition-all duration-300 bg-white rounded-lg hover:bg-pink-200"
          >
            <FaExternalLinkAlt />
            <span>View My LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
