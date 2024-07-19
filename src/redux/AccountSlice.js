import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

// export const deposit = createAction("account/deposit"); //(value) => ({payload: {value, id: Date.now()}})
// export const withdraw = createAction("account/withdraw");

// export const accountReducer = createReducer({ balance: 9 }, (builder) =>
//   builder
//     .addCase(deposit, (state, action) => {
//       state.balance += action.payload;
//     })
//     .addCase(withdraw, (state, action) => {
//       state.balance -= action.payload;
//     })
// );

const accountSlice = createSlice({
  name: "account",
  initialState: { balance: 9, blabla: null },
  reducers: {
    deposit: {
      reducer(state, action) {
        state.balance += action.payload;
      },
      prepare(value) {
        return { payload: value };
      },
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});

export const { deposit, withdraw } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;

const accountPersistConfig = {
  key: "account",
  storage,
  whitelist: ["balance"],
};

export const persistedAccountReduser = persistReducer(accountPersistConfig, accountReducer);

// export const accountReducer = (state = { balance: 9 }, action) => {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//       };
//     case "account/withdraw":
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       };
//     default:
//       return state;
//   }
// };
