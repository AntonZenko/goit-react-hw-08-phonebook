import { Wrapper, NavLinkStyled } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <>
      <Wrapper>
        <NavLinkStyled to="/login">Login</NavLinkStyled>
        <NavLinkStyled to="/register">Sign up</NavLinkStyled>
      </Wrapper>
    </>
  );
};
