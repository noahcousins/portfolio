"use client";

import Image from "next/image";
import { work as workData } from "@/constants/work";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const WorkCard = ({ work }: { work: (typeof workData)[number] }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Link
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold tracking-tight hover:underline"
          >
            {work.name}
          </Link>
          <p className="text-sm text-muted-foreground">{work.description}</p>
        </div>
        <span className="text-xs text-muted-foreground uppercase tracking-wide">
          {work.term}
        </span>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {work.images.map((image, index) => {
            const isGif = image.endsWith(".gif");
            return (
              <CarouselItem key={index} className="pl-2 basis-[85%]">
                <div className="relative aspect-[1499/854] rounded-xl overflow-hidden border border-border">
                  <Image
                    src={image}
                    alt={`${work.name} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized={isGif}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious
          variant={work.darkButtons ? "default" : "outline"}
          className={
            work.darkButtons
              ? "left-2 !bg-black !border-neutral-800 hover:!bg-neutral-900 !text-white"
              : "left-2 bg-background/80 backdrop-blur-sm border-border hover:bg-background"
          }
        />
        <CarouselNext
          variant={work.darkButtons ? "default" : "outline"}
          className={
            work.darkButtons
              ? "right-2 !bg-black !border-neutral-800 hover:!bg-neutral-900 !text-white"
              : "right-2 bg-background/80 backdrop-blur-sm border-border hover:bg-background"
          }
        />
      </Carousel>
    </div>
  );
};

export default WorkCard;
