'use client';

import { Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";

export default function Footer(){
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Portfolio</h3>
            <p className="text-sm text-foreground/60">
              &copy; 2025 Victor Kang&apos;acha. All rights reserved.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="w-max text-sm text-foreground/60 hover:text-foreground">About</Link>
              <Link href="/projects" className="w-max text-sm text-foreground/60 hover:text-foreground">Projects</Link>
              <Link href="/contact" className="w-max text-sm text-foreground/60 hover:text-foreground">Contact</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link target='_blank' href="https://github.com/macmini62">
                <FaGithub className="w-6 h-6 fill-foreground/60 hover:fill-foreground"/>
              </Link>
              <Link target='_blank' href="https://linkedin.com/in/victorkangacha/">
                <FaLinkedin className="w-6 h-6 fill-foreground/60 hover:fill-foreground"/>
              </Link>
              <Link target='_blank' href="https://kaggle.com/macmini62">
                <FaKaggle className="w-5 h-5 fill-foreground/60 hover:fill-foreground"/>
              </Link>
              <Link href="mailto:victorkangacha@gmail.com">
                <Mail className="w-6 h-6 stroke-foreground/60 hover:stroke-foreground"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
          </footer>
  )
}