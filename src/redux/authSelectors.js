export const selectorToken = (state) => state.auth.token;
export const selectorIsLogged = (state) => state.auth.isLogged;
export const selectorIsRefreshed = (state) => state.auth.isRefreshed;
export const selectorUser = (state) => state.auth.user;
export const selectorLodingForAuth = (state) => state.auth.isLoading;

