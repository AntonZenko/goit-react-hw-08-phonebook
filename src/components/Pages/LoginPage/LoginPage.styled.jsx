import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;
`;

export const Field = styled(TextField)`
  font-size: 16px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Btn = styled(Button)`
  color: #94d1c4;
  &:hover {
  }
`;
