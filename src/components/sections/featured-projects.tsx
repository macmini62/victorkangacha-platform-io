'use client';

import Image from "next/image";
import { SectionHeader } from "../shared/section-header";
import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";
import { ProjectCard } from "../projects/project-card";
import Link from "next/link";

export default function FeaturedProjects() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Featured Projects"
          description="A selection of recent work in full-stack development and cloud architecture"
        />

        {/* PROJECTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {
            featuredProjects.map((project, index) => (
              <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
              >
                <ProjectCard project={project} className="h-full flex flex-col" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}