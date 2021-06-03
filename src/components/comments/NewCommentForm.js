import { useRef, useEffect, useState } from 'react';

import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const [commentIsValid, setCommentIsValid] = useState();
  const [commentError, setCommentError] = useState('');

  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredComment = commentTextRef.current.value;

    if (enteredComment.length < 5) {
      setCommentError('Please write something more (min 5 charts)');
      setCommentIsValid(false);
    } else {
      setCommentError('');
      setCommentIsValid(true);
    }

    if (!commentIsValid) {
      return;
    }

    sendRequest({ commentData: { text: enteredComment }, quoteId: props.quoteId });
    commentTextRef.current.value = '';
  };

  const inputCommentClass = commentError && `${classes['input-error']}`;

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef} className={inputCommentClass}></textarea>
        {commentError && <p className='error-message'>{commentError}</p>}
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
