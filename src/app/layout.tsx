import Dock from '@/src/components/layout/navigation/Dock';
import './globals.css';
import Footer from '@/src/components/layout/navigation/Footer';
import Navigation from '@/src/components/layout/navigation/Navigation';
import { ThemeProvider } from '@/src/components/theme-provider';
import { Toaster } from '@/src/components/ui/sonner';
import { GeistSans } from 'geist/font';

export const metadata = {
  title: 'Noah Cousins',
  description: 'Frontend Web Developer'
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
        <main className="relative mx-auto flex flex-col items-center">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            <div className="mx-auto flex min-h-screen w-full max-w-4xl px-4 py-8 tracking-tight xl:px-0">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </main>
        <div className="fixed bottom-0 left-1/2 mb-12 hidden -translate-x-1/2 transform lg:flex">
          <Dock />
        </div>

        <Toaster />
      </body>
    </html>
  );
}
