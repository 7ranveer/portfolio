import type { LucideIcon } from 'lucide-react';
import { Briefcase, GraduationCap, Code2, Database, Cloud, Users, MessageCircle, Lightbulb, BarChart, GitFork, Linkedin, Github, Mail, Phone, Globe } from 'lucide-react';

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  logoUrl?: string;
  icon?: LucideIcon;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period:string;
  details?: string[];
  icon?: LucideIcon;
}

export interface Skill {
  name: string;
  icon?: LucideIcon;
  level?: number; // Optional: 0-100 for progress bar
}

export interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  imageUrl?: string;
  icon?: LucideIcon;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillCategory[];
  projects: ProjectEntry[];
}

export const resumeData: ResumeData = {
  name: "Ranvirsinh Gohil",
  title: "Full Stack Developer & AI Enthusiast",
  summary: "Innovative Full Stack Developer with 5+ years of experience in building scalable web applications and exploring AI-driven solutions. Passionate about creating user-centric products and leveraging technology to solve real-world problems. Proven ability to quickly learn new technologies and collaborate effectively in agile environments.",
  contact: {
    email: "ranveergohil@gmail.com",
    phone: "+91-8758384099",
    linkedin: "https://linkedin.com/in/7ranveer",
    github: "https://github.com/7ranveer",
    website: "https://alexjohnson.dev",
  },
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "Jan 2021 - Present",
      location: "San Francisco, CA",
      responsibilities: [
        "Led development of a new e-commerce platform, resulting in a 30% increase in sales.",
        "Mentored junior developers and conducted code reviews.",
        "Integrated AI-powered recommendation engine, improving user engagement by 15%.",
        "Collaborated with product managers and designers to define project requirements."
      ],
      logoUrl: "https://placehold.co/100x100.png",
      icon: Briefcase,
    },
    {
      role: "Software Developer",
      company: "Innovatech Ltd.",
      period: "Jun 2018 - Dec 2020",
      location: "Austin, TX",
      responsibilities: [
        "Developed and maintained features for a SaaS application using React and Node.js.",
        "Participated in the full software development lifecycle, from design to deployment.",
        "Contributed to improving application performance and scalability.",
      ],
      logoUrl: "https://placehold.co/100x100.png",
      icon: Briefcase,
    },
  ],
  education: [
    {
      degree: "M.S. in Computer Science",
      institution: "Stanford University",
      period: "2016 - 2018",
      details: ["Specialization in Artificial Intelligence.", "GPA: 3.9/4.0"],
      icon: GraduationCap,
    },
    {
      degree: "B.S. in Software Engineering",
      institution: "University of Texas at Austin",
      period: "2012 - 2016",
      details: ["Graduated with honors.", "Dean's List for 4 semesters."],
      icon: GraduationCap,
    },
  ],
  skills: [
    {
      categoryName: "Programming Languages",
      skills: [
        { name: "JavaScript (ES6+)", icon: Code2, level: 95 },
        { name: "TypeScript", icon: Code2, level: 90 },
        { name: "Python", icon: Code2, level: 85 },
        { name: "Java", icon: Code2, level: 70 },
      ],
    },
    {
      categoryName: "Frameworks & Libraries",
      skills: [
        { name: "React / Next.js", icon: Code2, level: 95 },
        { name: "Node.js / Express", icon: Code2, level: 90 },
        { name: "Spring Boot", icon: Code2, level: 70 },
        { name: "TensorFlow / PyTorch", icon: Lightbulb, level: 75 },
      ],
    },
    {
      categoryName: "Databases & Cloud",
      skills: [
        { name: "MongoDB / PostgreSQL", icon: Database, level: 85 },
        { name: "AWS / GCP", icon: Cloud, level: 80 },
        { name: "Docker / Kubernetes", icon: GitFork, level: 75 },
      ],
    },
     {
      categoryName: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: Lightbulb },
        { name: "Team Collaboration", icon: Users },
        { name: "Communication", icon: MessageCircle },
        { name: "Agile Methodologies", icon: BarChart },
      ],
    },
  ],
  projects: [
    {
      name: "AI Powered Recipe Generator",
      description: "A web application that suggests recipes based on available ingredients using a custom-trained NLP model.",
      technologies: ["Next.js", "Python", "Flask", "TensorFlow", "MongoDB"],
      link: "https://github.com/alexjohnsondev/ai-recipe-app",
      imageUrl: "https://placehold.co/600x400.png",
      icon: Lightbulb,
    },
    {
      name: "Real-time Collaborative Editor",
      description: "A platform for multiple users to edit documents simultaneously, built with WebSockets and CRDTs.",
      technologies: ["React", "Node.js", "Socket.IO", "Redis"],
      link: "https://github.com/alexjohnsondev/collab-editor",
      imageUrl: "https://placehold.co/600x400.png",
      icon: Code2,
    },
    {
      name: "Portfolio Website V1",
      description: "My first personal portfolio website built to showcase early projects and skills.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "https://placehold.co/600x400.png",
      icon: Globe,
    }
  ],
};

export const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
  phone: Phone,
  website: Globe,
};
