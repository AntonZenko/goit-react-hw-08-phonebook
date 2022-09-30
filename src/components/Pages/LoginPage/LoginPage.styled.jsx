import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    width: 70%;
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
  }
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
