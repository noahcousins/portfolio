'use client';

import { useRouter } from 'next/navigation';
export default function Custom404() {
  const router = useRouter();
  router.push('/');
  return <div className="flex h-screen flex-col space-y-8 text-center"></div>;
}
