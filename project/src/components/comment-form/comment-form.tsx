import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { RatingData } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCommentAction } from '../../store/actions/api';
import { getIsCommentLoading, getIsCommentLoadSuccess } from '../../store/data-process/selectors';
import { FormData } from '../../types/review';
import { ReviewRatingStars } from '../review-rating-stars/review-rating-stars';

type CommentFormProps = {
  id: number;
};

const defaultFormData = {
  comment: '',
  rating: null
};

function CommentForm({ id }: CommentFormProps ): JSX.Element {
  const dispatch = useAppDispatch();
  const isCommentLoading = useAppSelector(getIsCommentLoading);
  const isCommentLoadSuccess = useAppSelector(getIsCommentLoadSuccess);
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  useEffect(() => {
    if (isCommentLoadSuccess) {
      setFormData(defaultFormData);
    }
  }, [isCommentLoadSuccess]);

  const isValidForm = (50 < formData.comment.length && formData.comment.length < 300 && formData.rating !== null);
  const isFormDisabled = !isValidForm || isCommentLoading;

  const handleFormChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (isValidForm) { dispatch(setCommentAction({ id, formData })); }
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={(evt) => {handleFormSubmit(evt);}}
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
          Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          RatingData.map((data) => (
            <ReviewRatingStars
              key={data.value}
              ratingStar={data}
              isChecked={data.value === Number(formData.rating)}
              formDisabled={isCommentLoading}
              handleFieldChange={handleFormChange}
            />
          )
          )
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        maxLength={300}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFormChange}
        disabled={isCommentLoading}
        value={formData.comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isFormDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;

