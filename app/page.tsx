"use client";

import ContactBadges from "@/components/app/contact-badges";
import ProjectsSection from "@/components/projects/projects-section";
import WorkSection from "@/components/work/work-section";
import Link from "next/link";
import { motion } from "motion/react";
import AboutSection from "@/components/app/about-section";

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const FadeInSection = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={fadeInVariants.initial}
    animate={fadeInVariants.animate}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="flex flex-col gap-y-10 max-w-[500px] w-full">
      <FadeInSection delay={0}>
        <AboutSection />
      </FadeInSection>

      <FadeInSection delay={0.1} className="text-sm">
        I&apos;m a developer & designer based in Maine.
      </FadeInSection>

      <FadeInSection delay={0.2} className="text-sm">
        Currently, I lead development at{" "}
        <Link
          className="font-semibold animated-underline"
          target="_blank"
          href="https://www.drumify.com"
        >
          Drumify
        </Link>
        , a music sample marketplace for producers.
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <ContactBadges />
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <WorkSection />
      </FadeInSection>

      <FadeInSection delay={0.5}>
        <ProjectsSection />
      </FadeInSection>
    </main>
  );
}
