import { useAppSelector } from '../../hooks';

export default function FavoriteIcon(): JSX.Element {
  const favorites = useAppSelector((state) => state.favorites);
  return (
    <span className="header__favorite-count">{favorites.length}</span>
  );
}
