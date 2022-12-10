import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import Map from '../../components/map/map';
import PlacesList from '../../components/places-list/places-list';
import { PlaceCardModes } from '../../constants';
import { useAppSelector } from '../../hooks';
import CitiesList from '../../components/cities-list/cities-list';
import { getSortedOffers } from '../../utils';
import { SortType } from '../../constants';
import SortList from '../../components/sorts-list/sorts-list';

function Main(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer|null>(null);
  const [activeSortOption, setActiveSortOption] = useState<string>(SortType.Popular);
  const city = useAppSelector((state) => state.cityName);
  const currentOffers = useAppSelector((state) => state.offers).filter((offer) => offer.city.name === city);
  const sortedOffers = getSortedOffers(currentOffers, activeSortOption);
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
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
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
                    offers={sortedOffers}
                    activeOffer={activeCard}
                  />}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
