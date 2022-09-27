import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { BASE_URL } from './services/BaseUrl';
import { useDispatch } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import { useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts'));
const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage/RegisterPage'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isFetchingCurrentUser ? (
        <h1>show React Skeleton</h1>
      ) : (
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route element={<PublicRoute />}>
                <Route index element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />}></Route>
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="contacts" element={<Contacts />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
}
