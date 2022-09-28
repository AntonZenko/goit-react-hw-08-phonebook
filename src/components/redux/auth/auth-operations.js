import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      console.log(thunkAPI);
      return data;
    } catch (error) {
      Notify.failure(`${error.message}, please try again`, {
        timeout: 1500,
      });
      return thunkAPI.rejectWithValue();
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    Notify.failure(`${error.message}, please try again`, {
      timeout: 1500,
    });
    return thunkAPI.rejectWithValue();
  }
});

const logOut = createAsyncThunk('auth/logout', async thunkAPI => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    Notify.failure(`${error.message}, please try again`, {
      timeout: 1500,
    });
    return thunkAPI.rejectWithValue();
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    // console.log(thunkAPI.getState());
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // console.log('no token, fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      Notify.failure(`${error.message}, please try again`, {
        timeout: 1500,
      });
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};
export default operations;
