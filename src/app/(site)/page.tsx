'use client';

import { skillsData } from '@/src/components/skills/data';
import { projectsData } from '@/src/components/projects/data';
import { milestonesData } from '@/src/components/milestones/data';

import Introduction from '@/src/components/introduction/Introduction';
import Projects from '@/src/components/projects/Projects';
import Milestones from '@/src/components/milestones/Milestones';

import { Separator } from '@/src/components/ui/separator';

export default function Home() {
  return (
    <div className={'flex flex-col gap-8'}>
      <Introduction skills={skillsData} />

      <Separator className="w-full" />

      <Projects projects={projectsData} />

      {/* <Separator className="w-full" />

      <Milestones milestones={milestonesData} /> */}
    </div>
  );
}
