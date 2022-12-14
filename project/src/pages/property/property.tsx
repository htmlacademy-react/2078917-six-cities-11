import { useNavigate, useParams } from 'react-router';
import { Offer } from '../../types/offer';
import Logo from '../../components/logo/logo';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { useState} from 'react';
import PlacesList from '../../components/places-list/places-list';
import { APIRoutes, AppRoutes, AuthorizationStatuses, PlaceCardModes } from '../../constants';
import { getRatingInPercent } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { Review } from '../../types/review';
import CommentForm from '../../components/comment-form/comment-form';
import { api } from '../../store';
import { setError } from '../../store/actions/action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function Property(): JSX.Element {
  const params = useParams();
  const id = Number(params.id);
  const [offer, setOffer] = useState<Offer | null>(null);
  const [nearbyOffers, setNearbyOffers] = useState<Offer[]>([]);
  const [comments, setComments] = useState<Review[]>([]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthorizationStatus) === AuthorizationStatuses.Auth;

  let offersForMap;

  const getOffer = async () => {
    try {
      const { data } = await api.get<Offer>(`${APIRoutes.Offers}/${id}`);
      setOffer(data);
    } catch (error) {
      navigate(AppRoutes.NotFound);
    }
  };

  const getNearbyOffers = async () => {
    try {
      const { data } = await api.get<Offer[]>(`${APIRoutes.Offers}/${id}/nearby`);
      setNearbyOffers(data);
    } catch (error) {
      dispatch(setError('Can not find nearby offers'));
    }
  };

  const getComments = async () => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoutes.Comments}/${id}`);
      setComments(data);
    } catch (error) {
      dispatch(setError('Can not find comments'));
    }
  };

  if (offer === null || offer?.id !== Number(id)) {
    getOffer();
    getNearbyOffers();
    getComments();
  }

  if (offer !== null) {
    offersForMap = nearbyOffers.slice(0, 3).concat(offer);
  }

  const [offerForMap, setOfferForMap] = useState<Offer | null>(null);

  /*const offers = useAppSelector((state) => state.offers);
  const offer = (offers.find((item) => item.id === id)) as Offer;
  const { images, isPremium, title, type, rating, price, bedrooms, maxAdults, goods, host, description } = offer;

  const offersNearby = useAppSelector((state) => state.offers).slice(0, 3);*/

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
              {offer?.images.slice(0, 6).map((url)=>
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
              {offer?.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer?.title}
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
                  <span style={{ width: offer ? getRatingInPercent(offer.rating) : '0%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer ? offer?.type.charAt(0).toUpperCase() + offer?.type.slice(1) : ''}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer?.bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer?.goods.map((facility) =>
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
                      src={offer?.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {offer?.host.name}
                  </span>
                  {offer?.host.isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer?.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={comments}/>
                {
                  isAuth && <CommentForm setComments={setComments} />
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            {offersForMap && offer &&
              <Map
                offers={offersForMap}
                activeOffer={offerForMap}
                city={offersForMap[0].city}
              />}
          </section>
        </section>
        <div className="container">
          <div className='near-places__list places__list'>
            {nearbyOffers &&
              <PlacesList
                offers={nearbyOffers}
                setActiveCard={setOfferForMap}
                mode={PlaceCardModes.Property}
              />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Property;
