import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const Field = styled(TextField)`
  font-size: 16px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Btn = styled(Button)`
  margin-top: 10px;
  color: #94d1c4;
  &:hover {
  }
`;
