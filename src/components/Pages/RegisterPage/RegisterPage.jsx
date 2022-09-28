// import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import { Container } from '../../Container/Container';
import PageTitle from 'components/PageTitle/PageTitle';
import { Form, Field, Btn } from './RegisterPage.styled';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <PageTitle title={'Sign Up'}></PageTitle>
      <Form onSubmit={handleSubmit} autoComplete="on">
        <Field
          label="Name"
          placeholder="Fury"
          multiline
          variant="standard"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <Field
          label="E-mail"
          placeholder="ironMan3000@gmail.com"
          multiline
          variant="standard"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <Field
          label="Password"
          placeholder="qwerty123"
          multiline
          variant="standard"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          autoComplete="on"
        />

        <Btn variant="contained" size="small" color="secondary" type="submit">
          Sign up
        </Btn>
      </Form>
    </Container>
  );
};

export default Register;
