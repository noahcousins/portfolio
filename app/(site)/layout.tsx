import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/layout/Navigation';
import Sidebar from '@/components/layout/Sidebar';

import { Toaster } from '@/components/ui/toaster';

export const metadata = {
  title: 'Noah Cousins',
  description: 'Frontend Web Developer'
};

export default function SiteLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full">{children}</div>
    </div>
  );
}
