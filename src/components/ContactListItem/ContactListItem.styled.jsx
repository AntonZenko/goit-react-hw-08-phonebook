import styled from 'styled-components';
import Button from '@mui/material/Button';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 8px 20px 8px 10px;
  border-bottom: 1px solid #071e22;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Name = styled.span`
  color: #071e22;
  font-weight: 500;
  margin-right: 15px;
`;
export const Number = styled.span`
  margin-right: auto;
  color: #071e22;
`;
export const qButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border: none;
  color: #fff;
  background-color: #085380;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  padding: 4px 10px;
  :hover {
    background-color: #4cbafc;
    color: #292929;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const Btn = styled(Button)`
  color: #94d1c4;
  &:hover {
  }
`;
