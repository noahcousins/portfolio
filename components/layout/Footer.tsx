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

  const footerLinks = [
    { name: 'Github', href: 'https://github.com/noahcousins' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/noahcousins' },
    { name: 'Twitter', href: 'https://www.twitter.com/noahwebdev' }
  ];

  return (
    <footer className="flex w-full flex-col justify-center gap-2 bg-black p-8 text-center text-xs">
      <div className="mx-auto flex w-full max-w-4xl flex-row justify-between gap-8 sm:gap-0">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-4">
            <Link className="cursor-pointer" href="/">
              <Logo />
            </Link>
            <div className="flex flex-col gap-1">
              {footerLinks.map((link, i) => (
                <Link target="_blank" key={i} href={link.href}>
                  <p className="w-fit border-b-[1px] border-white/60 text-sm text-white transition-all duration-100 ease-in-out hover:border-white">
                    {link.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
