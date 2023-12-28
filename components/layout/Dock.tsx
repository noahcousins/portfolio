//@ts-nocheck

'use client';

import Link from 'next/link';

import {
  MotionValue,
  motion,
  useMotionValue,
  AnimatePresence,
  useSpring,
  useTransform
} from 'framer-motion';
import { useRef } from 'react';

import { GalleryVerticalEnd, Send, FileDown, User, Home } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

const mainRoutes = [
  {
    label: 'Home',
    icon: Home,
    href: '/'
  },
  {
    label: 'About',
    icon: User,
    href: '/about'
  },
  {
    label: 'Portfolio',
    icon: GalleryVerticalEnd,
    href: '/portfolio'
  },
  {
    label: 'Contact',
    icon: Send,
    href: '/contact'
  },
  {
    label: 'Download my CV',
    icon: FileDown,
    href: '/'
  }
];

export default function Dock() {
  const initialY = 125; // Initial Y position for swipe-up animation
  const animationDelay = 1; // Delay in seconds for the animation to start

  const mouseX = useMotionValue(Infinity);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: initialY, opacity: 1 }} // Initial Y position and opacity
        animate={{ y: 0, opacity: 1 }} // Animate to final Y position and opacity
        exit={{ y: initialY, opacity: 1 }} // Exit animation
        transition={{ delay: animationDelay }} // Delay the animation
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-16 items-end gap-4 rounded-2xl border-[1px] border-white/5 bg-black/95 px-4 pb-3 drop-shadow-xl backdrop-blur-sm hover:border-white/25"
      >
        {mainRoutes.map((route, index) => (
          <AppIcon
            mouseX={mouseX}
            route={route}
            label={route.label}
            icon={route.icon}
            key={index}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

function AppIcon({ mouseX, route }: { mouseX: MotionValue; route: any }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const IconComponent = route.icon;

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <Link href={route.href}>
            <motion.div
              ref={ref}
              style={{ width }}
              className="flex aspect-square w-10 items-center justify-center rounded-full border-[1px] border-white/5 bg-white/5 text-white backdrop-blur-sm transition-colors duration-300 hover:border-white/100 hover:bg-black/95" // Apply flex properties for centering
            >
              <IconComponent style={{ width: '50%', height: '50%' }} />
            </motion.div>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{route.label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
