export interface CardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStacks: string[];
  techStackIconUrls?: string[]
  projectUrl: string;
  featured: boolean;
}

export interface techStackIconUrls {
  [key: string]: string;
}