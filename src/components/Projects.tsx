"use client";

import { useEffect, useRef } from "react";

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Coffee Shop Landing Page",
    subtitle: "KGN Coffee",
    description:
      "Designed and developed a highly responsive, modern landing page for KGN Coffee. Highlights a sleek interface, rich animations, and structured sections to engage coffee enthusiasts.",
    tags: ["Next.js", "Tailwind CSS", "Lucide Icons", "Responsive Design"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" y1="2" x2="6" y2="4" />
        <line x1="10" y1="2" x2="10" y2="4" />
        <line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    ),
    link: "https://kgn.tumbas-balon.my.id/",
  },
  {
    title: "Dashboard Monitoring System",
    subtitle: "BMKG Internship",
    description:
      "Developed a dashboard application for monitoring and visualizing operational data. Focused on UI implementation and ensuring data accuracy across modules.",
    tags: ["Laravel", "Dashboard", "UI/UX", "Data Accuracy"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Dashboard Data Visualization",
    subtitle: "BMKG Internship",
    description:
      "Built data visualization features to improve readability and decision-making. Assisted in validating system outputs and functionality.",
    tags: ["Charts", "Analytics", "Validation", "PHP"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Web Testing Automation",
    subtitle: "Personal Project",
    description:
      "Created automated test scenarios using Cypress to validate UI flows and improve testing efficiency. Implemented page object model patterns for maintainability.",
    tags: ["Cypress", "E2E Testing", "JavaScript", "POM"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "API Testing Suite",
    subtitle: "Personal Project",
    description:
      "Performed API testing using Postman to validate endpoints, authentication, and data integrity. Built collections with automated assertions.",
    tags: ["Postman", "REST API", "Authentication", "Assertions"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = el.querySelectorAll(".project-animate");
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
    <section ref={sectionRef} id="projects" className="section section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="project-animate opacity-0 stagger-1">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mb-12">
            A selection of projects showcasing my QA and development expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const CardContent = (
              <>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(108,99,255,0.1)] flex items-center justify-center text-[var(--accent-primary)] shrink-0 transition-all duration-300 group-hover:bg-[rgba(108,99,255,0.2)] group-hover:scale-110">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg leading-tight text-[var(--text-primary)]">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs text-[var(--accent-secondary)] font-medium mt-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-[rgba(255,255,255,0.04)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            );

            if (project.link) {
              return (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card group project-animate opacity-0 stagger-${index + 2} block no-underline cursor-pointer`}
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <div
                key={project.title}
                className={`glass-card group project-animate opacity-0 stagger-${index + 2}`}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
