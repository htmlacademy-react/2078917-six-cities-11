import { Offer } from '../../types/offer';
import PropertyCard from '../property-card/property-card';

type OfferProps = {
  offers: Offer[];
  setActiveCard: React.Dispatch<React.SetStateAction<number>>;
};

function OfferList({ offers, setActiveCard }: OfferProps): JSX.Element {
  return (
    <>
      {offers.map(
        (offer, id) => {
          const keyValue = id;
          return (
            <PropertyCard
              key={keyValue}
              offer={offer}
              setActiveCard={setActiveCard}
            />);
        }
      )}
    </>
  );
}

export default OfferList;

