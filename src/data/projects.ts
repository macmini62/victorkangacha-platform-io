import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Portfolio',
    description: 'A modern portfolio website build using Nextjs and AWS',
    technologies: [
      'NextJs',
      'React',
      'TailwindCss',
      'TypeScript',
      'AWS'
    ],
    image: '/projects/nice.jpeg',
    category: 'Web Development',
    links: {
      github: 'https://github.com/macmini62/victorkangacha-platform-io',
      live: 'https://victorkangacha-platform-io.vercel.app'
    },
    featured: true
  }
]