import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { AppRoutes } from '../../constants';
import { Review } from '../../types/review';

export const setCity = createAction<string>('main/setCity');

export const setError = createAction<string | null>('main/setError');

export const updateComments = createAction<Review[]>('room/updateComments');

export const updateFavoriteOffers = createAction<Offer>('favorite/updateFavoriteOffers');

export const updateNearbyOffers = createAction<Offer>('room/updateNearbyOffers');

export const updateCurrentOffer = createAction<Offer>('room/updateCurrentOffer');

export const updateOffers = createAction<Offer>('main/updateOffers');

export const redirectToRoute = createAction<AppRoutes>('main/redirectToRoute');
