import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: 10px;
`;

export const Name = styled.span`
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
`;

export const Button = styled.button`
  padding: 5px 5px;
`;
export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #303030;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover {
    color: red;
  }
`;
