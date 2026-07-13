import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Batni | QA Engineer & Software Engineer Portfolio",
  description:
    "Portfolio QA Engineer & Software Engineer specializing in testing automation, Cypress, Selenium, Postman, and web development with Laravel & Next.js.",
  keywords: [
    "QA Engineer",
    "Software Engineer",
    "Portfolio",
    "Testing Automation",
    "Cypress",
    "Selenium",
    "Laravel",
    "Next.js",
  ],
  authors: [{ name: "Batni" }],
  openGraph: {
    title: "Batni | QA Engineer & Software Engineer Portfolio",
    description:
      "Portfolio QA Engineer & Software Engineer specializing in testing automation and web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
