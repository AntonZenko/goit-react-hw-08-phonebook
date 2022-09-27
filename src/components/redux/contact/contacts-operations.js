import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getUserContacts = createAsyncThunk(
  'contacts/getContacts',
  async credentials => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {}
  }
);

const createNewContact = createAsyncThunk(
  'contacts/newContact',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {}
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async credentials => {
    try {
      const { data } = await axios.delete(`/contacts/${credentials}`);
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
