import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;
  // align-items: center;
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

// export const Input = styled.input`
//   padding: 8px;
//   font-size: 16px;
//   border: 1px solid #ebebeb;
//   box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
//   :not(:last-child) {
//     margin-bottom: 10px;
//   }
//   :focus,
//   :hover {
//     outline: none;
//     border: 1px solid #4cbafc;
//   }
// `;

// export const Label = styled.label`
//   margin-bottom: 5px;
//   text-align: start;
//   font-size: 14px;
//   font-weight: 500;
//   text-transform: uppercase;
// `;
