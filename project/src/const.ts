export enum AppRoute {
  Root = '/',
  Login = '/Login',
  Favorites = '/Favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
