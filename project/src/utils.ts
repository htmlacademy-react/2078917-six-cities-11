import { SortType } from './constants';
import { Offer } from './types/offer';

const sortHighToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

const sortLowToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;

const sortTopRated = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

export const getSortedOffers = (offers: Offer[], sortType: string) : Offer[] => {
  let result: Offer[];
  switch (sortType) {
    case SortType.LowToHigh:
      result = offers.sort(sortLowToHigh);
      break;
    case SortType.HighToLow:
      result = offers.sort(sortHighToLow);
      break;
    case SortType.TopRated:
      result = offers.sort(sortTopRated);
      break;
    default:
      result = offers;
  }
  return result;
};

