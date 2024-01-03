import { projectsData } from '@/components/projects/data';

import Image from 'next/image';
import Link from 'next/link';

import { ExternalLink } from 'lucide-react';

export default function Page({ params }: { params: any }) {
  const { id } = params;
  const getWork = [...projectsData].find((project) => project.handle === id);

  const project = getWork;

  if (!project) return <div className="">{id} not dfound</div>;
  return (
    <div>
      <div className="flex w-full flex-col gap-8 drop-shadow-2xl">
        <div className="grid w-full grid-cols-1 gap-10">
          <Link href={`/portfolio/${project.handle}`}>
            <div className="rounded-lg shadow-lg">
              <Image
                src={project.imageSrc}
                alt={project.name}
                width="1000"
                height="500"
                className="overflow-hidden rounded-lg"
              />
            </div>
          </Link>
        </div>
        <div className="group flex w-full flex-col gap-4">
          <div className="flex gap-3">
            <Link target="_blank" href={project.href}>
              <div className="aspect-square w-12 overflow-hidden rounded-lg bg-primary/5">
                <Image
                  alt={`${project.name} logo`}
                  height={1000}
                  className="h-full"
                  width={1000}
                  src={project.logoSrc}
                />
              </div>
            </Link>

            <div className="flex flex-col">
              <Link
                className="flex cursor-pointer items-center gap-1 hover:underline"
                target="_blank"
                href={project.href}
              >
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <ExternalLink className="hidden group-hover:flex" size={20} />
              </Link>
              <p className="text-sm uppercase">
                {project.role}
                {' / '}
                {project.term}
              </p>
            </div>
          </div>

          <p className="w-full text-sm font-light">{project.description}</p>
          <div className="flex gap-2">
            {project.technologies.map((technology: any, i: number) => (
              <p
                key={i}
                className="rounded-lg bg-white/5 px-2 py-1 text-xs text-primary"
              >
                {technology}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
