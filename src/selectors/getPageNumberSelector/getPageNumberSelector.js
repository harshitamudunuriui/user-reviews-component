import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * This selector is used to get page Number from the store
 *
 * @param {{}} state - the redux state
 * @returns {number} page Number
 */
export const getPageNumber = state => get(
  state,
  'pageNumber',
  1,
);

/**
 * This selector is used to get and memorize page Number from the store
 */
export const getPageNumberSelector = createSelector(
  getPageNumber,
  getPageNumber => getPageNumber,
);
