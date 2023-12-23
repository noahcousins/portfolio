'use client';

import { motion } from 'framer-motion';

const Logo = () => {
  const flickerVariants = [
    'flicker-fastest',
    'flicker-slowest',
    'flicker-slow',
    'flicker-fast'
  ];

  const getRandomFlickerClass = () => {
    // Generate a random index within the classes array
    const randomIndex = Math.floor(Math.random() * flickerVariants.length);
    return flickerVariants[randomIndex];
  };
  return (
    <motion.svg
      width="125"
      height="10"
      viewBox="0 0 125 10"
      //   fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-white [perspective:1000px]"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        initial={{ rotateY: '0deg' }}
        // Apply the random flicker class
        animate={{
          rotateY: 0,
          transition: {
            delay: 0.5,
            duration: 1,
            type: 'spring',
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 5
          }
        }}
        d="M0,0.27h2.92l4.91,6.55V0.27h2.53v9.65H7.41L2.51,3.33v6.59H0V0.27z"
      />
      <motion.path
        initial={{ rotateY: '0deg' }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 0.7,
            duration: 1,
            type: 'spring',
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 5
          }
        }}
        d="M11.31,5.1c0-3.13,2.49-5.1,5.88-5.1c3.36,0,5.86,1.96,5.86,5.1c0,3.12-2.5,5.1-5.86,5.1
		C13.8,10.19,11.31,8.22,11.31,5.1z M17.19,8.01c1.9,0,3.36-1.04,3.36-2.92s-1.47-2.92-3.36-2.92c-1.91,0-3.36,1.04-3.36,2.92
		S15.28,8.01,17.19,8.01z"
      />
      <motion.path
        initial={{ rotateY: '0deg' }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 0.9,
            duration: 1,
            type: 'spring',
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 5
          }
        }}
        d="M26.73,0.27h3.64l3.94,9.65H31.6l-0.69-1.79h-4.72L25.5,9.92h-2.72L26.73,0.27z M30.13,6.08l-1.37-3.62h-0.42
		l-1.37,3.62H30.13z"
      />
      <motion.path
        initial={{ rotateY: '0deg' }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 1.1,
            duration: 1,
            type: 'spring',
            stifness: 200,
            damping: 40,
            velocity: 10,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 5
          }
        }}
        d="M42.14,6.16h-4.68v3.76h-2.53V0.27h2.53v3.74h4.68V0.27h2.53v9.65h-2.53V6.16z"
      />
      <motion.path
        initial={{ rotateY: '0deg' }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 1.3,
            duration: 1,
            type: 'spring',
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 5
          }
        }}
        d="M49.13,5.1C49.13,1.96,51.62,0,55,0c2.57,0,4.65,1.21,5.45,3.17L58.1,3.99C57.62,2.92,56.44,2.27,55,2.27
		c-1.91,0-3.36,1.04-3.36,2.82S53.09,7.92,55,7.92c1.44,0,2.62-0.65,3.09-1.72l2.35,0.82c-0.79,1.96-2.88,3.17-5.45,3.17
		C51.62,10.19,49.13,8.23,49.13,5.1z"
      />
      <motion.path
        initial={{ rotateY: '0deg' }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 1.5,
            duration: 1,
            type: 'spring',
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 5
          }
        }}
        d="M60.93,5.1c0-3.13,2.49-5.1,5.88-5.1c3.36,0,5.86,1.96,5.86,5.1c0,3.12-2.5,5.1-5.86,5.1
		C63.41,10.19,60.93,8.22,60.93,5.1z M66.8,8.01c1.9,0,3.36-1.04,3.36-2.92S68.7,2.18,66.8,2.18c-1.91,0-3.36,1.04-3.36,2.92
		S64.89,8.01,66.8,8.01z"
      />
      <motion.path
        initial={{ rotateY: '0deg' }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 1.7,
            duration: 1,
            type: 'spring',
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 5
          }
        }}
        d="M73.53,6.56V0.27h2.53v5.97c0,1.37,0.89,1.77,2.34,1.77c1.45,0,2.34-0.4,2.34-1.77V0.27h2.53v6.29
		c0,2.62-2,3.63-4.87,3.63C75.53,10.19,73.53,9.18,73.53,6.56z"
      />
      <motion.path
        initial={{ rotateY: '0deg' }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 1.9,
            duration: 1,
            type: 'spring',
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 5
          }
        }}
        d="M84.08,7.4l2.57-0.78c0.3,1.1,1.65,1.56,3,1.56c1.56,0,2.25-0.36,2.25-1.08c0-0.93-1.21-0.91-2.84-0.98
		c-2.27-0.09-4.65-0.26-4.65-2.9C84.4,1.29,86.16,0,89.04,0c2.76,0,4.38,0.83,5.04,2.54l-2.5,0.62c-0.28-0.75-1.12-1.13-2.51-1.13
		c-1.49,0-2.23,0.36-2.23,0.97c0,0.74,1.09,0.75,2.62,0.82c2.33,0.11,4.95,0.27,4.95,3.04c0,2.18-1.67,3.33-4.89,3.33
		C86.33,10.19,84.71,9.28,84.08,7.4z"
      />
      <motion.path
        initial={{ rotateY: '0deg' }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 2.1,
            duration: 1,
            type: 'spring',
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 5
          }
        }}
        d="M95.39,0.27h2.5v9.65h-2.5V0.27z"
      />
      <motion.path
        initial={{ rotateY: '0deg' }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 2.3,
            duration: 1,
            type: 'spring',
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 5
          }
        }}
        d="M99.25,0.27h2.92l4.91,6.55V0.27h2.53v9.65h-2.94l-4.89-6.59v6.59h-2.51V0.27z"
      />
      {/* <motion.path
        initial={{ rotateY: '270deg' }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 2.5,
            duration: 1,
            type: 'spring',
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 5
          }
        }}
        d="M155.14 11.984V1.104H156.356V11.984H155.14ZM151.492 1.408V0.304H160.004V1.408H151.492Z"
        
      /> */}
      <motion.path
        initial={{ rotateY: '0deg' }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 2.7,
            duration: 1,
            type: 'spring',
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 5
          }
        }}
        d="M110.52,7.4l2.57-0.78c0.3,1.1,1.65,1.56,3,1.56c1.56,0,2.25-0.36,2.25-1.08c0-0.93-1.21-0.91-2.84-0.98
		c-2.27-0.09-4.65-0.26-4.65-2.9c0-1.92,1.76-3.21,4.64-3.21c2.76,0,4.38,0.83,5.04,2.54l-2.5,0.62c-0.28-0.75-1.12-1.13-2.51-1.13
		c-1.49,0-2.23,0.36-2.23,0.97c0,0.74,1.09,0.75,2.62,0.82c2.33,0.11,4.95,0.27,4.95,3.04c0,2.18-1.67,3.33-4.89,3.33
		C112.78,10.19,111.16,9.28,110.52,7.4z"
      />
    </motion.svg>
  );
};

export default Logo;
