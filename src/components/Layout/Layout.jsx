import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { lazy, Suspense } from 'react';

import { Header, Nav, NavLinkStyled } from './Layout.styled';
// import { BASE_URL } from '../services/BaseUrl';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { authSelectors } from '../redux/auth';

// const Loader = lazy(() => import('../Loader/Loader'));

const Layout = () => {
  // const isAuth = false;
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Header>
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
        </Nav>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div>
            <NavLinkStyled to="/login">Login</NavLinkStyled>
            <NavLinkStyled to="/register">Sign up</NavLinkStyled>
          </div>
        )}
      </Header>
      <Outlet />
    </>
  );
};
export default Layout;
