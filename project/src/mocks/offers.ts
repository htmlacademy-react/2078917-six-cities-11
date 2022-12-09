import { Offer } from '../types/offer';
import { reviews } from './reviews';

export const offers: Offer[] = [
  {
    id: 0,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/studio-photos.jpg'
    ],
    previewImage: 'img/apartment-01.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: true,
    isFavorite: false,
    type: 'Apartment',
    rating: 5,
    bedrooms: 3,
    maxAdults: 2,
    price: 500,
    host: {
      id: 0,
      avatarUrl: 'img/avatar-angelina.jpg',
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
    reviews: reviews,
    location:{
      lat: 52.3909553943508,
      lng: 4.85309666406198,
      zoom: 10
    },
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.374,
        lng: 4.88969,
        zoom: 10
      }
    }
  },
  {
    id: 1,
    images: [
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/studio-01.jpg',
      'img/studio-photos.jpg'
    ],
    previewImage: 'img/room.jpg',
    title: 'Wood and stone place',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: false,
    isFavorite: true,
    type: 'Apartment',
    rating: 4,
    bedrooms: 2,
    maxAdults: 2,
    price: 1500,
    host: {
      id: 1,
      avatarUrl: 'img/avatar- max.jpg',
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
    reviews: reviews,
    location: {
      lat: 52.3609553943508,
      lng: 4.85309666406198,
      zoom: 10
    },
    city: {
      name: 'Paris',
      location: {
        lat: 52.374,
        lng: 4.88969,
        zoom: 10
      }
    }
  },
  {
    id: 2,
    images: [
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/studio-01.jpg',
      'img/studio-photos.jpg'
    ],
    previewImage: 'img/apartment-02.jpg',
    title: 'Canal View Prinsengracht',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: false,
    isFavorite: true,
    type: 'Apartment',
    rating: 3,
    bedrooms: 7,
    maxAdults: 7,
    price: 11500,
    host: {
      id: 2,
      avatarUrl: 'img/avatar-max.jpg',
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
    reviews: reviews,
    location: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
      zoom: 10
    },
    city: {
      name: 'Johannesburg',
      location: {
        lat: 52.374,
        lng: 4.88969,
        zoom: 10
      }
    }
  },
  {
    id: 3,
    images: [
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/studio-01.jpg',
      'img/studio-photos.jpg'
    ],
    previewImage: 'img/apartment-03.jpg',
    title: 'Beautiful &amp; luxurious apartment at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: true,
    isFavorite: false,
    type: 'Private room',
    rating: 1,
    bedrooms: 1,
    maxAdults: 1,
    price: 100,
    host: {
      id: 2,
      avatarUrl: 'img/avatar-max.jpg',
      name: 'Harry',
      isPro: false,
    },
    facilities: [
      'Wi - Fi'
    ],
    reviews: reviews,
    location: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
      zoom: 10
    },
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.374,
        lng: 4.88969,
        zoom: 10
      }
    }
  },
];

export const offersNearby: Offer[] = [
  {
    id: 0,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/studio-photos.jpg'
    ],
    previewImage: 'img/apartment-01.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: true,
    isFavorite: false,
    type: 'Apartment',
    rating: 5,
    bedrooms: 3,
    maxAdults: 2,
    price: 500,
    host: {
      id: 0,
      avatarUrl: 'img/avatar-angelina.jpg',
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
    reviews: reviews,
    location: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
      zoom: 10
    },
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.374,
        lng: 4.88969,
        zoom: 10
      }
    }
  },
  {
    id: 1,
    images: [
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/studio-01.jpg',
      'img/studio-photos.jpg'
    ],
    previewImage: 'img/room.jpg',
    title: 'Wood and stone place',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: false,
    isFavorite: true,
    type: 'Apartment',
    rating: 4,
    bedrooms: 2,
    maxAdults: 2,
    price: 1500,
    host: {
      id: 1,
      avatarUrl: 'img/avatar- max.jpg',
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
    reviews: reviews,
    location: {
      lat: 52.3609553943508,
      lng: 4.85309666406198,
      zoom: 10
    },
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.374,
        lng: 4.88969,
        zoom: 10
      }
    }
  },
  {
    id: 2,
    images: [
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/studio-01.jpg',
      'img/studio-photos.jpg'
    ],
    previewImage: 'img/apartment-02.jpg',
    title: 'Canal View Prinsengracht',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: false,
    isFavorite: true,
    type: 'Apartment',
    rating: 3,
    bedrooms: 7,
    maxAdults: 7,
    price: 11500,
    host: {
      id: 2,
      avatarUrl: 'img/avatar-max.jpg',
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
    reviews: reviews,
    location: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
      zoom: 10
    },
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.374,
        lng: 4.88969,
        zoom: 10
      }
    }
  },
];
