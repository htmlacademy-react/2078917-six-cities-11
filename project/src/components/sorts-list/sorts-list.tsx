import { useState } from 'react';
import { SortType } from '../../constants';
import SortOption from '../sort-option/sort-option';

type SortsListProps = {
  activeSortOption: string;
  setActiveSortOption: (sortType: string) => void;
}

function SortsList({ activeSortOption, setActiveSortOption }: SortsListProps): JSX.Element {
  const [isActive, setActive] = useState<boolean>(false);
  const selectSortOption = (sortType: string) => {
    setActiveSortOption(sortType);
    setActive(!isActive);
  };

  return (
    <div className="places__sorting">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type"
        onMouseDown={() => setActive(!isActive)}
        tabIndex={0}
      >
        {activeSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isActive ? 'places__options--opened' : ''}`}>
        {Array.from(Object.values(SortType)).map(
          (sortType) => (
            <SortOption
              key={sortType}
              sortType={sortType}
              activeSortOption={activeSortOption}
              selectSortOption={selectSortOption}
            />))}
      </ul>
    </div>
  );
}

export default SortsList;
