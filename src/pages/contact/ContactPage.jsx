import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-16 bg-[#0B0F19] text-[#E5E7EB] font-sans"
    >
      <div className="mx-auto max-w-[960px] w-full grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE - Contact Info */}
        <div className="flex flex-col gap-8">
          {/* Heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 tracking-tight">
              Contact Me
            </h1>
            <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
              Reach out for collaborations, freelance projects, or just to
              connect. Let’s build something impactful together.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#1A73E8] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#1A73E8] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#1A73E8] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="hover:text-[#1A73E8] transition"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Contact Info Card */}
          <div className="bg-[#111827] border border-[#2A2F3A] rounded-2xl p-6 shadow-lg space-y-3">
            <p>
              <span className="font-semibold text-[#E5E7EB]">Email:</span>{" "}
              <a
                href="mailto:alsharieffk@gmail.com"
                className="text-[#1A73E8] hover:underline"
              >
                alsharieffk@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-[#E5E7EB]">Phone:</span>{" "}
              <a
                href="tel:+639153450071"
                className="text-[#1A73E8] hover:underline"
              >
                +63 915 345 0071
              </a>
            </p>
            <p>
              <span className="font-semibold text-[#E5E7EB]">Location:</span>{" "}
              Las Piñas City, Metro Manila
            </p>
          </div>

          {/* CTA Button */}
          <a href="mailto:alsharieffk@gmail.com">
            <button className="px-6 py-3 rounded-full bg-[#1A73E8] text-white font-medium hover:bg-[#0965dd] transition shadow-md">
              Send a Message
            </button>
          </a>
        </div>

        {/* RIGHT SIDE - Google Map */}
        <div className="rounded-2xl overflow-hidden h-[400px] md:h-full shadow-2xl border border-[#2A2F3A]">
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
