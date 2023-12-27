'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SocialLinks({ socialLinks }: { socialLinks: any }) {
  const linksFadeInAnimationVariants = {
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.02 * index
      }
    })
  };

  return (
    <div className="flex gap-4">
      {socialLinks.map((socialLink: any, index: number) => (
        <motion.div
          variants={linksFadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
          className=""
        >
          <Link target="_blank" href={socialLink.href}>
            <Image
              className="h-6 opacity-100 transition-all duration-300 ease-in-out hover:opacity-60 active:scale-75 active:opacity-80"
              width={28}
              height={28}
              alt={socialLink.alt}
              src={socialLink.imageSrc}
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
