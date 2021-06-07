import { useEffect } from 'react';

import useHttp from '../../hooks/use-http';
import useInput from '../../hooks/use-input';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const { sendRequest, status, error } = useHttp(addComment);
  const {
    value: enteredComment,
    isValid: enteredCommentIsValid,
    hasError: commentInputHasError,
    valueChangeHandler: commentChangeHandler,
    inputBlurHandler: commentBlurHandler,
    reset: commentResetState,
  } = useInput(value => value.length >= 5);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!enteredCommentIsValid) {
      return;
    }

    sendRequest({ commentData: { text: enteredComment }, quoteId: props.quoteId });
    commentResetState();
  };

  const commentInputClass = commentInputHasError ? classes.invalid : classes.control;

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={commentInputClass} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea
          value={enteredComment}
          onChange={commentChangeHandler}
          onBlur={commentBlurHandler}
          id='comment'
          rows='5'
        >
        </textarea>
        {commentInputHasError && <p className='error-message'>Please type min 5 charts.</p>}
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
