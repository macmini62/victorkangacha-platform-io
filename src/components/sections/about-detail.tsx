'use client'

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Brain, Code, MonitorCog, Building, Award, GraduationCap, Download } from "lucide-react";
import { Card } from "../ui/card";
import { skillCategory } from "@/data/skills";
import { experiences } from "@/data/experience";
import { certifications } from "@/data/certifications";
import Link from "next/link";
import { hobbies } from "@/data/hobbies";
import { education } from "@/data/education";
import { Button } from "../ui/button";

export default function AboutDetail() {

  const cv_download = () => {
    fetch("/cv_document/CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background flex flex-col items-end pb-6">
      <div className="container mx-auto px-4 py-24 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex flex-col items-end gap-10 md:flex-row md:items-baseline md:justify-between">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
                <Image fill sizes="192px" src="/headshot/headshot.jpg" priority alt="Victor Kang'acha" className="bg-transparent" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Victor Paul Kang&apos;acha Kung&apos;u</h1>
                <p className="text-xl text-muted-foreground mb-4">Data Scientist | AI/ML Innovator | IT Support</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant='outline' className="bg-primary/10 inline-flex gap-1">
                    <Brain className="w-3 h-3"/>
                    AI/ML Expert
                  </Badge>
                  <Badge variant='outline' className="bg-primary/10 inline-flex gap-1">
                    <Code className="w-3 h-3"/>
                    FullStack Developer
                  </Badge>
                  <Badge variant='outline' className="bg-primary/10 inline-flex gap-1">
                    <MonitorCog className="w-3 h-3"/>
                    IT Support
                  </Badge>
                </div>
              </div>
            </div>
            <Button onClick={() => cv_download()} className="cursor-pointer">
              Download CV
              <Download className="ml-2"/>
            </Button>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="p-8 backdrop:blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Building  className='w-6 h-6 text-primary'/>
              Professional Summary
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground loading-relaxed">
              <p>
                A results-driven Data Scientist with a passion for transforming complex data into strategic insights.
                Possessing advanced expertise in statistical modelling, algorithm development, and the construction of
                scalable, end-to-end data pipelines.
              </p>
              <p>
                I excel at identifying opportunities, crafting robust models, and
                optimizing performance. Adept at collaborating across functions, prioritizing tasks effectively, and
                guiding projects from conception through deployment, I am committed to delivering high-quality,
                production-ready solutions that drive measurable business impact.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8"/>
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
              skillCategory.map((category) => (
                <Card
                  key={category.name}
                  className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
                >
                  <div className="flex items-center gap-3 mb-4">
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
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Building  className='w-8 h-8 text-primary'/>
            Work Experience
          </h2>
          <div className="space-y-6">
            {
              experiences.map((exp) => (
                <Card key={`${exp.title}-${exp.startDate}`} className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{`${exp.startDate} - ${exp.endDate}`}</p>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    {
                      exp.achievements.map((ach, index) => (
                        <li key={index} className="flex">
                          <span className="mr-2">&#9900;</span>
                          <span className="flex-1">{ach.text}</span>
                        </li>
                      ))
                    }
                  </ul>
                  {
                    exp.skills.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {
                          exp.skills.map((skill, index) => (
                              <Badge key={index} variant='outline' className="bg-primary/5">
                                {skill.name}
                              </Badge>
                          ))
                        }
                      </div>
                    )
                  }
                </Card>
              ))
            }

            {/* Previous Experience */}
            {/* <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
              <h3 className="text-xl font-semibold mb-4">Previous Experience</h3>
              <div className="space-y-4">
                {previousExperiences.map((exp) => (
                  <div key={`${exp.title}-${exp.startDate}`}>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">{exp.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                ))}
              </div>
            </Card> */}

          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Award className='w-8 h-8 text-primary'/>
            Certifications
          </h2>
          <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-20"
                >
                  <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col gap-4">
                      <Link target="_blank" href={cert.link} className="flex items-start gap-4">
                        <Image
                          width={60}
                          height={60}
                          src={cert.image}
                          alt={cert.name}
                        />
                        <div>
                          <h3 className="font-semibold mb-1">{cert.name}</h3>
                          <p className="text-sm text-muted-foreground">{cert.issuedBy}</p>
                          <p className="">Issued: {cert.issuedDate}</p>
                        </div>
                      </Link>

                      {cert.earlyAdopterBadge && (
                        <>
                          <div className="border-t border-primary/10 my-2" />
                          <Link
                            href={cert.earlyAdopterBadge.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                          >
                            <Image
                              src={cert.earlyAdopterBadge.image}
                              alt={cert.earlyAdopterBadge.name}
                              width={40}
                              height={40}
                              className="rounded-lg"
                            />
                            <div>
                              <Badge variant="outline" className="bg-primary/5 mb-1">
                                Early Adopter
                              </Badge>
                              <p className="text-xs text-muted-foreground">
                                {cert.earlyAdopterBadge.name}
                              </p>
                            </div>
                          </Link>
                        </>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))
            }
          </div>
        </motion.div>

        {/* Education - Supporting qualifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{education.degree}</h3>
                    <p className="text-muted-foreground">{education.school}</p>
                  </div>
                  <div className="text-right mt-1 md:mt-0">
                    <p className="text-sm text-muted-foreground">
                      {education.startDate} - {education.endDate}
                    </p>
                    {/* <p className="text-sm font-medium text-primary">
                      GPA: {education.gpa}
                    </p> */}
                  </div>
                </div>
                {
                  education.major && (
                    <div className="mt-3">
                      <span className="font-bold text-sm">Major: </span>
                      <Badge
                          variant="outline"
                          className='bg-primary/5 mb-2'
                        >
                          {education.major}
                        </Badge>
                    </div>
                  )
                }
                {
                  education.activities && (
                    <div className="">
                      <ul className="text-sm text-muted-foreground space-y-1 ml-2">
                        {education.activities.map((activity, index) => (
                          <li key={index}>
                            <span className="mr-2">&#9900;</span>
                            <span className="">{activity.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }
              </div>
            </div>
          </Card>
        </motion.div>
        
        {/* Hobbies & Interests - Personal side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-primary"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Hobbies & Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <div key={index} className="space-y-2">
                  <Badge variant="outline" className="bg-primary/5 text-base py-2 px-3">
                    {hobby.emoji} {hobby.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground pl-2">
                    {hobby.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
      <Button onClick={() => cv_download()} className="cursor-pointer">
        Download CV
        <Download className="ml-2"/>
      </Button>
    </div>
  )
}