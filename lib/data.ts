import {
    SiAuth0,
  SiJavascript,
  SiJson,
  SiMdx,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPino,
  SiPostcss,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";

export const historyData = [
  {
    year: "2021",
    title: "First Encounter with Web Development",
    description: "Started learning the basics of HTML, CSS, and JavaScript independently.",
  },
  {
    year: "2023",
    title: "Became More Focused on Web Development",
    description: "Dedicated to mastering modern tools like Next.js and Tailwind CSS through personal projects.",
  },
  {
    year: "2024",
    title: "Mastered AI Collaboration",
    description: "Began building tools powered by AI and using AI agents to assist in development workflows.",
  },
  {
    year: "2025",
    title: "Focused on AI & Web3 Integration",
    description: "Exploring how to integrate AI into decentralized Web3 ecosystems through real-world projects.",
  },
];

export type ProjectData = {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  features: string[];
  learned: string;
  live?: string;
  repo?: string;
  isFullstack: boolean;
  timeline: string;
  isSolo: boolean;
  purpose: string;
};

export const projectsData: Record<string, ProjectData & {
  isFullstack: boolean;
  timeline: string;
  isSolo: boolean;
  purpose: string;
}> = {
  devflow: {
    title: "Devflow",
    description: "Devflow is a developer-friendly platform to manage code snippets.",
    tech: [
      "Next.js", "Tailwind", "MongoDB", "TypeScript", "Mongoose",
      "Auth.js", "React", "ShadCN UI", "Pino", "Zod", "MDX"
    ],
    images: [
      "/projects/devflow/1.png",
      "/projects/devflow/2.png",
      "/projects/devflow/3.png",
      "/projects/devflow/4.png",
      "/projects/devflow/5.png",
      "/projects/devflow/6.png",
    ],
    features: [
      "Ask and answer developer questions",
      "Authentication with Google & GitHub",
      "Tagging system for tech stack",
      "Syntax highlighted code editor",
      "Answer Form and Ask Question Form",
      "Responsive light/dark UI inspired by StackOverflow",
      "AI Answer Generation",
      "AI Language Selector",
      "Profile Edit",
    ],
    live: "https://devflow.vercel.app",
    repo: "https://github.com/Rydhlnst/v2devflow",
    learned: "Through this project, I learned to structure a full-stack app with Next.js and handle dynamic routing, image optimization, and server-side rendering. I also learned how to implementation AI API and authentication with Auth.js. I also learned how to use Pino for logging and monitoring the application. I also learned how to use ShadCN UI for building a responsive UI.",
    isFullstack: true,
    timeline: "24 May – 11 June",
    isSolo: true,
    purpose: "To create an interactive and AI-enhanced platform for developers to share, manage, and get answers to code-related problems efficiently."
  },
  "portfolio-2024": {
    title: "Portfolio 2024",
    description: "A personal portfolio website built with clean layout and developer-focused features.",
    tech: ["Next.js", "Monaco Editor", "ShadCN UI"],
    images: [
      "/projects/portfolio-april/1.png",
      "/projects/portfolio-april/2.png",
      "/projects/portfolio-april/3.png",
      "/projects/portfolio-april/4.png",
      "/projects/portfolio-april/5.png",
    ],
    features: [
      "Interactive code section using Monaco Editor",
      "Fully responsive layout",
      "Dark/light theme toggle",
      "Project showcase with image gallery",
      "Optimized for performance and SEO",
    ],
    learned: "I learned how to embed and configure Monaco Editor in a React-based Next.js app, as well as how to integrate a chatbot using the ChatGPT API for assistant functionality.",
    isFullstack: false,
    timeline: "18 April – 23 April",
    isSolo: true,
    purpose: "To showcase my development skills through a clean, professional portfolio with an emphasis on developer tooling and interactivity."
  }
};



import { IconType } from "react-icons";

export const techIconMap: Record<string, IconType> = {
  // Core
  "Next.js": SiNextdotjs,
  React: SiReact,
  "Node.js": SiNodedotjs,
  TypeScript: SiTypescript,

  // Styling
  Tailwind: SiTailwindcss,
  PostCSS: SiPostcss,

  // Auth & API
  "next-auth": SiAuth0,
  "OpenAI API": SiOpenai,

  // Database
  MongoDB: SiMongodb,
  Mongoose: SiMongoose,

  // Form & Validation
  Zod: SiZod,

  // Utils / Infra
  Pino: SiPino,

  // Markdown / Editor
  MDX: SiMdx,
  "next-mdx-remote": SiMdx,

  // Misc
  "react-hook-form": SiReact,
  "query-string": SiJson,
  "lucide-react": SiReact,
  clsx: SiJavascript,
  "class-variance-authority": SiJavascript,
  "tailwind-merge": SiTailwindcss,
};

export type OnGoingProjectDatas = {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  features: string[];
  learned: string;
  live?: string;
  repo?: string;
};

export const onGoingProjectsData: Record<string, OnGoingProjectDatas> = {
  "personal-portfolio": {
    title: "Personal Portfolio",
    description: "A modern portfolio built with Next.js and GSAP animations.",
    tech: ["Next.js", "Tailwind CSS", "GSAP", "ShadCN UI", "TypeScript"],
    images: ["/ongoing/project2.png"],
    features: [
      "Animated sections using GSAP",
      "Project showcase with image previews",
      "Animated on scroll using GSAP"
    ],
    learned: "I explored scroll-based animations using GSAP, and how to build a responsive layout using ShadCN UI.",
    live: "https://example.com/project3",
  },
  "ai-note-summarizer": {
    title: "AI Note Summarizer",
    description: "Summarize notes efficiently using AI-powered models.",  
    tech: ["Next.js", "TypeScript", "MongoDB", "OpenRouter", "Llama 4", "Markdown"],
    images: ["/ongoing/project1.png"],
    features: [
      "Paste note or upload file",
      "Summarize long content with LLM",
      "Result rendered with structured markdown",
      "Save history to MongoDB",
      "Modern and clean UI",
    ],
    learned: "I learned how to integrate AI models using OpenRouter and process file input for summarization. I also explored dynamic UI rendering with markdown and structured output.",
    live: "https://github.com/Rydhlnst/AI-Note-Summarizer",
  },
};
