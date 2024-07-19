import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export async function postToDo(task) {
  const res = await axios.post("todos", task);
  return res.data;
}

export const getTodo = createAsyncThunk(
  "todo/fetchAll",
  async (_, thunkApi) => {
    try {
      const res = await axios.get("todos");
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const changeTodo = createAsyncThunk(
  "todo/changeTodo",
  async ({id, data}, thunkApi) => {
    try {
      const res = await axios.put(`todos/${id}`, data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export async function getSingleToDo(id) {
  const res = await axios.get(`todos/${id}`);
  return res.data;
}

export const deleteToDo = createAsyncThunk(
  "todo/deleteTodo",
  async ({deleteEl, doAfter}, thunkApi) => {
    try {
      const res = await axios.delete(`todos/${deleteEl}`);
      return {data: res.data, doAfter,};
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
