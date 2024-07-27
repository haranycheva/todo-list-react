const { createAction, createReducer } = require("@reduxjs/toolkit");

const initState = [{}, {}, {}];
const addObj = (value) => ({ type: "obj/add", payload: value });
const deleteObj = (value) => ({ type: "obj/delete", payload: value });

const rootReduser = (state = initState, action) => {
  switch (action.type) {
    case "obj/add":
      return [...state, action.payload];
    case "obj/delete":
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

const addObjToolkit = createAction("obj/add");
const deleteObjToolkit = createAction("obj/delete");

console.log(addObjToolkit.toString());

const rootReducerToolkit = createReducer(initState, (builder) =>
  builder
    .addCase(addObjToolkit, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteObjToolkit, (state, action) => {
      const deleteId = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(deleteId, 1);
    })
);
