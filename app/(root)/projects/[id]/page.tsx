import ProjectDetails from "@/components/ProjectDetails";
import { projectsData } from "@/lib/data";
import { notFound } from "next/navigation";

type Params = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: Params) {
  const { id } = params;
  const project = projectsData[id];

  if (!project) return notFound();

  return <ProjectDetails project={project} />;
}
