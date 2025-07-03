import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import Footer from '@/components/layout/footer';
import StructuredData from "@/components/structured-data";
import { Providers } from './providers';
import { NavBar } from '@/components/layout/navbar';

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
  weight: ['500', '400', '300', '100', '700']
});

const interMono = Inter({
  variable: '--font-inter-mono',
  subsets: ['latin'],
  weight: ['500', '400', '300', '100', '700']
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | Victor Kang'acha",
    default: "Victor Kang'acha - Data Scientist",
  },
  description:
    "Senior Data Scientist specializing in deep learning, AWS Machine Learning Engineer, AI engineering, and modern development practices.",
  icons: {
    icon: '/headshot/headshot.jpg',
    apple: '/headshot/headshot.jpg',
  },
  keywords: [
    "Deep Learning",
    "Reinforcement Learning",
    "Machine Learning",
    "AWS Machine Learning Engineer",
    "Data Science",
    "Python",
    "Java",
    "TypeScript",
    "FastAPI",
    "Next.js",
    "React",
    "Neural Networks",
    "TensorFlow",
    "Docker",
    "GitHub Actions",
    "Statistical Modeling",
    "Clustering Algorithms",
    "PCA",
    "Feature Engineering",
    "Innovation",
    "Node.js",
    "Full-Stack Development"
  ],
  authors: [{ name: "Victor Kang'acha" }],
  creator: "Victor Kang'acha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${interSans.className} ${interMono.className}`}>
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow container mx-auto px-4 pt-16 pb-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <StructuredData type="both" />
      </body>
    </html>
  );
}