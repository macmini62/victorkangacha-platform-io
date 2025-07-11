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
    location: 'Chuka University, Tharaka Nithi, Kenya',
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
  },
  {
    title: 'IT Support Internship',
    company: 'County Government of Kiambu',
    location: 'Kiambu Town, Kiambu, Kenya',
    startDate: 'May 2024',
    endDate: 'August 2024',
    isRemote: false,
    achievements: [
      {
        text: 'Provided on-site and remote technical support to over 30 staff across various departments, maintaining a high satisfaction rate.'
      },
      {
        text: 'Supported the upgrade and patching of operating systems and applications, improving system security and compliance.'
      },
      {
        text: 'Helped implement basic cybersecurity practices, including antivirus deployment and password policy enforcement.'
      },
      {
        text: 'Improved system performance by identifying and troubleshooting hardware/software issues on client machines.'
      },
      {
        text: 'Participated in network setup and maintenance, including router installation and basic network troubleshooting.'
      },
      {
        text: 'Assisted in configuring and deploying over 50 new workstations and networking devices, ensuring seamless onboarding for new employees.'
      },
    ],
    skills: []
  }
]
