export interface CardProps {
  id: number;
  title: string;
  description?: string;
  price: number;
  image: string;
  category?: string;
}

export type elements = {
  cost?: {
    value: string;
  };
  category?: {
    value: string;
  };
};
