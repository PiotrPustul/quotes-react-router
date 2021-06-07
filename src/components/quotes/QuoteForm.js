import { useState } from 'react';
import { Prompt } from 'react-router-dom';

import useInput from '../../hooks/use-input';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const {
    value: enteredAuthor,
    isValid: enteredAuthorIsValid,
    hasError: authorInputHasError,
    valueChangeHandler: authorChangeHandler,
    inputBlurHandler: authorBlurHandler,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredText,
    isValid: enteredTextIsValid,
    hasError: textInputHasError,
    valueChangeHandler: textChangeHandler,
    inputBlurHandler: textBlurHandler,
  } = useInput(value => value.length >= 5);

  const formIsValid = enteredAuthorIsValid && enteredTextIsValid;

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    return props.onAddQuote({ author: enteredAuthor, text: enteredText });
  };

  const FinishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusHandler = () => {
    setIsEntering(true);
  };

  const authorInputClass = authorInputHasError ? classes.invalid : classes.control;
  const textInputClass = textInputHasError ? classes.invalid : classes.control;

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
          <div className={authorInputClass}>
            <label htmlFor='author'>Author</label>
            <input
              type='text'
              id='author'
              onChange={authorChangeHandler}
              onBlur={authorBlurHandler}
            />
            {authorInputHasError && <p className='error-message'>Name must not be empty.</p>}
          </div>
          <div className={textInputClass}>
            <label htmlFor='text'>Text</label>
            <textarea
              id='text'
              rows='5'
              onChange={textChangeHandler}
              onBlur={textBlurHandler}
            ></textarea>
            {textInputHasError && <p className='error-message'>Please type min 5 charts.</p>}
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
