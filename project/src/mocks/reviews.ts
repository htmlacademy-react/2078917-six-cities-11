import { Review } from '../types/offer';

export const reviews: Review[] = [
  {
    id: 0,
    avatar: 'img/avatar-angelina.jpg',
    name: 'Angelina',
    mark: 2,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long'}),
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
  {
    id: 1,
    avatar: 'img/avatar-max.jpg',
    name: 'Max',
    mark: 2,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
    text: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
  },
  {
    id: 2,
    avatar: 'img/avatar-max.jpg',
    name: 'Josh',
    mark: 1,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
  {
    id: 3,
    avatar: 'img/avatar-angelina.jpg',
    name: 'Angelina',
    mark: 1,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
    text: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
  },
];

