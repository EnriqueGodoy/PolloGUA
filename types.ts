
export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
  availability: string;
  features: string[];
  tag?: string;
}

export interface Sauce {
  name: string;
  price: number;
  emoji: string;
  description: string;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
  location: string;
}
