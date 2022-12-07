import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceCardNearProps = {
  offer: Offer;
  setActiveCard?: React.Dispatch<React.SetStateAction<Offer | null>>;
};

function PlaceCardNear({ offer, setActiveCard }: PlaceCardNearProps): JSX.Element {

  return (
    <PlaceCard
      offer={offer}
      setActiveCard={setActiveCard}
      className="near-places__card"
    />
  );
}

export default PlaceCardNear;
