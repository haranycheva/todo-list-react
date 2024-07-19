import { configureStore } from "@reduxjs/toolkit";
import { persistedAccountReduser } from "./AccountSlice";
import { themeReducer } from "./ThemeSlice";
import { rootTodoReducer } from "./TodoSlice";
import persistStore from "redux-persist/es/persistStore";
import { persistedAuthReduser } from "./UserSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";



// const myMiddleware1 = (store) => {
//   return function (next) {
//     return function (action) {
//       next(action);
//     };
//   };
// };

// const myMiddleware2 = (store) => (next) => (action) => {
//   next(action);
// };

export const storeTodo = configureStore({
  reducer: {
    todo: rootTodoReducer,
    auth: persistedAuthReduser,
    account: persistedAccountReduser,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// const storeAccount = createStore(rootAccountReducer, enchancer);

export const persistor = persistStore(storeTodo);