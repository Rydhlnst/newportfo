import { ProjectData, techIconMap } from '@/lib/data';
import React from 'react'
import Gallery from './ImagesProject';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import { Calendar, SquareCheck, UsersRound } from 'lucide-react';

type ProjectDetailsProps = {
  project: ProjectData;
};

const ProjectDetails = ({project}: ProjectDetailsProps) => {
  return (
    <div className="mt-8 flex flex-col items-start space-y-6">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground mt-2">{project.description}</p>
        <div className="text-sm text-muted-foreground mt-2 space-x-4 flex flex-wrap">
        <span className="flex flex-row space-x-3 items-center justify-center"><SquareCheck/><span>{project.isFullstack ? "Fullstack Developer" : "Frontend Developer"}</span></span>
        <span className="flex flex-row space-x-3 items-center justify-center"><Calendar/><span>{project.timeline}</span></span>
        <span className="flex flex-row space-x-3 items-center justify-center"><UsersRound/><span>{project.isSolo ? "Solo Project": "Team Project"}</span></span>
    </div>

      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full">
        {/* Left: Gallery + Tech */}
        <div className="flex-1 space-y-6">
          <Gallery images={project.images} title={project.title} />
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => {
                const Icon = techIconMap[tech];
                return (
                <Badge
                    key={tech}
                    variant="outline"
                    className="flex items-center gap-1 px-3 py-1"
                >
                    {Icon && <Icon className="w-4 h-4 mr-1" />}
                    {tech}
                </Badge>
                );
            })}
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
  )
}

export default ProjectDetails
