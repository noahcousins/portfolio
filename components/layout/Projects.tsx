import { motion } from 'framer-motion';

const projects = [
  {
    projectName: 'Drumify',
    imageAlt: 'Drumify image',
    imageSrc: '',
    href: 'https://drumify.com',
    projectDescription:
      'During my time at Drumify, I contributed to everything design, product, and marketing; launching their first MVP, redefining their brand and visual identity, leading and executing various marketing campaigns, and generally establishing it as the new way to work with session musicians.    '
  },
  {
    projectName: 'soundbit',
    imageAlt: 'soundbit image',
    imageSrc: '',
    href: 'https://soundbit.io',
    projectDescription: 'Lorem ipsum'
  },
  {
    projectName: 'UAPoli',
    imageAlt: 'UAPoli image',
    imageSrc: '',
    href: 'https://uapoli.com',
    projectDescription: 'Lorem ipsum'
  }
];

const Projects = () => {
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

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">Projects</h2>
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
            <div className="h-64 w-full rounded-3xl bg-primary/25 lg:w-1/2"></div>
            <div className="flex w-full flex-col gap-4 lg:w-1/2">
              <h3 className="text-4xl font-bold">{project.projectName}</h3>
              <p className="font-light">{project.projectDescription}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
