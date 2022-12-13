import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { Offer } from '../../types/offer';
import { APIRoutes, AuthorizationStatuses, TIMEOUT_ERROR } from '../../constants';
import { dropUserData, saveUserData } from '../../api/user-data';
import { User } from '../../types/user';
import { Auth } from '../../types/auth';
import { store } from '../index';
import { setOffers, setOffersLoadStatus, setError, setAuthorizationStatus, setFavorites, setFavoritesLoadStatus } from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoutes.Offers);
    dispatch(setOffersLoadStatus(false));
    dispatch(setOffers(data));
    dispatch(setOffersLoadStatus(true));
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoutes.Favorite);
    dispatch(setFavoritesLoadStatus(false));
    dispatch(setFavorites(data));
    dispatch(setFavoritesLoadStatus(true));
  }
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoutes.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatuses.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatuses.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, Auth, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<User>(APIRoutes.Login, { email, password });
    saveUserData(data);
    dispatch(setAuthorizationStatus(AuthorizationStatuses.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoutes.Logout);
    dropUserData();
    dispatch(setAuthorizationStatus(AuthorizationStatuses.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_ERROR,
    );
  },
);

