import ProjectDetails from "@/components/ProjectDetails";
import { projectsData } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ProjectPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params; 
  const project = projectsData[id];

  if (!project) return notFound();

  return <ProjectDetails project={project} />;
}
