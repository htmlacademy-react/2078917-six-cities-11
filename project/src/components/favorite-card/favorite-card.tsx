import { Link } from 'react-router-dom';
import CardsList from '../places-list/places-list';
import { Offer } from '../../types/offer';
import { PlaceCardModes, AppRoutes } from '../../constants';

type FavoriteCardsListProps = {
  offers: Offer[];
  city: string;
}

export function FavoriteCardsList({ offers, city }: FavoriteCardsListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoutes.Root}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <CardsList
          offers={offers}
          mode={PlaceCardModes.City}
        />
      </div>
    </li>
  );
}
