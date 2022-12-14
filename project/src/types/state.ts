import { store } from '../store/index.js';
import { Offer } from './offer.js';
import { Review } from './review.js';
import { AuthorizationStatuses } from '../constants';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatuses;
};

export type DataProcess = {
  currentOffer: Offer | undefined;
  offers: Offer[] | undefined;
  favoriteOffers: Offer[];
  nearbyOffers: Offer[];
  comments: Review[];
  error: string | null;
  loadedState: {
    isCurrentOfferLoading: boolean;
    isOffersLoading: boolean;
    isOffersLoaded: boolean;
    isFavoritesLoaded: boolean;
    isNearbyLoaded: boolean;
    isCommentLoading: boolean;
    isCommentLoadSuccess: boolean;
  };
};

export type AppActionData = {
  city: string;
};
