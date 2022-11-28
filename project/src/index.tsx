import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './pages/not-Found/not-found';
import Login from './pages/login/login';
import Favorites from './pages/favorites/favorites';
import Property from './pages/property/property';
import { AppRoute, AuthorizationStatus } from './const';
import PrivateRoute from './components/private-route/private-route';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const OFFERS_NUMBER = 3;

root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<App offersNumber={OFFERS_NUMBER} />}
      />
      <Route
        path={AppRoute.Login}
        element={<Login/>}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.Auth}
          >
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Offer}
        element={<Property/>}
      />
      <Route
        path='*'
        element={<NotFound/>}
      />
    </Routes>
  </BrowserRouter>


);
