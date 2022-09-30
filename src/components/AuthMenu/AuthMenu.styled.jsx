import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  margin-right: 10px;
  color: #94d1c4;
  &:hover {
    color: #1d7874;
  }
  @media screen and (min-width: 480px) {
    font-size: 16px;
    margin-right: 20px;
  }
`;
