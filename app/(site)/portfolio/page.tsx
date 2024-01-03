import { projectsData } from '@/components/projects/data';

import Projects from '@/components/projects/Projects';

export default function ProjectsPage() {
  return <Projects projects={projectsData} />;
}
