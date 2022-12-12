import { createReducer } from '@reduxjs/toolkit';
import { setOffers, setCity, setOffersLoadStatus, setAuthorizationStatus, setError } from '../actions/action';
import { Offer } from '../../types/offer';
import { Cities, AuthorizationStatuses } from '../../constants';

type initialStateProps = {
  cityName: string;
  offers: Offer[];
  isOffersLoaded: boolean;
  favorites: Offer[];
  authorizationStatus: AuthorizationStatuses;
  error: string | null;
};

const initialState: initialStateProps = {
  cityName: Cities.Paris,
  offers: [],
  isOffersLoaded: false,
  favorites: [],
  authorizationStatus: AuthorizationStatuses.Unknown,
  error: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffersLoadStatus, (state, action) => {
      state.isOffersLoaded = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });

});
