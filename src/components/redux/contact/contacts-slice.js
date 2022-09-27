import { createSlice } from '@reduxjs/toolkit';
import contactOperations from './contacts-operations';

const initialState = {
  items: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactOperations.getUserContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactOperations.createNewContact.fulfilled](state, action) {
      state.items.push(action.payload);
    },
    [contactOperations.deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.meta.arg);
    },
  },
});

export default contactSlice.reducer;
