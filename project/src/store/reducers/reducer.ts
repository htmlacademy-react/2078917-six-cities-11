import { createReducer } from '@reduxjs/toolkit';
import { setCity } from '../actions/action';
import { offers } from '../../mocks/offers';
import { Offer } from '../../types/offer';
import { Cities } from '../../constants';

type initialStateProps = {
  cityName: string;
  offers: Offer[];
};

const initialState: initialStateProps = {
  cityName: Cities.Paris,
  offers: offers
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.cityName = action.payload;
    });
});

