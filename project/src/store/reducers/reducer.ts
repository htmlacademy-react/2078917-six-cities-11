import { createReducer } from '@reduxjs/toolkit';
import { setOffers, setCity, setOffersLoadStatus } from '../actions/action';
import { Offer } from '../../types/offer';
import { Cities } from '../../constants';

type initialStateProps = {
  cityName: string;
  offers: Offer[];
  isOffersLoaded: boolean;
};

const initialState: initialStateProps = {
  cityName: Cities.Paris,
  offers: [],
  isOffersLoaded: false
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
    });
});
