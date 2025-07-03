export interface EarlyAdopterBadge {
  name: string;
  image: string;
  link: string;
  issuedDate: string;
}

export interface Certification {
  name: string;
  image: string;
  link: string;
  issuedBy: string;
  issuedDate: string;
  earlyAdopterBadge?: EarlyAdopterBadge;
}

export const certifications: Certification[] = [
  {
    name: "CS50AI: Introduction to Artificial Intelligence with Python",
    image: "/certifications/edX.png",
    link: "https://cs50.harvard.edu/certificates/15c2e9d6-7352-4caf-a80c-822a282add0a",
    issuedBy: "HarvardX",
    issuedDate: "August 2024",
  },
]