export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: 'AI/ML Lead',
    company: 'Google Developers Group',
    location: 'Chuka, Tharaka Nithi, Kenya',
    startDate: 'October 2024',
    endDate: 'April 2025',
    isRemote: false,
    achievements: [
      {
        text: 'Designed and led interactive workshops on core data science principles, engaging club members through hands-on exercises and real-world use cases.'
      },
      {
        text: 'Mentored new participants by presenting foundational data science and machine learning concepts, outlining their practical applications in technology and guiding personalized learning pathways.'
      },
      {
        text: 'Established and facilitated peer-led study groups for deep dives into advanced data science topics, promoting collaborative problem-solving and knowledge sharing.'
      },
      {
        text: 'Expanded community outreach and participation by 10% through targeted recruitment initiatives and inclusive programming for both students and external learners.'
      }
    ],
    skills: [
      { name: 'Python' },
      { name: 'Machine Learning' },
      { name: 'Statistics' },
      { name: 'AWS' },
      { name: 'Github Actions' }
    ]
  }
]
