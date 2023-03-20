import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://panorbit.in/api/users.json";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(url);
    return response?.data?.users;
  } catch (error: any) {
    return Promise.reject(error.message);
  }
});
