'use client';

import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15
    }
  }
};

const skillsFadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index
    }
  })
};

const milestones = [
  {
    year: '2015',
    description:
      'I taught myself basic HTML and CSS making websites to sell my music.'
  },
  {
    year: '2018',
    description:
      'I reinforced those skills with a web development elective while obtaining my Bachelors in Science of Communications with a focus in Audio Engineering.',
    boldText: ['Bachelors in Science of Communications', 'Audio Engineering']
  },
  {
    year: '2022',
    description:
      'From a desire to learn how to build complex web apps, I learned React and Next.js. I used Udemy and FreeCodeCamp to learn.',
    boldText: ['React', 'Next.js']
  },
  {
    year: '2023',
    description:
      'I built Drumify with the team as the junior developer. On the side, I developed soundbit and UAPoli.',
    boldText: ['Drumify', 'soundbit', 'UAPoli']
  }
];
const containerVariants = {
  enter: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  },
  exit: {
    opacity: 0
  }
};

const childVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  enter: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      opacity: { delay: 1 + 0.02 * index }, // 1-second initial delay + staggered delay based on index
      y: { delay: 1 + 0.1 * index } // 1-second initial delay + staggered delay based on index
    }
  }),
  exit: {
    opacity: 0,
    y: 10
  }
};

const skills = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Git' },
  { name: 'GraphQL' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Node.js' },
  { name: 'PostgreSQL' },
  { name: 'Supabase' },
  { name: 'Firebase' },
  { name: 'Tailwind CSS' },
  { name: 'Framer Motion' },
  { name: 'AWS' }
];

export default function Home() {
  const projects = [
    {
      name: 'Drumify',
      imageAlt: 'Drumify image',
      imageSrc: '',
      href: 'https://drumify.com',
      role: 'Product Designer',
      term: '2021 - Present',
      description:
        'At Drumify, I play a pivotal role across design, product development, and marketing. I spearhead the launch of their subscription model, revamped their brand and visual identity, direct diverse marketing initiatives, and successfully position the platform as the fresh approach to collaborating with session musicians.'
    }
    // {
    //   name: 'soundbit',
    //   imageAlt: 'soundbit image',
    //   imageSrc: '',
    //   term: '2023 - Present',
    //   role: 'Fullstack',
    //   href: 'https://soundbit.io',
    //   description: 'Lorem ipsum'
    // },
    // {
    //   name: 'UAPoli',
    //   imageAlt: 'UAPoli image',
    //   imageSrc: '',
    //   term: '2023 - Present',
    //   role: 'Fullstack',
    //   href: 'https://uapoli.com',
    //   description: 'Lorem ipsum'
    // }
  ];

  return (
    <div className={'mx-auto flex max-w-4xl flex-col gap-8'}>
      <div className="flex w-full flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full items-center gap-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-normal md:text-5xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=""
            >
              What's{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=""
            >
              poppin',{' '}
            </motion.span>
            <br />{' '}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=""
            >
              {' '}
              I'm
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-bold"
            >
              Noah
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="waving-hand pl-2"
            >
              👋
            </motion.span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative aspect-square h-full overflow-hidden rounded-full bg-primary/5"
          >
            <motion.img
              initial={{ y: 0, opacity: 0, scale: 1.1 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              height={105}
              className="absolute bottom-0"
              width={105}
              alt="Noah Cousins headshot"
              src="/noah_memoji_headshot.png"
            />
          </motion.div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-sm font-light sm:text-base lg:text-xl"
        >
          As a music producer, I needed to learn how to code. <br />{' '}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="font-bold"
          >
            So I learned how to code.
          </motion.span>
        </motion.p>
        <ul className="justify-left flex max-w-xl flex-wrap gap-2 py-2 text-xs">
          {skills.map((skill, index) => (
            <motion.li
              variants={skillsFadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="rounded-xl border-[1px] border-primary bg-primary px-2 py-1 text-secondary"
              custom={index}
            >
              {skill.name}
            </motion.li>
          ))}
        </ul>
      </div>

      <Separator className="w-full" />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <motion.div
              variants={fadeInAnimationVariants}
              viewport={{ once: true }}
              initial="initial"
              whileInView="animate"
              key={i}
              className="flex w-full flex-col gap-8 lg:flex-row"
            >
              <div className="h-64 w-full overflow-hidden rounded-3xl bg-primary/25 lg:w-1/2">
                <Image
                  alt="Drumify Hero"
                  height={360}
                  className="h-full"
                  width={640}
                  src="/drumify-hero.jpg"
                />
              </div>
              <div className="flex w-full flex-col gap-4 lg:w-1/2">
                <div className="flex gap-3">
                  <div className="aspect-square w-12 overflow-hidden rounded-2xl bg-primary/5">
                    <Image
                      alt="Drumify Hero"
                      height={1000}
                      className="h-full"
                      width={1000}
                      src="/drumify_logo.png"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold">{project.name}</h3>
                    <p className="text-sm uppercase">
                      {project.role}
                      {' / '}
                      {project.term}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-normal">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* <Separator className="w-full" />

      <motion.div
        variants={containerVariants}
        initial="exit"
        animate="enter"
        exit="exit"
        className="flex flex-col gap-4"
      >
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            variants={childVariants}
            className="flex scale-100 flex-col gap-2 rounded-2xl border-[1px] border-primary/10 bg-primary/5 p-4 transition-transform duration-200 ease-in-out hover:scale-105"
          >
            <p className="text-sm font-light uppercase text-primary/80">
              {milestone.year}
            </p>
            <p className="">{milestone.description}</p>
          </motion.div>
        ))}
      </motion.div> */}
    </div>
  );
}
