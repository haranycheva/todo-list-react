import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://user-api-jqba.onrender.com/";

const setAuthHeader = (token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.Authorization = ``;
};

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistToken = state.auth.token;
    if (!persistToken) {
      return thunkApi.rejectWithValue("can`t fetch user");
    }
    try {
      setAuthHeader(persistToken);
      const res = await axios.get("users/current");
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (arg, thunkApi) => {
    try {
      const res = await axios.post("/users/signup", arg);
      setAuthHeader(res.data.token)
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (arg, thunkApi) => {
  try {
    const res =  await axios.post("/users/signin", arg);
    console.log(res);
    setAuthHeader(res.data.token)
    return res.data;
  } catch (error) {
    alert(error.response.data.message);
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logOut", async (arg, thunkApi) => {
  try {
    const res = await axios.post("/users/logOut", arg);
    clearAuthHeader()
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
