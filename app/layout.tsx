import './globals.css';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import Sidebar from '@/components/layout/Sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { GeistSans } from 'geist/font';

export const metadata = {
  title: 'UAPoli',
  description:
    'A bipartisan congressional outreach platform advocating for UAP disclosure.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body
        className={`bg-background focus-visible:ring-transparent dark:bg-neutral-900`}
      >
        <main className="mx-auto flex min-h-screen flex-col items-center">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />{' '}
            <div className="flex w-full px-4 py-8 tracking-tight xl:px-0">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
