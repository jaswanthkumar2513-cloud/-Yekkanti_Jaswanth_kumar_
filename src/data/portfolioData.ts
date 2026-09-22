import { Project, SkillCategory, PromptTemplate } from '../types.ts';

export const PERSONAL_INFO = {
  name: 'Yekkanti Jaswanthkumar',
  shortName: 'Jaswanth',
  headline: 'Aspiring AI Engineer & 1st Year B.Tech CSE Student',
  subheadline: 'Crafting algorithmic solutions in Python, modern web experiences, and exploring generative AI foundations.',
  department: 'Computer Science and Engineering (CSE)',
  academicYear: '1st Year Undergraduate (B.Tech)',
  location: 'India',
  githubUrl: 'https://github.com/jaswanthkumar2513-cloud',
  linkedinUrl: 'https://www.linkedin.com/in/jaswanth-kumar-0a5769433/',
  email: 'jaswanthkumar2513@gmail.com',
  bio: "Hello! I am Yekkanti Jaswanthkumar, currently embarking on my journey in computer science and engineering. Passionate about machine learning, artificial intelligence, and software craftsmanship, I focus on building solid foundational roots in Python programming, web development, and exploring generative AI techniques. I love turning logical problems into intuitive digital tools.",
  goals: [
    'Mastering Core Python, Data Structures & Algorithms',
    'Deepening modern full-stack web development with React & APIs',
    'Hands-on experimentation with Gemini API & Generative AI workflows',
    'Contributing to open-source student utilities and AI tools'
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Python Programming',
    subtitle: 'Core & Algorithmic Foundations',
    iconName: 'Code',
    level: 'Foundational / Intermediate',
    items: [
      { name: 'Core Syntax & Control Flow', description: 'Conditionals, loops, list comprehensions, functions', levelPercentage: 80 },
      { name: 'Data Structures', description: 'Lists, dictionaries, sets, tuples, string manipulation', levelPercentage: 75 },
      { name: 'OOP & Modular Code', description: 'Classes, methods, file handling, basic modules', levelPercentage: 70 },
      { name: 'Problem Solving', description: 'Algorithmic logic, calculation scripts, mathematical modeling', levelPercentage: 75 }
    ]
  },
  {
    title: 'Web Development',
    subtitle: 'Front-End & Responsive Interfaces',
    iconName: 'Globe',
    level: 'Foundational',
    items: [
      { name: 'HTML5 Semantic Markup', description: 'Accessible document layouts, forms, structured elements', levelPercentage: 85 },
      { name: 'CSS3 & Modern Styling', description: 'Flexbox, Grid, Tailwind utility systems, responsive design', levelPercentage: 80 },
      { name: 'JavaScript Essentials', description: 'DOM manipulation, event listeners, basic state handling', levelPercentage: 70 },
      { name: 'Web Calculators & Forms', description: 'Interactive client-side apps, dynamic feedback displays', levelPercentage: 78 }
    ]
  },
  {
    title: 'Generative AI & AI Fundamentals',
    subtitle: 'LLMs, Prompting & Gemini Tech',
    iconName: 'Cpu',
    level: 'Foundational / Enthusiast',
    items: [
      { name: 'Prompt Engineering', description: 'System prompts, few-shot conditioning, structured output design', levelPercentage: 80 },
      { name: 'LLM Foundations', description: 'Understanding tokens, context windows, temperature & reasoning', levelPercentage: 75 },
      { name: 'Gemini & AI Studio', description: 'Prototyping with Gemini models, multi-turn prompts, AI utilities', levelPercentage: 75 },
      { name: 'AI Workflow Integration', description: 'Exploring AI-assisted coding, automation, and API endpoints', levelPercentage: 65 }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'student-grade-calculator',
    title: 'Student Grade & CGPA Calculator',
    category: 'Python & Web',
    description: 'An academic utility designed for university students to calculate marks, percentage, weighted CGPA, and letter grades with real-time analysis.',
    longDescription: 'Developed to eliminate manual errors in semester grade calculations. Features customizable course credit weights, individual subject scores, dynamic percentage computation, and instant academic performance standing badges (Distinction, First Class, etc.).',
    technologies: ['Python Logic', 'JavaScript', 'HTML5/Tailwind', 'Interactive State'],
    githubUrl: 'https://github.com/jaswanthkumar2513-cloud',
    highlights: [
      'Multi-course dynamic grade input with automatic GPA scale mapping',
      'Weighted credit hours calculation aligned with university criteria',
      'Instant letter grade assignment (O, A+, A, B+, B, C, F)',
      'Detailed summary breakdown with visual performance meter'
    ],
    interactiveDemoType: 'grade-calculator'
  },
  {
    id: 'voting-eligibility-calculator',
    title: 'Voting System Eligibility Calculator',
    category: 'Logic & Automation',
    description: 'A civic utility verifying voter qualification criteria including age thresholds, citizenship status, and voter ID status with explanatory guidance.',
    longDescription: 'Created as a logic and validation system to guide young citizens on voting eligibility. Evaluates age against the legal voting age (18+), verifies constitutional citizenship prerequisites, checks voter card enrollment status, and outputs next-step registration procedures.',
    technologies: ['Python Conditional Logic', 'Web UI', 'Form Validation', 'Real-time Alerts'],
    githubUrl: 'https://github.com/jaswanthkumar2513-cloud',
    highlights: [
      'Legal age verification with countdown calculation for future voters',
      'Multi-factor validation (Age, Nationality, Registration Status)',
      'Immediate explanatory feedback with actionable steps for election registration',
      'Responsive, accessible validation cards with instant visual status'
    ],
    interactiveDemoType: 'voting-calculator'
  }
];

export const MASTER_PROMPTS: PromptTemplate[] = [
  {
    id: 'structured-ai-studio-prompt',
    title: 'Primary Google AI Studio Prompt (Comprehensive & Production-Ready)',
    type: 'Recommended for Google AI Studio',
    description: 'A meticulously structured, battle-tested prompt designed specifically for Google AI Studio to build an outstanding, modern first-year portfolio.',
    promptText: `Act as a senior front-end engineer and UI/UX designer. Build a modern, clean, and responsive personal developer portfolio web application for a 1st year B.Tech Computer Science student named Yekkanti Jaswanthkumar.

### Profile & Identity:
- Name: Yekkanti Jaswanthkumar
- Professional Title: Aspiring AI Engineer | 1st Year B.Tech Student in Computer Science and Engineering
- Background & Bio: First-year undergraduate student in the Computer Science and Engineering department with a strong passion for Artificial Intelligence, Python programming, and modern web technologies. Focuses on strong computer science fundamentals, algorithmic problem solving, and generative AI tools.
- GitHub: https://github.com/jaswanthkumar2513-cloud
- LinkedIn: https://www.linkedin.com/in/jaswanth-kumar-0a5769433/

### Core Technical Skills to Highlight:
1. Python Programming: Core syntax, basic data structures (lists, tuples, dicts), algorithms, modular functions, and logic building.
2. Web Development: HTML5, CSS3, modern responsive layouts (Tailwind CSS), and foundational JavaScript DOM manipulation.
3. Generative AI Foundations: Prompt engineering, LLM basics, familiarity with Google AI Studio & Gemini API principles, and AI-assisted workflows.

### Featured Projects (Include Interactive Live Demos in the Portfolio):
1. "Student Grade Calculator":
   - Description: A tool to compute student subject marks, weighted semester GPA/CGPA, percentages, and corresponding letter grades with clear academic performance badges.
   - Include an interactive working calculator right on the page where users can input subject marks and credits to see their calculated GPA and grade.
2. "Voting System Eligibility Calculator":
   - Description: A validation utility that verifies whether an individual is eligible to vote based on age threshold (18+), citizenship status, and voter ID registration.
   - Include an interactive working demo with instant visual status indicators and guidance for new voter registration.

### UI & UX Design Guidelines:
- Aesthetic: Modern, professional, academic-tech feel with clean typography, generous whitespace, subtle slate/indigo borders, and zero clutter.
- Responsive: Fully optimized for both desktop and mobile viewports.
- Sections:
  1. Header / Navbar with quick navigation links and social icons.
  2. Hero section featuring student intro, aspirational AI badge, bio, and quick action buttons.
  3. About & Learning Roadmap (highlighting 1st year journey and AI goals).
  4. Technical Skills breakdown with category cards and progress visualizers.
  5. Projects Showcase with project descriptions, tech tags, GitHub links, and live interactive demo widgets.
  6. Contact Section featuring direct links to GitHub, LinkedIn, and a quick contact card.
  7. Footer with copyright and clean profile metadata.`
  },
  {
    id: 'concise-ai-studio-prompt',
    title: 'Concise Prompt (Quick-Run Format)',
    type: 'Short / Direct',
    description: 'A direct, high-impact prompt suitable for quick single-turn generation in Google AI Studio or other LLMs.',
    promptText: `Create a modern, clean, single-page portfolio website for Yekkanti Jaswanthkumar, a 1st year B.Tech Computer Science student and Aspiring AI Engineer. 

Include:
- Hero section with my name, title, bio, and links:
  * GitHub: https://github.com/jaswanthkumar2513-cloud
  * LinkedIn: https://www.linkedin.com/in/jaswanth-kumar-0a5769433/
- Skills section showcasing:
  * Basic Python (syntax, data structures, logic)
  * Basic Web Development (HTML, CSS, JavaScript, responsive UI)
  * Basic Generative AI (Prompt engineering, LLM concepts, Gemini)
- Projects with live interactive demos:
  1. Student Grade Calculator (calculates GPA, percentage, and letter grade)
  2. Voting System Eligibility Calculator (checks 18+ age & citizenship)
- Clean, high-contrast, modern UI built with React and Tailwind CSS.`
  }
];
