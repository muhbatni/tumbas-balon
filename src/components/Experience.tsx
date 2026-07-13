"use client";

import { useEffect, useRef } from "react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description?: string;
  highlights?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineering Intern",
    organization: "BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)",
    period: "2024",
    description:
      "Developed 3 dashboard applications and contributed to system analysis, UI implementation, and testing.",
    highlights: [
      "Built 3 operational dashboard applications from scratch",
      "Implemented data visualization features for improved decision-making",
      "Ensured system reliability and data accuracy across modules",
      "Collaborated with team members using Agile methodology",
    ],
  },
  {
    title: "Information Systems Student",
    organization: "Sunan Ampel State Islamic University",
    period: "2023 — Present",
    description:
      "Studying Information Systems with focus on software engineering, database management, and quality assurance practices.",
    highlights: [
      "Experienced as an operations auditor for a student association",
      "Focused on Quality Assurance and Software Engineering",
      "Developed projects using Laravel and Next.js",
      "Practiced testing automation with Cypress and Selenium",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = el.querySelectorAll(".exp-animate");
            items.forEach((item) => item.classList.add("animate-fade-in-up"));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="exp-animate opacity-0 stagger-1">
          <p className="section-label">Journey</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mb-12">
            My professional journey and academic background.
          </p>
        </div>

        <div className="max-w-3xl space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`timeline-item exp-animate opacity-0 stagger-${index + 2}`}
            >
              <div className="glass-card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <p className="text-[var(--accent-secondary)] text-sm font-medium">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-[var(--text-muted)] bg-[rgba(255,255,255,0.04)] px-3 py-1 rounded-full border border-[var(--border-subtle)] shrink-0">
                    {exp.period}
                  </span>
                </div>

                {exp.description && (
                  <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                )}

                {exp.highlights && (
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <svg
                          className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
