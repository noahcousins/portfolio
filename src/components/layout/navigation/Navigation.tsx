import Link from 'next/link';
import MobileSidebar from '@/src/components/layout/sidebar/MobileSidebar';

import NavLogo from '../../logo/NavLogo';
import SocialLinks from './SocialLinks';

export default async function Navigation() {
  const socialLinks = [
    {
      alt: 'GitHub logo',
      imageSrc: '/github-logo.svg',
      href: 'https://github.com/noahcousins'
    },
    {
      alt: 'LinkedIn logo',
      imageSrc: '/linkedin-logo.svg',
      href: 'https://linkedin.com/in/noahcousins'
    }
  ];

  return (
    <nav className="sticky top-0 z-50 flex h-16 w-full justify-center bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/90 dark:supports-[backdrop-filter]:bg-black/60">
      <div className="flex w-full max-w-4xl items-center justify-between px-4 py-3 text-sm xl:px-0">
        <div className="flex items-center lg:hidden">
          <MobileSidebar />
        </div>
        <Link className="hidden cursor-pointer lg:flex" href="/">
          <NavLogo />
        </Link>
        <Link className="visible lg:hidden" href="/">
          <NavLogo />
        </Link>
        <div className="flex gap-4">
          <SocialLinks socialLinks={socialLinks} />
        </div>
      </div>
    </nav>
  );
}
