import NavLink from '@/components/layout/NavLink';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { GalleryHorizontalEnd, Send, FileDown, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import NavLogo from '../NavLogo';

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
    href: '/contact'
  },
  {
    label: 'Download my CV',
    icon: FileDown,
    href: '/'
  }
];

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={24} className="text-white" />
      </SheetTrigger>
      <SheetContent className="flex w-[300px] flex-col gap-8" side={'left'}>
        <SheetHeader>
          <Link className="visible lg:hidden" href="/">
            <NavLogo />
          </Link>
        </SheetHeader>

        <div className="flex w-fit flex-col gap-4 space-y-1 rounded-2xl bg-transparent transition-colors hover:bg-background/40">
          {mainRoutes.map((route) => (
            <NavLink key={route.href} href={route.href}>
              <div className="group flex w-fit flex-1 cursor-pointer items-center justify-start rounded-lg text-2xl">
                <route.icon size={36} className="mr-3" />
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
