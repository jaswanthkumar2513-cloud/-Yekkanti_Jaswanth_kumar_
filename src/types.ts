export interface Project {
  id: string;
  title: string;
  category: 'Python & Web' | 'Logic & Automation' | 'AI & Web';
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  highlights: string[];
  interactiveDemoType?: 'grade-calculator' | 'voting-calculator';
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  level: string;
  items: {
    name: string;
    description: string;
    levelPercentage: number;
  }[];
}

export interface PromptTemplate {
  id: string;
  title: string;
  type: string;
  description: string;
  promptText: string;
}
