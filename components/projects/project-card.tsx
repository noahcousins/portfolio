import Image from "next/image";
import { projects } from "@/constants/projects";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => {
  return (
    <Link href={project.href} target="_blank" rel="noopener noreferrer">
      <div
        key={project.name}
        className="p-2 border-[1.5px] border-border group rounded-2xl"
      >
        <div className="relative rounded-lg overflow-hidden h-36">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="rounded-lg object-cover group-hover:scale-105 transition-all duration-200 group-hover:opacity-50 group-hover:blur-xs ease-in-out"
          />
          <div className="absolute bottom-4 z-200 left-4 flex items-center gap-3">
            <Image
              src={project.icon}
              alt={`${project.name} icon`}
              width={64}
              height={64}
              className="h-16 w-16 rounded-lg"
            />
            <div className="flex flex-col">
              <p className="text-xl tracking-tight font-semibold drop-shadow-lg text-white">
                {project.name}
              </p>
              <p className="text-xs tracking-tight font-semibold drop-shadow-lg text-white">
                {project.description}
              </p>
              <p className="uppercase text-xs tracking-tight font-semibold drop-shadow-lg text-white mt-1">
                {project.term}
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 z-50 right-4">
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white/90 hover:text-white transition-all duration-200"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background rounded-lg" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
