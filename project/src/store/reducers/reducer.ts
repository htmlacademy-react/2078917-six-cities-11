import { createReducer } from '@reduxjs/toolkit';
import { selectCity } from '../actions/action';
import { offers } from '../../mocks/offers';
import { Offer } from '../../types/offer';
import { CityType } from '../../constants';

type initialStateProps = {
  cityName: string;
  offers: Offer[];
};

const initialState: initialStateProps = {
  cityName: CityType.Paris,
  offers: offers
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.cityName = action.payload;
    });
});

