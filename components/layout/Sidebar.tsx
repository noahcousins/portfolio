import ModeToggle from '@/components/ModeToggle';
import NavLink from '@/components/layout/NavLink';
import SidebarAuthButtons from '@/components/layout/SidebarAuthButtons';
import SignOutButton from '@/components/layout/SignOutButton';
import SidebarContent from '@/components/layout/sidebar/SidebarContent';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Users2,
  ScrollText,
  Compass,
  Mic,
  Text,
  Settings,
  Gavel
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const topRoutes = [
  {
    label: 'Explore',
    icon: Compass,
    color: 'text-emerald-500',
    href: '/explore'
  }
];

const mainRoutes = [
  {
    label: 'Politicians',
    icon: Users2,
    href: '/politicians',
    color: 'text-sky-500'
  },
  {
    label: 'Statements',
    icon: Mic,
    href: '/statements',
    color: 'text-violet-500'
  },
  {
    label: 'Legislation',
    icon: ScrollText,
    color: 'text-pink-700',
    href: '/legislation'
  },
  {
    label: 'Hearings',
    icon: Gavel,
    color: 'text-orange-700',
    href: '/hearings'
  }
];

const bottomRoutes = [
  {
    label: 'About',
    icon: Text,
    color: 'text-emerald-500',
    href: '/about'
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings'
  }
];

export default function Sidebar() {
  // console.log("Check for cookie", sessionUser);

  return (
    <div className="hidden sticky w-1/6 bg-gradient-to-b from-white/5 to-transparent top-0 z-30 lg:flex flex-col gap-4 leading-none transition">
      <div className="flex sticky top-0 flex-col justify-between">
        <Link href="/">
          <div className="p-5">
            <Image
              width={80}
              height={20.96}
              alt="UAPoli logo"
              src="/uapoli_logo_nav.png"
            />
          </div>
        </Link>
        <SidebarContent />
      </div>
    </div>
  );
}
