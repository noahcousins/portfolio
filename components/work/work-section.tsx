import { work } from "@/constants/work";
import WorkCard from "./work-card";

const WorkSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-medium tracking-tight">Work</h2>
      <div className="flex flex-col gap-8">
        {work.map((item) => (
          <WorkCard key={item.name} work={item} />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
