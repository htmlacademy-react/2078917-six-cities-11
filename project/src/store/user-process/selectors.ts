import { NameSpace, AuthorizationStatuses } from '../../constants';
import { State } from '../../types/state';

const getAuthorizationStatus = (state: State): AuthorizationStatuses => state[NameSpace.User].authorizationStatus;

export { getAuthorizationStatus };
