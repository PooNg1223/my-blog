import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import PageTransition from "@/components/PageTransition";
import defaultMetadata from './metadata';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...defaultMetadata,
  icons: {
    icon: [
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/icon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <Footer />
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}