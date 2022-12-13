import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { AuthorizationStatuses } from '../../constants';

export const setCity = createAction<string>('main/setCity');

export const setOffers = createAction<Offer[]>('main/setOffers');

export const setOffersLoadStatus = createAction<boolean>('main/setOffersLoadStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatuses>('user/setAuthorizationStatus');

export const setError = createAction<string | null>('main/setError');

export const setFavorites = createAction<Offer[]>('main/setFavoriteOffers');

export const setFavoritesLoadStatus = createAction<boolean>('main/setFavoritesLoadStatus');
