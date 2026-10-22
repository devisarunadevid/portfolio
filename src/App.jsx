import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const openModal = (section) => {
    setActiveModal(section);
  };

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const renderModalContent = () => {
    switch (activeModal) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "education":
        return <Education />;
      case "certifications":
        return <Certifications />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (activeModal) {
      case "about":
        return "About Me";
      case "projects":
        return "Featured Projects";
      case "skills":
        return "Technical Skills";
      case "education":
        return "Education";
      case "certifications":
        return "Certifications";
      case "contact":
        return "Get In Touch";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <Navbar openModal={openModal} />
      <main>
        <Hero openModal={openModal} />
      </main>
      <Footer />

      <Modal
        isOpen={!!activeModal}
        onClose={closeModal}
        title={getModalTitle()}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}

export default App;
