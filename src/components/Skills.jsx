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
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFigma,
  SiC,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
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
          name: "JavaScript",
          icon: <FaJs className="text-yellow-400" size={40} />,
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
          name: "C",
          icon: (
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-800 hexagon">
              <SiC className="text-white" size={30} />
            </div>
          ),
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" size={40} />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-700" size={40} />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600" size={40} />,
        },
        {
          name: "Java",
          icon: <FaJava className="text-red-500" size={40} />,
        },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-600" size={40} />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-black" size={40} />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="px-6 py-12 scroll-mt-40" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-3xl font-semibold text-center text-gray-800 md:text-4xl">
          Technical Skills
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="p-6 rounded-lg shadow-lg">
              <h3 className="mb-6 text-2xl font-semibold text-center text-gray-800">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="p-4 transition-all duration-300 rounded-lg shadow-lg hover:transform hover:scale-105"
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-3">{skill.icon}</div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="p-6 mt-12 rounded-lg shadow-lg">
          <h3 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Additional Skills
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Responsive Design",
              "RESTful APIs",
              "Version Control",
              "Problem Solving",
              "Team Collaboration",
              "Code Review",
              "Documentation",
            ].map((skill, index) => (
              <div
                key={index}
                className="p-3 text-center text-gray-800 transition-all duration-300 rounded-lg shadow-lg hover:bg-white/10"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
