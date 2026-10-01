import { IconType } from 'react-icons';

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
}

export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  category?: string;
  status?: string;
  tags?: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period?: string;
  description?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
}

export interface SocialCategory {
  title: string;
  links: SocialLink[];
}