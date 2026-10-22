import React from "react";
import {
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  const interests = [
    {
      icon: <FaCode className="text-3xl text-pink-600" />,
      title: "Full Stack Development",
      description:
        "Building end-to-end web applications with responsive interfaces, backend services, and database integration.",
    },
    {
      icon: <FaLaptopCode className="text-3xl text-pink-600" />,
      title: "Problem Solving",
      description:
        "Strengthening programming and algorithmic thinking by solving coding challenges and practicing DSA.",
    },
    {
      icon: <FaGraduationCap className="text-3xl text-pink-600" />,
      title: "Continuous Learning",
      description:
        "Continuously improving my technical skills through hands-on projects and exploring new technologies.",
    },
    {
      icon: <FaLightbulb className="text-3xl text-pink-600" />,
      title: "AI Integration",
      description:
        "Exploring practical AI applications by integrating AI APIs and intelligent features into web applications.",
    },
  ];

  return (
    <section id="about" className="px-4 py-4">
      <div className="max-w-6xl mx-auto">
        {/* Photo and Introduction Section */}
        <div className="grid items-center gap-8 mb-12 md:grid-cols-3">
          {/* Professional Photo */}
          <div className="flex justify-center md:col-span-1">
            <div className="relative w-64 h-64 overflow-hidden border-4 border-pink-300 rounded-full shadow-xl">
              <img
                src="/profile-photo.png"
                alt="Devis Aruna Devi D"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-300/20 to-transparent"></div>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="space-y-4 md:col-span-2">
            <p className="text-lg leading-relaxed text-gray-700">
              I'm a B.E. Computer Science and Engineering student at Velammal
              College of Engineering and Technology, currently in my 7th
              semester, with a strong interest in full-stack development and
              building practical software solutions.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              I enjoy developing web applications that combine intuitive user
              interfaces, reliable backend services, and database management.
              Through projects such as Librario, I've explored full-stack
              development, AI integration, payment processing, and email
              notifications. I'm continuously strengthening my Java, SQL,
              problem-solving, and software development skills as I prepare for
              software engineering opportunities.
            </p>
          </div>
        </div>

        {/* Quick Facts Section */}
        <div className="grid gap-8 mb-12 md:grid-cols-2">
          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              At a Glance
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-pink-600">•</span>
                <span>
                  7th Semester B.E. Computer Science and Engineering Student
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-pink-600">•</span>
                <span>
                  Full-Stack Development with React.js, Java, Spring Boot and
                  SQL
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-pink-600">•</span>
                <span>
                  Full-Stack Development Intern at Infosys Springboard
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-pink-600">•</span>
                <span>
                  Presented research on "Integration of Artificial Intelligence
                  in Crisis Communication" at LILAC'24 International Conference
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-pink-600">•</span>
                <span>Hackathon Second Prize Winner</span>
              </li>
            </ul>
          </div>

          {/* Download Resume Section */}
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Get My Resume
            </h3>
            <p className="mb-4 text-center text-gray-700">
              Download my detailed resume to learn more about my experience and
              skills.
            </p>
            <a
              href="/Devis_Aruna_Devi_D_Full_Stack_AI_Resume.pdf"
              download="Devis_Aruna_Devi_D_Full_Stack_AI_Resume.pdf"
              className="inline-block px-6 py-3 font-semibold text-purple-600 transition-all duration-300 bg-white rounded-lg hover:bg-pink-100"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Interests Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 rounded-lg shadow-lg hover:transform hover:scale-105"
            >
              <div className="mb-4">{interest.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {interest.title}
              </h3>
              <p className="text-gray-700">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
