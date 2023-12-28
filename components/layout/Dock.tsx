//@ts-nocheck

'use client';

import Link from 'next/link';

import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion';
import { useRef } from 'react';

import { GalleryHorizontalEnd, Send, FileDown, User, Home } from 'lucide-react';

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
    icon: GalleryHorizontalEnd,
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
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-16 items-end gap-4 rounded-2xl border-[1px] border-foreground/5 bg-background/95 px-4 pb-3 backdrop-blur-2xl hover:border-foreground/25"
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
  );
}

function AppIcon({
  mouseX,
  icon,
  label,
  route
}: {
  mouseX: MotionValue;
  icon: any;
  label: string;
  route: any;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const IconComponent = icon;

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <Link href={route.href}>
            <motion.div
              ref={ref}
              style={{ width }}
              className="flex aspect-square w-10 items-center justify-center rounded-full border-[1px] border-foreground/5 bg-foreground/5 backdrop-blur-2xl transition-colors duration-300 hover:border-foreground/100 hover:bg-background/95" // Apply flex properties for centering
            >
              <IconComponent style={{ width: '50%', height: '50%' }} />
            </motion.div>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
