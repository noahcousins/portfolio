'use client';

import { skillsData } from '@/components/skills/data';
import { projectsData } from '@/components/projects/data';
import { milestonesData } from '@/components/milestones/data';

import Header from '@/components/about/Header';
import Projects from '@/components/projects/Projects';
import Milestones from '@/components/milestones/Milestones';

import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className={'flex flex-col gap-8'}>
      <Header skills={skillsData} />

      <Separator className="w-full" />

      <Projects projects={projectsData} />

      {/* <Separator className="w-full" />

      <Milestones milestones={milestonesData} /> */}
    </div>
  );
}
