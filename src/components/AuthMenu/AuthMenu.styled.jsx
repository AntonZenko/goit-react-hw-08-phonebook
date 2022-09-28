import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
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
