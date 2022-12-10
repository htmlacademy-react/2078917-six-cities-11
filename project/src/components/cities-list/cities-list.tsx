import { CityType } from '../../constants';
import CityItem from '../city-item/city-item';


function CitiesList(): JSX.Element {
  const cities = Array.from(Object.values(CityType));
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <CityItem
              key={city}
              city={city}
            />))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
