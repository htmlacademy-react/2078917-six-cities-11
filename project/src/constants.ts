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
  Favorite = '/favorite'
}

export enum StatusCodes {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404
}

export const TIMEOUT_ERROR = 2000;
export const TIMEOUT_PASSWORD_ERROR = 3000;
