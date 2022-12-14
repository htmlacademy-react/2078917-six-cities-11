import { Cities } from '../../constants';
import CityItem from '../city-item/city-item';

type CitiesListProps = {
  selectedCity: string;
  setCity: (city: string) => void;
}

function CitiesList({ selectedCity, setCity }: CitiesListProps): JSX.Element {
  const cities = Array.from(Object.values(Cities));
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <CityItem
              key={city}
              city={city}
              selectedCity={selectedCity}
              setCity={setCity}
            />))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
