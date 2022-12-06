import { Offer } from '../../types/offer';
import PropertyCard from '../property-card/property-card';

type OfferProps = {
  offers: Offer[];
  setActiveCard: React.Dispatch<React.SetStateAction<Offer|null>>;
};

function OfferList({ offers, setActiveCard }: OfferProps): JSX.Element {
  return (
    <>
      {offers.map((offer) =>
        (
          <PropertyCard
            key={offer.id}
            offer={offer}
            setActiveCard={setActiveCard}
          />)
      )}
    </>
  );
}

export default OfferList;
