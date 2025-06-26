import Image from "next/image";
import { work as workData } from "@/constants/work";
import Link from "next/link";

const WorkCard = ({ work }: { work: (typeof workData)[number] }) => {
  return (
    <Link href={work.href} target="_blank" rel="noopener noreferrer">
      <div
        key={work.name}
        className="p-2 border-[1.5px] group hover:bg-primary/[0.02] transition-colors duration-200 border-border rounded-2xl"
      >
        <div className="relative rounded-lg isolate">
          <Image
            src={work.image}
            alt={work.imageAlt}
            width={work.imageWidth}
            height={work.imageHeight}
            className="rounded-lg"
          />
          <div className="absolute group-hover:hidden transition-opacity duration-200 bottom-4 z-200 left-4 flex flex-col">
            <p className="text-xl tracking-tight font-semibold drop-shadow-lg text-white">
              {work.name}
            </p>
            <p className="text-xs tracking-tight font-semibold drop-shadow-lg text-white">
              {work.description}
            </p>
          </div>
          <p className="absolute group-hover:hidden bottom-4 z-50 uppercase right-4 text-xs tracking-tight font-semibold drop-shadow-lg text-white">
            {work.term}
          </p>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:rounded-lg via-transparent to-background group-hover:hidden group-hover:opacity-0 transition-opacity duration-200" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:rounded-lg via-transparent to-background group-hover:hidden group-hover:opacity-0 transition-opacity duration-200" />
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
