import { Review } from './review';

export type Host = {
  avatar: string;
  name: string;
  isPro: boolean;
};

export type Offer = {
  id: number;
  photos: string[];
  title: string;
  description: string;
  isPremium: boolean;
  type: string;
  rating: number;
  bedroomNumber: number;
  guests: number;
  price: number;
  hostInfo: Host;
  facilities: string[];
  reviews: Review[];
};
