import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './pages/not-found/not-found';
import Login from './pages/login/login';
import Favorites from './pages/favorites/favorites';
import Property from './pages/property/property';
import { AppRoutes, AuthorizationStatuses } from './constants';
import PrivateRoute from './components/private-route/private-route';
import { offers } from './mocks/offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const OFFERS_NUMBER = 3;

root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoutes.Root}
        element={
          <App
            offersNumber={OFFERS_NUMBER}
            offers={offers}
          />
        }
      />
      <Route
        path={AppRoutes.Login}
        element={<Login/>}
      />
      <Route
        path={AppRoutes.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatuses.Auth}
          >
            <Favorites
              offers={offers}
            />
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
        element={<NotFound/>}
      />
    </Routes>
  </BrowserRouter>
);
