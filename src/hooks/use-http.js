import { useReducer, useCallback } from 'react';

import httpReducer from '../store/http-reducer';

function useHttp(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(async (requestData) => {
    dispatch({ type: 'SEND' });

    try {
      const responseData = await requestFunction(requestData);
      dispatch({ type: 'SUCCESS', responseData });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        errorMessage: error.message || 'Something went wrong!',
      });
    }
  }, [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;