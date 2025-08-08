export type Experience = {
  company: string;
  companyUrl?: string;
  title: string;
  start: string;
  end?: string;
  description: string[] | string;
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
    "Currently, I focus on mobile and web development, ensuring platforms meet standards and best practices to deliver an inclusive user experience and scalable systems.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/dk5761" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dk5761/" },
    { label: "Twitter", href: "https://x.com/drshnk3" },
  ],
};

export const experiences: Experience[] = [
  {
    company: "Rezolv.Ai",
    companyUrl: "https://getrezolv.com",
    title: "SDE-2",
    start: "2024",
    end: "Present",
    description: [
      "Leading Development of scalable web and mobile apps in React.js and React Native.",
      "Architecting complex features and establishing technical best practices for development teams.",
      "Mentoring junior developers and conducting code reviews to maintain high code quality standards",
      "Developed applications using React, TailwindCSS, and Tanstack-Query with React-Flow based workflow creation, Websocket integration for notifications, and Payment Gateways integration",
      "Developed Golang backend service to transcribe audios in Indic languages, scaling to process thousands of audios",
      "Created a private component library for shared components between apps to maintain brand visual design consistency",
      "Integrated Deck.gl + Mapbox for customized map visualizations and location tracking features",
    ],
    technologies: [
      "TypeScript",
      "React",
      "React Native",
      "Tailwind CSS",
      "Zustand",
      "Tanstack Query",
      "Go Lang",
      "Gen AI",
      "Rabbit MQ",
    ],
  },
  {
    company: "Liquid Diamonds (Contract)",
    companyUrl: "https://www.liquid.diamonds/",
    title: "SDE-1",
    start: "2023",
    end: "2024",
    description: [
      "Built a diamond analytics and e-commerce platform using React, Redux Toolkit and Material UI for responsive UI components",
      "Developed data processing ingress service with Node.js and RabbitMQ to automate S3 media storage sync, reducing manual processing time by 27%",
      "Implemented CI/CD pipelines using GitHub Actions to automate testing and deployment workflows",
      "Optimized application performance through code splitting, lazy loading and efficient state management with Redux Toolkit",
      "Collaborated with product and design teams to implement complex data visualization dashboards for diamond analytics",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Material UI",
      "Node.js",
      "Github Actions",
      "Redux Toolkit",
    ],
  },

  {
    company: "Cybertech Systems & Solutions",
    companyUrl: "https://www.cybertech.com/",
    title: "JavaScript Developer",
    start: "2020",
    end: "2023",
    description: [
      "Designed and developed a React Native mobile application for internal employee management system",
      "Integrated GIS libraries (ArcGIS SDK and Leaflet) into React web applications to create interactive maps and location-based features",
      "Built responsive UIs with React and SCSS for various enterprise applications",
      "Collaborated with backend teams to implement API integrations and optimize data flow",
      "Implemented complex data visualizations and interactive dashboards for using React",
    ],
    technologies: [
      "React",
      "SCSS",
      "JavaScript",
      "React Native",
      "ArcGIS SDK",
      "Leaflet",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Draw Cali",
    href: "https://exd.drshnk.com",
    description:
      "A Excalidraw clone, with the support for saving the drawings on the server, could be self hosted",
    technologies: [
      "React",
      "Go Lang",
      "PostgreSQL",
      "Excalidraw",
      "Tailwind CSS",
    ],
    image:
      "https://personal-drshnk.s3.ap-south-1.amazonaws.com/Screenshot%202025-08-08%20at%2015.15.06.png",
  },
  {
    title: "Portfolio v5",
    href: "https://portfolio.drshnk.com",
    image:
      "https://personal-drshnk.s3.ap-south-1.amazonaws.com/Screenshot%202025-08-08%20at%2015.32.43.png",
    description:
      "Current Iteration of the portfolio site, built with Next.js, Tailwind CSS, and TypeScript.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];
