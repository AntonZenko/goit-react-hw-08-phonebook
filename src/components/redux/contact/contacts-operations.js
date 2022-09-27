import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

const getUserContacts = createAsyncThunk(
  'contacts/getContacts',
  async credentials => {
    try {
      const { data } = await axios.get('/contacts');
      // console.log('operations', data);
      return data;
    } catch (error) {}
  }
);

const createNewContact = createAsyncThunk(
  'contacts/newContact',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      // console.log(data);
      return data;
    } catch (error) {}
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async credentials => {
    try {
      const { data } = await axios.delete(`/contacts/${credentials}`);
      // console.log('delete', data);
      return data;
    } catch (error) {}
  }
);

const operations = {
  getUserContacts,
  createNewContact,
  deleteContact,
};

export default operations;
