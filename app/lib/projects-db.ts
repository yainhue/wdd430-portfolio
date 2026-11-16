// lib/projects-db.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  // Open Source
  {
    id: 1,
    title: 'My First Open Source Contribution',
    description: 'A bug fix contributed to a popular library.',
    type: 'opensource',
    technologies: ['TypeScript', 'React'],
    link: 'https://github.com/example/repo'
  },
  {
    id: 2,
    title: 'Documentation Improvement Project',
    description: 'Improved documentation and usage examples for an open source project.',
    type: 'opensource',
    technologies: ['Markdown', 'Git', 'GitHub'],
    link: 'https://github.com/example/docs'
  },
  {
    id: 3,
    title: 'Accessibility Enhancement',
    description: 'Added accessibility improvements and keyboard navigation support.',
    type: 'opensource',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/example/accessibility'
  },
  {
    id: 4,
    title: 'Bug Fix Collection',
    description: 'Resolved several community-reported issues and improved reliability.',
    type: 'opensource',
    technologies: ['Node.js', 'TypeScript'],
    link: 'https://github.com/example/bugs'
  },
  {
    id: 5,
    title: 'Feature Contribution',
    description: 'Implemented a new feature requested by project maintainers.',
    type: 'opensource',
    technologies: ['React', 'TypeScript'],
    link: 'https://github.com/example/feature'
  },

  // School
  {
    id: 6,
    title: 'Database Design Final Project',
    description: 'An ER diagram and normalized schema for a library system.',
    type: 'school',
    technologies: ['PostgreSQL', 'SQL']
  },
  {
    id: 7,
    title: 'Library Management System',
    description: 'A course project for managing books, members, and loans.',
    type: 'school',
    technologies: ['C#', '.NET', 'SQL Server']
  },
  {
    id: 8,
    title: 'Portfolio Website',
    description: 'A personal portfolio developed as part of a web development course.',
    type: 'school',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 9,
    title: 'Weather Dashboard',
    description: 'A web application displaying forecast data from an external API.',
    type: 'school',
    technologies: ['React', 'API', 'CSS']
  },
  {
    id: 10,
    title: 'Task Management Application',
    description: 'A productivity application developed for a software engineering class.',
    type: 'school',
    technologies: ['Node.js', 'Express', 'MongoDB']
  }
];

export function getProjects(type?: string | null): Project[] {
  if (type) return projects.filter(p => p.type === type);
  return projects;
}

export function getProjectById(id: number): Project | null {
  return projects.find(p => p.id === id) ?? null;
}