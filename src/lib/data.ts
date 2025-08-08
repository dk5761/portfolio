export type Experience = {
  company: string;
  companyUrl?: string;
  title: string;
  start: string;
  end?: string;
  description: string;
  technologies: string[];
};

export type Project = {
  title: string;
  href?: string;
  description: string;
  metrics?: string;
  technologies: string[];
  image?: string;
};

export type Personal = {
  name: string;
  role: string;
  intro: string;
  about: string[];
  socials: { label: string; href: string }[];
};

export const personal: Personal = {
  name: "Darshan Kadam",
  role: "SDE-2",
  intro: "I build products for the mobile and web",
  about: [
    "I’m a developer passionate about crafting pixel-perfect user interfaces and scalable systems with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.",
    "Currently, I focus on mobile and web development, ensuring platforms meet standards and best practices to deliver an inclusive user experience.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/dk5761" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dk5761/" },
    { label: "Twitter", href: "https://x.com/drshnk" },
  ],
};

export const experiences: Experience[] = [
  {
    company: "Acme Corp",
    companyUrl: "https://example.com",
    title: "Senior Frontend Engineer",
    start: "2023",
    end: "Present",
    description:
      "Lead development of accessible, high-performance component systems and design tooling across the web platform.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Storybook",
    ],
  },
  {
    company: "Upstate Labs",
    companyUrl: "https://example.com",
    title: "Lead Engineer",
    start: "2020",
    end: "2023",
    description:
      "Shipped web apps, design systems, and internal tools for a range of clients; mentored engineers and coordinated cross-functional work.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Contentful",
      "SCSS",
    ],
  },
  {
    company: "Apple (Contract)",
    title: "UI Engineer",
    start: "2018",
    end: "2019",
    description:
      "Built interactive web experiences and an embeddable media player widget for in-browser authorization and playback.",
    technologies: ["React", "SCSS", "JavaScript"],
  },
];

export const projects: Project[] = [
  {
    title: "Spotify Profile",
    href: "https://example.com",
    description:
      "Personalized dashboard for Spotify data: top artists, tracks, and playlist insights with recommendations.",
    metrics: "★ 600+",
    technologies: ["React", "Next.js", "Spotify API"],
  },
  {
    title: "Halcyon Theme",
    href: "https://example.com",
    description:
      "Minimal dark blue developer theme available for popular editors and terminals.",
    metrics: "100k+ installs",
    technologies: ["Theme"],
  },
  {
    title: "Portfolio v4",
    href: "https://example.com",
    description:
      "A previous iteration of my portfolio site focused on performance and accessibility.",
    metrics: "8k+ stars",
    technologies: ["Gatsby", "Styled Components", "Netlify"],
  },
];
