import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

const PublicRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isLoggedIn && routeProps.restricted ? (
        <Navigate {...routeProps} />
      ) : (
        children
      )}
    </>
  );
};

export default PublicRoute;
