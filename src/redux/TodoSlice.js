import { createSlice } from "@reduxjs/toolkit";
import { changeTodo, deleteToDo, getTodo } from "../fetch";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getTodo.fulfilled, (state, action) => {
        state.todoList = action.payload;
      })
      .addCase(deleteToDo.fulfilled, (state, action) => {
        state.todoList = state.todoList.filter(
          (el) => el.id !== action.payload.data.id
        );
        action.payload.doAfter(action.payload.data.id);
      })
      .addCase(changeTodo.fulfilled, (state, action) => {
        const index = state.todoList.findIndex((el) => el.id === action.payload.id)
        state.todoList.splice(index, 1, action.payload);
      })
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      ),
});

export const rootTodoReducer = TodoSlice.reducer;
