type Host = {
  id: number;
  avatarUrl: string;
  name: string;
  isPro: boolean;
};

export type Review = {
  id: number;
  avatar: string;
  name: string;
  mark: number;
  date: string;
  text: string;
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
  host: Host;
  goods: string[];
  reviews: Review[];
  location: Point;
  city: City;
  previewImage: string;
};
