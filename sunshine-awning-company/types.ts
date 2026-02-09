import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  location: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}