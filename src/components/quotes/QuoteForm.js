import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [authorInputValid, setAuthorInputValid] = useState();
  const [textInputValid, setTextInputValid] = useState();
  const [authorError, setAuthorError] = useState('');
  const [textError, setTextError] = useState('');

  const authorInputRef = useRef();
  const textInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    if (enteredAuthor.length === 0) {
      setAuthorError('Please add your name.');
      setAuthorInputValid(false);
    } else {
      setAuthorError('');
      setAuthorInputValid(true);
    }

    if (enteredText.length < 5) {
      setTextError('Please type your quote min 5 charts');
      setTextInputValid(false);
    } else {
      setTextError('');
      setTextInputValid(true);
    }

    if (!authorInputValid && !textInputValid) {
      return;
    }

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  };

  const FinishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusHandler = () => {
    setIsEntering(true);
  };

  const inputAuthorClass = authorError !== '' ? `${classes['input-error']}` : '';
  const inputTextClass = textError && `${classes['input-error']}`;

  return (
    <>
      <Prompt
        when={isEntering}
        message={() => 'Are you sure you want to leave?'}
      />
      <Card>
        <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input className={inputAuthorClass} type='text' id='author' ref={authorInputRef} />
            {authorError && <p className='error-message'>{authorError}</p>}
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea className={inputTextClass} id='text' rows='5' ref={textInputRef}></textarea>
            {textError && <p className='error-message'>{textError}</p>}
          </div>
          <div className={classes.actions}>
            <button className='btn' onClick={FinishEnteringHandler}>Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
