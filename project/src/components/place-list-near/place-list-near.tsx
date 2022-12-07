import { Offer } from '../../types/offer';
import PlaceCardNear from '../place-card-main/place-card-main';

type PlaceListNearProps = {
  offers: Offer[];
  setActiveCard: React.Dispatch<React.SetStateAction<Offer | null>>;
  className: string;
};

function PlaceListNear({ offers, setActiveCard, className }: PlaceListNearProps): JSX.Element {
  return (
    <div className='near-places__list places__list'>
      {offers.map((offer) =>
        (
          <PlaceCardNear
            key={offer.id}
            offer={offer}
            setActiveCard={setActiveCard}
          />
        )
      )}
    </div>
  );
}

export default PlaceListNear;
