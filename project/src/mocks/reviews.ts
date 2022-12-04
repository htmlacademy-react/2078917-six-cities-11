import { Review } from '../types/review';
import { getRandomItem, getRandomNumber } from './utils';

const avatars: string[] = [
  'avatar-angelina.jpg',
  'avatar-max.jpg'
];

const texts: string[] = [
  'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
];

const names: string[] = [
  'Max',
  'Angelina',
  'Josh',
  'Jose',
  'Harry',
  'Angelina'
];

export const reviews: Review[] = [
  {
    id: 0,
    avatar: getRandomItem(avatars),
    name: getRandomItem(names),
    mark: getRandomNumber(0, 5),
    date: Date.now(),
    text: getRandomItem(texts)
  },
  {
    id: 1,
    avatar: getRandomItem(avatars),
    name: getRandomItem(names),
    mark: getRandomNumber(0, 5),
    date: Date.now(),
    text: getRandomItem(texts)
  },
  {
    id: 2,
    avatar: getRandomItem(avatars),
    name: getRandomItem(names),
    mark: getRandomNumber(0, 5),
    date: Date.now(),
    text: getRandomItem(texts)
  },
  {
    id: 3,
    avatar: getRandomItem(avatars),
    name: getRandomItem(names),
    mark: getRandomNumber(0, 5),
    date: Date.now(),
    text: getRandomItem(texts)
  },
];

