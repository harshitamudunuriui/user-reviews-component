import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { InfiniteScrollReviewContainer } from './containers/InfiniteScrollReviewContainer';

const App = () => {

  return (
    <Provider store={store}>
      <InfiniteScrollReviewContainer />
    </Provider>
  );
};

export default App;
