import { createReducer } from '@reduxjs/toolkit';
import { setOffers, setCity, setOffersLoadStatus, setAuthorizationStatus, setError, setFavorites, setFavoritesLoadStatus } from '../actions/action';
import { Offer } from '../../types/offer';
import { Cities, AuthorizationStatuses } from '../../constants';

type initialStateProps = {
  cityName: string;
  offers: Offer[];
  isOffersLoaded: boolean;
  isFavoritesLoaded: boolean;
  favorites: Offer[];
  authorizationStatus: AuthorizationStatuses;
  error: string;
};

const initialState: initialStateProps = {
  cityName: Cities.Paris,
  offers: [],
  isOffersLoaded: false,
  isFavoritesLoaded: false,
  favorites: [],
  authorizationStatus: AuthorizationStatuses.Unknown,
  error: ''
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
      state.error = action.payload ?? '';
    })
    .addCase(setFavoritesLoadStatus, (state, action) => {
      state.isFavoritesLoaded = action.payload;
    })
    .addCase(setFavorites, (state, action) => {
      state.favorites = action.payload;
    });

});
