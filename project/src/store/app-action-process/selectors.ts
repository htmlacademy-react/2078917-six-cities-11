import { NameSpace } from '../../constants';
import { State } from '../../types/state';

const getCity = (state: State): string => state[NameSpace.AppAction].city;

export { getCity };
