import { Offer } from '../types/offer';
import { reviews } from './reviews';
import { getRandomItem, getRandomNumber } from './utils';

const titles : string[] = [
  'Nice, cozy, warm big bed apartment',
  'Wood and stone place',
  'Beautiful &amp; luxurious apartment at great location',
  'Canal View Prinsengracht'
];

const descriptions: string[] = [
  'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
];


const propertyTypes: string[] = [
  'Apartment',
  'Private room'
];

const avatars: string[] = [
  'avatar-angelina.jpg',
  'avatar-max.jpg'
];

const names: string[] = [
  'Max',
  'Angelina',
  'Josh',
  'Jose',
  'Harry',
  'Angelina'
];

const facilities: string[] = [
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
];


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
    title: getRandomItem(titles),
    description: getRandomItem(descriptions),
    isPremium: getRandomNumber(0, 1) === 1,
    type: getRandomItem(propertyTypes),
    rating: getRandomNumber(0,5),
    bedroomNumber: getRandomNumber(1,4),
    guests: getRandomNumber(1, 4),
    price: getRandomNumber(10, 400),
    hostInfo: {
      avatar: getRandomItem(avatars),
      name: getRandomItem(names),
      isPro: getRandomNumber(0, 1) === 1,
    },
    facilities: facilities,
    reviews: reviews
  },
  {
    id: 1,
    photos: [
      'room.jpg',
      'apartment-01.jpg',
      'apartment-02.jpg',
      'apartment-03.jpg',
      'studio-01.jpg',
      'apartment-01.jpg'
    ],
    title: getRandomItem(titles),
    description: getRandomItem(descriptions),
    isPremium: getRandomNumber(0, 1) === 1,
    type: getRandomItem(propertyTypes),
    rating: getRandomNumber(1, 10),
    bedroomNumber: getRandomNumber(1, 4),
    guests: getRandomNumber(1, 4),
    price: getRandomNumber(10, 400),
    hostInfo: {
      avatar: getRandomItem(avatars),
      name: getRandomItem(names),
      isPro: getRandomNumber(0, 1) === 1,
    },
    facilities: facilities,
    reviews: reviews
  },
  {
    id: 2,
    photos: [
      'room.jpg',
      'apartment-01.jpg',
      'apartment-02.jpg',
      'apartment-03.jpg',
      'studio-01.jpg',
      'apartment-01.jpg'
    ],
    title: getRandomItem(titles),
    description: getRandomItem(descriptions),
    isPremium: getRandomNumber(0, 1) === 1,
    type: getRandomItem(propertyTypes),
    rating: getRandomNumber(1, 10),
    bedroomNumber: getRandomNumber(1, 4),
    guests: getRandomNumber(1, 4),
    price: getRandomNumber(10, 400),
    hostInfo: {
      avatar: getRandomItem(avatars),
      name: getRandomItem(names),
      isPro: getRandomNumber(0, 1) === 1,
    },
    facilities: facilities,
    reviews: reviews
  },
  {
    id: 3,
    photos: [
      'room.jpg',
      'apartment-01.jpg',
      'apartment-02.jpg',
      'apartment-03.jpg',
      'studio-01.jpg',
      'apartment-01.jpg'
    ],
    title: getRandomItem(titles),
    description: getRandomItem(descriptions),
    isPremium: getRandomNumber(0, 1) === 1,
    type: getRandomItem(propertyTypes),
    rating: getRandomNumber(1, 10),
    bedroomNumber: getRandomNumber(1, 4),
    guests: getRandomNumber(1, 4),
    price: getRandomNumber(10, 400),
    hostInfo: {
      avatar: getRandomItem(avatars),
      name: getRandomItem(names),
      isPro: getRandomNumber(0, 1) === 1,
    },
    facilities: facilities,
    reviews: reviews
  }
];

