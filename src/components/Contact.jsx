import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate sending
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (_error) {
      console.error(_error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-6 py-12 scroll-mt-40"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-3xl font-semibold text-center text-gray-800 md:text-4xl">
          Get In Touch
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="flex flex-col justify-center p-8 rounded-lg shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              Contact Information
            </h3>

            <div className="space-y-6 text-lg">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-xl text-purple-700" />
                <a
                  href="mailto:devisarunadevidd@gmail.com"
                  className="text-gray-700 transition-colors hover:text-pink-600"
                >
                  devisarunadevidd@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhone className="text-xl text-purple-700" />
                <a
                  href="tel:8610202336"
                  className="text-gray-700 transition-colors hover:text-pink-600"
                >
                  8610202336
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FaLinkedin className="text-xl text-purple-700" />
                <a
                  href="https://www.linkedin.com/in/devis-aruna-devi-d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 transition-colors hover:text-pink-600"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FaGithub className="text-xl text-purple-700" />
                <a
                  href="https://github.com/itzmearuna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 transition-colors hover:text-pink-600"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 space-y-6 rounded-lg shadow-lg"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-semibold text-gray-800"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Jane Doe"
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                  errors.name ? "border-red-500" : "border-pink-500"
                } focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-800"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g., jane.doe@email.com"
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                  errors.email ? "border-red-500" : "border-pink-500"
                } focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-semibold text-gray-800"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g., Collaboration Opportunity"
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                  errors.subject ? "border-red-500" : "border-pink-500"
                } focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800`}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-semibold text-gray-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                  errors.message ? "border-red-500" : "border-pink-500"
                } focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all shadow-lg ${
                isSubmitting
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "bg-white text-purple-800 hover:bg-pink-100 hover:scale-105 active:scale-95"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <p className="mt-4 text-center text-green-400">
                Your message has been sent. Thank you!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-center text-red-400">
                Oops! Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
