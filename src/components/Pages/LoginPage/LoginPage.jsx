import { Container } from '../../Container/Container';
import PageTitle from 'components/PageTitle/PageTitle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { Form, Field, Btn } from './LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Container>
      <PageTitle title={'Login'}></PageTitle>
      <Form onSubmit={handleSubmit} autoComplete="on">
        <Field
          label="E-mail"
          placeholder="ironMan3000@gmail.com"
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
          variant="standard"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <Btn variant="contained" size="small" color="secondary" type="submit">
          Login
        </Btn>
      </Form>
    </Container>
  );
};

export default LoginPage;
