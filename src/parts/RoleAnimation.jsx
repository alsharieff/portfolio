import { useEffect, useState } from "react";

export default function RoleBlink() {
  const roles = ["Web Developer", "Technical SEO Specialist"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // start fade out
      setFade(false);

      // switch text when invisible
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400); // fade-out duration
    }, 2500); // total cycle time

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className={`role-text text-lg md:text-2xl text-[#1A73E8] font-semibold mb-2 ${
        fade ? "fade-in" : "fade-out"
      }`}
    >
      {roles[index]}
    </h2>
  );
}
