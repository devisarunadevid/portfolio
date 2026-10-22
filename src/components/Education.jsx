import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      year: "2023 – 2027 (Present)",
      title: "B.E. Computer Science and Engineering",
      institution: "Velammal College of Engineering and Technology, Madurai",
      icon: <FaGraduationCap className="text-white" size={12} />,
      details: [
        "Currently in 7th semester, focusing on full-stack development.",
        "Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Web Technologies.",
        "Actively participating in coding contests and tech workshops.",
      ],
    },
    {
      year: "2023",
      title: "Class XII (Higher Secondary)",
      institution: "CEOA Matriculation Higher Secondary School, Madurai",
      icon: <FaSchool className="text-white" size={12} />,
      details: [
        "Completed with an aggregate percentage of 90%.",
        "Specialized in Biology and Mathematics group.",
      ],
    },
    {
      year: "2021",
      title: "Class X (Secondary School)",
      institution: "CEOA Matriculation Higher Secondary School, Madurai",
      icon: <FaSchool className="text-white" size={12} />,
      details: ["Declared pass under the COVID-19 pandemic assessment policy."],
    },
  ];

  return (
    <section id="education" className="px-4 py-4">
      <div className="mx-auto max-w-4xl">
        <div className="relative ml-4 border-l-4 border-pink-500 md:ml-20">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="flex relative items-start pl-10 mb-12 w-full last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="flex absolute top-0 -left-3 z-10 justify-center items-center mt-1 w-6 h-6 bg-pink-500 rounded-full border-2 border-white shadow-md">
                {item.icon}
              </div>

              {/* Education Card */}
              <div className="p-6 rounded-lg shadow-lg w-full transform transition-transform duration-300 hover:scale-[1.02]">
                <p className="mb-1 text-sm font-semibold text-pink-700">
                  {item.year}
                </p>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="mb-3 font-medium text-gray-700 text-md">
                  {item.institution}
                </p>
                <ul className="space-y-1 list-disc list-inside text-gray-700">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
