export type User = {
  id: number;
  avatarUrl: string;
  name: string;
  isPro: boolean;
};

export type Point = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Point;
};

export type Offer = {
  id: number;
  images: string[];
  title: string;
  description: string;
  isPremium: boolean;
  isFavorite: boolean;
  type: string;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  price: number;
  host: User;
  goods: string[];
  location: Point;
  city: City;
  previewImage: string;
};
