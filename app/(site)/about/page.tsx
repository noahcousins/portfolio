'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold">
        About
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="waving-hand pl-2"
        >
          👋
        </motion.span>
      </h2>

      <div className="flex max-w-2xl flex-col gap-4 font-light">
        <p className="">
          Hey there, I’m Noah Cousins—a music producer turned web dev. I
          currently work at Drumify as a junior front-end developer. I have a
          Bachelor's in Audio Engineering from Husson University, where I honed
          my knack for detail, troubleshooting, and the art of crafting seamless
          experiences. I also took a web development course while in school.
        </p>
        <p className="">
          At Drumify, I’ve thrived as a front-end developer, diving deep into
          creating responsive websites with exceptional user experiences. My
          toolkit spans HTML, CSS, and a host of libraries and frameworks like
          Next.js, Tailwind CSS, GraphQL, and PostgreSQL. I've specialized in
          e-commerce development, strategically balancing revenue goals with
          user-centric design.
        </p>
        <p className="">
          Before diving into code, I built Noah Cuz, LLC—my music production
          business. Leveraging online platforms, I managed to grab the attention
          of industry giants, accumulating over 100 million streams. My
          entrepreneurial nature ingrained in me a proactive, innovative
          approach, a mindset I carry into every project.
        </p>
        <p className="">
          I bring technical expertise, creative vision, and a relentless drive
          to improve. If you feel we should work together, drop me a line!
        </p>
      </div>
      <Link
        href="/contact"
        className="w-fit items-center text-base text-primary transition-all duration-200 ease-in-out hover:text-primary/60"
      >
        <span className="group flex items-center gap-2">
          <Mail
            className="scale-90 items-center transition-transform duration-200 ease-in-out group-hover:scale-100"
            size={20}
          />
          noahcousins.dev@gmail.com
        </span>
      </Link>
    </div>
  );
}
