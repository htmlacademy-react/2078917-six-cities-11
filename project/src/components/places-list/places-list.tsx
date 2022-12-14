import { Fragment } from 'react';
import { Offer } from '../../types/offer';
import { getSortedOffers } from '../../utils';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  offers: Offer[];
  setActiveCard?: ((offer: Offer | undefined) => void) | undefined;
  mode: string;
  activeSortOption?: string;
};

function PlacesList({ offers, setActiveCard, mode, activeSortOption }: PlacesListProps): JSX.Element {
  const sortedOffers = getSortedOffers(offers, activeSortOption || '');

  return (
    <Fragment>
      {sortedOffers.map((offer) =>
        (
          <PlaceCard
            key={offer.id}
            offer={offer}
            setActiveCard={setActiveCard}
            mode={mode}
          />
        )
      )}
    </Fragment>
  );
}

export default PlacesList;
