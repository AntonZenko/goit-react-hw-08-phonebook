import { useState } from 'react';
import { useAddContactMutation } from '../redux/contactApi';
import Loader from 'components/Loader/Loader';

import { nanoid } from 'nanoid';

import { Form, Input, Button, Label, BtnWrapper } from './ContactForm.styled';

export default function ContactForm() {
  const [addContact, { isLoading }] = useAddContactMutation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'phone':
        setPhone(event.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleAddContact = async newContact => {
    try {
      await addContact(newContact);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact({ name, phone });
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nameInputId}
        value={name}
        onChange={handleChange}
      />
      <Label htmlFor={numberInputId}>Number</Label>
      <Input
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={numberInputId}
        value={phone}
        onChange={handleChange}
      />
      {isLoading ? (
        <BtnWrapper>
          <Loader />
        </BtnWrapper>
      ) : (
        <Button type="submit" isDisabled={isLoading}>
          Add new Contact
        </Button>
      )}
    </Form>
  );
}
