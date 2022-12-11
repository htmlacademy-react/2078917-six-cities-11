import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';

export const setCity = createAction<string>('main/setCity');

export const loadOffers = createAction<Offer[]>('main/loadOffers');

export const setOffersLoadStatus = createAction<boolean>('main/setOffersLoadStatus');
