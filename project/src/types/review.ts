import { User } from '../types/offer';

export type Review = {
  id: number;
  date: string;
  rating: number;
  comment: string;
  user: User;
}

export type ReviewData = {
  comment: string;
  rating: number | null;
}
