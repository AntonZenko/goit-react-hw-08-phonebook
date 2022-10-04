import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { contactsSelectors, contactsOperations } from '../redux/contact';
import { Form, Field, Btn } from './ContactForm.styled';
import { PatternFormat } from 'react-number-format';
import { TextField } from '@mui/material';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const materialUITextFieldProps = {
    label: 'Phone number',
    placeholder: '+38 (000) 000 00 00',
    variant: 'standard',
    type: 'tel',
    name: 'number',
    maxRows: 4,
  };

  const handleChange = event => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'number':
        setNumber(event.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts?.length > 0) {
      if (contacts.some(item => item.name === name)) {
        return Notify.warning(`${name} is already in contacts`, {
          timeout: 1500,
        });
      }
      if (contacts.some(item => item.number === number)) {
        return Notify.warning(`${number} is already in contacts`, {
          timeout: 1500,
        });
      }
    }
    dispatch(contactsOperations.createNewContact({ name, number }));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        label="Name"
        placeholder="Tony Stark"
        variant="standard"
        required
        type="text"
        name="name"
        id={nameInputId}
        value={name}
        onChange={handleChange}
      />

      <PatternFormat
        value={number}
        id={numberInputId}
        format="+38 (###) ### ## ##"
        allowEmptyFormatting
        mask="_"
        // customInput={TextField}
        onChange={handleChange}
        required
        // {...materialUITextFieldProps}
      />

      <Btn variant="contained" size="small" color="secondary" type="submit">
        Add new Contact
      </Btn>
    </Form>
  );
}
