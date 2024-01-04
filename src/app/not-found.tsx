'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, []);
  return (
    <div className="flex h-screen flex-col space-y-8 text-center">
      <p className="text-center opacity-0">Not found</p>
    </div>
  );
}
