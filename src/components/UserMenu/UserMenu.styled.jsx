import styled from 'styled-components';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.div`
  // display: flex;
`;

export const Text = styled.span`
  font-size: 14px;
  color: #94d1c4;
  font-weight: 500;
  margin-right: 10px;
  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

export const Btn = styled(Button)`
  padding: 3px 8px;
  font-size: 12px;
  color: #94d1c4;
  &:hover {
  }
  @media screen and (min-width: 480px) {
    font-size: 14px;
    padding: 5px 10px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: #94d1c4;
  &:hover {
    color: #1d7874;
  }
  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;
