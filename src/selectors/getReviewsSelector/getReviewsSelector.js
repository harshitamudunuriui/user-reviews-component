import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * This selector is used to get the reviews details
 *
 * @param {{}} state - the redux state
 * @returns {array} all reviews
 */
export const getReviews = state => get(
  state,
  'reviews',
  [],
);

/**
 * This selector is used to memorize reviews details
 */
export const getReviewsSelector = createSelector(
  getReviews,
  reviews => reviews,
);
