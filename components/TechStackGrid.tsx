import { TechStackCard } from "@/components/TechStackCard";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGithub,
  SiFigma,
  SiDocker,
  SiPostman,
  SiSolidity,
  SiOpenai,
  SiPrisma,
} from "react-icons/si";
import AnimatedOnScroll from "./AnimatedOnScroll";
import { SlideUpText } from "./SlideUpText";

type TechItem = {
  icon: React.ReactNode;
  title: string;
};


export default function TechStackSection() {
  const techStacks = [
    {
      category: "Frontend",
      items: [
        { icon: <SiNextdotjs />, title: "Next.js" },
        { icon: <SiReact />, title: "React.js" },
        { icon: <SiTailwindcss />, title: "Tailwind CSS" },
        { icon: <SiTypescript />, title: "TypeScript" },
        { icon: <SiJavascript />, title: "JavaScript" },
        { icon: <SiHtml5 />, title: "HTML5" },
        { icon: <SiCss3 />, title: "CSS3" },
      ],
    },
    {
      category: "Backend",
      items: [
        { icon: <SiNodedotjs />, title: "Node.js" },
        { icon: <SiExpress />, title: "Express.js" },
        { icon: <SiMongodb />, title: "Mongoose (ODM)" },
        { icon: <SiPrisma />, title: "Prisma (ORM)" },
      ],
    },
    {
      category: "Database",
      items: [
        { icon: <SiMongodb />, title: "MongoDB" },
        { icon: <SiPostgresql />, title: "PostgreSQL" },
        { icon: <SiMysql />, title: "MySQL" },
      ],
    },
    {
      category: "Tools",
      items: [
        { icon: <SiGithub />, title: "GitHub" },
        { icon: <SiFigma />, title: "Figma" },
        { icon: <SiDocker />, title: "Docker" },
        { icon: <SiPostman />, title: "Postman" },
        { icon: <SiOpenai />, title: "ChatGPT" },
      ],
    },
    {
      category: "Web3",
      items: [
        { icon: <SiSolidity />, title: "Solidity" },
        { icon: <SiJavascript />, title: "Ether.js" },
        { icon: <SiJavascript />, title: "Web3.js" },
      ],
    },
  ];
  

  const Section = ({ id, title, stacks }: { id: string; title: string; stacks: TechItem[] }) => (
    <section id={id} className="mt-8 space-y-6 scroll-mt-24">
      <SlideUpText text={title} className="text-2xl font-bold" />
      <AnimatedOnScroll stagger={0.1} repeat className="flex flex-wrap gap-3 justify-start">
        {stacks.map((tech, index) => (
          <TechStackCard
            key={index}
            icon={tech.icon}
            title={tech.title}
            className="animate-item"
          />
        ))}
      </AnimatedOnScroll>
    </section>
  );

  const toKebabCase = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="mt-8">
      {techStacks.map((stack, index) => (
        <Section
          key={index}
          id={toKebabCase(stack.category)}
          title={stack.category}
          stacks={stack.items}
        />
      ))}
    </div>
  );
}
