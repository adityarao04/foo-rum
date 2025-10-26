import { RootState } from '../root-reducer';

// Auth selectors
export const selectAuth = (state: RootState) => state.auth;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export const selectUser = (state: RootState) => state.auth.user;

export const selectAuthLoading = (state: RootState) => state.auth.loading;

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectUserEmail = (state: RootState) => state.auth.user?.email;

export const selectUserName = (state: RootState) => state.auth.user?.name;
