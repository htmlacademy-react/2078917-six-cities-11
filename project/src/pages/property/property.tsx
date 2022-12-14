import { useParams } from 'react-router';
import { Offer } from '../../types/offer';
import Logo from '../../components/logo/logo';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { useState} from 'react';
import PlacesList from '../../components/places-list/places-list';
import { PlaceCardModes } from '../../constants';
import { getRatingInPercent } from '../../utils';
import { useAppSelector } from '../../hooks/index';

function Property(): JSX.Element {
  const params = useParams();
  const offers = useAppSelector((state) => state.offers);
  const offer = (offers.find((item) => item.id === Number.parseInt(params.id as string, 10))) as Offer;
  const { images, isPremium, title, type, rating, price, bedrooms, maxAdults, goods, host, description } = offer;
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const offersNearby = useAppSelector((state) => state.offers).slice(0, 3);

  return (
    <div className="page">
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
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((url)=>
                (
                  <div
                    key={url}
                    className="property__image-wrapper"
                  >
                    <img
                      className="property__image"
                      src={url}
                      alt="Photostudio"
                    />
                  </div>))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: getRatingInPercent(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((facility) =>
                    (
                      <li
                        key={facility}
                        className="property__inside-item"
                      >
                        {facility}
                      </li>)
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsList reviews={[]}/>
            </div>
          </div>
          <section className="property__map map">
            {offersNearby[0]?.city &&
            <Map
              offers={offersNearby}
              activeOffer={activeCard}
              city={offersNearby[0].city}
            />}
          </section>
        </section>
        <div className="container">
          <div className='near-places__list places__list'>
            <PlacesList
              offers={offersNearby}
              setActiveCard={setActiveCard}
              mode={PlaceCardModes.Property}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Property;
