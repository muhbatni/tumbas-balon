"use client";

import { useEffect, useRef } from "react";

interface Skill {
  name: string;
  logo: string;
}

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

/* Fallback SVG icons for skills without brand logos */
const fallbackIcons: Record<string, React.ReactNode> = {
  "Manual Testing": (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  ),
  "Test Planning": (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  "REST API": (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  "Agile/Scrum": (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
    </svg>
  ),
  "CI/CD": (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
};

interface MarqueeRow {
  label: string;
  direction: "left" | "right";
  duration: number; // seconds
  skills: Skill[];
}

const rows: MarqueeRow[] = [
  {
    label: "QA & Testing",
    direction: "left",
    duration: 20,
    skills: [
      { name: "Cypress", logo: `${DEVICON}/cypressio/cypressio-original.svg` },
      { name: "Selenium", logo: `${DEVICON}/selenium/selenium-original.svg` },
      { name: "Postman", logo: `${DEVICON}/postman/postman-original.svg` },
      { name: "Manual Testing", logo: "" },
      { name: "Test Planning", logo: "" },
    ],
  },
  {
    label: "Development",
    direction: "right",
    duration: 25,
    skills: [
      { name: "Laravel", logo: `${DEVICON}/laravel/laravel-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
      { name: "JavaScript", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
    ],
  },
  {
    label: "Tools & Workflow",
    direction: "left",
    duration: 30,
    skills: [
      { name: "Git", logo: `${DEVICON}/git/git-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "REST API", logo: "" },
      { name: "Agile/Scrum", logo: "" },
      { name: "CI/CD", logo: "" },
    ],
  },
];

/* ─── Sub-components ─── */

function SkillIcon({ skill, size }: { skill: Skill; size: number }) {
  if (skill.logo) {
    return (
      <img
        src={skill.logo}
        alt=""
        width={size}
        height={size}
        className="object-contain"
        loading="lazy"
      />
    );
  }
  return (
    <span className="text-[var(--accent-secondary)]" style={{ width: size, height: size, display: "flex" }}>
      {fallbackIcons[skill.name]}
    </span>
  );
}

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="marquee-item" role="img" aria-label={skill.name}>
      <SkillIcon skill={skill} size={20} />
      <span>{skill.name}</span>
    </div>
  );
}

function MarqueeTrack({
  skills,
  direction,
  duration,
}: {
  skills: Skill[];
  direction: "left" | "right";
  duration: number;
}) {
  const items = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="marquee-track-wrapper group">
      <div className="marquee-fade-left" />
      <div className="marquee-fade-right" />
      <div
        className={`marquee-track ${direction === "right" ? "marquee-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((skill, i) => (
          <SkillItem key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = el.querySelectorAll(".skill-animate");
            items.forEach((item) => item.classList.add("animate-fade-in-up"));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section" aria-label="Skills and Technologies">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="skill-animate opacity-0 stagger-1">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Tools and technologies I use to ensure quality and deliver great
            software.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {rows.map((row, idx) => (
          <div
            key={row.label}
            className={`skill-animate opacity-0 stagger-${idx + 2}`}
          >
            <MarqueeTrack
              skills={row.skills}
              direction={row.direction}
              duration={row.duration}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
