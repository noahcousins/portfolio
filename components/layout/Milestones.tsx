import { motion } from 'framer-motion';

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
      opacity: { delay: 1 + 0.02 * index },
      y: { delay: 1 + 0.1 * index }
    }
  }),
  exit: {
    opacity: 0,
    y: 10
  }
};

const Milestones = () => {
  return (
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
    </motion.div>
  );
};

export default Milestones;
