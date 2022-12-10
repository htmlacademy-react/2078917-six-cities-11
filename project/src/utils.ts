import { SortType } from './constants';
import { Offer } from './types/offer';

const sortHighToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

const sortLowToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;

const sortTopRated = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

export const getSortedOffers = (offers: Offer[], sortType: string) : Offer[] => {
  switch (sortType) {
    case SortType.LowToHigh: return(offers.sort(sortLowToHigh));
    case SortType.HighToLow: return(offers.sort(sortHighToLow));
    case SortType.TopRated: return(offers.sort(sortTopRated));
    default: return(offers);
  }
};

