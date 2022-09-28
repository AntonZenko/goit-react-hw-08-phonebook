import styled from 'styled-components';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.span`
  font-size: 16px;
  color: #94d1c4;

  font-weight: 500;
  margin-right: 10px;
`;

export const Name = styled.span`
  color: #94d1c4;

  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
`;

export const Btn = styled(Button)`
  font-size: 14px;
  padding: 5px 10px;
  color: #94d1c4;
  &:hover {
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: #94d1c4;
  margin-right: 20px;
  &:hover {
    color: #1d7874;
  }
`;
