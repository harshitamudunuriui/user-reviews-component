import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * This selector is used to get the hasMore value from the api response
 *
 * @param {{}} state - the redux state
 * @returns {boolean} hasMore Value from the store
 */
export const getHasMore = state => get(
  state,
  'hasMore',
  false,
);

/**
 * This selector is used to memorize the hasMore value from the api response
 */
export const hasMoreSelector = createSelector(
  getHasMore,
  hasMore => hasMore,
);
