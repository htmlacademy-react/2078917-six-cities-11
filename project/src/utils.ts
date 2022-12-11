import { SortTypes } from './constants';
import { Offer } from './types/offer';

const sortHighToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

const sortLowToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;

const sortTopRated = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

export const getSortedOffers = (offers: Offer[], sortType: string) : Offer[] => {
  let result: Offer[];
  switch (sortType) {
    case SortTypes.LowToHigh:
      result = offers.sort(sortLowToHigh);
      break;
    case SortTypes.HighToLow:
      result = offers.sort(sortHighToLow);
      break;
    case SortTypes.TopRated:
      result = offers.sort(sortTopRated);
      break;
    default:
      result = offers;
  }
  return result;
};

export const formatDateToMonthYear = (date: string) : string => (
  new Date(date).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long'
    }
  )
);

export const getDateFromISOString = (dateTime: string): string => dateTime.split('T')[0];

export const getRatingInPercent = (rating: number): string => `${rating * 20}%`;
