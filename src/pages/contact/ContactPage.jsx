import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section
      className="min-h-screen flex items-center mx-auto max-w-[960px] px-6 py-12 font-sans bg-[#0d0d0f]"
      id="contact"
    >
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE - Contact Info */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-wide">
            Contact Me
          </h1>
          <p className="text-gray-400 mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed">
            Reach out for collaborations, freelance projects, or just to
            connect. Let’s build something amazing together!
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mb-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-3xl hover:text-teal-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-3xl hover:text-teal-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-3xl hover:text-teal-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="text-3xl hover:text-teal-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Contact Info Card */}
          <div className="bg-gray-900/50 p-6 rounded-xl mb-8 space-y-3 text-gray-300 shadow-lg">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:alsharieffk@gmail.com"
                className="text-teal-500 hover:underline"
              >
                alsharieffk@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+639153450071"
                className="text-teal-500 hover:underline"
              >
                +63 915 345 0071
              </a>
            </p>
            <p>
              <span className="font-semibold">Location:</span> Las Piñas City,
              Metro Manila
            </p>
          </div>

          <a href="mailto:alsharieffk@gmail.com">
            <button
              type="button"
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-full transition"
            >
              Send a Message
            </button>
          </a>
        </div>

        {/* RIGHT SIDE - Google Map */}
        <div className="rounded-xl overflow-hidden h-[80vh] md:h-full shadow-2xl">
          <iframe
            title="Las Piñas City Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4569216377357!2d120.99533051538677!3d14.437016289757902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c915a9ab2d0b%3A0xa63b8562cfefbb6d!2sLas%20Pi%C3%B1as%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
