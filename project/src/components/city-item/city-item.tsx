import { selectCity } from '../../store/actions/action';
import { useAppDispatch, useAppSelector } from '../../hooks/index';

type CityItemProps = {
  city: string;
}

function CityItem({ city }: CityItemProps): JSX.Element {
  const selectedCity = useAppSelector((state) => state.cityName);
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item" key={city}>
      <div
        className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`}
        onClick={() => dispatch(selectCity(city))}
      >
        <span>{city}</span>
      </div>
    </li>
  );
}

export default CityItem;

