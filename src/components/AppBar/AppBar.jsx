import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header, Nav, NavLinkStyled } from './AppBar.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthMenu } from '../AuthMenu/AuthMenu';
import { authSelectors } from '../redux/auth';

const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Header>
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
