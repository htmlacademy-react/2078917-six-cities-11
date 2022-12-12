import { store } from '../store';
import { setError } from '../store/actions/action';
import { clearErrorAction } from '../store/actions/api';

export const errorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
