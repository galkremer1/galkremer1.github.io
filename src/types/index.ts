export interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
}

export interface Skill {
    name: string;
    level: string; // e.g., "Beginner", "Intermediate", "Expert"
}

export interface ContactInfo {
    email: string;
    phone?: string; // Optional
    linkedIn?: string; // Optional
    github?: string; // Optional
}

export interface About {
    name: string;
    background: string;
    experience: string;
}