import { Offer } from '../../types/offer';
import PlaceCardMain from '../place-card-main/place-card-main';
import PlaceList from '../place-list/place-list';

type PlaceListMainProps = {
  offers: Offer[];
  setActiveCard: React.Dispatch<React.SetStateAction<Offer | null>>;
  className: string;
};

function PlaceListMain({ offers, setActiveCard, className }: PlaceListMainProps): JSX.Element {
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
