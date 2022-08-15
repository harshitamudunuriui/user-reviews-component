import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * This selector is used to get the value for filter the reviews
 *
 * @param {{}} state - the redux state
 * @returns {*} filter value from the store
 */
export const getFilterByStars = state => get(
  state,
  'filter',
  {},
);

/**
 * This selector is used to memorize the value of filter
 */
export const filterByStarsSelector = createSelector(
  getFilterByStars,
  filterByStars => filterByStars,
);
