type SortOptionProps = {
  sortType: string;
  activeSortOption: string;
  selectSortOption: (sortItem: string) => void;
}

function SortOption({ sortType, activeSortOption, selectSortOption }: SortOptionProps): JSX.Element {
  return (
    <li className={`places__option ${sortType === activeSortOption ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={() => selectSortOption(sortType)}
    >
      {sortType}
    </li>
  );
}

export default SortOption;
