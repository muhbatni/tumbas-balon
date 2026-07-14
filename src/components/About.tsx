"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = el.querySelectorAll(".about-animate");
            items.forEach((item) => item.classList.add("animate-fade-in-up"));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "3+", label: "Dashboard Apps" },
    { value: "3+", label: "Years of Study" },
    { value: "5+", label: "Tools" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section section-alt"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="about-animate opacity-0 stagger-1">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Passionate about Quality</h2>
          <p className="section-subtitle mb-10">
            Building reliable software through structured testing and modern
            development practices.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Deskripsi singkat profil */}
          <div className="md:col-span-3 about-animate opacity-0 stagger-2">
            <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed">
              <p>
                I am an Information Systems student with a strong interest in
                Quality Assurance and Software Engineering. I focus on ensuring
                software reliability through structured testing while also
                understanding how systems are built from the development side.
              </p>
              <p>
                During my internship at{" "}
                <span className="text-[var(--text-primary)] font-semibold">
                  BMKG
                </span>
                , I developed and contributed to multiple dashboard applications,
                improving both functionality and system reliability. This
                experience strengthened my ability to analyze systems, detect
                issues, and ensure quality.
              </p>
              <p>
                I work with{" "}
                <span className="text-[var(--accent-secondary)]">Cypress</span>,{" "}
                <span className="text-[var(--accent-secondary)]">Selenium</span>
                , and{" "}
                <span className="text-[var(--accent-secondary)]">Postman</span>{" "}
                for testing, and build applications using{" "}
                <span className="text-[var(--accent-secondary)]">Laravel</span>{" "}
                and{" "}
                <span className="text-[var(--accent-secondary)]">Next.js</span>.
              </p>
            </div>
          </div>

          {/* Bagian angka statistik/pencapaian */}
          <div className="md:col-span-2 about-animate opacity-0 stagger-3">
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`glass-card flex items-center gap-4 stagger-${index + 3}`}
                >
                  <span className="text-3xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-1)" }}>
                    {stat.value}
                  </span>
                  <span className="text-[var(--text-secondary)] text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
