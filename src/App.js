import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  const suspenseFallback = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  );

  return (
    <Layout>
      <Suspense fallback={suspenseFallback}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' component={AllQuotes} exact />
          <Route path='/quotes/:quoteId' component={QuoteDetail} />
          <Route path='/new-quote' component={NewQuote} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
