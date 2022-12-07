import { useState, ChangeEvent, Fragment } from 'react';

function CommentForm(): JSX.Element {

  const [formData, setFormData] = useState({
    rating: 0,
    review: ''
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({...formData, [name]: value});
  };

  const ratingInputIds = Array.from({ length: 5 }, (_, i) => 5 - i);
  const ratingInputs = ratingInputIds.map((number) =>
    (
      <Fragment key={number}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={number}
          id={`${number}`}
          type="radio"
          onChange={handleFieldChange}
        />
        <label
          htmlFor={`${number}`}
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </Fragment>
    )
  );

  return (
    <form className="reviews__form form">
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
          Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingInputs}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button" type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;

