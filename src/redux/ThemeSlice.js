import { createAction, createReducer } from "@reduxjs/toolkit";

// export const themeReducer = (state = { color: "light" }, action) => {
//   switch (action.type) {
//     case "theme/switch":
//       return {
//         ...state,
//         color: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const switchTheme = createAction("theme/switch");

export const themeReducer = createReducer({ color: "light" }, (builder) =>
  builder.addCase(
    switchTheme,
    (state, action) => {state.color = action.payload}
  )
);
