import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * This selector is used to get the order value from the store
 *
 * @param {{}} state - the redux state
 * @returns {string} order value from the store
 */
export const getOrderBy = state => get(
  state,
  'order',
  '',
);

/**
 * This selector is used to memorize the order value from the store
 */
export const orderBySelector = createSelector(
  getOrderBy,
  orderBy => orderBy,
);
