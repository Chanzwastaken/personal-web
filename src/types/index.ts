export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    category: "Data Science" | "AI Apps" | "Dashboard" | "Others";
    features: string[];
    techStack: string[];
    links?: {
        github?: string;
        demo?: string;
    };
}

export interface Skill {
    name: string;
    category: "Languages" | "Machine Learning" | "Data Engineering" | "Visualization" | "Frontend" | "Backend" | "ML/AI" | "Tools";
    level: number; // 0-100
    icon?: string;
    logo?: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string | string[];
    logo?: string;
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    imageUrl?: string;
    url?: string;
    logo?: string;
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    period: string;
    description?: string;
    logo?: string;
}

export interface Organization {
    id: string;
    role: string;
    organization: string;
    period: string;
    description?: string | string[];
    logo?: string;
}

export interface Achievement {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description?: string;
}
