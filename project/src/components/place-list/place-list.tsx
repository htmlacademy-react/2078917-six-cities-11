import { Offer } from '../../types/offer';

type PlaceListProps = {
  offers: Offer[];
  setActiveCard: React.Dispatch<React.SetStateAction<Offer | null>>;
  className: string;
};

function PlaceList({ offers, setActiveCard, className, children }: PlaceListProps): JSX.Element {
  return (
    <div className={`places__list ${className}`}>
      {offers.map((offer) =>
        children
      )}
    </div>
  );
}

export default PlaceList;
