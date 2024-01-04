import { projectsData } from '@/src/components/projects/data';

import Projects from '@/src/components/projects/Projects';

export default function ProjectsPage() {
  return <Projects projects={projectsData} />;
}
