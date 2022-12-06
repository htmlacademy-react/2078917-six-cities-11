import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatuses } from '../../constants';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatuses;
  children: JSX.Element;
}

function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatuses.Auth
      ? children
      : <Navigate to={AppRoutes.Login} />
  );
}

export default PrivateRoute;
