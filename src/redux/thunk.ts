import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://panorbit.in/api/users.json'

export const fetchUsers = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(url);
    console.log(response.data?.users)
    return response?.data?.users;
  });