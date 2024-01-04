'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode } from 'react';

export default function NavLink({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  let segment = useSelectedLayoutSegment();
  let active = href === `/${segment}`;
  return (
    <Link className={active ? 'font-medium' : 'font-light'} href={href}>
      {children}
    </Link>
  );
}
