import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    changeFilter: (state, action) => {
      return { ...state, value: action.payload };
    },
  },
});

export const getFilter = state => state.filter.value;

export const { changeFilter } = filterSlice.actions;
