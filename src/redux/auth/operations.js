import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authRequest = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  authRequest.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  authRequest.defaults.headers.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const { data } = await authRequest.post("/users/signup", userData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const { data } = await authRequest.post("/users/login", userData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await authRequest.post("/users/logout");
    clearToken();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Valid token not found");
    }

    try {
      setToken(token);
      const { data } = await authRequest.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
