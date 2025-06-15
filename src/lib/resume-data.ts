
import type { LucideIcon } from 'lucide-react';
import { Briefcase, GraduationCap, Code2, Database, Cloud, Users, MessageCircle, Lightbulb, BarChart, GitFork, Linkedin, Github, Mail, Phone, Globe, Award } from 'lucide-react';

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
  logoUrl?: string; // e.g., "/images/logos/company-logo.png" - place logo in `public/images/logos/`
  icon?: LucideIcon;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period:string;
  details?: string[];
  icon?: LucideIcon;
}

export interface CertificateEntry {
  name: string;
  issuingOrganization: string;
  issueDate: string; // e.g., "Issued Jun 2023"
  credentialId?: string;
  credentialUrl?: string;
  icon?: LucideIcon;
  // Optional: Add a field for the organization's logo if desired
  // orgLogoUrl?: string; // e.g., "/images/logos/certifying-org-logo.png"
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
  imageUrl?: string; // e.g., "/images/projects/project-thumbnail.jpg" - place image in `public/images/projects/`
  icon?: LucideIcon;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  profileImageUrl?: string; // e.g., "/images/profile/your-photo.jpg" - place image in `public/images/profile/`
  contact: ContactInfo;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  certificates: CertificateEntry[];
  skills: SkillCategory[];
  projects: ProjectEntry[];
}

export const resumeData: ResumeData = {
  name: "Ranvirsinh Gohil",
  title: "Full Stack Developer & AI Enthusiast",
  summary: "Innovative Full Stack Developer with 7+ years of experience in building scalable web applications and exploring AI-driven solutions. Passionate about creating user-centric products and leveraging technology to solve real-world problems. Proven ability to quickly learn new technologies and collaborate effectively in agile environments.",
  profileImageUrl: "https://placehold.co/200x200.png", // Replace with your photo path, e.g., "/images/profile/ranvirsinh-gohil.jpg"
  contact: {
    email: "ranveergohil@gmail.com",
    phone: "+91-8758384099",
    linkedin: "https://linkedin.com/in/7ranveer",
    github: "https://github.com/7ranveer",
    website: "https://7ranveer.github.io/portfolio",
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
      logoUrl: "https://placehold.co/100x100.png", // Replace with company logo path, e.g., "/images/logos/tech-solutions.png"
      icon: Briefcase,
    },
    {
      role: "Software Engineer",
      company: "Tech Solutions Inc.",
      period: "Jul 2019 - Dec 2020",
      location: "San Francisco, CA",
      responsibilities: [
        "Developed key features for the company's flagship product using React and Node.js.",
        "Participated in agile development cycles, including sprint planning and retrospectives.",
        "Contributed to the migration of legacy systems to modern microservices architecture.",
        "Wrote unit and integration tests to ensure code quality."
      ],
      logoUrl: "https://placehold.co/100x100.png", // Replace with company logo path, e.g., "/images/logos/tech-solutions.png"
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
      logoUrl: "https://placehold.co/100x100.png", // Replace with company logo path, e.g., "/images/logos/innovatech.png"
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
  certificates: [
    {
      name: "Google Cloud Certified - Professional Cloud Architect",
      issuingOrganization: "Google Cloud",
      issueDate: "Issued Oct 2022",
      credentialId: "GCP-PCA-12345",
      credentialUrl: "https://www.credential.net/12345",
      icon: Award,
      // orgLogoUrl: "https://placehold.co/80x80.png" // Example for cert org logo
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuingOrganization: "Amazon Web Services (AWS)",
      issueDate: "Issued Mar 2021 - Expires Mar 2024",
      credentialUrl: "https://www.youracclaim.com/badges/some-badge-id",
      icon: Award,
      // orgLogoUrl: "https://placehold.co/80x80.png" // Example for cert org logo
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuingOrganization: "The Linux Foundation",
      issueDate: "Issued Jul 2020",
      credentialId: "LF-CKA-67890",
      icon: Award,
      // orgLogoUrl: "https://placehold.co/80x80.png" // Example for cert org logo
    }
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
      imageUrl: "https://placehold.co/600x400.png", // Replace with project image path, e.g., "/images/projects/ai-recipe.png"
      icon: Lightbulb,
    },
    {
      name: "Real-time Collaborative Editor",
      description: "A platform for multiple users to edit documents simultaneously, built with WebSockets and CRDTs.",
      technologies: ["React", "Node.js", "Socket.IO", "Redis"],
      link: "https://github.com/alexjohnsondev/collab-editor",
      imageUrl: "https://placehold.co/600x400.png", // Replace with project image path, e.g., "/images/projects/collab-editor.png"
      icon: Code2,
    },
    {
      name: "Portfolio Website V1",
      description: "My first personal portfolio website built to showcase early projects and skills.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "https://placehold.co/600x400.png", // Replace with project image path, e.g., "/images/projects/portfolio-v1.png"
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

export const sectionIcons = {
  certificates: Award,
};
