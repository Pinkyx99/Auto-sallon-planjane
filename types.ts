export interface NavItem {
  label: string;
  href: string;
}

export interface CarDetails {
  model: string;
  brand: string;
  price: string;
  engine: string;
  transmission: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export type Language = 'SQ' | 'EN' | 'BS' | 'DE';

export type Theme = 'light' | 'dark';