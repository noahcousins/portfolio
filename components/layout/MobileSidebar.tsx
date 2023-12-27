import ModeToggle from '@/components/ModeToggle';
import NavLink from '@/components/layout/NavLink';
import SidebarAuthButtons from '@/components/layout/SidebarAuthButtons';
import SignOutButton from '@/components/layout/SignOutButton';
import SidebarContent from '@/components/layout/sidebar/SidebarContent';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import {
  GalleryHorizontalEnd,
  ScrollText,
  Send,
  FileDown,
  User,
  Settings,
  Gavel
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import NavLogo from './NavLogo';

const mainRoutes = [
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
    href: '/hearings'
  },
  {
    label: 'Download my CV',
    icon: FileDown,
    href: '/'
  }
];

export default function MobileSidebar() {
  // console.log("Check for cookie", sessionUser);

  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={24} className="text-white" />
      </SheetTrigger>
      <SheetContent className="flex w-[300px] flex-col gap-4" side={'left'}>
        <SheetHeader>
          <Link className="visible lg:hidden" href="/">
            <NavLogo />
          </Link>
        </SheetHeader>

        <div className="w-fit space-y-1 rounded-2xl bg-transparent transition-colors hover:bg-background/40">
          {mainRoutes.map((route) => (
            <NavLink key={route.href} href={route.href}>
              <div className="group flex w-44 flex-1 cursor-pointer items-center justify-start rounded-lg p-3 text-sm transition hover:bg-white/10">
                <route.icon size={20} className="mr-3" />
                {route.label}
              </div>
            </NavLink>
          ))}
        </div>
        {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle> */}
        {/* <SheetDescription>
          </SheetDescription> */}
      </SheetContent>
    </Sheet>
  );
}
