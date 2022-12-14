import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import { AppRoutes } from '../../constants';
import PrivateRoute from '../../components/private-route/private-route';
import Main from '../../pages/main/main';
import { useAppSelector } from '../../hooks';
import Loader from '../loader/loader';
import { Favorites } from '../../pages/favorites/favorites';
import { getOffersLoadingData } from '../../store/data-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersLoading = useAppSelector(getOffersLoadingData);

  if (isOffersLoading) {
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={
            <Main />
          }
        />
        <Route
          path={AppRoutes.Login}
          element={<Login />}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Offer}
          element={
            <Property />
          }
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
