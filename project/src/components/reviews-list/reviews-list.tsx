import { Fragment } from 'react';
import { Review } from '../../types/review';
import { formatDateToMonthYear, getDateFromISOString } from '../../utils';
import { sortReviews } from '../../utils';
import { MAX_REVIEWS_COUNT } from '../../constants';

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  const sortedReviews = reviews.slice(0, MAX_REVIEWS_COUNT).sort(sortReviews);
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          sortedReviews.map((review) => {
            const { comment, date, rating, user } = review;
            const { name, avatarUrl, id } = user;
            return (
              <li
                className="reviews__item"
                key={id}
              >
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img
                      className="reviews__avatar user__avatar"
                      src={avatarUrl}
                      width="54"
                      height="54"
                      alt="Reviews avatar"
                    />
                  </div>
                  <span className="reviews__user-name">
                    {name}
                  </span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{ width: `${rating * 20}%` }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    {comment}
                  </p>
                  <time
                    className="reviews__time"
                    dateTime={getDateFromISOString(date)}
                  >
                    {formatDateToMonthYear(date)}
                  </time>
                </div>
              </li>
            );
          }
          )
        }
      </ul>
    </Fragment>
  );
}

export default ReviewsList;
