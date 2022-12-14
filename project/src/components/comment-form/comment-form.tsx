import { useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { APIRoutes, MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, RatingData } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { api } from '../../store';
import { setError } from '../../store/actions/action';
import { Review, FormData } from '../../types/review';
import { ReviewRatingStars } from '../review-rating-stars/review-rating-stars';

type CommentFormProps = {
  setComments: (comments: Review[]) => void;
};

function CommentForm({ setComments }: CommentFormProps ): JSX.Element {

  const { id } = useParams();
  const [formDisabled, setFormDisabled] = useState<boolean>(false);

  const defaultFormData = {
    comment: '',
    rating: null
  };

  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const dispatch = useAppDispatch();

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    try {
      setFormDisabled(true);
      const { data } = await api.post<Review[]>(`${APIRoutes.Comments}/${Number(id)}`, formData);
      setComments(data);
      setFormDisabled(false);
      setFormData(defaultFormData);
    } catch (error) {
      dispatch(setError('Can not send your comment'));
      setFormDisabled(false);
    }
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
              formDisabled={formDisabled}
              handleFieldChange={handleFieldChange}
            />
          )
          )
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        maxLength={MAX_COMMENT_LENGTH}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
        disabled={formDisabled}
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
          disabled={formData.comment.length < MIN_COMMENT_LENGTH || formData.rating === null || formDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;

