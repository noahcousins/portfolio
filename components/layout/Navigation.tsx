import AuthButtons from './AuthButtons';
import MainAccountTab from './MainAccountTab';
import NavLinks from '@/components/layout/NavLinks';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import MobileSidebar from '@/components/layout/MobileSidebar';
import { GrGithub } from 'react-icons/gr';

import UAPoliLogo from '../../public/uapoli-light.svg';
import { Github } from 'lucide-react';
import Logo from './Logo';
import NavLogo from './NavLogo';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

export default async function Navigation() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        }
      }
    }
  );

  const {
    data: { user }
  } = await supabase.auth.getUser();

  let profileData = null;
  let userRoleData = null;

  if (user) {
    const profileQuery = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();

    const userRoleQuery = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .single();

    profileData = profileQuery.data || null;
    userRoleData = userRoleQuery.data || null;
  }

  const socialLinks = [
    {
      alt: 'GitHub logo',
      imageSrc: '/github-logo.svg',
      href: 'https://github.com/noahcousins'
    },
    {
      alt: 'LinkedIn logo',
      imageSrc: '/linkedin-logo.svg',
      href: 'https://linkedin.com/noahcousins'
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
        {/* <div className="hidden lg:flex">
          <NavLinks />
        </div> */}

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
