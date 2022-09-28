import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { contactsSelectors, contactsOperations } from '../redux/contact';
import { Form, Field, Btn } from './ContactForm.styled';
// import TextField from '@mui/material/TextField';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

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
        multiline
        variant="standard"
        required
        type="text"
        name="name"
        id={nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
      />
      <Field
        label="Phone number"
        placeholder="+38 (000) 000-00-00"
        multiline
        variant="standard"
        required
        type="tel"
        name="number"
        id={numberInputId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChange}
      />

      <Btn variant="contained" size="small" color="secondary" type="submit">
        Add new Contact
      </Btn>
    </Form>
  );
}
