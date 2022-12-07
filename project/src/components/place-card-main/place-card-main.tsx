import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceCardMainProps = {
  offer: Offer;
  setActiveCard?: React.Dispatch<React.SetStateAction<Offer | null>>;
};

function PlaceCardMain({ offer, setActiveCard }: PlaceCardMainProps): JSX.Element {

  return (
    <PlaceCard
      offer={offer}
      setActiveCard={setActiveCard}
      className="cities__card"
    />
  );
}

export default PlaceCardMain;
