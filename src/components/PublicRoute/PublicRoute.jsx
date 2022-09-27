import { Navigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

const PublicRoute = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
