import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatuses } from '../../constants';
import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../actions/api';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatuses.Unknown,
};

const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatuses.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatuses.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatuses.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatuses.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatuses.NoAuth;
      });
  }
});

export { userProcess };
