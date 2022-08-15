import { INITIAL_STATE } from '../constants/INITIAL_STATE';
import {
  API_END,
  API_START,
  FILTER_REVIEWS,
  GROUP_REVIEWS,
  ORDER_REVIEWS,
  RESET_REVIEWS, UPDATE_PAGE_NUMBER,
  UPDATE_REVIEWS,
} from '../constants/CONSTANTS';
import { apiStartReducer } from './apiStartReducer';
import { apiEndReducer } from './apiEndReducer';
import { filterReducer } from './filterReviewsReducer';
import { groupReducer } from './groupReviewsReducer';
import { updateReviewReducer } from './updateReviewReducer';
import { orderReducer } from './orderReviewsReducer';
import { resetReviewsReducer } from './resetReviewsReducer';
import { updatePageNumberReducer } from './updatePageNumberReducer';

const reducers = {
  [API_START]: apiStartReducer,
  [API_END]: apiEndReducer,
  [ORDER_REVIEWS]: orderReducer,
  [UPDATE_REVIEWS]: updateReviewReducer,
  [GROUP_REVIEWS]: groupReducer,
  [FILTER_REVIEWS]: filterReducer,
  [RESET_REVIEWS]: resetReviewsReducer,
  [UPDATE_PAGE_NUMBER]: updatePageNumberReducer,
};

/**
 * This reducer is handling the reviews component all reducers
 *
 * @param {Object} state - the Redux state of the reducer that this function is
 *  used for
 * @param {*} action - the action dispatched with type and payload props.
 * @returns {*} the next Redux state
 */
export const reviewsReducer = (
  state = INITIAL_STATE,
  action
) => {
  const { type, payload } = action;
  const reducer = reducers[type];

  return (reducer) ?
    reducer(state, payload) :
    state;
};
