import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';

export const setCity = createAction<string>('main/setCity');

export const setOffers = createAction<Offer[]>('main/setOffers');

export const setOffersLoadStatus = createAction<boolean>('main/setOffersLoadStatus');
