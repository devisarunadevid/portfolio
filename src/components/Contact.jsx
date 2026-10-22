import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const EMAILJS_SERVICE_ID = "service_tyi3zev";
const EMAILJS_TEMPLATE_ID = "template_rbmv96m";
const EMAILJS_PUBLIC_KEY = "7a0DhS7E4ClIcZHiW";

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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

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

    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus(null);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        title: formData.subject.trim(),
        message: formData.message.trim(),
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="flex flex-col justify-center p-8 rounded-lg shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              Contact Information
            </h3>

            <div className="space-y-6 text-lg">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-xl text-purple-700 shrink-0" />
                <a
                  href="mailto:devisarunadevidd@gmail.com"
                  className="text-gray-700 break-all transition-colors hover:text-pink-600"
                >
                  devisarunadevidd@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <FaPhone className="text-xl text-purple-700 shrink-0" />
                <a
                  href="tel:+918610202336"
                  className="text-gray-700 transition-colors hover:text-pink-600"
                >
                  +91 86102 02336
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-3">
                <FaLinkedin className="text-xl text-purple-700 shrink-0" />
                <a
                  href="https://www.linkedin.com/in/devis-aruna-devi-d/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 transition-colors hover:text-pink-600"
                >
                  LinkedIn Profile
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center space-x-3">
                <FaGithub className="text-xl text-purple-700 shrink-0" />
                <a
                  href="https://github.com/devisarunadevid"
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
            noValidate
            className="p-8 space-y-6 rounded-lg shadow-lg"
          >
            {/* Full Name */}
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
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                  errors.name ? "border-red-500" : "border-pink-500"
                } focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800`}
              />

              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Address */}
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
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                  errors.email ? "border-red-500" : "border-pink-500"
                } focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800`}
              />

              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject */}
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
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                  errors.subject ? "border-red-500" : "border-pink-500"
                } focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800`}
              />

              {errors.subject && (
                <p id="subject-error" className="mt-1 text-sm text-red-500">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
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
                rows={5}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                  errors.message ? "border-red-500" : "border-pink-500"
                } focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800`}
              />

              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
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

            {/* Submission Status */}
            {submitStatus === "success" && (
              <p role="status" className="mt-4 text-center text-green-600">
                Your message has been sent successfully. Thank you!
              </p>
            )}

            {submitStatus === "error" && (
              <p role="alert" className="mt-4 text-center text-red-500">
                We couldn't send your message. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
