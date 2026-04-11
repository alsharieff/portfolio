import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-20 bg-[#0B0F19] text-gray-200 font-sans selection:bg-indigo-500/30"
    >
      <div className="mx-auto max-w-[1200px] w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        {/* LEFT SIDE - Contact Info */}
        <div className="flex flex-col justify-center space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white text-xs font-bold uppercase tracking-widest">
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              Let's Connect.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Whether you have a question or just want to discuss a new SEO
              strategy, my inbox is always open.
            </p>
          </div>

          {/* Contact Methods (Glass Cards) */}
          <div className="grid gap-4">
            {/* Email Card */}
            <div className="group flex items-center gap-5 p-4 rounded-2xl">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Email Me
                </p>
                <a
                  href="mailto:alsharieffk@gmail.com"
                  className="text-white font-medium"
                >
                  alsharieffk@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group flex items-center gap-5 p-4 rounded-2xl">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                  Call Me
                </p>
                <a href="tel:+639153450071" className="text-white font-medium">
                  +63 915 345 0071
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="group flex items-center gap-5 p-4 rounded-2xl">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Location
                </p>
                <p className="text-white font-medium">
                  Las Piñas, Metro Manila
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <p className="text-sm font-bold text-gray-500 uppercase mr-2 tracking-widest">
              Follow
            </p>
            {[
              { icon: <FaGithub />, link: "https://github.com/alsharieff" },
              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/in/alsharieff",
              },
              { icon: <FaTwitter />, link: "https://twitter.com/alsharieff" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Map Section */}
        <div className="relative group min-h-[400px]">
          {/* Glow Behind Map */}
          <div className="absolute rounded-[2.5rem] blur-2xl"></div>

          <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl bg-gray-900/50 backdrop-blur-sm">
            <iframe
              title="Las Piñas City Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61803.95764023751!2d120.96395048259646!3d14.434386985172205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1d6a3629ad1%3A0x24a8bc675402a5!2sLas%20Pi%C3%B1as%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1715000000000!5m2!1sen!2sph"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
