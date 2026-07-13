"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const children = el.querySelectorAll(".hero-animate");
    children.forEach((child) => {
      child.classList.add("animate-fade-in-up");
    });
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      <div className="grid-bg" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          className="hero-animate opacity-0 stagger-1"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="hero-badge mb-8">
            <span className="dot" />
            Open to opportunities
          </div>
        </div>

        <h1
          className="hero-title hero-animate opacity-0 stagger-2 mb-6"
          style={{ animationFillMode: "forwards" }}
        >
          QA Engineer
          <br />
          <span className="gradient-text">& Software Engineer</span>
        </h1>

        <p
          className="hero-description hero-animate opacity-0 stagger-3 mb-10"
          style={{ animationFillMode: "forwards" }}
        >
          Information Systems student focused on software quality, testing
          automation, and web development. Combining analytical thinking with
          development skills to build reliable and efficient systems.
        </p>

        <div
          className="flex flex-wrap gap-4 hero-animate opacity-0 stagger-4"
          style={{ animationFillMode: "forwards" }}
        >
          <a href="#projects" className="btn-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get in Touch
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
