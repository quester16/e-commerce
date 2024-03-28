export interface CardProps {
  id: number;
  title: string;
  description?: string;
  price: number;
  image: string;
  category?: string;
  liked: boolean;
  amount: number;
}

export type eventTargetElements = {
  price?: {
    value: string;
  };
  category?: {
    value: string;
  };
};

export interface IComments {
  createdAt: string;
  name: string;
  text: string;
  item: string;
}
