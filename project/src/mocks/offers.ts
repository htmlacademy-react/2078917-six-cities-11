import { Offer } from '../types/offer';
import { reviews } from './reviews';

export const offers: Offer[] = [
  {
    id: 0,
    photos: [
      'room.jpg',
      'apartment-01.jpg',
      'apartment-02.jpg',
      'apartment-03.jpg',
      'studio-01.jpg',
      'apartment-01.jpg'
    ],
    title: 'Nice, cozy, warm big bed apartment',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: true,
    type: 'Apartment',
    rating: 5,
    bedroomNumber: 3,
    guests: 2,
    price: 500,
    hostInfo: {
      avatar: 'avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
    },
    facilities: [
      'Wi - Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    reviews: reviews
  },
  {
    id: 1,
    photos: [
      'room.jpg',
      'apartment-03.jpg',
      'apartment-02.jpg',
      'apartment-01.jpg',
      'studio-01.jpg',
      'apartment-01.jpg'
    ],
    title: 'Wood and stone place',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: false,
    type: 'Apartment',
    rating: 4,
    bedroomNumber: 2,
    guests: 2,
    price: 1500,
    hostInfo: {
      avatar: 'avatar- max.jpg',
      name: 'Max',
      isPro: false,
    },
    facilities: [
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher'
    ],
    reviews: reviews
  },
  {
    id: 2,
    photos: [
      'room.jpg',
      'apartment-03.jpg',
      'apartment-02.jpg',
      'apartment-01.jpg',
      'studio-01.jpg',
      'apartment-01.jpg'
    ],
    title: 'Canal View Prinsengracht',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: false,
    type: 'Apartment',
    rating: 3,
    bedroomNumber: 7,
    guests: 7,
    price: 11500,
    hostInfo: {
      avatar: 'avatar-max.jpg',
      name: 'Max',
      isPro: true,
    },
    facilities: [
      'Wi - Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    reviews: reviews
  },
  {
    id: 3,
    photos: [
      'room.jpg',
      'apartment-02.jpg',
      'apartment-03.jpg',
      'apartment-01.jpg',
      'studio-01.jpg',
      'apartment-01.jpg'
    ],
    title: 'Beautiful &amp; luxurious apartment at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: true,
    type: 'Private room',
    rating: 1,
    bedroomNumber: 1,
    guests: 1,
    price: 100,
    hostInfo: {
      avatar: 'avatar-max.jpg',
      name: 'Harry',
      isPro: false,
    },
    facilities: [
      'Wi - Fi'
    ],
    reviews: reviews
  },
];

