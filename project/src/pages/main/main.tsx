import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { useCallback, useState } from 'react';
import Map from '../../components/map/map';
import PlacesList from '../../components/places-list/places-list';
import { PlaceCardModes } from '../../constants';
import { useAppSelector, useAppDispatch } from '../../hooks';
import CitiesList from '../../components/cities-list/cities-list';
import { getSortedOffers } from '../../utils';
import { SortTypes } from '../../constants';
import SortList from '../../components/sorts-list/sorts-list';
import { AppRoutes, AuthorizationStatuses } from '../../constants';
import { getUserData } from '../../api/user-data';
import { logoutAction } from '../../store/actions/api';
import { MouseEvent } from 'react';
import { getCity } from '../../store/app-action-process/selectors';
import { getOffers } from '../../store/data-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import NotAvailable from '../../components/not-available/not-available';
import { setCity } from '../../store/actions/action';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);
  const [activeSortOption, setActiveSortOption] = useState<string>(SortTypes.Popular);
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const selectCity = useCallback((cityItem: string) => dispatch(setCity(cityItem)), [dispatch]);
  const favoriteCount = offers.filter((offer) => offer.isFavorite).length;
  const currentOffers = offers.filter((offer) => offer.city.name === city);
  const sortedOffers = getSortedOffers(currentOffers, activeSortOption || '');
  const userData = getUserData();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = () => authorizationStatus === AuthorizationStatuses.Auth;

  const handleSignClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
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
                          {favoriteCount && <span className="header__favorite-count">{favoriteCount}</span>}
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList selectedCity={city} setCity={selectCity}/>
        <div className="cities">
          {
            currentOffers.length === 0 ? < NotAvailable city={city} /> :
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{currentOffers.length} places to stay in {city}</b>
                  <SortList
                    activeSortOption={activeSortOption}
                    setActiveSortOption={setActiveSortOption}
                  />
                  <div className='cities__places-list places__list tabs__content'>
                    <PlacesList
                      offers={sortedOffers}
                      setActiveCard={setActiveCard}
                      mode={PlaceCardModes.City}
                    />
                  </div>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    {currentOffers.length > 0 &&
                      <Map
                        offers={currentOffers}
                        activeOffer={activeCard}
                        city={currentOffers[0].city}
                      />}
                  </section>
                </div>
              </div>
          }
        </div>
      </main>
    </div>
  );
}

export default Main;
