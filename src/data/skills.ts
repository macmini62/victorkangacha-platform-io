import { Brain, BrainCircuit, Cloud, Code } from "lucide-react";
import { ElementType } from "react";


export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
}

export const skillCategory: SkillCategory[] = [
  {
    name: 'AI & Machine Learning',
    Icon: Brain,
    skills: [
      'Neural Networks',
      'Reinforcement Learning',
      'Deep Learning',
      'Generative AI'
    ]
  },
  {
    name: 'Data Science',
    Icon: BrainCircuit,
    skills: [
      'Feature Engineering',
      'Dimensionality Reduction',
      'Clustering',
      'Statistical Modelling',
      'Data Visiualization'
    ]
  },
  {
    name: 'Programming',
    Icon: Code,
    skills: [
      'Python',
      'TypeScript',
      'JavaScript',
      'TensorFlow',
      'Numpy',
      'Pandas',
      'Scikit-Learn'
    ]
  },
  {
    name: 'Cloud Architecture',
    Icon: Cloud,
    skills: [
      'AWS',
      'Docker',
      'Git'
    ]
  },
]
