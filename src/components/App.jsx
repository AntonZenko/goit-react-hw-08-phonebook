import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter, Navigate } from 'react-router-dom';
// import { BASE_URL } from './services/BaseUrl';
import { useDispatch } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import { useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const AppBar = lazy(() => import('./AppBar/AppBar'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts'));
const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage/RegisterPage'));
// const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));

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
        <BrowserRouter basename="/">
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<AppBar />}>
                <Route
                  index
                  element={
                    <PublicRoute index replace>
                      <HomePage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="register"
                  element={
                    <PublicRoute to="/contacts" replace restricted>
                      <RegisterPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="login"
                  element={
                    <PublicRoute to="/contacts" replace restricted>
                      <LoginPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="contacts"
                  element={
                    <PrivateRoute to="/" replace>
                      <Contacts />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </>
  );
}
