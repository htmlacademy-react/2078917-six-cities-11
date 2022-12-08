import { Review } from '../../types/review';
import CommentForm from '../comment-form/comment-form';

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map(({ id, avatar, mark, text, date, name }) =>
            (
              <li
                key={id}
                className="reviews__item"
              >
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img
                      className="reviews__avatar user__avatar"
                      src={avatar}
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
                      <span style={{ width: `${mark * 20}%` }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    {text}
                  </p>
                  <time
                    className="reviews__time"
                  >
                    {date}
                  </time>
                </div>
              </li>
            )
          )
        }
      </ul>
      <CommentForm />
    </section>
  );
}

export default ReviewsList;