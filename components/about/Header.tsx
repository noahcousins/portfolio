import { motion } from 'framer-motion';

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

export default function Header({ skills }: { skills: any }) {
  return (
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
        {skills.map((skill: any, index: number) => (
          <motion.li
            variants={skillsFadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="rounded-lg bg-primary px-2 py-1 text-xs text-secondary"
            custom={index}
          >
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
