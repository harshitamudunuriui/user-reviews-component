import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from "redux-logger";
import apiMiddleware from './middleware/apiMiddleWare';
import { reviewsReducer } from './reducers/reviewsReducer';


function configureStore() {
  const middleware = applyMiddleware(logger, apiMiddleware);
  const enhancer = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  const store = createStore(
    reviewsReducer,
    enhancer
  );

  persistStore(store);

  return store;
}

export default configureStore();
