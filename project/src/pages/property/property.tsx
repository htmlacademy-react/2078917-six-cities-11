import { useParams } from 'react-router';
import Logo from '../../components/logo/logo';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { useEffect} from 'react';
import PlacesList from '../../components/places-list/places-list';
import { AppRoutes, AuthorizationStatuses, FavoriteStatus, PlaceCardModes } from '../../constants';
import { getRatingInPercent } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import CommentForm from '../../components/comment-form/comment-form';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { setFavoriteStatusAction, fetchFavoriteOffersAction, fetchCurrentOfferAction, fetchNearbyOffersAction, logoutAction } from '../../store/actions/api';
import { getNearbyOffers, getFavoriteOffers, getOffer } from '../../store/data-process/selectors';
import { getUserData } from '../../api/user-data';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';

function Property(): JSX.Element {
  const params = useParams();
  const id = Number(params.id);
  const offer = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const favoriteCount = useAppSelector(getFavoriteOffers).length;
  let offersForMap;
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthorizationStatus) === AuthorizationStatuses.Auth;
  const userData = getUserData();

  const handleSignClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  const handleFavoriteButtonClick = () => {
    dispatch(setFavoriteStatusAction({
      currentId: id,
      status: offer.isFavorite ? FavoriteStatus.NotFavorite : FavoriteStatus.Favorite
    }));
  };

  if (offer !== null) {
    offersForMap = nearbyOffers.slice(0, 3).concat(offer);
  }

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchFavoriteOffersAction());
    }
    if (offer === undefined || offer.id !== id) {
      dispatch(fetchCurrentOfferAction(id));
      dispatch(fetchNearbyOffersAction(id));
    }
  }, [id, dispatch, isAuth, offer]
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
                    to={isAuth ? AppRoutes.Favorites : AppRoutes.Login}
                  >
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                      style={{ backgroundImage: `url(${userData.avatarUrl})` }}
                    >
                    </div>
                    {
                      isAuth ?
                        <>
                          <span className="header__user-name user__name">{userData.name}</span>
                          {favoriteCount && <span className="header__favorite-count">{favoriteCount}</span>}
                        </> :
                        <span className="header__login">Sign in</span>
                    }
                  </Link>
                </li>
                {
                  isAuth ?
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
                <button className={`property__bookmark-button ${offer?.isFavorite ? 'property__bookmark-button--active' : ''} button`}
                  type="button"
                  onClick={handleFavoriteButtonClick}
                >
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
                <ReviewsList id={id}/>
                {
                  isAuth && <CommentForm id={id} />
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            {offersForMap && offer &&
              <Map
                offers={offersForMap}
                activeOffer={offer}
                city={offersForMap[0].city}
              />}
          </section>
        </section>
        <div className="container">
          <div className='near-places__list places__list'>
            {nearbyOffers &&
              <PlacesList
                offers={nearbyOffers}
                mode={PlaceCardModes.Property}
              />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Property;
