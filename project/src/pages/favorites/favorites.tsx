import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { FavoriteCardsList } from '../../components/favorite-card/favorite-card';
import { Offer } from '../../types/offer';
import { AppRoutes, AuthorizationStatuses, groupBy } from '../../constants';
import { getFavoriteOffers } from '../../store/data-process/selectors';
import { useEffect, useState } from 'react';
import { fetchFavoriteOffersAction, logoutAction } from '../../store/actions/api';
import { Link } from 'react-router-dom';
import { getUserData } from '../../api/user-data';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { MouseEvent } from 'react';

export function Favorites(): JSX.Element {

  const [isFavoritesLoaded, setFavoritesLoaded] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoritesGroups = groupBy(favoriteOffers, (i : Offer) => i.city.name);
  const userData = getUserData();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = () => authorizationStatus === AuthorizationStatuses.Auth;

  const handleSignClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  useEffect(() => {
    if (isFavoritesLoaded) { return; }
    dispatch(fetchFavoriteOffersAction());
    setFavoritesLoaded(true);
  },
  [dispatch, isFavoritesLoaded]
  );

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={isAuth() ? AppRoutes.Favorites : AppRoutes.Login}
                  >
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                      style={{ backgroundImage: `url(${userData.avatarUrl})` }}
                    >
                    </div>
                    {
                      isAuth() ?
                        <>
                          <span className="header__user-name user__name">{userData.name}</span>
                          {favoriteOffers && <span className="header__favorite-count">{favoriteOffers.length}</span>}
                        </> :
                        <span className="header__login">Sign in</span>
                    }
                  </Link>
                </li>
                {
                  isAuth() ?
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        onClick={(evt) => handleSignClick(evt)}
                        to={AppRoutes.Root}
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li> : ''
                }
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteOffers.length > 0 && Object.entries(favoritesGroups).map((item) => {
                const cityName = item[0];
                const cityOffers = item[1];
                return <FavoriteCardsList key={cityName} city={cityName} offers={cityOffers} />;
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}
