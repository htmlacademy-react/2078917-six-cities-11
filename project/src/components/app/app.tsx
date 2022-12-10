import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import { AppRoutes, AuthorizationStatuses } from '../../constants';
import PrivateRoute from '../../components/private-route/private-route';
import { offers } from '../../mocks/offers';
import MainPage from '../../pages/main/main';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={
            <MainPage />
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
              authorizationStatus={AuthorizationStatuses.Auth}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Offer}
          element={
            <Property
              offers={offers}
            />
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
