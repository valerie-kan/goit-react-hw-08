import { createAsyncThunk } from "@reduxjs/toolkit";
import { authRequest, setToken } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Valid token not found");
    }

    try {
      setToken(token);
      const { data } = await authRequest.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (values, thunkAPI) => {
    try {
      const { data } = await authRequest.post("/contacts", { ...values });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await authRequest.delete(`/contacts/${id}`, id);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
