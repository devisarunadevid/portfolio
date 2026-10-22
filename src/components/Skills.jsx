import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaJava,
  FaNodeJs,
  FaCode,
  FaDatabase,
  FaBug,
  FaUsers,
  FaLaptopCode,
  FaVial,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFigma,
  SiC,
  SiSpring,
  SiMysql,
  SiPython,
  SiPhp,
  SiPostman,
  SiJunit5,
  SiOpenai,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-500" size={40} /> },
        { name: "C", icon: <SiC className="text-indigo-700" size={40} /> },
        {
          name: "Python",
          icon: <SiPython className="text-blue-500" size={40} />,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-400" size={40} />,
        },
        {
          name: "SQL",
          icon: <FaDatabase className="text-blue-500" size={40} />,
        },
        { name: "PHP", icon: <SiPhp className="text-indigo-500" size={40} /> },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-orange-500" size={40} />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-blue-500" size={40} />,
        },
        {
          name: "React.js",
          icon: <FaReact className="text-cyan-400" size={40} />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-500" size={40} />,
        },
        {
          name: "Figma",
          icon: <SiFigma className="text-purple-500" size={40} />,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" size={40} />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-700" size={40} />,
        },
        {
          name: "Spring Boot",
          icon: <SiSpring className="text-green-600" size={40} />,
        },
        {
          name: "Spring Security",
          icon: <SiSpring className="text-green-700" size={40} />,
        },
        {
          name: "Hibernate/JPA",
          icon: <FaDatabase className="text-orange-500" size={40} />,
        },
        {
          name: "REST APIs",
          icon: <FaCode className="text-purple-500" size={40} />,
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-600" size={40} />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600" size={40} />,
        },
      ],
    },
    {
      title: "AI & Generative AI",
      skills: [
        {
          name: "Gemini API",
          icon: <FaCode className="text-blue-500" size={40} />,
        },
        {
          name: "Generative AI",
          icon: <FaLaptopCode className="text-purple-500" size={40} />,
        },
        {
          name: "Prompt Engineering",
          icon: <FaCode className="text-pink-600" size={40} />,
        },
        {
          name: "RAG Fundamentals",
          icon: <FaDatabase className="text-indigo-500" size={40} />,
        },
      ],
    },
    {
      title: "Tools & Development Practices",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-600" size={40} />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-gray-800" size={40} />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-orange-500" size={40} />,
        },
        {
          name: "VS Code",
          icon: <FaCode className="text-blue-500" size={40} />,
        },
        {
          name: "JUnit",
          icon: <SiJunit5 className="text-green-700" size={40} />,
        },
        {
          name: "Software Testing",
          icon: <FaBug className="text-pink-600" size={40} />,
        },
        {
          name: "Debugging",
          icon: <FaCode className="text-indigo-500" size={40} />,
        },
        {
          name: "API Testing",
          icon: <FaVial className="text-purple-500" size={40} />,
        },
        {
          name: "Team Collaboration",
          icon: <FaUsers className="text-purple-500" size={40} />,
        },
      ],
    },
  ];

  const additionalSkills = [
    "Object-Oriented Programming",
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Input Validation",
    "Error Handling",
    "Responsive Web Design",
    "Problem Solving",
    "Code Documentation",
    "Version Control",
  ];

  return (
    <section id="skills" className="px-4 py-4">
      <div className="mx-auto max-w-6xl">
        <p className="mx-auto mb-10 max-w-3xl text-center text-gray-600">
          Technologies and tools I use to build web applications, integrate
          APIs, manage databases, and develop software solutions.
        </p>

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-6 rounded-lg shadow-lg">
              <h3 className="mb-6 text-xl font-semibold text-center text-gray-800 md:text-2xl">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col gap-3 justify-center items-center p-4 text-center rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  >
                    <div>{skill.icon}</div>
                    <h4 className="text-sm font-semibold text-gray-800 sm:text-base">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 mt-10 rounded-lg shadow-lg">
          <h3 className="mb-6 text-xl font-semibold text-center text-gray-800 md:text-2xl">
            Core Concepts & Additional Skills
          </h3>

          <div className="flex flex-wrap gap-3 justify-center">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm font-medium text-pink-700 bg-pink-100 rounded-full transition-colors duration-300 hover:bg-pink-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
