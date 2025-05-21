
import Gallery from "@/components/ImagesProject";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, SquareCheck, UsersRound } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JSX } from "react";
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

type ProjectData = {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  features: string[];
  learned: string;
  live?: string;
  repo?: string;
};

const projects: Record<string, ProjectData> = {
  devflow: {
    title: "Devflow",
    description:
      "Devflow is a developer-friendly platform to manage code snippets.",
    tech: ["Next.js", "Tailwind", "MongoDB", "TypeScript", "Mongoose", "Auth.js", "React", "ShadCN UI", "Pino", "Zod", "MDX"],
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
  },
  "portfolio-2024": {
    title: "Portfolio 2024",
    description:
      "A personal portfolio website built with animation and GSAP.",
    tech: ["Next.js", "GSAP", "ShadCN UI"],
    images: [
      "/projects/portfolio-2024/1.png",
      "/projects/portfolio-2024/2.png",
    ],
    features: [
      "Smooth scroll-based GSAP animations",
      "Fully responsive layout",
      "Dark/light theme toggle",
      "Project showcase with image gallery",
      "Optimized for performance and SEO",
    ],
    learned: "None"
  },
};

const techIconMap: Record<string, JSX.Element> = {
  // Core
  "Next.js": <SiNextdotjs className="w-4 h-4 mr-1" />,
  React: <SiReact className="w-4 h-4 mr-1" />,
  "Node.js": <SiNodedotjs className="w-4 h-4 mr-1" />,
  TypeScript: <SiTypescript className="w-4 h-4 mr-1" />,

  // Styling
  Tailwind: <SiTailwindcss className="w-4 h-4 mr-1" />,
  PostCSS: <SiPostcss className="w-4 h-4 mr-1" />,

  // Auth & API
  "next-auth": <SiAuth0 className="w-4 h-4 mr-1" />,
  "OpenAI API": <SiOpenai className="w-4 h-4 mr-1" />,

  // Database
  MongoDB: <SiMongodb className="w-4 h-4 mr-1" />,
  Mongoose: <SiMongoose className="w-4 h-4 mr-1" />,

  // Form & Validation
  Zod: <SiZod className="w-4 h-4 mr-1" />,

  // Utils / Infra
  Pino: <SiPino className="w-4 h-4 mr-1" />,

  // Markdown / Editor
  MDX: <SiMdx className="w-4 h-4 mr-1" />,
  "next-mdx-remote": <SiMdx className="w-4 h-4 mr-1" />,

  // Misc
  "react-hook-form": <SiReact className="w-4 h-4 mr-1" />,
  "query-string": <SiJson className="w-4 h-4 mr-1" />,
  "lucide-react": <SiReact className="w-4 h-4 mr-1" />,
  "clsx": <SiJavascript className="w-4 h-4 mr-1" />,
  "class-variance-authority": <SiJavascript className="w-4 h-4 mr-1" />,
  "tailwind-merge": <SiTailwindcss className="w-4 h-4 mr-1" />,
};

type Params = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: Params) {
  const { id } = params;
  const project = projects[id];

  if (!project) return notFound();

  return (
    <div className="mt-8 flex flex-col items-start space-y-6">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground mt-2">{project.description}</p>
        <div className="text-sm text-muted-foreground mt-2 space-x-4 flex flex-wrap">
        <span className="flex flex-row space-x-3 items-center justify-center"><SquareCheck/><span>Fullstack Developer</span></span>
        <span className="flex flex-row space-x-3 items-center justify-center"><Calendar/><span>March – May 2024</span></span>
        <span className="flex flex-row space-x-3 items-center justify-center"><UsersRound/><span>Solo Project</span></span>
    </div>

      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full">
        {/* Left: Gallery + Tech */}
        <div className="flex-1 space-y-6">
          <Gallery images={project.images} title={project.title} />
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="flex items-center gap-1 px-3 py-1"
              >
                {techIconMap[tech] || null}
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Right: Features + Learnings */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">What I Learned</h2>
            <p className="text-muted-foreground text-sm leading-relaxed text-justify">
              {project.learned}
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Project Purpose</h2>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Devflow was built to solve the problem of developer Q&A being scattered across platforms. It brings a StackOverflow-inspired experience with a cleaner UI and integrated auth.
                </p>
          </div>
            <div className="flex gap-3 mt-6">
                {project.repo && (
                    <Link href={project.repo}>
                        <Button variant="default" className="hover:px-6">
                            GitHub
                        </Button>
                    </Link>
                )}
                {project.live && (
                    <Link href={project.live}>
                        <Button variant="outline" className="hover:px-6">
                            Live Site
                        </Button>
                    </Link>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
