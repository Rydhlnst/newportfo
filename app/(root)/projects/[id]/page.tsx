import ProjectDetails from "@/components/ProjectDetails";
import { projectsData } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const {id} = await params // ✅ pastikan lowercase!
  const project = projectsData[id];

  if (!project) return notFound();

  return <ProjectDetails project={project} />;
}
