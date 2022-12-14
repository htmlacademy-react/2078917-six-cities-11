import { NameSpace } from '../../constants';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { State } from '../../types/state';

const getOffer = (state: State): Offer => state[NameSpace.Data].currentOffer as Offer;
const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers as Offer[];
const getOffersLoadingData = (state: State): boolean => state[NameSpace.Data].loadedState.isOffersLoading;
const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
const getComments = (state: State): Review[] => state[NameSpace.Data].comments;
const getIsCommentLoading = (state: State): boolean => state[NameSpace.Data].loadedState.isCommentLoading;
const getIsCommentLoadSuccess = (state: State): boolean => state[NameSpace.Data].loadedState.isCommentLoadSuccess;
const getFavoritesLoadingData = (state: State): boolean => !state[NameSpace.Data].loadedState.isFavoritesLoaded;

export { getOffer, getOffers, getOffersLoadingData, getFavoriteOffers, getNearbyOffers, getComments, getIsCommentLoading, getIsCommentLoadSuccess, getFavoritesLoadingData };
