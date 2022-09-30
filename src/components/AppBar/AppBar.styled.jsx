import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 15px;
  background-color: #071e22;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: #94d1c4;
  margin-right: 10px;
  &:hover {
    color: #1d7874;
  }
  @media screen and (min-width: 480px) {
    font-size: 16px;
    margin-right: 20px;
  }
`;
