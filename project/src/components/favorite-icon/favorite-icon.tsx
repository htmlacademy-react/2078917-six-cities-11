import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/data-process/selectors';

export default function FavoriteIcon(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const favorites = offers.filter((offer) => offer.isFavorite);
  return (
    <span className="header__favorite-count">{favorites.length}</span>
  );
}
