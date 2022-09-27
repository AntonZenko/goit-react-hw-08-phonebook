import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <>{isLoggedIn ? children : <Navigate {...routeProps} />}</>;
};

export default PrivateRoute;
