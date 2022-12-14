export enum AppRoutes {
  Root = '/',
  Login = '/Login',
  Favorites = '/Favorites',
  Offer = '/offer/:id',
  NotFound = '*',
}

export enum AuthorizationStatuses {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum PlaceCardModes {
  City = 'CITY',
  Property = 'PROPERTY'
}

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum SortTypes {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum APIRoutes {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Comments = '/comments'
}

export enum StatusCodes {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404
}

export const TIMEOUT_ERROR = 2000;
export const TIMEOUT_PASSWORD_ERROR = 3000;

export const RatingData = [
  {
    title: 'perfect',
    value: 5
  },
  {
    title: 'good',
    value: 4
  },
  {
    title: 'not bad',
    value: 3
  },
  {
    title: 'badly',
    value: 2
  },
  {
    title: 'terribly',
    value: 1
  }
];

export const MAX_REVIEWS_COUNT = 10;
export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;

export const groupBy = <T>(array: T[], predicate: (value: T, index: number, array: T[]) => string) =>
  array.reduce((acc, value, index, arr) => {
    (acc[predicate(value, index, arr)] ||= []).push(value);
    return acc;
  }, {} as { [key: string]: T[] });

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  AppAction = 'APP_ACTION'
}

export enum FavoriteStatus {
  Favorite = 1,
  NotFavorite = 0
}
