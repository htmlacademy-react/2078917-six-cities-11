import { Offer } from '../../types/offer';
import PlaceCardMain from '../place-card-main/place-card-main';

type PlaceListMainProps = {
  offers: Offer[];
  setActiveCard: React.Dispatch<React.SetStateAction<Offer | null>>;
};

function PlaceListMain({ offers, setActiveCard }: PlaceListMainProps): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) =>
        (
          <PlaceCardMain
            key={offer.id}
            offer={offer}
            setActiveCard={setActiveCard}
          />
        )
      )}
    </div>
  );
}

export default PlaceListMain;
