import { User } from '../types/offer';

export type Review = {
  id: number;
  date: string;
  rating: number;
  comment: string;
  user: User;
}

export type FormData = {
  comment: string;
  rating: number | null;
}

export type ReviewData = {
  id: number;
  formData: FormData;
}
