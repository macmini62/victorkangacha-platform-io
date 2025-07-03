'use client';

import { Sparkles, GraduationCap, MoveRight } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";
import { skillCategory } from "@/data/skills";
import { Badge } from "../ui/badge";

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      </div>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4">
            <Sparkles className="w-3 h-3 mr-2 text-primary mb-0.5"/>
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting AI/ML Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data Scientist in AI/ML Innovations and Solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 items-start mb-16">
          {/* Professional Summary */}
          <Card className="lg:col-span-2 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-primary/10`}>
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Background</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              As a Data Scientist, I specialize in developing cutting-edge AI/ML solutions and GenAI innovations. 
              My expertise spans machine learning, and building scalable AI solutions that drive business value.
            </p>
          </Card>

          {/* Skills Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {
              skillCategory.map((category) => (
                <Card
                  key={category.name}
                  className="p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.Icon className='w-6 h-6'/>
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {
                      category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant='outline'
                          className="hover:scale-105 transition-transform"
                        >
                          {skill}
                        </Badge>
                      ))
                    }
                  </div>
                </Card>
              ))
            }
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center relative z-10">
          <Link href="/about" className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors group pointer-events-auto hover:bg-primary/90">
            Learn More About Me
            <MoveRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"/>
          </Link>
        </div>
      </div>
    </section>
  )
}