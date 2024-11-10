import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authRequest = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setToken = (token) => {
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
      console.log(data);
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
      console.log(data);
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
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
