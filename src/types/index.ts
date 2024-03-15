export interface CardProps {
  id: number;
  title: string;
  description?: string;
  price: number;
  image: string;
  category?: string;
  liked: boolean;
}

export type eventTargetElements = {
  price?: {
    value: string;
  };
  category?: {
    value: string;
  };
};
