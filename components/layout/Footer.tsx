'use client';

import { useState } from 'react';
import { CreditCardIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import Link from 'next/link';
import Image from 'next/image';

import UAPoliLogo from '../../public/uapoli-light.svg';
import Logo from './Logo';
import ModeToggle from '../ModeToggle';

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  const iconVariants = {
    hovered: {
      scale: 1.1,
      transition: {
        duration: 0.1,
        yoyo: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <footer className="flex w-full flex-col justify-center gap-2 bg-background p-8 text-center text-xs">
      <div className="mx-auto flex w-full max-w-4xl flex-row justify-between gap-8 sm:gap-0">
        <div className="flex w-full items-center justify-between">
          <Link className="cursor-pointer" href="/">
            <Logo />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
