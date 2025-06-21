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
        "Passionate about building end-to-end solutions using modern web technologies.",
    },
    {
      icon: <FaLaptopCode className="text-3xl text-pink-600" />,
      title: "Problem Solving",
      description:
        "Enjoy tackling complex problems and finding efficient solutions.",
    },
    {
      icon: <FaGraduationCap className="text-3xl text-pink-600" />,
      title: "Continuous Learning",
      description:
        "Always eager to learn new technologies and improve my skills.",
    },
    {
      icon: <FaLightbulb className="text-3xl text-pink-600" />,
      title: "Innovation",
      description:
        "Focused on creating innovative solutions that make a difference.",
    },
  ];

  return (
    <section id="about" className="px-6 py-12 scroll-mt-40" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-3xl font-semibold text-center text-gray-800 md:text-4xl">
          About Me
        </h2>

        {/* Photo and Introduction Section */}
        <div className="grid items-center gap-8 mb-12 md:grid-cols-3">
          {/* Professional Photo */}
          <div className="flex justify-center md:col-span-1">
            <div className="relative w-64 h-64 overflow-hidden border-4 border-pink-300 rounded-full shadow-xl">
              <img
                src="/profile-photo.png"
                alt="Devis Aruna Devi D"
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x400?text=Devis+Aruna+Devi+D";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-300/20 to-transparent"></div>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="space-y-4 md:col-span-2">
            <p className="text-lg leading-relaxed text-gray-700">
              I'm a passionate computer science student with a strong interest
              in full-stack development. Currently pursuing my B.E in Computer
              Science at Velammal College of Engineering and Technology, I'm in
              my 3rd year of study.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              My journey in web development started with a curiosity about how
              websites work, which led me to dive deep into both frontend and
              backend technologies. I enjoy creating responsive, user-friendly
              applications that solve real-world problems.
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
              <li className="flex items-center space-x-2">
                <span className="text-pink-600">•</span>
                <span>3rd Year B.E Computer Science Student</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-pink-600">•</span>
                <span>MERN Stack Developer</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-pink-600">•</span>
                <span>
                  Presented research on "Integration of Artificial Intelligence
                  In Crisis Communication" at 'LILAC'24' International
                  Conference
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-pink-600">•</span>
                <span>Passionate about Web Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-pink-600">•</span>
                <span>Always Learning New Technologies</span>
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
              href="/Devis_Aruna_Devi_Fullstack_Resume.pdf"
              download="Devis_Aruna_Devi_Resume.pdf"
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
