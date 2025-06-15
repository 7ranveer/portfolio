
import type { LucideIcon } from 'lucide-react';
import { Briefcase, GraduationCap, Code2, Database, Cloud, Users, MessageCircle, Lightbulb, BarChart, GitFork, Linkedin, Github, Mail, Phone, Globe, Award, Building } from 'lucide-react';

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
  icon?: LucideIcon; // Icon for the certificate itself
  orgLogoUrl?: string; // e.g., "/images/logos/certifying-org-logo.png" - place logo in `public/images/logos/`
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
  profileImageUrl: "./images/profile/ranvirsinh-gohil.jpeg", // do not correct
  contact: {
    email: "ranveergohil@gmail.com",
    phone: "+91-8758384099",
    linkedin: "https://linkedin.com/in/7ranveer",
    github: "https://github.com/7ranveer",
    website: "https://7ranveer.github.io/portfolio",
  },
  experience: [
    {
      role: "Senior Technical Lead",
      company: "Comviva",
      period: "Jun 2024 - Present",
      location: "Bengaluru, Karnataka India",
      responsibilities: [
        "I lead a talented team of developers in building and delivering a scalable, modular fintech application deployed across multiple countries. Our architecture leverages Module Federation for developing android (Huawei as well) and IOS apps to enable seamless collaboration and deployment of independent features across distributed teams. The backend involves integration with third party systems of various banks and institutions to enable user to pay all types of utilities and transfers in a single app . I’m responsible for aligning technical strategy with business goals, ensuring efficient development workflows, and driving the successful rollout of localised features in a high-compliance, fast-paced industry."
      ],
      logoUrl: "./images/logos/comviva.jpeg", // do not correct
      icon: Briefcase,
    },
    {
      role: "Technical Lead",
      company: "Comviva",
      period: "Jun 2022 - May 2024",
      location: "Bengaluru, Karnataka India",
      responsibilities: [
        "Revamped the UI module with the new design having self-sign-in and intuitive flows",
        "Designed and implemented a module that pushed out the web browser notifications based on interactions with marketing emails, social posts, or customer websites along with reports",
        "Handled integration with the Ticket Master platform to enable customers to target users based on their sports interests and history"
      ],
      logoUrl: "./images/logos/comviva.jpeg", // do not correct
      icon: Briefcase,
    },
    {
      role: "Senior Software Engineer",
      company: "Comviva",
      period: "Jun 2020 - May 2022",
      location: "Bengaluru, Karnataka India",
      responsibilities: [
        "Integrated Facebook Ads functionality along with audience creation and detailed targeting",
        "Implemented different social media channels such as Twitter and Facebook for users to simultaneously post and manage to all platforms with daily statistics comparisons and graphs",
        "Developed a universal module for creating user sets based on different attributes and actions taken on different marketing channels",
        "Developed key features for the company's flagship product using React and Node.js.",
        "Participated in agile development cycles, including sprint planning and retrospectives.",
        "Contributed to the migration of legacy systems to modern microservices architecture.",
        "Wrote unit and integration tests to ensure code quality."
      ],
      logoUrl: "./images/logos/comviva.jpeg", // do not correct
      icon: Briefcase,
    },
    {
      role: "Product Engineer",
      company: "Servify",
      period: "Mar 2019 - May 2020",
      location: "Mumbai, Maharashtra India",
      responsibilities: [
        " Integrated different third party logistics vendors",
        "Created a mechanism for selecting different vendors based on certain criteria",
        "Implemented tracking mechanism that accomodates multiple types of vendors",
        "Developed and maintained features for a SaaS application using React and Node.js.",
        "Participated in the full software development lifecycle, from design to deployment.",
        "Contributed to improving application performance and scalability.",
      ],
      logoUrl: "./images/logos/servify.jpeg", // do not correct
      icon: Briefcase,
    },
    {
      role: "Software Developer",
      company: "PlexusMD",
      period: "May 2018 - Feb 2019",
      location: "Mumbai, Maharashtra India",
      responsibilities: [
        "Created back-end(Data Models and API’s)of global pricing system for on-demand video platform Medcast",
        "Integrated Socket.io for tracking video duration of users for analytics",
        "Added polls feature for type of post from scratch",
        "Created Search API using Apache SOLR for MYSQL database with different filters for a new product",
        "Developed a heuristic based career feed recommendation system and integrated it with the existing project",
        "Implemented the Event payment gateway with extra features",
        "Created Advertisement module and injected it in 3 different modules of the existing project"
      ],
      logoUrl: "./images/logos/plexusmd.jpeg", // do not correct
      icon: Briefcase,
    }
  ],
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Indian Institute of Information Technology",
      period: "2014 - 2018",
      details: ["CGPA: 8.3/10.0"],
      icon: GraduationCap,
    },
  ],
  certificates: [
    {
      name: "AlgoExpert",
      issuingOrganization: "AlgoExpert",
      issueDate: "Issued Feb 2022",
      credentialId: "f8cfc19573",
      credentialUrl: "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-f8cfc19573",
      icon: Award, 
      orgLogoUrl: "./images/logos/algoexpert.jpeg" // do not correct
    },
    {
      name: "Problem Solving",
      issuingOrganization: "HackerRank",
      issueDate: "Issued Nov 2021",
      credentialId: "9AE14054EF47",
      credentialUrl: "https://www.hackerrank.com/certificates/9ae14054ef47", 
      icon: Award,
      orgLogoUrl: "./images/logos/hackerrank.jpeg" // do not correct
    },
    {
      name: "Advanced Node.js: Scaling Applications",
      issuingOrganization: "LinkedIn",
      issueDate: "Issued May 2020",
      credentialUrl: "https://www.linkedin.com/learning/certificates/c887e5992e1e0d3a7541c179bb2c283fa35c51f5083d0c7d2ec8e4412ec16ff7?trk=backfilled_certificate",
      icon: Award,
      orgLogoUrl: "./images/logos/linkedin.jpeg" // do not correct
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuingOrganization: "FreeCodeCamp",
      issueDate: "Issued July 2018",
      credentialUrl: "https://www.freecodecamp.org/certification/7ranveer/javascript-algorithms-and-data-structures",
      icon: Award,
      orgLogoUrl: "./images/logos/freecodecamp.jpeg" // do not correct
    }
  ],
  skills: [
    {
      categoryName: "Programming Languages",
      skills: [
        { name: "JavaScript (ES6+)", icon: Code2, level: 95 },
        { name: "TypeScript", icon: Code2, level: 90 },
        { name: "Python", icon: Code2, level: 85 },
        { name: "C++", icon: Code2, level: 70 },
      ],
    },
    {
      categoryName: "Frameworks & Libraries",
      skills: [
        { name: "React / Next.js", icon: Code2, level: 95 },
        { name: "Node.js / Express", icon: Code2, level: 90 },
        { name: "Flask", icon: Code2, level: 70 },
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
  projects: [ // Paths here were already correct, but good to double-check
    {
      name: "AI Powered Recipe Generator",
      description: "A web application that suggests recipes based on available ingredients using a custom-trained NLP model.",
      technologies: ["Next.js", "Python", "Flask", "TensorFlow", "MongoDB"],
      link: "https://github.com/alexjohnsondev/ai-recipe-app",
      imageUrl: "/images/projects/ai-recipe.png", 
      icon: Lightbulb,
    },
    {
      name: "Real-time Collaborative Editor",
      description: "A platform for multiple users to edit documents simultaneously, built with WebSockets and CRDTs.",
      technologies: ["React", "Node.js", "Socket.IO", "Redis"],
      link: "https://github.com/alexjohnsondev/collab-editor",
      imageUrl: "/images/projects/collab-editor.png", 
      icon: Code2,
    },
    {
      name: "Portfolio Website V1",
      description: "My first personal portfolio website built to showcase early projects and skills.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "/images/projects/portfolio-v1.png", 
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
  // You can add more specific icons for other sections here if needed
  // e.g., experience: Briefcase, education: GraduationCap, etc.
};
