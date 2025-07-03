'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className='relative min-h-[90vh] flex items-center'>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='flex-shrink-0'
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/headshot/headshot.jpg"
                alt="Victor Kang'acha"
                fill
                className="bg-transparent object-cover"
                priority
                sizes='(max-width: 768px) 192px, 256px'
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .75, delay: 0.75 }}
            className='flex flex-col items-center'
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">Hi, I&apos;m Victor Kang&apos;acha</h1>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl max-w-3xl text-muted-foreground">Data Scientist | AI/ML Innovator | IT Support</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contacts"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium
                text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium
                hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}