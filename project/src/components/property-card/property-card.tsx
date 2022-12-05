import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';

type OfferProps = {
  offer: Offer;
  setActiveCard?: React.Dispatch<React.SetStateAction<number>>;
};

function PropertyCard({ offer, setActiveCard}: OfferProps ): JSX.Element {
  const { id, photos, title, type, rating, price } = offer;

  return (
    <article
      className="cities__card place-card"
      onMouseOver={() => {
        if (setActiveCard)
        {
          setActiveCard(offer.id);
        }
      }}
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={`img/${photos.length > 0 ? photos[0] : 'room.jpg'}`}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style= {{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PropertyCard;
