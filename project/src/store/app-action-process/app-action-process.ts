import { createSlice } from '@reduxjs/toolkit';
import { setCity } from '../actions/action';
import { AppActionData } from '../../types/state';
import { Cities, NameSpace } from '../../constants';

const initialState: AppActionData = {
  city: Cities.Paris,
};

const appAction = createSlice({
  name: NameSpace.AppAction,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setCity, (state, action) => {
        state.city = action.payload;
      });
  }
});

export { appAction };
