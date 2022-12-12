import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { setOffers, setOffersLoadStatus } from './action';
import { Offer } from '../../types/offer';
import { APIRoutes } from '../../constants';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersLoadStatus(true));

    const { data } = await api.get<Offer[]>(APIRoutes.Offers);
    dispatch(setOffers(data));

    dispatch(setOffersLoadStatus(false));
  }
);
