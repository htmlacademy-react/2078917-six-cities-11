import { Fragment } from 'react';
import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  offers: Offer[];
  setActiveCard?: React.Dispatch<React.SetStateAction<Offer | null>>;
  mode: string;
};

function PlacesList({ offers, setActiveCard, mode }: PlacesListProps): JSX.Element {
  return (
    <Fragment>
      {offers.map((offer) =>
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
