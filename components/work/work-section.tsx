import { work } from "@/constants/work";
import Image from "next/image";
import Link from "next/link";
import WorkCard from "./work-card";

const WorkSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-medium tracking-tight">Work</h2>
      <div className="flex flex-col gap-4">
        {work.map((work) => (
          <WorkCard key={work.name} work={work} />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
