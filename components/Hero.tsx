"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
        Zubayr Skirej
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl mb-12 animate-fade-in animation-delay-300">
        Full Stack Developer
      </p>
      <button
        onClick={scrollToProjects}
        className="animate-bounce cursor-pointer"
        aria-label="Scroll to Projects section"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
}
