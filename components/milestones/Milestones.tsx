import { motion } from 'framer-motion';

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

export default function Milestones({ milestones }: { milestones: any }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="exit"
      animate="enter"
      exit="exit"
      className="flex flex-col gap-4"
    >
      {milestones.map((milestone: any, index: number) => (
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
    </motion.div>
  );
}
