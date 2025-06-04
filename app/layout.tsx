import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";

const proxima = localFont({
  src: "../public/fonts/Proxima Vara-VF.woff2",
  variable: "--font-proxima",
});

export const metadata: Metadata = {
  title: "Noah Cousins",
  description: "Developer and designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${proxima.variable} overscroll-y-none antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <div className="flex justify-center py-20 px-5">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
