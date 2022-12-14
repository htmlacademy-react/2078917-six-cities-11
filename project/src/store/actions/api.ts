import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { Offer } from '../../types/offer';
import { APIRoutes, AppRoutes, TIMEOUT_ERROR } from '../../constants';
import { dropUserData, saveUserData } from '../../api/user-data';
import { User } from '../../types/user';
import { Auth } from '../../types/auth';
import { store } from '../index';
import { setError, updateComments, updateCurrentOffer, updateFavoriteOffers, updateNearbyOffers, updateOffers, redirectToRoute } from './action';
import { Review, ReviewData } from '../../types/review';
import { FavoriteStatusData } from '../../types/favorite-status-data';

export const fetchCurrentOfferAction = createAsyncThunk<Offer | undefined, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOffer',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer>(`${APIRoutes.Offers}/${id}`);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoutes.NotFound));
    }
  }
);

export const fetchOffersAction = createAsyncThunk<Offer[] | undefined, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer[]>(APIRoutes.Offers);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoutes.NotFound));
    }
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<Offer[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffersAction',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoutes.Offers}/${id}/nearby`);
    return data;
  }
);

export const setFavoriteStatusAction = createAsyncThunk<void, FavoriteStatusData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/setFavoriteStatus',
  async ({ currentId, status }, { dispatch, extra: api }) => {
    try {
      if (currentId) {
        const { data } = await api.post<Offer>(`${APIRoutes.Favorite}/${currentId}/${status}`);
        dispatch(updateCurrentOffer(data));
        dispatch(updateFavoriteOffers(data));
        dispatch(updateNearbyOffers(data));
        dispatch(updateOffers(data));
      }
    } catch {
      dispatch(redirectToRoute(AppRoutes.Login));
    }
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoutes.Favorite);
    return data;
  }
);

export const fetchCommentsAction = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/getComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoutes.Comments}/${id}`);
    return data;
  }
);

export const setCommentAction = createAsyncThunk<Review[], ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/setComment',
  async ({ id, formData }, { dispatch, extra: api }) => {
    const { data } = await api.post<Review[]>(`${APIRoutes.Comments}/${id}`, formData);
    dispatch(updateComments(data));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoutes.Login);
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
    dispatch(redirectToRoute(AppRoutes.Root));
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
    dispatch(fetchOffersAction());
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
