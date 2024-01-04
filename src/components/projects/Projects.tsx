'use client';

import { motion } from 'framer-motion';
import { ExternalLink, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const popInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15
    }
  }
};

export default function Projects({ projects }: { projects: any }) {
  return (
    <div className="flex flex-col gap-16">
      {projects.map((project: any, i: number) => (
        <motion.div
          variants={popInAnimationVariants}
          viewport={{ once: true }}
          initial="initial"
          whileInView="animate"
          key={i}
          className="flex w-full flex-col gap-8 drop-shadow-2xl lg:flex-row"
        >
          <div className="grid w-full grid-cols-1 gap-10 sm:w-3/4 lg:w-1/2">
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
          <div className="flex w-full flex-col gap-4 lg:w-1/2">
            <div className="flex gap-3">
              <Link target="_blank" href={project.href}>
                <div className="aspect-square w-12 overflow-hidden rounded-lg bg-primary/5">
                  <Image
                    alt={`${project.name} logo`}
                    height={1000}
                    className="h-full scale-100 duration-200 hover:scale-110"
                    width={1000}
                    src={project.logoSrc}
                  />
                </div>
              </Link>

              <div className="flex flex-col">
                <Link
                  className="group flex cursor-pointer items-center gap-1 hover:underline"
                  target="_blank"
                  href={project.href}
                >
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <ExternalLink className="" size={20} />
                </Link>
                <p className="text-sm uppercase">
                  {project.role}
                  {' / '}
                  {project.term}
                </p>
              </div>
            </div>

            <p className="w-full text-sm font-light sm:w-3/4 lg:w-full">
              {project.description}
            </p>
            <div className="flex gap-2">
              {project.technologies
                .slice(0, 5)
                .map((technology: any, i: number) => (
                  <p
                    key={i}
                    className="rounded-lg bg-primary px-2 py-1 text-xs text-secondary"
                  >
                    {technology}
                  </p>
                ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
