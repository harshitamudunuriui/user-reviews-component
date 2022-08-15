import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * This selector is used to get group by value from the store
 *
 * @param {{}} state - the redux state
 * @returns {*} group value
 */
export const getGroupBy = state => get(
  state,
  'group',
  '',
);

/**
 * This selector is used to memorize the group value from the store.
 */
export const groupBySelector = createSelector(
  getGroupBy,
  groupBy => groupBy,
);
