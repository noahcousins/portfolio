import { projects } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./project-card";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-medium tracking-tight">Projects</h2>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
