import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="py-16 md:px-12 lg:px-20 bg-[#0B0F19] text-[#E5E7EB]"
      id="contact"
    >
      <div className="max-w-[1200px] px-2 md:px-4 mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-lg sm:text-2xl md:text-5xl font-extrabold tracking-wide mb-4">
          Contact Me
        </h2>
        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-12 text-[#1A73E8]">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-colors duration-300 hover:text-[#0965dd]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-colors duration-300 hover:text-[#0965dd]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-colors duration-300 hover:text-[#0965dd]"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-3xl transition-colors duration-300 hover:text-[#0965dd]"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Contact Info Card */}
        <div className="bg-[#1A1D23] p-6 rounded-xl mb-12 space-y-3 text-[#E5E7EB] shadow-md">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:alsharieffk@gmail.com"
              className="text-[#1A73E8] hover:underline"
            >
              alsharieffk@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+639153450071"
              className="text-[#1A73E8] hover:underline"
            >
              +63 915 345 0071
            </a>
          </p>
          <p>
            <span className="font-semibold">Location:</span> Las Piñas City,
            Metro Manila
          </p>
        </div>

        {/* Embedded Google Map */}
        <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-2xl border border-[#2A2E39]">
          <iframe
            title="Las Piñas City Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4569216377357!2d120.99533051538677!3d14.437016289757902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c915a9ab2d0b%3A0xa63b8562cfefbb6d!2sLas%20Pi%C3%B1as%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
