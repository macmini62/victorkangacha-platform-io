export interface Honor {
  name: string;
}

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
  honors?: Honor[];
  activities?: Activity[];
}

export const education: Education = {
  degree: "Bachelor of Science - Computer Science",
  school: "Chuka University",
  location: "Chuka, Tharaka-Nithi, Kenya",
  startDate: "September 2021",
  endDate: "April 2025",
  gpa: "",
};
