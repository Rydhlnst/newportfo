"use client"

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
import { PerWordText, PerWordTextHandle } from "./PerWordText";
import { useEffect, useRef } from "react";

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

    const perWordRef = useRef<PerWordTextHandle>(null);
  
      useEffect(() => {
          perWordRef.current?.triggerAnim();
      }, []);

  return (
    <div className="mt-8">
      <AnimatedOnScroll stagger={0.1} repeat className="flex flex-col space-y-3" onTrigger={() => perWordRef.current?.triggerAnim()} threshold={0.1}>
        <SlideUpText text="Tech Stack" className="text-2xl animate-item" highlightWords={["Tech"]}/>
        <PerWordText ref={perWordRef} highlightWords={["technologies", "frontends", "building", "backends", "databases", "exploring", "Web3"]} className="animate-item text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-thin" text=" Here are the technologies I've worked with across different domains from crafting intuitive frontends to building robust backends, managing databases, and exploring cutting-edge tools and Web3 innovations."/>
      </AnimatedOnScroll>
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
