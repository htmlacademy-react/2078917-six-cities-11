import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { PlaceCardModes, FavoriteStatus } from '../../constants';
import cn from 'classnames';
import { useAppDispatch } from '../../hooks';
import { setFavoriteStatusAction } from '../../store/actions/api';

type PlaceCardProps = {
  offer: Offer;
  setActiveCard?: React.Dispatch<React.SetStateAction<Offer | null>>;
  mode: string;
};

function PlaceCard({ offer, setActiveCard, mode }: PlaceCardProps): JSX.Element {
  const { id, previewImage, title, type, rating, price, isPremium, isFavorite } = offer;
  const dispatch = useAppDispatch();

  const handleFavoriteButtonClick = () => {
    dispatch(setFavoriteStatusAction({
      currentId: id,
      status: isFavorite ? FavoriteStatus.NotFavorite : FavoriteStatus.Favorite,
    }));
  };

  return (
    <article
      className={`place-card ${
        (()=>{
          switch (mode) {
            case PlaceCardModes.City: return 'cities__card';
            case PlaceCardModes.Property: return 'near-places__card';
            default: return '';
          }
        })()
      }`}
      onMouseOver={() => {
        if (setActiveCard) {
          setActiveCard(offer);
        }
      }}
      onMouseOut={() => {
        if (setActiveCard) {
          setActiveCard(null);
        }
      }}
    >
      { isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div> }
      <div className={cn('place-card__image-wrapper', {
        'cities__image-wrapper': mode === PlaceCardModes.City,
        'near-places__image-wrapper': mode === PlaceCardModes.Property
      })}
      >
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
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
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
            onClick={handleFavoriteButtonClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
