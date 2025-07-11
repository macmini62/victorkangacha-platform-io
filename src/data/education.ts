export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  major: string;
  activities?: Activity[];
}

export const education: Education = {
  degree: "Bachelor of Science - Computer Science",
  school: "Chuka University",
  location: "Chuka, Tharaka-Nithi, Kenya",
  startDate: "September 2021",
  endDate: "April 2025",
  gpa: "",
  major: 'Data Science',
  activities: [
    {
      name: 'Gained a strong foundation in data analysis, machine learning, statistics, and programming.'
    },
    {
      name: 'Completed coursework in Python, SQL, Data Mining and Artificial Intelligence.'
    },
    {
      name: 'Worked on hands-on projects including credit scoring models and fraud detection systems.'
    },
    {
      name: 'Actively participated in hackathons, coding challenges, and tech communities within the university.'
    },
  ]
};
