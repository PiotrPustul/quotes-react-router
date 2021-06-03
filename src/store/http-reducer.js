const httpReducer = (state, action) => {
   if (action.type === 'SEND') {
      return {
         data: null,
         error: null,
         status: 'pending',
      };
   }

   if (action.type === 'SUCCESS') {
      return {
         data: action.responseData,
         error: null,
         status: 'completed',
      };
   }

   if (action.type === 'ERROR') {
      return {
         data: null,
         error: action.errorMessage,
         status: 'completed',
      };
   }

   return state;
}

export default httpReducer;