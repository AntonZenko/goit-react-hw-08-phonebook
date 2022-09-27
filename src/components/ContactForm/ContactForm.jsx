import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { contactsSelectors, contactsOperations } from '../redux/contact';
import { Form, Input, Button, Label, BtnWrapper } from './ContactForm.styled';
import Loader from 'components/Loader/Loader';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const isLoading = false;

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
        return Notify.warning(`${name} is already in contacts`);
      }
      if (contacts.some(item => item.number === number)) {
        return Notify.warning(`${number} is already in contacts`);
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
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer."
        required
        id={nameInputId}
        value={name}
        onChange={handleChange}
      />
      <Label htmlFor={numberInputId}>Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={numberInputId}
        value={number}
        onChange={handleChange}
      />
      {isLoading ? (
        <BtnWrapper>
          <Loader />
        </BtnWrapper>
      ) : (
        <Button type="submit">Add new Contact</Button>
      )}
    </Form>
  );
}
