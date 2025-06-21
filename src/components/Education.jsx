import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      year: "Present (2022 - 2026)",
      title: "B.E Computer Science",
      institution: "Velammal College of Engineering and Technology, Madurai",
      icon: <FaGraduationCap className="text-pink-600" />,
      details: [
        "Currently in my 3rd year of study, focusing on full-stack development.",
        "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Web Technologies.",
        "Actively participating in coding contests and tech workshops.",
      ],
    },
    {
      year: "2022",
      title: "Class XII (Higher Secondary)",
      institution: "CEOA.Mat.Hr.Sec.School, Madurai",
      icon: <FaSchool className="text-pink-600" />,
      details: [
        "Completed with an aggregate percentage of 90%.",
        "Specialized in Biology and Mathematics group.",
      ],
    },
    {
      year: "2020",
      title: "Class X (Secondary School)",
      institution: "CEOA.Mat.Hr.Sec.School, Madurai",
      icon: <FaSchool className="text-pink-600" />,
      details: ["Achieved a commendable score of 95%."],
    },
  ];

  return (
    <section
      id="education"
      className="px-6 py-12 scroll-mt-40"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-3xl font-semibold text-center text-gray-800 md:text-4xl">
          My Education
        </h2>
        <div className="relative ml-4 border-l-4 border-pink-500 md:ml-20">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start w-full pl-10 mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 z-10 flex items-center justify-center w-6 h-6 mt-1 bg-pink-500 border-2 border-white rounded-full shadow-md -left-3">
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
                <ul className="space-y-1 text-gray-700 list-disc list-inside">
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
