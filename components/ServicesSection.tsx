"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SiOpenai, SiEthereum, SiFigma, SiNodedotjs, SiWeb3Dotjs } from "react-icons/si";
import Image from "next/image";
import AnimatedOnScroll from "./AnimatedOnScroll";
import { SlideUpText } from "./SlideUpText";
import { Check } from "lucide-react";
import { PerWordText } from "./PerWordText";

const services = [
  {
    icon: <SiWeb3Dotjs className="text-4xl" />,
    title: "Web Development",
    description: "Build fast and responsive websites using modern tech stack.",
    image: "/images/webdev-example.png",
    features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Cross-Browser Support"],
  },
  {
    icon: <SiNodedotjs className="text-4xl" />,
    title: "API Integration",
    description: "Seamless backend & API integration for powerful apps.",
    image: "/images/missing-image.png",
    features: ["RESTful API", "Third-party API Integration", "Authentication & Security", "Error Handling"],
  },
  {
    icon: <SiOpenai className="text-4xl" />,
    title: "AI Integration",
    description: "Embed AI into your apps for automation and smarter solutions.",
    image: "/images/ai-example.png",
    features: ["ChatGPT API Integration", "Content Generation", "AI Automation Workflows", "Custom AI Models"],
  },
  {
    icon: <SiEthereum className="text-4xl" />,
    title: "Web3 Development",
    description: "Develop decentralized applications and smart contracts.",
    image: "/images/missing-image.png",
    features: ["Smart Contract Development", "DApp Deployment", "Wallet Integration", "Tokenomics Design"],
  },
  {
    icon: <SiFigma className="text-4xl" />,
    title: "UI/UX Design",
    description: "Design engaging, modern, and user-friendly interfaces.",
    image: "/images/uiux-example.png",
    features: ["Wireframe & Prototyping", "User Flow Design", "High-Fidelity UI", "Design Handoff with Figma"],
  },
];

interface PerWordTextHandle {
  triggerAnim: () => void;
}

export default function ServicesSection() {
      const perWordRef = useRef<PerWordTextHandle>(null);
    
        useEffect(() => {
            perWordRef.current?.triggerAnim();
        }, []);
  return (
    <section id="services" className="py-16 px-4 space-y-16">
      <AnimatedOnScroll stagger={0.1} className="text-start" repeat>
        <SlideUpText text=" Services" className="text-3xl font-bold mb-4" />
        <PerWordText ref={perWordRef} highlightWords={["Services:", "high-quality", "solutions", "needs", "enhancing", "productivity", "driving", "innovation"]} text="What We Provide from Our Services: Delivering high-quality solutions tailored to your business needs, enhancing productivity, and driving innovation." className="text-muted-foreground text-3xl mx-auto mb-12"/>
      </AnimatedOnScroll>

      {services.map((service, index) => (
        <AnimatedOnScroll
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`} repeat
          stagger={0.1}
        >
          {/* Image with Fallback to Skeleton */}
          <ImageWithFallback src={service.image} alt={service.title} />

          {/* Service Info */}
          <Card className="w-full md:w-1/2 p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-item">
            <CardContent className="flex flex-col items-center gap-4">
              {service.icon}
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground text-sm max-w-md">{service.description}</p>
              <ul className="text-sm text-muted-foreground space-y-1 mt-4 text-left">
                {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                    <Check/>
                    <span>{feature}</span>
                    </li>
                ))}
                </ul>

            </CardContent>
          </Card>
        </AnimatedOnScroll>
      ))}
    </section>
  );
}

// ✅ Image with Fallback Component
function ImageWithFallback({ src, alt }: { src: string; alt: string }) {
  const [isError, setIsError] = useState(false);

  return (
    <div className="w-full md:w-1/2 flex justify-center">
      {!isError ? (
        <Image
          src={src}
          alt={alt}
          width={500}
          height={300}
          className="rounded-xl object-cover shadow-md"
          onError={() => setIsError(true)}
        />
      ) : (
        <Skeleton className="w-[500px] h-[300px] rounded-xl" />
      )}
    </div>
  );
}
